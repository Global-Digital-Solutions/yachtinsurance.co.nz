import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Honeypot — bots fill hidden fields
    if (data.company_url && String(data.company_url).trim() !== '') {
      return NextResponse.json({ ok: true });
    }

    const emailBody = formatProposalEmail(data);

    const displayName =
      data.ownerName ||
      (data.firstName && data.lastName
        ? `${data.title || ''} ${data.firstName} ${data.lastName}`.trim()
        : 'Unknown');

    const formBody = new URLSearchParams({
      source: 'yachtinsurance.co.nz/marine-proposal',
      _subject: `Marine Proposal — ${displayName} — ${data.vesselName || 'Vessel TBC'}`,
      name: displayName,
      email: String(data.email || ''),
      phone: String(data.phone || ''),
      proposal_body: emailBody,
    });

    const workerRes = await fetch('https://shiny-bush-41cd.darinbutler.workers.dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Form-Secret': process.env.FORM_SECRET || '',
      },
      body: formBody.toString(),
    });

    if (!workerRes.ok) {
      console.error('Proposal worker error:', workerRes.status, await workerRes.text());
      return NextResponse.json({ error: 'Email delivery failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Proposal route error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 },
    );
  }
}

type FV = string | boolean | string[] | undefined | null;

function formatProposalEmail(d: Record<string, FV>): string {
  const lines: string[] = ['<strong style="font-size:16px">🚢 MARINE INSURANCE PROPOSAL FORM</strong>', ''];

  const L = (label: string, val: FV) => {
    if (val === undefined || val === null || val === '' || val === false) return;
    if (Array.isArray(val)) { if (val.length > 0) lines.push(`<strong>${label}:</strong> ${val.join(', ')}`); }
    else { lines.push(`<strong>${label}:</strong> ${val}`); }
  };

  const H = (title: string) => lines.push('', `<strong style="color:#0d9488">▸ ${title}</strong>`);

  H('PROPOSER DETAILS');
  const fullName = d.ownerName || (d.firstName && d.lastName ? `${d.title || ''} ${d.firstName} ${d.lastName}`.trim() : null);
  L('Owner Name', fullName); L('Title', d.title); L('Nationality', d.nationality); L('Date of Birth', d.dob);
  L('Address', d.address); L('City/Town', d.city);
  L('State/County', d.stateCounty); L('Zip/Postcode', d.zipPostcode); L('Country', d.country);
  L('Email', d.email); L('Phone', d.phone); L('Occupation', d.occupation);
  L('Boating Qualifications', d.boatingQualifications);
  L('Boating Experience (Years)', d.boatingExperience);
  L('Previous Vessels Owned', d.previousVessels);

  H('ADDITIONAL INSURED');
  if (d.hasAdditional) {
    L('Name', d.addl_name); L('Date of Birth', d.addl_dob);
    L('Address', d.addl_address); L('City/Town', d.addl_city);
    L('State/County', d.addl_stateCounty); L('Zip/Postcode', d.addl_zipPostcode);
    L('Experience (Years)', d.addl_experience); L('Qualifications', d.addl_qualifications);
  } else { lines.push('None'); }

  H('VESSEL PARTICULARS');
  L('Vessel Name', d.vesselName); L('Hull/Serial Number', d.hullNumber);
  L('Country of Flag', d.countryFlag); L('State Flag (USA)', d.stateFlagUSA);
  L('Registration State (USA)', d.registrationStateUSA);
  L('Year Built', d.yearBuilt); L('Length (metres)', d.length);
  L('Manufacturer', d.manufacturer); L('Model', d.model);
  L('Vessel Type', d.vesselType); L('Is Conversion', d.isConversion);
  L('Construction Material(s)', d.constructionMaterials);
  L('Construction Other Detail', d.constructionOther);
  L('Date Purchased', d.datePurchased); L('Price Paid', d.pricePaid);
  L('Date of Last Survey', d.lastSurveyDate); L('Name of Surveyor', d.surveyorName);

  H('ENGINE DETAILS');
  L('Manufacturer', d.engine_manufacturer); L('Model', d.engine_model);
  L('Year Built', d.engine_yearBuilt); L('HP', d.engine_hp);
  L('Fuel Type', d.engine_fuel); L('Serial Number', d.engine_serial);
  L('Number of Engines', d.engine_count); L('Maximum Speed (knots)', d.engine_maxSpeed);

  H('TENDER / DINGHY');
  if (d.hasTender) {
    L('Hull/Serial Number', d.tender_serial);
    L('Displays Parent Vessel Name on Hull', d.tender_displaysName);
    L('Manufacturer', d.tender_manufacturer); L('Model', d.tender_model);
    L('Length (metres)', d.tender_length); L('Year Built', d.tender_yearBuilt);
    L('Purchase Date', d.tender_purchaseDate); L('Purchase Price', d.tender_purchasePrice);
    lines.push('<em>&nbsp;&nbsp;Outboard Motor:</em>');
    L('&nbsp;&nbsp;Manufacturer', d.tenderMotor_manufacturer); L('&nbsp;&nbsp;Model', d.tenderMotor_model);
    L('&nbsp;&nbsp;Year Built', d.tenderMotor_yearBuilt); L('&nbsp;&nbsp;HP', d.tenderMotor_hp);
    L('&nbsp;&nbsp;Fuel Type', d.tenderMotor_fuel); L('&nbsp;&nbsp;Serial Number', d.tenderMotor_serial);
    L('&nbsp;&nbsp;Locked When Not In Use', d.tenderMotor_locked);
  } else { lines.push('No tender/dinghy'); }

  H('TRAILER');
  if (d.hasTrailer) {
    L('Make/Model', d.trailer_makeModel); L('Age (Years)', d.trailer_age);
    L('Value', d.trailer_value); L('Serial Number', d.trailer_serial);
    L('Wheel Clamp Fitted', d.trailer_wheelClamp);
    L('Locked in Building When Not In Use', d.trailer_lockedBuilding);
  } else { lines.push('No trailer'); }

  H('SAFETY & SECURITY EQUIPMENT');
  L('Safety Equipment On Board', d.safetyEquipment);
  L('Other Safety Equipment', d.safetyOther);
  L('Number of Handheld Fire Extinguishers', d.handheldExtCount);
  L('Auto Extinguisher Locations', d.autoExtLocations);

  H('GAS SYSTEM');
  L('LPG Gas Used on Board', d.lpgUsed);
  if (d.lpgUsed === 'Yes') {
    L('Gas Cylinder in Cockpit Locker', d.lpg_cockpitLocker);
    L('Approved Delivery Tubing', d.lpg_approvedTubing);
  }

  H('CRUISING & MOORING');
  L('Cruising Itinerary', d.cruisingItinerary);
  L('Mooring Location Name', d.mooringName); L('Mooring Type', d.mooringType);
  L('Laid Up Location', d.laidUpLocation);
  L('Laid Up From', d.laidUpFrom); L('Laid Up To', d.laidUpTo);
  L('Stored Ashore Daily', d.storedAshoreDaily);
  if (d.storedAshoreDaily === 'Yes') L('Storage Method/Details', d.storedAshoreHow);

  H('SUMS INSURED');
  const siRows: [string, FV, FV][] = [
    ['Hull', d.si_hull_currency, d.si_hull_amount],
    ['Tender/Dinghy', d.si_tender_currency, d.si_tender_amount],
    ['Trailer', d.si_trailer_currency, d.si_trailer_amount],
    ['Personal Effects', d.si_effects_currency, d.si_effects_amount],
    ['Navigation Equipment', d.si_nav_currency, d.si_nav_amount],
    ['Third Party Liability', d.si_tpl_currency, d.si_tpl_amount],
    ['Uninsured Boater', d.si_uninsured_currency, d.si_uninsured_amount],
    ['Medical Payments', d.si_medical_currency, d.si_medical_amount],
    ['Captain/Crew', d.si_crew_currency, d.si_crew_amount],
    ['Passenger Liability', d.si_passenger_currency, d.si_passenger_amount],
  ];
  siRows.forEach(([nm, cur, amt]) => { if (amt) lines.push(`${nm}: ${cur || 'NZD'} ${amt}`); });

  H('COVERAGE REQUIRED');
  L('Fully Comprehensive', d.cover_fullyComp);
  L('Third Party Liability Only', d.cover_tplOnly);
  L('Private Pleasure Only', d.cover_privatePleasure);
  L('Commercial Use', d.cover_commercial);
  if (d.cover_commercial === 'Yes') {
    L('  Bareboat Charter', d.cover_barebat);
    L('  Captain/Crew Charter', d.cover_captainCharter);
    L('  Fishing Charter', d.cover_fishingCharter);
    L('  Other Commercial', d.cover_commercialOther);
    L('  Commercial Other Details', d.cover_commercialOtherDetails);
    L('  Commercial Passenger Liability', d.cover_commercialPassenger);
    L('  Maximum Passengers', d.cover_maxPassengers);
  }
  L('In-Water Activities (snorkelling etc.)', d.cover_inWater);
  L('Employed Captain/Crew', d.cover_employedCrew);
  if (d.cover_employedCrew === 'Yes') L('  Maximum Crew', d.cover_maxCrew);
  L('Water Skiing / Towing Activities', d.cover_waterSkiing);
  L('Medical Expenses', d.cover_medicalExp);
  L('Salvage & Wreck Removal', d.cover_salvage);

  H('ENDORSEMENTS REQUESTED');
  const ends: Array<[string, FV, string?, FV?]> = [
    ['Agreed Value', d.end_agreedValue],
    ['Breach of Warranty', d.end_breachWarranty, 'Loan Amount', d.end_loanAmount],
    ["Builder's Risk", d.end_buildersRisk],
    ['Commercial Fishing', d.end_commercialFishing],
    ['Diving Parties', d.end_diving],
    ['Houseboat', d.end_houseboat],
    ['New for Old Replacement', d.end_newForOld],
    ['Night Navigation', d.end_nightNav],
    ['Non-Emergency Towing', d.end_towing],
    ['Racing Risks', d.end_racing, 'Races/Events', d.end_racingNames],
    ['Racing — Mast/Boom Value', d.end_racing, 'Mast & Boom Value', d.end_mastValue],
    ['Single-Handed Sailing', d.end_singleHanded],
    ['Storm Cover Force 7–12', d.end_storm7to12],
    ['Storm Cover Force 12+', d.end_storm12plus, 'Storm Preparation Plan in Place', d.end_stormPrep],
    ['Taken Ashore', d.end_takenAshore],
    ['Unattended', d.end_unattended],
    ['Uninsured Boater', d.end_uninsuredBoater],
  ];
  ends.forEach(([label, val, subLabel, subVal]) => {
    if (val === 'Yes') {
      lines.push(`${label}: Yes`);
      if (subLabel && subVal) lines.push(`  ${subLabel}: ${subVal}`);
    }
  });

  H('DECLARATION');
  L('Insurance Previously Declined/Cancelled', d.decl_declined);
  if (d.decl_declined === 'Yes') L('  Details', d.decl_declinedDetails);
  L('Accident/Loss/Claim in Last 5 Years', d.decl_accidents);
  if (d.decl_accidents === 'Yes') L('  Loss Information', d.decl_accidentDetails);
  L('Convicted of Dishonesty/Fraud Offence', d.decl_dishonesty);
  if (d.decl_dishonesty === 'Yes') L('  Details', d.decl_dishonestyDetails);
  L('Vessel Subject to Mortgage/Finance', d.decl_mortgage);
  if (d.decl_mortgage === 'Yes') L('  Mortgage/Lender Details', d.decl_mortgageDetails);
  L('Sole Owner of Vessel', d.decl_soleOwner);
  if (d.decl_soleOwner === 'No') L('  Other Owner Details', d.decl_otherOwners);
  L('Disabilities That May Affect Operation', d.decl_disabilities);
  if (d.decl_disabilities === 'Yes') L('  Disability Details', d.decl_disabilityDetails);

  H('POLICY DETAILS');
  L('Preferred Cover Start Date', d.preferredStartDate);
  L('Previous Insurer', d.previousInsurer);
  L('No Claims Bonus', d.noClaimsBonus);
  lines.push('Declaration Accepted: Yes');
  lines.push('', `Submitted: ${new Date().toISOString()}`);

  return lines.join('<br>\n');
}
