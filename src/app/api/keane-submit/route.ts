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

function yn(val: string | boolean | undefined): boolean {
  if (typeof val === 'boolean') return val;
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

    // ── ID resolution ──────────────────────────────────────────────────────
    const titleId        = findId(titles,      formData.title           || 'Mr');
    const countryId      = findId(countries,   formData.country         || 'New Zealand');
    const nationalityId  = findId(countries,   formData.nationality     || formData.country || 'New Zealand');
    const flagCountryId  = findId(countries,   formData.countryFlag     || formData.country || 'New Zealand');
    const mooringCountryId = findId(countries, formData.mooringCountry  || formData.country || 'New Zealand');
    const vesselTypeId   = findId(vesselTypes, formData.vesselType      || 'Sail Monohull');

    const primaryMaterial = (formData.constructionMaterials as string[] | undefined)?.[0] || '';
    const materialId = primaryMaterial ? findId(materials, primaryMaterial) : undefined;
    const isMaterialOther = primaryMaterial.toLowerCase() === 'other';

    const siCurrencyId        = findId(currencies, formData.si_hull_currency || formData.si_tpl_currency || 'NZD');
    const vesselPriceCurrencyId = findId(currencies, formData.si_hull_currency || 'NZD');

    // Referral source — auto-map to "Website" or "Other" (ID 1 or 4 both require referral_source_other)
    const websiteSource =
      referralSources.find((r) =>
        ['web', 'online', 'internet', 'website'].some((kw) => r.name.toLowerCase().includes(kw)),
      ) || referralSources[0];
    const referralSourceId = toInt(formData.referralSourceId) || websiteSource?.id || 1;

    // Commercial cover type
    let coverCommercialTypeId: number | undefined;
    let coverCommercialTypeOther: string | undefined;
    if (yn(formData.cover_commercial)) {
      if (yn(formData.cover_barebat))         coverCommercialTypeId = findId(commercialTypes, 'Bareboat');
      else if (yn(formData.cover_captainCharter)) coverCommercialTypeId = findId(commercialTypes, 'Crewed');
      else if (yn(formData.cover_fishingCharter)) coverCommercialTypeId = findId(commercialTypes, 'Fishing');
      else {
        coverCommercialTypeId = findId(commercialTypes, 'Other');
        // cover_commercial_type_other required when type ID is 3 (Other)
        coverCommercialTypeOther = formData.cover_commercialOtherDetails || '';
      }
    }

    // Windstorm coverage
    let windstormsCoverageId: number | undefined;
    if (yn(formData.end_storm12plus))      windstormsCoverageId = findId(windstorms, 'Force 12');
    else if (yn(formData.end_storm7to12))  windstormsCoverageId = findId(windstorms, 'Force 7');

    // Resolve names
    const firstName = formData.firstName || (formData.ownerName ? formData.ownerName.split(' ')[0] : 'Unknown');
    const lastName  = formData.lastName  ||
      (formData.ownerName ? formData.ownerName.split(' ').slice(1).join(' ') : firstName);

    // Engine details — compose into single string (vessel_engine_details)
    const engineDetailParts = [
      formData.engine_manufacturer,
      formData.engine_model,
      formData.engine_yearBuilt ? `(${formData.engine_yearBuilt})` : '',
      formData.engine_hp ? `${formData.engine_hp}hp` : '',
      formData.engine_fuel || '',
      formData.engine_count && formData.engine_count !== '1' ? `×${formData.engine_count}` : '',
    ].filter(Boolean);
    const engineDetails = engineDetailParts.join(' ').trim();

    // Vessel make/model — combine into single string
    const vesselMakeModel = [formData.manufacturer, formData.model].filter(Boolean).join(' ').trim();

    // Auto extinguisher system locations (checkboxes stored as array)
    const autoExtLocations = (formData.autoExtLocations as string[] | undefined) || [];
    const extSystemEngine    = autoExtLocations.some((l: string) => /engine/i.test(l));
    const extSystemTankSpace = autoExtLocations.some((l: string) => /tank/i.test(l));
    const extSystemGallery   = autoExtLocations.some((l: string) => /gall/i.test(l));

    // Sums insured — compute individual amounts and total
    const hullAmount    = toInt(formData.si_hull_amount);
    const tenderAmount  = toInt(formData.si_tender_amount);
    const trailerAmount = toInt(formData.si_trailer_amount);
    const effectsAmount = toInt(formData.si_effects_amount);
    const navAmount     = toInt(formData.si_nav_amount);
    const siTotal       = hullAmount + tenderAmount + trailerAmount + effectsAmount + navAmount;

    // Cover dates — default to "not currently insured" (new business through website)
    const coverStartDate = formData.preferredStartDate || '';

    // Additional owners (clients[] array — required if declaration_owner is false)
    const isSoleOwner = yn(formData.decl_soleOwner ?? 'Yes');
    let clients: Record<string, unknown>[] | undefined;
    if (!isSoleOwner && formData.hasAdditional) {
      const addlName      = (formData.addl_name as string) || '';
      const nameParts     = addlName.trim().split(' ');
      const addlFirst     = nameParts[0] || '';
      const addlLast      = nameParts.slice(1).join(' ') || addlFirst;
      const addlExpYears  = toInt(formData.addl_experience);
      const boatingStartYear = addlExpYears > 0
        ? new Date().getFullYear() - addlExpYears
        : new Date().getFullYear();
      clients = [
        {
          title_id: 1, // form doesn't capture addl title — default Mr
          first_name: addlFirst,
          last_name: addlLast,
          ...(formData.addl_dob ? { date_of_birth: formData.addl_dob } : {}),
          boating_start_year: boatingStartYear,
          address: [formData.addl_address, formData.addl_city].filter(Boolean).join(', ') || 'Not provided',
        },
      ];
    }

    // ── Build full Keane payload (all documented fields) ───────────────────
    const keanePayload: Record<string, unknown> = {

      // ── Personal Details ──────────────────────────────────────────────────
      // Ref: Keane API v1.0 — Personal Details table
      is_private_owner: true,
      title_id: titleId,
      first_name: firstName,
      last_name: lastName || firstName,
      email: formData.email || '',
      address: formData.address || 'Not provided',
      nationality_id: nationalityId,
      country_id: countryId,
      telephone: formData.phone || '',
      date_of_birth: formData.dob || '1970-01-01',
      occupation: formData.occupation || '',
      years_experience: toInt(formData.boatingExperience),
      qualifications: formData.boatingQualifications || '',
      ...(formData.previousVessels ? { previous_vessels_owned: formData.previousVessels } : {}),

      // ── Vessel Details ────────────────────────────────────────────────────
      vessel_name: formData.vesselName || 'Not provided',
      vessel_type_id: vesselTypeId,
      ...(vesselMakeModel ? { vessel_make_model: vesselMakeModel } : {}),
      ...(materialId ? { vessel_construction_material_id: materialId } : {}),
      ...(isMaterialOther && formData.constructionOther
        ? { vessel_construction_material: formData.constructionOther }
        : {}),
      vessel_flag_country_id: flagCountryId,
      vessel_year_built: toInt(formData.yearBuilt),
      vessel_is_conversion: yn(formData.isConversion),
      ...(yn(formData.isConversion) && formData.isConversionDetails
        ? { vessel_is_conversion_details: formData.isConversionDetails }
        : {}),
      vessel_length: formData.length ? String(formData.length) : '',
      vessel_purchase_date: formData.datePurchased || '',
      vessel_price: toFloat(formData.pricePaid),
      vessel_price_currency_id: vesselPriceCurrencyId,
      ...(formData.lastSurveyDate ? { vessel_date_last_survey: formData.lastSurveyDate } : {}),
      ...(formData.surveyorName   ? { vessel_name_surveyor: formData.surveyorName } : {}),
      ...(formData.engine_manufacturer ? { vessel_engine_make: formData.engine_manufacturer } : {}),
      ...(engineDetails ? { vessel_engine_details: engineDetails } : {}),
      vessel_maximum_speed: toInt(formData.engine_maxSpeed),
      vessel_cruising_area: formData.cruisingItinerary || '',

      // ── Safety ────────────────────────────────────────────────────────────
      ...(extSystemEngine    ? { vessel_extinguishing_system_engine: true }     : {}),
      ...(extSystemTankSpace ? { vessel_extinguishing_system_tank_space: true } : {}),
      ...(extSystemGallery   ? { vessel_extinguishing_system_gallery: true }    : {}),
      ...(formData.handheldExtCount
        ? { vessel_extinguisher_hand_number: toInt(formData.handheldExtCount) }
        : {}),
      vessel_lpg_used: yn(formData.lpgUsed),
      ...(yn(formData.lpgUsed)
        ? {
            vessel_lpg_cylinder_kept_in_locker: yn(formData.lpg_cockpitLocker),
            vessel_lpg_delivery_tubing_copper_or_european: yn(formData.lpg_approvedTubing),
          }
        : {}),

      // ── Mooring ───────────────────────────────────────────────────────────
      mooring_location_country_id: mooringCountryId,
      mooring_location_postcode: formData.mooringPostcode || formData.zipPostcode || '0000',
      mooring_location: formData.mooringName || '',
      mooring_type: formData.mooringType || '',
      mooring_vessel_ashore: yn(formData.storedAshoreDaily),
      ...(yn(formData.storedAshoreDaily) && formData.storedAshoreHow
        ? { mooring_how_vessel_stored: formData.storedAshoreHow }
        : {}),
      ...(formData.laidUpFrom     ? { mooring_vessel_laid_up_from:     formData.laidUpFrom }     : {}),
      ...(formData.laidUpTo       ? { mooring_vessel_laid_up_to:       formData.laidUpTo }       : {}),
      ...(formData.laidUpLocation ? { mooring_vessel_laid_up_location: formData.laidUpLocation } : {}),

      // ── Cover Details ─────────────────────────────────────────────────────
      cover_fully_comprehensive: yn(formData.cover_fullyComp),
      cover_private_pleasure_only: yn(formData.cover_privatePleasure ?? 'Yes'),
      cover_commercial: yn(formData.cover_commercial),
      ...(coverCommercialTypeId ? { cover_commercial_type_id: coverCommercialTypeId } : {}),
      ...(coverCommercialTypeOther !== undefined ? { cover_commercial_type_other: coverCommercialTypeOther } : {}),
      cover_commercial_passenger_liability: yn(formData.cover_commercialPassenger),
      ...(yn(formData.cover_commercialPassenger) && formData.cover_maxPassengers
        ? { cover_commercial_passenger_liability_number: toInt(formData.cover_maxPassengers) }
        : {}),
      // cover_commercial_in_water_activities required when passenger liability is true
      ...(yn(formData.cover_commercialPassenger)
        ? { cover_commercial_in_water_activities: yn(formData.cover_inWater) }
        : {}),
      cover_wreck_removal: yn(formData.cover_salvage),
      cover_water_skiing: yn(formData.cover_waterSkiing),
      cover_medical_expenses: yn(formData.cover_medicalExp),
      cover_captain_crew_liability: yn(formData.cover_employedCrew),
      ...(yn(formData.cover_employedCrew) && formData.cover_maxCrew
        ? { cover_captain_crew_liability_number: toInt(formData.cover_maxCrew) }
        : {}),
      cover_vessel_currently_insured: false, // new business via website
      ...(coverStartDate ? { cover_start_date: coverStartDate } : {}),
      ...(formData.previousInsurer
        ? { cover_vessel_currently_insured_company_name: formData.previousInsurer }
        : {}),
      ...(formData.noClaimsBonus
        ? { cover_vessel_currently_insured_years_with_no_claims: String(formData.noClaimsBonus) }
        : {}),

      // ── Endorsements ──────────────────────────────────────────────────────
      cover_agreed_value:           yn(formData.end_agreedValue),
      cover_breach_of_warranty:     yn(formData.end_breachWarranty),
      ...(yn(formData.end_breachWarranty) && formData.end_loanAmount
        ? { cover_breach_of_warranty_loan_amount: toInt(formData.end_loanAmount) }
        : {}),
      cover_builders_risks:         yn(formData.end_buildersRisk),
      cover_commercial_fishing:     yn(formData.end_commercialFishing),
      cover_diving_parties:         yn(formData.end_diving),
      cover_houseboat:              yn(formData.end_houseboat),
      cover_new_for_old:            yn(formData.end_newForOld),
      cover_night_navigation:       yn(formData.end_nightNav),
      cover_non_emergency_towing:   yn(formData.end_towing),
      cover_racing:                 yn(formData.end_racing),
      ...(yn(formData.end_racing) && formData.end_racingNames
        ? { cover_racing_details: formData.end_racingNames }
        : {}),
      cover_sail_single_handed:     yn(formData.end_singleHanded),
      ...(windstormsCoverageId ? { cover_windstorms_coverage_id: windstormsCoverageId } : {}),
      // cover_storm_preparation required when windstorms coverage ID is 1
      ...(windstormsCoverageId
        ? { cover_storm_preparation: yn(formData.end_stormPrep) }
        : {}),
      cover_taken_ashore:           yn(formData.end_takenAshore),
      cover_unattended:             yn(formData.end_unattended),
      cover_uninsured_boater:       yn(formData.end_uninsuredBoater),

      // ── Sums Insured ──────────────────────────────────────────────────────
      sums_insured_currency_id: siCurrencyId,
      sums_insured_hull: hullAmount,          // Required
      ...(tenderAmount  > 0 ? { sums_insured_tender:               tenderAmount  } : {}),
      ...(trailerAmount > 0 ? { sums_insured_trailer:              trailerAmount } : {}),
      ...(effectsAmount > 0 ? { sums_insured_personal_effects:     effectsAmount } : {}),
      ...(navAmount     > 0 ? { sums_insured_navigation_equipment: navAmount     } : {}),
      ...(siTotal       > 0 ? { sums_insured_total:                siTotal       } : {}),

      // ── Liability ─────────────────────────────────────────────────────────
      liability_third_party: toFloat(formData.si_tpl_amount), // Required
      ...(toInt(formData.si_uninsured_amount) > 0
        ? { liability_uninsured_boater:   toInt(formData.si_uninsured_amount) } : {}),
      ...(toInt(formData.si_medical_amount)   > 0
        ? { liability_medical_expenses:   toInt(formData.si_medical_amount)   } : {}),
      ...(toInt(formData.si_crew_amount)      > 0
        ? { liability_captain_crew:       toInt(formData.si_crew_amount)      } : {}),
      ...(toInt(formData.si_passenger_amount) > 0
        ? { liability_passengers:         toInt(formData.si_passenger_amount) } : {}),

      // ── Documents & Declarations ──────────────────────────────────────────
      declaration_insurance_declined: yn(formData.decl_declined),
      declaration_accident:           yn(formData.decl_accidents),
      ...(yn(formData.decl_accidents) && formData.decl_accidentDetails
        ? { declaration_accident_description: formData.decl_accidentDetails }
        : {}),
      declaration_dishonest:          yn(formData.decl_dishonesty),
      ...(yn(formData.decl_dishonesty) && formData.decl_dishonestyDetails
        ? { declaration_dishonest_description: formData.decl_dishonestyDetails }
        : {}),
      declaration_owner:              isSoleOwner,
      ...(clients ? { clients } : {}),
      declaration_mortgage:           yn(formData.decl_mortgage),
      ...(yn(formData.decl_mortgage) && formData.decl_mortgageDetails
        ? { financial_interest: formData.decl_mortgageDetails }
        : {}),
      referral_source_id:             referralSourceId,
      referral_source_other:          'yachtinsurance.co.nz', // required when source ID is 1 or 4
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
      // Update Supabase with error — full form data is still safe there and in email
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
