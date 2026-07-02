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

    // Build Keane payload — all required fields populated with sensible fallbacks for partial submissions
    const keanePayload: Record<string, unknown> = {
      title_id: titleId,
      first_name: firstName,
      last_name: lastName || firstName,
      date_of_birth: formData.dob || '1970-01-01',
      address: formData.address || 'Not provided',
      city: formData.city || 'Not provided',
      state: formData.stateCounty || '',
      postcode: formData.zipPostcode || '0000',
      country_id: countryId,
      nationality_id: nationalityId,
      email: formData.email || '',
      telephone: formData.phone || '',
      occupation: formData.occupation || '',
      boating_qualifications: formData.boatingQualifications || '',
      years_experience: toInt(formData.boatingExperience),
      previous_vessels: formData.previousVessels || '',
      referral_source_id: referralSourceId,
      referral_source_other: 'yachtinsurance.co.nz',

      // Additional insured
      has_additional_insured: formData.hasAdditional ? 1 : 0,
      additional_name: formData.addl_name || '',
      additional_dob: formData.addl_dob || '',
      additional_address: formData.addl_address || '',
      additional_city: formData.addl_city || '',
      additional_state: formData.addl_stateCounty || '',
      additional_postcode: formData.addl_zipPostcode || '',
      additional_experience: toInt(formData.addl_experience),
      additional_qualifications: formData.addl_qualifications || '',

      // Vessel
      vessel_name: formData.vesselName || 'Not provided',
      vessel_hull_serial: formData.hullNumber || '',
      vessel_flag_country_id: flagCountryId,
      vessel_state_flag: formData.stateFlagUSA || '',
      vessel_registration_state: formData.registrationStateUSA || '',
      vessel_year_built: toInt(formData.yearBuilt),
      vessel_length_metres: toFloat(formData.length),
      vessel_manufacturer: formData.manufacturer || '',
      vessel_model: formData.model || '',
      vessel_type_id: vesselTypeId,
      vessel_is_conversion: yn(formData.isConversion),
      vessel_is_conversion_details: formData.isConversionDetails || '',
      vessel_construction_material_id: materialId,
      vessel_construction_other: formData.constructionOther || '',
      vessel_purchase_date: formData.datePurchased || '',
      vessel_price: toFloat(formData.pricePaid),
      vessel_price_currency_id: hullCurrencyId,
      vessel_last_survey_date: formData.lastSurveyDate || '',
      vessel_surveyor_name: formData.surveyorName || '',

      // Engine
      engine_manufacturer: formData.engine_manufacturer || '',
      engine_model: formData.engine_model || '',
      engine_year_built: toInt(formData.engine_yearBuilt),
      engine_hp: toInt(formData.engine_hp),
      engine_fuel: formData.engine_fuel || 'Diesel',
      engine_serial: formData.engine_serial || '',
      engine_count: toInt(formData.engine_count) || 1,
      vessel_maximum_speed: toFloat(formData.engine_maxSpeed),

      // Tender
      has_tender: formData.hasTender ? 1 : 0,
      tender_serial: formData.tender_serial || '',
      tender_displays_parent_name: yn(formData.tender_displaysName),
      tender_manufacturer: formData.tender_manufacturer || '',
      tender_model: formData.tender_model || '',
      tender_length: toFloat(formData.tender_length),
      tender_year_built: toInt(formData.tender_yearBuilt),
      tender_purchase_date: formData.tender_purchaseDate || '',
      tender_purchase_price: toFloat(formData.tender_purchasePrice),
      tender_motor_manufacturer: formData.tenderMotor_manufacturer || '',
      tender_motor_model: formData.tenderMotor_model || '',
      tender_motor_year_built: toInt(formData.tenderMotor_yearBuilt),
      tender_motor_hp: toInt(formData.tenderMotor_hp),
      tender_motor_fuel: formData.tenderMotor_fuel || '',
      tender_motor_serial: formData.tenderMotor_serial || '',
      tender_motor_locked: yn(formData.tenderMotor_locked),

      // Trailer
      has_trailer: formData.hasTrailer ? 1 : 0,
      trailer_make_model: formData.trailer_makeModel || '',
      trailer_age: toInt(formData.trailer_age),
      trailer_value: toFloat(formData.trailer_value),
      trailer_serial: formData.trailer_serial || '',
      trailer_wheel_clamp: yn(formData.trailer_wheelClamp),
      trailer_locked_building: yn(formData.trailer_lockedBuilding),

      // Safety
      safety_equipment: ((formData.safetyEquipment as string[]) || []).join(', '),
      safety_other: formData.safetyOther || '',
      handheld_extinguisher_count: toInt(formData.handheldExtCount),
      auto_extinguisher_locations: ((formData.autoExtLocations as string[]) || []).join(', '),

      // Gas
      lpg_used: yn(formData.lpgUsed),
      lpg_cockpit_locker: yn(formData.lpg_cockpitLocker),
      lpg_approved_tubing: yn(formData.lpg_approvedTubing),

      // Mooring
      vessel_cruising_area: formData.cruisingItinerary || '',
      mooring_location: formData.mooringName || '',
      mooring_type: formData.mooringType || '',
      mooring_location_country_id: mooringCountryId,
      mooring_location_postcode: formData.mooringPostcode || '',
      laid_up_location: formData.laidUpLocation || '',
      laid_up_from: formData.laidUpFrom || '',
      laid_up_to: formData.laidUpTo || '',
      mooring_vessel_ashore: yn(formData.storedAshoreDaily),
      mooring_vessel_ashore_details: formData.storedAshoreHow || '',

      // Sums insured
      sums_insured_currency_id: siCurrencyId,
      si_hull: toFloat(formData.si_hull_amount),
      si_tender: toFloat(formData.si_tender_amount),
      si_trailer: toFloat(formData.si_trailer_amount),
      si_personal_effects: toFloat(formData.si_effects_amount),
      si_navigation_equipment: toFloat(formData.si_nav_amount),
      liability_third_party: toFloat(formData.si_tpl_amount),
      si_uninsured_boater: toFloat(formData.si_uninsured_amount),
      si_medical: toFloat(formData.si_medical_amount),
      si_crew: toFloat(formData.si_crew_amount),
      si_passenger_liability: toFloat(formData.si_passenger_amount),

      // Cover
      cover_fully_comprehensive: yn(formData.cover_fullyComp),
      cover_third_party_only: yn(formData.cover_tplOnly),
      cover_private_pleasure_only: yn(formData.cover_privatePleasure),
      cover_commercial: yn(formData.cover_commercial),
      ...(coverCommercialTypeId ? { cover_commercial_type_id: coverCommercialTypeId } : {}),
      cover_commercial_passenger_liability: yn(formData.cover_commercialPassenger),
      cover_max_passengers: toInt(formData.cover_maxPassengers),
      cover_in_water_activities: yn(formData.cover_inWater),
      cover_employed_crew: yn(formData.cover_employedCrew),
      cover_max_crew: toInt(formData.cover_maxCrew),
      cover_water_skiing: yn(formData.cover_waterSkiing),
      cover_medical_expenses: yn(formData.cover_medicalExp),
      cover_salvage: yn(formData.cover_salvage),

      // Endorsements
      end_agreed_value: yn(formData.end_agreedValue),
      end_breach_warranty: yn(formData.end_breachWarranty),
      end_breach_warranty_loan: toFloat(formData.end_loanAmount),
      end_builders_risk: yn(formData.end_buildersRisk),
      end_commercial_fishing: yn(formData.end_commercialFishing),
      end_diving: yn(formData.end_diving),
      end_houseboat: yn(formData.end_houseboat),
      end_new_for_old: yn(formData.end_newForOld),
      end_night_navigation: yn(formData.end_nightNav),
      end_towing: yn(formData.end_towing),
      end_racing: yn(formData.end_racing),
      end_racing_names: formData.end_racingNames || '',
      end_racing_mast_value: toFloat(formData.end_mastValue),
      end_single_handed: yn(formData.end_singleHanded),
      ...(windstormsCoverageId ? { cover_windstorms_coverage_id: windstormsCoverageId } : {}),
      end_storm_prep_plan: yn(formData.end_stormPrep),
      end_taken_ashore: yn(formData.end_takenAshore),
      end_unattended: yn(formData.end_unattended),
      end_uninsured_boater: yn(formData.end_uninsuredBoater),

      // Declaration
      decl_declined: yn(formData.decl_declined),
      decl_declined_details: formData.decl_declinedDetails || '',
      decl_accidents: yn(formData.decl_accidents),
      decl_accident_details: formData.decl_accidentDetails || '',
      decl_dishonesty: yn(formData.decl_dishonesty),
      decl_dishonesty_details: formData.decl_dishonestyDetails || '',
      decl_mortgage: yn(formData.decl_mortgage),
      decl_mortgage_details: formData.decl_mortgageDetails || '',
      decl_sole_owner: yn(formData.decl_soleOwner),
      decl_other_owners: formData.decl_otherOwners || '',
      decl_disabilities: yn(formData.decl_disabilities),
      decl_disability_details: formData.decl_disabilityDetails || '',

      // Policy
      preferred_start_date: formData.preferredStartDate || '',
      previous_insurer: formData.previousInsurer || '',
      no_claims_bonus: formData.noClaimsBonus || '',
      declaration_accepted: true,
      is_partial_submission: isPartial ? true : false,
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
