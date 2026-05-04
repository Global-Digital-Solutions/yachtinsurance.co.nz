import { NextRequest, NextResponse } from 'next/server';

const KEANE_BASE_URL = 'https://admin.keanespecialty.com/api/quote';

const VESSEL_TYPE_MAP: Record<string, number> = {
  'Yacht': 2,
  'Jet Ski': 1,
  'Dinghy': 1,
  'Tender': 1,
  'Racing Boat': 1,
  'Coastal Cruising': 2,
  'Blue Water Cruiser': 2,
};

const VESSEL_VALUE_MAP: Record<string, number> = {
  'Under $25,000': 12500,
  '$25,000 - $75,000': 50000,
  '$75,000 - $150,000': 112500,
  '$150,000 - $500,000': 325000,
  'Over $500,000': 750000,
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, vessel_type, vessel_value, vessel_make_model, mooring_location } = body;

  // Split full name into first / last
  const parts = (name || '').trim().split(/\s+/);
  const first_name = parts[0] || '*';
  const last_name = parts.slice(1).join(' ') || '*';

  const vessel_price = VESSEL_VALUE_MAP[vessel_value] ?? 50000;
  const vessel_type_id = VESSEL_TYPE_MAP[vessel_type] ?? 2;
  const vessel_year_built = new Date().getFullYear() - 5;

  const payload = {
    // --- from form ---
    first_name,
    last_name,
    email,
    telephone: phone,
    vessel_type_id,
    vessel_price,
    vessel_make_model: vessel_make_model || undefined,
    vessel_cruising_area: mooring_location || '*',
    mooring_location: mooring_location || '*',

    // --- hardcoded defaults ---
    title_id: 1,                     // Mr
    address: '*',
    nationality_id: 159,             // New Zealand
    country_id: 159,                 // New Zealand
    date_of_birth: '2000-01-01',
    years_experience: 10,
    vessel_year_built,
    vessel_is_conversion: false,
    vessel_purchase_date: '2020-01-01',
    vessel_price_currency_id: 4,     // NZD
    vessel_maximum_speed: 20,
    mooring_location_country_id: 159, // New Zealand
    mooring_location_postcode: '*',
    mooring_type: '*',
    mooring_vessel_ashore: false,
    cover_fully_comprehensive: true,
    cover_private_pleasure_only: true,
    cover_commercial: false,
    sums_insured_currency_id: 4,     // NZD
    sums_insured_hull: 1,
    liability_third_party: 1,
    declaration_insurance_declined: false,
    declaration_accident: false,
    declaration_dishonest: false,
    declaration_owner: false,
    declaration_mortgage: false,
    referral_source_id: 3,           // Recommendation
  };

  const res = await fetch(`${KEANE_BASE_URL}/save-quote-data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.KEANE_API_KEY!,
      'X-API-SECRET': process.env.KEANE_API_SECRET!,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  // Send email notification via Cloudflare Worker + Resend
  try {
    const formBody = new URLSearchParams({
      _subject: 'New Quote Request - YachtInsurance.co.nz',
      _next: 'https://yachtinsurance.co.nz/thank-you/',
      name: name || '',
      email: email || '',
      phone: phone || '',
      vessel_type: vessel_type || '',
      vessel_value: vessel_value || '',
      vessel_make_model: vessel_make_model || '',
      mooring_location: mooring_location || '',
      keane_reference: data.reference || data.id || '',
    });
    await fetch('https://shiny-bush-41cd.darinbutler.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.toString(),
    });
  } catch (emailErr) {
    console.error('Worker email error:', emailErr);
  }

  if (!res.ok) {
    console.error('Keane API error:', data);
    return NextResponse.json({ error: data }, { status: res.status });
  }

  return NextResponse.json(data); // { message, id, reference }
}
