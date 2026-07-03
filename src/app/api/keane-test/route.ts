import { NextResponse } from 'next/server';

const KEANE_BASE = 'https://admin.keanespecialty.com/api/quote';

// GET /api/keane-test
// Field-name discovery probe — sends candidate field names; the 422 response
// lists which ones are INVALID. Fields NOT in the error list = VALID.
// Remove this endpoint once all field names are confirmed.
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
  // CRITICAL FIX: The previous probe was missing mooring_location_postcode
  // (a required field). Keane short-circuited validation on that required error
  // before checking field names — so all our round-2 candidates appeared valid
  // when they were actually never validated. mooring_location_postcode is now
  // included so we get past the required-fields gate and into name validation.
  //
  // Round history:
  //   Round 1 = original field names → all in first 422 error (old/renamed)
  //   Round 2 = our guesses (town, motor_make, hull_sum_insured, etc.)
  //             → appeared valid in probe BUT probe short-circuited on required
  //             → actual submission rejected ALL of them
  //   Round 3 = new guesses below — probe now includes mooring_location_postcode
  const probe: Record<string, unknown> = {

    // ── BASELINE: confirmed-valid + ALL known-required fields ────────────
    title_id: 1,
    first_name: 'Test',
    last_name: 'Probe',
    date_of_birth: '1980-01-01',            // required
    address: '1 Test Street',
    postcode: '1010',
    country_id: 1,
    nationality_id: 1,
    email: 'test@yachtinsurance.co.nz',
    telephone: '0211234567',                // required
    occupation: 'Testing',
    qualifications: 'Day Skipper',
    years_experience: 5,                    // required
    referral_source_id: 1,
    referral_source_other: 'yachtinsurance.co.nz', // required
    vessel_name: 'Test Vessel',
    vessel_flag_country_id: 1,
    vessel_year_built: 2010,
    vessel_length: 12,
    vessel_type_id: 1,
    vessel_is_conversion: false,
    vessel_construction_material_id: 1,
    vessel_purchase_date: '2020-01-01',     // required
    vessel_price: 50000,                    // required
    vessel_price_currency_id: 1,
    vessel_cruising_area: 'Coastal NZ',     // required
    vessel_maximum_speed: 8,               // required
    mooring_location: 'Westhaven Marina',  // required
    mooring_type: 'Marina berth',
    mooring_location_country_id: 1,
    mooring_location_postcode: '1010',     // ← WAS MISSING IN ROUND 2 PROBE — now fixed
    mooring_vessel_ashore: false,          // required
    sums_insured_currency_id: 1,
    liability_third_party: 500000,
    cover_fully_comprehensive: true,
    cover_private_pleasure_only: true,     // required
    cover_commercial: false,
    cover_water_skiing: false,
    cover_medical_expenses: false,

    // ── ROUND 3: Address extras ───────────────────────────────────────────
    // R1 rejected: city, state  |  R2 rejected: town, county
    city_town: 'Auckland',
    suburb: 'Ponsonby',
    locality: 'Auckland',
    region: 'Auckland',
    province: '',
    address2: '',
    previous_vessels_owned: '',
    boats_previously_owned: '',

    // ── ROUND 3: Vessel detail ────────────────────────────────────────────
    // R1: vessel_hull_serial, vessel_length_metres, vessel_manufacturer, vessel_last_survey_date, vessel_surveyor_name
    // R2: vessel_serial, vessel_make, vessel_model, vessel_survey_date, vessel_surveyor
    vessel_hull_number: '',
    vessel_hin: '',
    vessel_id_number: '',
    vessel_brand: 'Beneteau',
    make: 'Beneteau',
    vessel_model_name: 'Oceanis 40',
    model: 'Oceanis 40',
    vessel_last_survey: '2022-01-01',
    last_survey_date: '2022-01-01',
    survey_date: '2022-01-01',
    vessel_surveyor_details: 'John Smith',
    surveyor: 'John Smith',
    surveyor_name: 'John Smith',

    // ── ROUND 3: Engine ───────────────────────────────────────────────────
    // R1: engine_manufacturer  |  R2: motor_make, motor_model, motor_year, motor_hp, motor_fuel, motor_serial, motor_count
    engine_brand: 'Yanmar',
    engine_name: 'Yanmar',
    motor_manufacturer: 'Yanmar',
    engine_details: 'Yanmar 4JH 75hp Diesel',
    engine_year: 2015,
    engine_hp: 75,
    engine_horsepower: 75,
    engine_fuel: 'Diesel',
    engine_fuel_type: 'Diesel',
    engine_serial: '',
    engine_serial_number: '',
    engine_count: 1,
    engine_quantity: 1,
    number_of_engines: 1,

    // ── ROUND 3: Tender ───────────────────────────────────────────────────
    // R1: has_tender, tender_manufacturer  |  R2: tender, tender_make, tender_model_name, tender_loa, tender_year, tender_value
    dinghy: true,
    has_dinghy: true,
    tender_included: true,
    tender_dinghy: true,
    tender_brand: 'AB',
    tender_manufacturer: 'AB',
    tender_model: 'Lammina',
    tender_length: 3.5,
    tender_year_built: 2018,
    tender_purchase_price: 5000,
    tender_insured_value: 5000,

    // ── ROUND 3: Trailer ──────────────────────────────────────────────────
    // R1: has_trailer  |  R2: trailer, trailer_make, trailer_value, trailer_year
    has_trailer: true,
    trailer_included: true,
    trailer_brand: 'Dunbier',
    trailer_manufacturer: 'Dunbier',
    trailer_make_model: 'Dunbier',
    trailer_insured_value: 3000,
    trailer_year_built: 2018,
    trailer_age: 5,

    // ── ROUND 3: Safety ───────────────────────────────────────────────────
    // R1: safety_equipment, handheld_extinguisher_count, lpg_used  |  R2: safety, fire_extinguishers, lpg
    safety_list: 'Flares, EPIRB, Liferaft',
    safety_equipment_list: 'Flares, EPIRB',
    safety_gear: 'Flares, EPIRB',
    fire_extinguisher_count: 2,
    extinguisher_count: 2,
    handheld_extinguishers: 2,
    gas: false,
    gas_on_board: false,
    lpg_on_board: false,
    has_lpg: false,

    // ── ROUND 3: Mooring extras ───────────────────────────────────────────
    // R1: mooring_vessel_ashore_details, laid_up_location  |  R2: mooring_details, laid_up, laid_up_from, laid_up_to
    mooring_notes: '',
    mooring_ashore_details: '',
    stored_ashore_details: '',
    laid_up_location: '',
    laid_up_address: '',
    laid_up_start: '2025-06-01',
    laid_up_end: '2025-09-01',
    winter_laid_up: false,

    // ── ROUND 3: Sums insured ─────────────────────────────────────────────
    // R1: si_hull, si_personal_effects, si_navigation_equipment, si_medical, si_crew
    // R2: hull_sum_insured, personal_effects, navigation_equipment, medical, crew
    vessel_insured_value: 200000,
    vessel_sum_insured: 200000,
    hull_value: 200000,
    hull_insured_value: 200000,
    hull_amount: 200000,
    effects_value: 5000,
    personal_effects_value: 5000,
    contents_value: 5000,
    nav_equipment_value: 2000,
    navigation_equipment_value: 2000,
    electronics_value: 2000,
    medical_expenses: 10000,
    medical_value: 10000,
    crew_value: 0,
    crew_liability: 0,

    // ── ROUND 3: Cover extras ─────────────────────────────────────────────
    // R1: cover_third_party_only, cover_in_water_activities, cover_employed_crew, cover_salvage
    // R2: cover_tpl_only, cover_in_water, cover_crew, salvage
    cover_tpl: false,
    cover_third_party: false,
    third_party_only: false,
    cover_water_activities: false,
    cover_snorkelling: false,
    in_water_activities: false,
    cover_crew_employed: false,
    employed_crew: false,
    cover_salvage_wreck: false,
    wreck_removal: false,
    cover_wreck_removal: false,

    // ── ROUND 3: Endorsements ─────────────────────────────────────────────
    // R1: end_agreed_value, end_racing, end_towing, end_diving, end_night_navigation, end_single_handed, end_new_for_old
    // R2: agreed_value, endorsement_racing, racing_names, towing, endorsement_diving, night_navigation, single_handed, new_for_old
    endorsement_agreed_value: false,
    agreed_hull_value: false,
    racing: false,
    racing_cover: false,
    race_names: '',
    towing_assistance: false,
    non_emergency_towing: false,
    diving: false,
    diving_cover: false,
    navigation_night: false,
    night_sailing: false,
    solo_sailing: false,
    single_handed_sailing: false,
    replacement_new_for_old: false,
    new_for_old_replacement: false,

    // ── ROUND 3: Declaration ──────────────────────────────────────────────
    // R1: decl_declined, decl_accidents, decl_dishonesty, decl_mortgage, decl_sole_owner, decl_disabilities, declaration_accepted
    // R2: declined, accidents, dishonesty, mortgage, sole_owner, disabilities, declaration
    insurer_declined: false,
    previously_declined: false,
    cover_declined: false,
    prior_claims: false,
    claim_history: false,
    prior_accidents: false,
    criminal_history: false,
    fraud_history: false,
    vessel_mortgaged: false,
    finance_on_vessel: false,
    is_sole_owner: true,
    owner_only: true,
    health_disabilities: false,
    physical_disabilities: false,
    i_declare: true,
    terms_accepted: true,
    declaration_confirmed: true,

    // ── ROUND 3: Policy ───────────────────────────────────────────────────
    // R1: preferred_start_date, no_claims_bonus  |  R2: start_date, ncd
    cover_start: '2025-08-01',
    inception_date: '2025-08-01',
    policy_start_date: '2025-08-01',
    cover_start_date: '2025-08-01',
    prior_insurer: 'None',
    previous_insurer_name: 'None',
    last_insurer: 'None',
    ncb: '0',
    claims_free: '0',
    claims_free_years: '0',
    no_claims_years: '0',
  };

  try {
    const res = await fetch(`${KEANE_BASE}/save-quote-data`, {
      method: 'POST',
      headers,
      body: JSON.stringify(probe),
    });
    const text = await res.text();
    let parsed: unknown;
    try { parsed = JSON.parse(text); } catch { parsed = text.slice(0, 3000); }

    return NextResponse.json({
      ok: res.ok,
      status: res.status,
      response: parsed,
      summary: res.status === 422
        ? 'Fields in "do not exist" list = INVALID. Fields NOT listed = VALID ✓. If you see "required" errors instead, the required-field baseline is incomplete — add those fields to the baseline and re-run.'
        : res.status === 200 || res.status === 201
        ? 'SUCCESS — all fields accepted. Check Keane admin to confirm record created.'
        : `Unexpected status ${res.status}`,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) });
  }
}
