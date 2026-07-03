import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

const KEANE_BASE = 'https://admin.keanespecialty.com/api/quote';

async function keaneGet(path: string): Promise<{ id: number; name: string }[]> {
  try {
    const res = await fetch(`${KEANE_BASE}${path}`, {
      headers: {
        'X-API-KEY': process.env.KEANE_API_KEY!,
        'X-API-SECRET': process.env.KEANE_API_SECRET!,
        Accept: 'application/json',
      },
      // Cache for 1 hour — these reference lists rarely change
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json) ? json : (json.data ?? []);
  } catch {
    return [];
  }
}

function findId(list: { id: number; name: string }[], name: string, fallback = 1): number {
  if (!name || list.length === 0) return fallback;
  const needle = name.toLowerCase().trim();
  const match =
    list.find((item) => item.name.toLowerCase() === needle) ||
    list.find((item) => item.name.toLowerCase().startsWith(needle)) ||
    list.find((item) => needle.startsWith(item.name.toLowerCase()));
  return match?.id ?? fallback;
}

function yn(val: string | undefined): boolean {
  return val === 'Yes';
}

function toFloat(val: string | undefined): number {
  if (!val) return 0;
  return parseFloat(String(val).replace(/[^0-9.]/g, '')) || 0;
}

function toInt(val: string | undefined): number {
  if (!val) return 0;
  return parseInt(String(val).replace(/[^0-9]/g, ''), 10) || 0;
}

export async function POST(req: NextRequest) {
  try {
    const { proposalId, formData, isPartial } = await req.json();

    // Fetch all Keane lookup tables in parallel
    const [vesselTypes, countries, currencies, materials, titles, referralSources, commercialTypes, windstorms] =
      await Promise.all([
        keaneGet('/vessel-types'),
        keaneGet('/countries'),
        keaneGet('/currencies'),
        keaneGet('/construction-materials'),
        keaneGet('/titles'),
        keaneGet('/referral-sources'),
        keaneGet('/cover-commercial-types'),
        keaneGet('/windstorms-coverage-options'),
      ]);

    // Resolve all IDs from lookup tables
    const titleId = findId(titles, formData.title || 'Mr');
    const countryId = findId(countries, formData.country || 'New Zealand');
    const nationalityId = findId(countries, formData.nationality || formData.country || 'New Zealand');
    const flagCountryId = findId(countries, formData.countryFlag || formData.country || 'New Zealand');
    const mooringCountryId = findId(countries, formData.mooringCountry || formData.country || 'New Zealand');
    const vesselTypeId = findId(vesselTypes, formData.vesselType || 'Sail Monohull');
    const primaryMaterial = (formData.constructionMaterials as string[] | undefined)?.[0] || 'Fibreglass (GRP)';
    const materialId = findId(materials, primaryMaterial);
    const hullCurrencyId = findId(currencies, formData.si_hull_currency || 'NZD');
    const siCurrencyId = findId(currencies, formData.si_tpl_currency || formData.si_hull_currency || 'NZD');

    // Referral source — auto-map to "Website" or similar
    const websiteSource =
      referralSources.find((r) =>
        ['web', 'online', 'internet', 'website'].some((kw) => r.name.toLowerCase().includes(kw)),
      ) || referralSources[0];
    const referralSourceId = toInt(formData.referralSourceId) || websiteSource?.id || 1;

    // Commercial cover type
    let coverCommercialTypeId: number | undefined;
    if (yn(formData.cover_commercial)) {
      if (yn(formData.cover_barebat)) coverCommercialTypeId = findId(commercialTypes, 'Bareboat');
      else if (yn(formData.cover_captainCharter)) coverCommercialTypeId = findId(commercialTypes, 'Crewed');
      else if (yn(formData.cover_fishingCharter)) coverCommercialTypeId = findId(commercialTypes, 'Fishing');
      else coverCommercialTypeId = findId(commercialTypes, 'Other');
    }

    // Windstorm coverage
    let windstormsCoverageId: number | undefined;
    if (yn(formData.end_storm12plus)) windstormsCoverageId = findId(windstorms, 'Force 12');
    else if (yn(formData.end_storm7to12)) windstormsCoverageId = findId(windstorms, 'Force 7');

    const firstName =
      formData.firstName || (formData.ownerName ? formData.ownerName.split(' ')[0] : 'Unknown');
    const lastName =
      formData.lastName ||
      (formData.ownerName ? formData.ownerName.split(' ').slice(1).join(' ') : firstName);

    // Build Keane payload — ONLY fields confirmed valid by 422 responses.
    //
    // FIELD DISCOVERY STATUS (2026-07-03):
    // The probe short-circuited on mooring_location_postcode (required), so our
    // second round of candidate names were never actually validated. They are ALL
    // rejected by Keane as "do not exist". The fields below are the only ones that
    // have never appeared in any 422 error response.
    //
    // Fields needing correct names (contact Keane API team):
    //   address extras:  city/town, state/county, previous vessel
    //   vessel details:  make/brand, model, serial/HIN, survey date, surveyor
    //   engine:          make, model, year, hp, fuel, serial, count
    //   tender:          boolean flag + all sub-fields
    //   trailer:         boolean flag + all sub-fields
    //   safety:          equipment list, extinguisher count, lpg
    //   mooring extras:  ashore details, laid-up location/dates
    //   sums insured:    hull, personal effects, nav equipment, medical, crew
    //   cover extras:    TPL-only, in-water, employed crew, salvage
    //   endorsements:    agreed value, racing, towing, diving, night nav, single-handed, new-for-old
    //   declaration:     all decl_ fields + declaration accepted
    //   policy:          start date, previous insurer, NCD
    const keanePayload: Record<string, unknown> = {

      // ── Proposer (confirmed valid) ───────────────────────────────────────
      title_id: titleId,
      first_name: firstName,
      last_name: lastName || firstName,
      date_of_birth: formData.dob || '1970-01-01',
      address: formData.address || 'Not provided',
      postcode: formData.zipPostcode || '0000',
      country_id: countryId,
      nationality_id: nationalityId,
      email: formData.email || '',
      telephone: formData.phone || '',
      occupation: formData.occupation || '',
      qualifications: formData.boatingQualifications || '',
      years_experience: toInt(formData.boatingExperience),
      referral_source_id: referralSourceId,
      referral_source_other: 'yachtinsurance.co.nz',

      // ── Vessel (confirmed valid) ─────────────────────────────────────────
      vessel_name: formData.vesselName || 'Not provided',
      vessel_flag_country_id: flagCountryId,
      vessel_year_built: toInt(formData.yearBuilt),
      vessel_length: toFloat(formData.length),
      vessel_type_id: vesselTypeId,
      vessel_is_conversion: yn(formData.isConversion),
      vessel_construction_material_id: materialId,
      vessel_purchase_date: formData.datePurchased || '',
      vessel_price: toFloat(formData.pricePaid),
      vessel_price_currency_id: hullCurrencyId,
      vessel_cruising_area: formData.cruisingItinerary || '',
      vessel_maximum_speed: toFloat(formData.engine_maxSpeed),

      // ── Mooring (confirmed valid) ────────────────────────────────────────
      mooring_location: formData.mooringName || '',
      mooring_type: formData.mooringType || '',
      mooring_location_country_id: mooringCountryId,
      mooring_location_postcode: formData.mooringPostcode || formData.zipPostcode || '0000',
      mooring_vessel_ashore: yn(formData.storedAshoreDaily),

      // ── Sums insured (confirmed valid) ───────────────────────────────────
      sums_insured_currency_id: siCurrencyId,
      liability_third_party: toFloat(formData.si_tpl_amount),

      // ── Cover (confirmed valid) ──────────────────────────────────────────
      cover_fully_comprehensive: yn(formData.cover_fullyComp),
      cover_private_pleasure_only: yn(formData.cover_privatePleasure),
      cover_commercial: yn(formData.cover_commercial),
      ...(coverCommercialTypeId ? { cover_commercial_type_id: coverCommercialTypeId } : {}),
      cover_commercial_passenger_liability: yn(formData.cover_commercialPassenger),
      cover_water_skiing: yn(formData.cover_waterSkiing),
      cover_medical_expenses: yn(formData.cover_medicalExp),
      ...(windstormsCoverageId ? { cover_windstorms_coverage_id: windstormsCoverageId } : {}),
    };

    // Guard: fail fast if credentials missing
    if (!process.env.KEANE_API_KEY || !process.env.KEANE_API_SECRET) {
      console.error('Keane credentials not set — KEANE_API_KEY / KEANE_API_SECRET missing');
      if (proposalId) {
        await getSupabase()
          .from('marine_proposals')
          .update({
            status: 'keane_error',
            keane_error: 'Missing KEANE_API_KEY or KEANE_API_SECRET env vars',
            updated_at: new Date().toISOString(),
          })
          .eq('id', proposalId);
      }
      return NextResponse.json(
        { ok: false, error: 'Keane credentials not configured' },
        { status: 500 },
      );
    }

    // POST to Keane
    const keaneRes = await fetch(`${KEANE_BASE}/save-quote-data`, {
      method: 'POST',
      headers: {
        'X-API-KEY': process.env.KEANE_API_KEY,
        'X-API-SECRET': process.env.KEANE_API_SECRET,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(keanePayload),
    });

    // Keane may return non-JSON on auth failure — handle gracefully
    const rawText = await keaneRes.text();
    let keaneData: Record<string, unknown> = {};
    try { keaneData = JSON.parse(rawText); } catch { keaneData = { raw: rawText }; }

    if (!keaneRes.ok) {
      console.error(`Keane API error ${keaneRes.status}:`, keaneData);
      // Update Supabase with error — data is safe there
      if (proposalId) {
        await getSupabase()
          .from('marine_proposals')
          .update({
            status: 'keane_error',
            keane_error: `HTTP ${keaneRes.status}: ${JSON.stringify(keaneData)}`,
            updated_at: new Date().toISOString(),
          })
          .eq('id', proposalId);
      }
      return NextResponse.json(
        { ok: false, error: 'Quote submission error', keaneError: keaneData },
        { status: 500 },
      );
    }

    const { id: keaneId, reference: keaneReference } = keaneData as {
      id: number;
      reference: string;
      message: string;
    };

    // Update Supabase with Keane reference
    if (proposalId) {
      await getSupabase()
        .from('marine_proposals')
        .update({
          status: isPartial ? 'auto_submitted' : 'submitted',
          keane_id: keaneId,
          keane_reference: keaneReference,
          updated_at: new Date().toISOString(),
        })
        .eq('id', proposalId);
    }

    return NextResponse.json({ ok: true, id: keaneId, reference: keaneReference });
  } catch (err) {
    console.error('keane-submit route error:', err);
    return NextResponse.json({ ok: false, error: 'Submission failed' }, { status: 500 });
  }
}
