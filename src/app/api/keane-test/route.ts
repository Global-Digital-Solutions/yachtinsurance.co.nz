import { NextResponse } from 'next/server';

const KEANE_BASE = 'https://admin.keanespecialty.com/api/quote';

// GET /api/keane-test
// Field-name discovery probe — sends candidate field names and the 422 response
// tells us which ones are wrong. Remove once all field names are confirmed.
export async function GET() {
  const key = process.env.KEANE_API_KEY;
  const secret = process.env.KEANE_API_SECRET;

  if (!key || !secret) {
    return NextResponse.json({ ok: false, error: 'Missing credentials' });
  }

  const headers = {
    'X-API-KEY': key,
    'X-API-SECRET': secret,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // ── Probe payload ────────────────────────────────────────────────────────
  // Only send CANDIDATE fields (those we don't yet know).
  // Already-confirmed valid fields are NOT included here to keep noise low.
  // Candidates are educated guesses based on Keane's naming patterns.
  const probe: Record<string, unknown> = {
    // ── CONFIRMED VALID (baseline — included so we get a real response) ───
    title_id: 1,
    first_name: 'Test',
    last_name: 'Probe',
    date_of_birth: '1980-01-01',
    address: '1 Test Street',
    postcode: '1010',
    country_id: 1,
    nationality_id: 1,
    email: 'test@yachtinsurance.co.nz',
    telephone: '0211234567',
    occupation: 'Testing',
    years_experience: 5,
    referral_source_id: 1,
    referral_source_other: 'yachtinsurance.co.nz',
    vessel_name: 'Test Vessel',
    vessel_flag_country_id: 1,
    vessel_year_built: 2010,
    vessel_type_id: 1,
    vessel_is_conversion: false,
    vessel_construction_material_id: 1,
    vessel_purchase_date: '2020-01-01',
    vessel_price: 50000,
    vessel_price_currency_id: 1,
    vessel_cruising_area: 'Coastal NZ',
    vessel_maximum_speed: 8,
    mooring_location: 'Westhaven Marina',
    mooring_type: 'Marina berth',
    mooring_location_country_id: 1,
    mooring_vessel_ashore: false,
    sums_insured_currency_id: 1,
    liability_third_party: 500000,
    cover_fully_comprehensive: true,
    cover_private_pleasure_only: true,
    cover_commercial: false,
    cover_water_skiing: false,
    cover_medical_expenses: false,

    // ── CANDIDATES: Proposer extra fields ─────────────────────────────────
    town: 'Auckland',                   // candidate for 'city'
    suburb: 'Ponsonby',                 // alternative for city
    county: '',                         // candidate for 'state'
    region: '',                         // alternative for state
    province: '',                       // alternative for state
    qualifications: 'Day Skipper',      // candidate for 'boating_qualifications'
    boating_experience: 5,              // alternative for years_experience
    previous_boats: '',                 // candidate for 'previous_vessels'
    previous_vessel: '',                // alternative

    // ── CANDIDATES: Vessel detail ─────────────────────────────────────────
    vessel_serial: '',                  // candidate for vessel_hull_serial
    vessel_hin: '',                     // HIN / hull ID
    vessel_length: 12,                  // candidate for vessel_length_metres
    vessel_length_ft: 40,              // alternative in feet
    vessel_loa: 12,                     // LOA alternative
    vessel_make: 'Beneteau',            // candidate for vessel_manufacturer
    vessel_model: 'Oceanis 40',         // candidate (exact same name — might work)
    vessel_survey_date: '2022-01-01',   // candidate for vessel_last_survey_date
    vessel_surveyor: 'John Smith',      // candidate for vessel_surveyor_name
    vessel_hull_material: '',           // alternative for construction_material

    // ── CANDIDATES: Engine ────────────────────────────────────────────────
    motor_make: 'Yanmar',              // candidate for engine_manufacturer
    motor_model: '4JH',                // candidate for engine_model
    motor_year: 2015,                  // candidate for engine_year_built
    motor_hp: 75,                      // candidate for engine_hp
    motor_fuel: 'Diesel',              // candidate for engine_fuel
    motor_serial: '',                  // candidate for engine_serial
    motor_count: 1,                    // candidate for engine_count
    engine_make: 'Yanmar',            // alternative
    engine_year: 2015,                 // alternative for engine_year_built
    engine_horsepower: 75,             // alternative for engine_hp

    // ── CANDIDATES: Tender ────────────────────────────────────────────────
    tender: true,                       // candidate for has_tender
    dinghy: true,                       // alternative
    tender_make: 'AB',                  // candidate for tender_manufacturer
    tender_model_name: 'Lammina',       // candidate for tender_model
    tender_loa: 3.5,                    // candidate for tender_length
    tender_year: 2018,                  // candidate for tender_year_built
    tender_value: 5000,                 // candidate for tender_purchase_price

    // ── CANDIDATES: Trailer ───────────────────────────────────────────────
    trailer: true,                      // candidate for has_trailer
    trailer_make: 'Dunbier',            // candidate for trailer_make_model
    trailer_value: 3000,                // candidate for trailer_value
    trailer_year: 2018,                 // alternative age

    // ── CANDIDATES: Safety ────────────────────────────────────────────────
    safety: 'Flares, EPIRB, Liferaft',  // candidate for safety_equipment
    fire_extinguishers: 2,              // candidate for handheld_extinguisher_count
    lpg: false,                         // candidate for lpg_used
    gas: false,                         // alternative

    // ── CANDIDATES: Mooring / Laid up ─────────────────────────────────────
    laid_up: '',                        // candidate for laid_up_location
    laid_up_from: '2025-06-01',        // same name — might work
    laid_up_to: '2025-09-01',          // same name — might work
    stored_ashore: false,               // candidate for stored_ashore_daily
    mooring_details: '',               // candidate for mooring_vessel_ashore_details

    // ── CANDIDATES: Sums Insured ──────────────────────────────────────────
    hull_sum_insured: 100000,           // candidate for si_hull
    sum_insured_hull: 100000,           // alternative
    vessel_sum_insured: 100000,         // alternative
    si_hull_value: 100000,              // alternative
    personal_effects: 5000,             // candidate for si_personal_effects
    navigation_equipment: 2000,         // candidate for si_navigation_equipment
    medical: 10000,                     // candidate for si_medical
    crew: 0,                            // candidate for si_crew

    // ── CANDIDATES: Cover extras ──────────────────────────────────────────
    cover_tpl_only: false,              // candidate for cover_third_party_only
    cover_tpl: false,                   // alternative
    cover_third_party: false,           // alternative
    cover_in_water: false,              // candidate for cover_in_water_activities
    cover_watersports: false,           // alternative
    cover_crew: false,                  // candidate for cover_employed_crew
    salvage: false,                     // candidate for cover_salvage

    // ── CANDIDATES: Endorsements ──────────────────────────────────────────
    endorsement_agreed_value: false,    // candidate for end_agreed_value
    agreed_value: false,                // alternative
    endorsement_racing: false,          // candidate for end_racing
    racing: false,                      // alternative
    endorsement_towing: false,          // candidate for end_towing
    towing: false,                      // alternative
    endorsement_diving: false,          // candidate for end_diving
    night_navigation: false,            // candidate for end_night_navigation
    single_handed: false,               // candidate for end_single_handed
    new_for_old: false,                 // candidate for end_new_for_old

    // ── CANDIDATES: Declaration ───────────────────────────────────────────
    declined: false,                    // candidate for decl_declined
    accidents: false,                   // candidate for decl_accidents
    dishonesty: false,                  // candidate for decl_dishonesty
    mortgage: false,                    // candidate for decl_mortgage
    sole_owner: true,                   // candidate for decl_sole_owner
    disabilities: false,                // candidate for decl_disabilities
    declaration: true,                  // candidate for declaration_accepted
    accepted: true,                     // alternative

    // ── CANDIDATES: Policy ────────────────────────────────────────────────
    start_date: '2025-08-01',           // candidate for preferred_start_date
    inception_date: '2025-08-01',       // alternative
    cover_start_date: '2025-08-01',     // alternative
    previous_insurer: 'None',           // same name — might work
    no_claims_discount: '0 years',      // candidate for no_claims_bonus
    ncb: '0 years',                     // alternative
    ncd: '0 years',                     // alternative
  };

  try {
    const res = await fetch(`${KEANE_BASE}/save-quote-data`, {
      method: 'POST',
      headers,
      body: JSON.stringify(probe),
    });
    const text = await res.text();
    let parsed: unknown;
    try { parsed = JSON.parse(text); } catch { parsed = text.slice(0, 2000); }

    return NextResponse.json({
      ok: res.ok,
      status: res.status,
      response: parsed,
      summary: res.status === 422
        ? 'INVALID fields listed above → strip or rename. Fields NOT listed = VALID ✓'
        : res.status === 200 || res.status === 201
        ? 'SUCCESS — all fields accepted'
        : `Unexpected status ${res.status}`,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) });
  }
}
