'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Anchor, Clock, Save } from 'lucide-react';

/* ── Site-specific defaults (set via Vercel env vars per deployment) ── */
// .co.nz → NEXT_PUBLIC_FORM_DEFAULT_COUNTRY=New Zealand, NEXT_PUBLIC_FORM_DEFAULT_CURRENCY=NZD
// .co.za → NEXT_PUBLIC_FORM_DEFAULT_COUNTRY=South Africa, NEXT_PUBLIC_FORM_DEFAULT_CURRENCY=ZAR
// .asia  → (leave env vars unset for no default)
const DEFAULT_COUNTRY = process.env.NEXT_PUBLIC_FORM_DEFAULT_COUNTRY || 'New Zealand';
const DEFAULT_CURRENCY = process.env.NEXT_PUBLIC_FORM_DEFAULT_CURRENCY || 'NZD';

// Local currency appears first in dropdown
const ALL_CURRENCIES = ['NZD', 'AUD', 'USD', 'GBP', 'EUR', 'ZAR'];
const CURRENCIES = [DEFAULT_CURRENCY, ...ALL_CURRENCIES.filter((c) => c !== DEFAULT_CURRENCY)];

/* ── CSS constants (outside component — stable) ──────────────── */
const inputCls =
  'w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition';
const labelCls = 'block text-sm font-medium text-slate-300 mb-1.5';
const noteCls = 'text-xs text-slate-500 mt-1';

const STEPS = [
  'Proposer Details',
  'Additional Insured',
  'Vessel Particulars',
  'Engine, Tender & Trailer',
  'Safety, Gas & Mooring',
  'Cover & Sums Insured',
  'Declaration & Submit',
];

/* ── Reusable field components (OUTSIDE main component) ─────── */
/* Defining these inside the component creates a new type identity
   on every render, causing React to unmount/remount on each keystroke. */

const Field = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
  hint,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
  hint?: string;
}) => (
  <div>
    <label htmlFor={id} className={labelCls}>
      {label}
      {required && <span className="text-teal-400 ml-1">*</span>}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={inputCls}
      autoComplete="off"
    />
    {hint && <p className={noteCls}>{hint}</p>}
  </div>
);

const TextArea = ({
  label,
  id,
  value,
  onChange,
  rows = 3,
  required,
  placeholder,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) => (
  <div>
    <label htmlFor={id} className={labelCls}>
      {label}
      {required && <span className="text-teal-400 ml-1">*</span>}
    </label>
    <textarea
      id={id}
      value={value}
      rows={rows}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`${inputCls} resize-none`}
    />
  </div>
);

const Select = ({
  label,
  id,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) => (
  <div>
    <label htmlFor={id} className={labelCls}>
      {label}
      {required && <span className="text-teal-400 ml-1">*</span>}
    </label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${inputCls} cursor-pointer`}
    >
      <option value="">— Select —</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const YesNo = ({
  label,
  id,
  value,
  onChange,
  hint,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) => (
  <div>
    <p className={labelCls}>{label}</p>
    <div className="flex gap-2" id={id}>
      {['Yes', 'No'].map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition border ${
            value === opt
              ? opt === 'Yes'
                ? 'bg-teal-600 border-teal-500 text-white'
                : 'bg-slate-600 border-slate-500 text-white'
              : 'bg-slate-800 border-slate-600 text-slate-400 hover:border-slate-400'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
    {hint && <p className={noteCls}>{hint}</p>}
  </div>
);

const CheckBox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <label className="flex items-start gap-2.5 cursor-pointer group">
    <div
      onClick={onChange}
      className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 border flex items-center justify-center transition ${
        checked
          ? 'bg-teal-600 border-teal-500'
          : 'bg-slate-800 border-slate-600 group-hover:border-slate-400'
      }`}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <span className="text-sm text-slate-300 leading-5">{label}</span>
  </label>
);

const Card = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-4 sm:p-5 space-y-4">
    {title && (
      <h3 className="text-teal-400 font-semibold text-sm uppercase tracking-wider">{title}</h3>
    )}
    {children}
  </div>
);

const Grid2 = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
);

const Tick = () => (
  <svg
    className="w-3 h-3 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <div
    onClick={onChange}
    className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 border flex items-center justify-center cursor-pointer transition ${
      checked ? 'bg-teal-600 border-teal-500' : 'bg-slate-800 border-slate-600 hover:border-slate-400'
    }`}
  >
    {checked && <Tick />}
  </div>
);

/* ── DateSelect — three dropdowns instead of native browser picker ── */
const MONTHS_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const THIS_YEAR = new Date().getFullYear();

const selCls =
  'bg-slate-800 border border-slate-600 rounded-lg px-1.5 sm:px-2 py-2.5 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition cursor-pointer w-full';

const DateSelect = ({
  label,
  id,
  value,
  onChange,
  required,
  minYear,
  maxYear,
  futureOnly,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  minYear?: number;
  maxYear?: number;
  futureOnly?: boolean;
}) => {
  // Parse a full date string into its three parts
  const parse = (v: string) => {
    if (v) { const p = v.split('-'); return { yr: p[0] || '', mo: p[1] || '', dy: p[2] || '' }; }
    return { yr: '', mo: '', dy: '' };
  };

  // LOCAL state — each dropdown persists independently.
  // Previously the component used a shared emit() that reset to '' when any part was missing,
  // causing each selection to immediately revert. Now we only call onChange when all 3 are set.
  const [parts, setParts] = React.useState(() => parse(value));

  // Sync if parent resets the value (e.g. localStorage restore on mount)
  const prevValue = React.useRef(value);
  React.useEffect(() => {
    if (value !== prevValue.current) {
      prevValue.current = value;
      setParts(parse(value));
    }
  }, [value]);

  const update = (next: { yr: string; mo: string; dy: string }) => {
    setParts(next);
    if (next.yr && next.mo && next.dy) {
      onChange(`${next.yr}-${next.mo.padStart(2, '0')}-${next.dy.padStart(2, '0')}`);
    }
    // Partial selections stay in local state only — no onChange('') reset
  };

  const daysInMo = parts.yr && parts.mo
    ? new Date(parseInt(parts.yr), parseInt(parts.mo), 0).getDate()
    : 31;
  const lo = minYear ?? (futureOnly ? THIS_YEAR : 1940);
  const hi = maxYear ?? (futureOnly ? THIS_YEAR + 3 : THIS_YEAR);
  const years = Array.from({ length: hi - lo + 1 }, (_, i) => (futureOnly ? lo + i : hi - i));

  return (
    <div>
      <label htmlFor={`${id}-day`} className={labelCls}>
        {label}
        {required && <span className="text-teal-400 ml-1">*</span>}
      </label>
      <div className="grid grid-cols-3 gap-2">
        <select
          id={`${id}-day`}
          value={parts.dy}
          onChange={(e) => update({ ...parts, dy: e.target.value })}
          className={selCls}
        >
          <option value="">Day</option>
          {Array.from({ length: daysInMo }, (_, i) => i + 1).map((d) => (
            <option key={d} value={String(d).padStart(2, '0')}>
              {d}
            </option>
          ))}
        </select>
        <select
          value={parts.mo}
          onChange={(e) => update({ ...parts, mo: e.target.value })}
          className={selCls}
        >
          <option value="">Month</option>
          {MONTHS_LONG.map((m, i) => (
            <option key={i} value={String(i + 1).padStart(2, '0')}>
              {m}
            </option>
          ))}
        </select>
        <select
          value={parts.yr}
          onChange={(e) => update({ ...parts, yr: e.target.value })}
          className={selCls}
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

/* ── Form State ──────────────────────────────────────────────── */
interface FormState {
  // Step 1 — Proposer Details
  ownerName: string;      // kept for backwards compat with localStorage drafts
  title: string;
  firstName: string;
  lastName: string;
  nationality: string;
  dob: string;
  address: string;
  city: string;
  stateCounty: string;
  zipPostcode: string;
  country: string;
  email: string;
  phone: string;
  occupation: string;
  boatingQualifications: string;
  boatingExperience: string;
  previousVessels: string;
  // Step 2 — Additional Insured
  hasAdditional: boolean;
  addl_name: string;
  addl_dob: string;
  addl_address: string;
  addl_city: string;
  addl_stateCounty: string;
  addl_zipPostcode: string;
  addl_experience: string;
  addl_qualifications: string;
  // Step 3 — Vessel Particulars
  vesselName: string;
  hullNumber: string;
  countryFlag: string;
  stateFlagUSA: string;
  registrationStateUSA: string;
  yearBuilt: string;
  length: string;
  manufacturer: string;
  model: string;
  vesselType: string;
  isConversion: string;
  isConversionDetails: string;
  constructionMaterials: string[];
  constructionOther: string;
  datePurchased: string;
  pricePaid: string;
  lastSurveyDate: string;
  surveyorName: string;
  // Step 4 — Engine, Tender & Trailer
  engine_manufacturer: string;
  engine_model: string;
  engine_yearBuilt: string;
  engine_hp: string;
  engine_fuel: string;
  engine_serial: string;
  engine_count: string;
  engine_maxSpeed: string;
  hasTender: boolean;
  tender_serial: string;
  tender_displaysName: string;
  tender_manufacturer: string;
  tender_model: string;
  tender_length: string;
  tender_yearBuilt: string;
  tender_purchaseDate: string;
  tender_purchasePrice: string;
  tenderMotor_manufacturer: string;
  tenderMotor_model: string;
  tenderMotor_yearBuilt: string;
  tenderMotor_hp: string;
  tenderMotor_fuel: string;
  tenderMotor_serial: string;
  tenderMotor_locked: string;
  hasTrailer: boolean;
  trailer_makeModel: string;
  trailer_age: string;
  trailer_value: string;
  trailer_serial: string;
  trailer_wheelClamp: string;
  trailer_lockedBuilding: string;
  // Step 5 — Safety, Gas & Mooring
  safetyEquipment: string[];
  safetyOther: string;
  handheldExtCount: string;
  autoExtLocations: string[];
  lpgUsed: string;
  lpg_cockpitLocker: string;
  lpg_approvedTubing: string;
  cruisingItinerary: string;
  mooringName: string;
  mooringType: string;
  mooringCountry: string;
  mooringPostcode: string;
  laidUpLocation: string;
  laidUpFrom: string;
  laidUpTo: string;
  storedAshoreDaily: string;
  storedAshoreHow: string;
  // Step 6 — Cover & Sums Insured
  si_hull_currency: string;
  si_hull_amount: string;
  si_tender_currency: string;
  si_tender_amount: string;
  si_trailer_currency: string;
  si_trailer_amount: string;
  si_effects_currency: string;
  si_effects_amount: string;
  si_nav_currency: string;
  si_nav_amount: string;
  si_tpl_currency: string;
  si_tpl_amount: string;
  si_uninsured_currency: string;
  si_uninsured_amount: string;
  si_medical_currency: string;
  si_medical_amount: string;
  si_crew_currency: string;
  si_crew_amount: string;
  si_passenger_currency: string;
  si_passenger_amount: string;
  cover_fullyComp: string;
  cover_tplOnly: string;
  cover_privatePleasure: string;
  cover_commercial: string;
  cover_barebat: string;
  cover_captainCharter: string;
  cover_fishingCharter: string;
  cover_commercialOther: string;
  cover_commercialOtherDetails: string;
  cover_commercialPassenger: string;
  cover_maxPassengers: string;
  cover_inWater: string;
  cover_employedCrew: string;
  cover_maxCrew: string;
  cover_waterSkiing: string;
  cover_medicalExp: string;
  cover_salvage: string;
  end_agreedValue: string;
  end_breachWarranty: string;
  end_loanAmount: string;
  end_buildersRisk: string;
  end_commercialFishing: string;
  end_diving: string;
  end_houseboat: string;
  end_newForOld: string;
  end_nightNav: string;
  end_towing: string;
  end_racing: string;
  end_racingNames: string;
  end_mastValue: string;
  end_singleHanded: string;
  end_storm7to12: string;
  end_storm12plus: string;
  end_stormPrep: string;
  end_takenAshore: string;
  end_unattended: string;
  end_uninsuredBoater: string;
  // Step 7 — Declaration
  referralSourceId: string;
  decl_declined: string;
  decl_declinedDetails: string;
  decl_accidents: string;
  decl_accidentDetails: string;
  decl_dishonesty: string;
  decl_dishonestyDetails: string;
  decl_mortgage: string;
  decl_mortgageDetails: string;
  decl_soleOwner: string;
  decl_otherOwners: string;
  decl_disabilities: string;
  decl_disabilityDetails: string;
  preferredStartDate: string;
  previousInsurer: string;
  noClaimsBonus: string;
  declarationAccepted: boolean;
  // Honeypot
  company_url: string;
}

const BLANK: FormState = {
  // Step 1
  ownerName: '',
  title: 'Mr',
  firstName: '',
  lastName: '',
  nationality: DEFAULT_COUNTRY,
  dob: '',
  address: '',
  city: '',
  stateCounty: '',
  zipPostcode: '',
  country: DEFAULT_COUNTRY,
  email: '',
  phone: '',
  occupation: '',
  boatingQualifications: '',
  boatingExperience: '',
  previousVessels: '',
  // Step 2
  hasAdditional: false,
  addl_name: '',
  addl_dob: '',
  addl_address: '',
  addl_city: '',
  addl_stateCounty: '',
  addl_zipPostcode: '',
  addl_experience: '',
  addl_qualifications: '',
  // Step 3
  vesselName: '',
  hullNumber: '',
  countryFlag: DEFAULT_COUNTRY,
  stateFlagUSA: '',
  registrationStateUSA: '',
  yearBuilt: '',
  length: '',
  manufacturer: '',
  model: '',
  vesselType: '',
  isConversion: 'No',
  isConversionDetails: '',
  constructionMaterials: [],
  constructionOther: '',
  datePurchased: '',
  pricePaid: '',
  lastSurveyDate: '',
  surveyorName: '',
  // Step 4
  engine_manufacturer: '',
  engine_model: '',
  engine_yearBuilt: '',
  engine_hp: '',
  engine_fuel: 'Diesel',
  engine_serial: '',
  engine_count: '1',
  engine_maxSpeed: '',
  hasTender: false,
  tender_serial: '',
  tender_displaysName: 'Yes',
  tender_manufacturer: '',
  tender_model: '',
  tender_length: '',
  tender_yearBuilt: '',
  tender_purchaseDate: '',
  tender_purchasePrice: '',
  tenderMotor_manufacturer: '',
  tenderMotor_model: '',
  tenderMotor_yearBuilt: '',
  tenderMotor_hp: '',
  tenderMotor_fuel: 'Petrol',
  tenderMotor_serial: '',
  tenderMotor_locked: 'Yes',
  hasTrailer: false,
  trailer_makeModel: '',
  trailer_age: '',
  trailer_value: '',
  trailer_serial: '',
  trailer_wheelClamp: 'No',
  trailer_lockedBuilding: 'No',
  // Step 5
  safetyEquipment: [],
  safetyOther: '',
  handheldExtCount: '',
  autoExtLocations: [],
  lpgUsed: 'No',
  lpg_cockpitLocker: 'Yes',
  lpg_approvedTubing: 'Yes',
  cruisingItinerary: '',
  mooringName: '',
  mooringType: '',
  mooringCountry: DEFAULT_COUNTRY,
  mooringPostcode: '',
  laidUpLocation: '',
  laidUpFrom: '',
  laidUpTo: '',
  storedAshoreDaily: 'No',
  storedAshoreHow: '',
  // Step 6
  si_hull_currency: DEFAULT_CURRENCY,
  si_hull_amount: '',
  si_tender_currency: DEFAULT_CURRENCY,
  si_tender_amount: '',
  si_trailer_currency: DEFAULT_CURRENCY,
  si_trailer_amount: '',
  si_effects_currency: DEFAULT_CURRENCY,
  si_effects_amount: '',
  si_nav_currency: DEFAULT_CURRENCY,
  si_nav_amount: '',
  si_tpl_currency: DEFAULT_CURRENCY,
  si_tpl_amount: '',
  si_uninsured_currency: DEFAULT_CURRENCY,
  si_uninsured_amount: '',
  si_medical_currency: DEFAULT_CURRENCY,
  si_medical_amount: '',
  si_crew_currency: DEFAULT_CURRENCY,
  si_crew_amount: '',
  si_passenger_currency: DEFAULT_CURRENCY,
  si_passenger_amount: '',
  cover_fullyComp: 'Yes',
  cover_tplOnly: 'No',
  cover_privatePleasure: 'Yes',
  cover_commercial: 'No',
  cover_barebat: 'No',
  cover_captainCharter: 'No',
  cover_fishingCharter: 'No',
  cover_commercialOther: 'No',
  cover_commercialOtherDetails: '',
  cover_commercialPassenger: 'No',
  cover_maxPassengers: '',
  cover_inWater: 'No',
  cover_employedCrew: 'No',
  cover_maxCrew: '',
  cover_waterSkiing: 'No',
  cover_medicalExp: 'No',
  cover_salvage: 'No',
  end_agreedValue: 'No',
  end_breachWarranty: 'No',
  end_loanAmount: '',
  end_buildersRisk: 'No',
  end_commercialFishing: 'No',
  end_diving: 'No',
  end_houseboat: 'No',
  end_newForOld: 'No',
  end_nightNav: 'No',
  end_towing: 'No',
  end_racing: 'No',
  end_racingNames: '',
  end_mastValue: '',
  end_singleHanded: 'No',
  end_storm7to12: 'No',
  end_storm12plus: 'No',
  end_stormPrep: 'No',
  end_takenAshore: 'No',
  end_unattended: 'No',
  end_uninsuredBoater: 'No',
  // Step 7
  referralSourceId: '',
  decl_declined: 'No',
  decl_declinedDetails: '',
  decl_accidents: 'No',
  decl_accidentDetails: '',
  decl_dishonesty: 'No',
  decl_dishonestyDetails: '',
  decl_mortgage: 'No',
  decl_mortgageDetails: '',
  decl_soleOwner: 'Yes',
  decl_otherOwners: '',
  decl_disabilities: 'No',
  decl_disabilityDetails: '',
  preferredStartDate: '',
  previousInsurer: '',
  noClaimsBonus: '',
  declarationAccepted: false,
  company_url: '',
};

/* ── Main Component ──────────────────────────────────────────── */
export default function MarineProposalForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('marine-proposal-draft');
        if (saved) return { ...BLANK, ...JSON.parse(saved) } as FormState;
      } catch {
        /* ignore */
      }
    }
    return BLANK;
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Inactivity popup
  const [showInactivityPopup, setShowInactivityPopup] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [popupCountdown, setPopupCountdown] = useState(300); // seconds

  // Supabase proposal ID — persisted across page refreshes
  const [proposalId, setProposalId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('marine-proposal-id') || null;
    }
    return null;
  });

  // Ref so the abandon timer closure always has fresh form state
  const formRef = useRef(form);
  formRef.current = form;
  const proposalIdRef = useRef(proposalId);
  proposalIdRef.current = proposalId;

  // Inactivity timer refs
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sessionCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const popupActiveRef = useRef(false); // true while popup is showing — prevents timer reset

  // Persist form to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem('marine-proposal-draft', JSON.stringify(form));
    } catch {
      /* ignore */
    }
  }, [form]);

  const set = useCallback(<K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const toggleArr = useCallback(
    (
      field: 'constructionMaterials' | 'safetyEquipment' | 'autoExtLocations',
      val: string,
    ) => {
      setForm((prev) => {
        const arr = (prev[field] as string[]) || [];
        return {
          ...prev,
          [field]: arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val],
        };
      });
    },
    [],
  );

  /* ── Supabase draft save (fire-and-forget) ── */
  const saveDraft = useCallback(
    async (currentStep: number, currentForm: FormState) => {
      try {
        const res = await fetch('/api/proposal-draft', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            proposalId: proposalIdRef.current,
            formData: currentForm,
            stepReached: currentStep,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.id && !proposalIdRef.current) {
            setProposalId(data.id);
            localStorage.setItem('marine-proposal-id', data.id);
          }
        }
      } catch {
        // Non-blocking — localStorage is still the primary client-side backup
      }
    },
    [],
  );

  /* ── 5-minute inactivity popup ────────────────────────────── */
  const startSessionCloseTimer = useCallback(() => {
    setPopupCountdown(300);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    countdownIntervalRef.current = setInterval(() => {
      setPopupCountdown((prev) => {
        if (prev <= 1) {
          if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    if (sessionCloseTimerRef.current) clearTimeout(sessionCloseTimerRef.current);
    sessionCloseTimerRef.current = setTimeout(() => {
      setShowInactivityPopup(false);
      setSessionExpired(true);
      popupActiveRef.current = false;
    }, 5 * 60 * 1000);
  }, []);

  const resetInactivityTimer = useCallback(() => {
    if (popupActiveRef.current) return; // don't reset while popup countdown is running
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = setTimeout(() => {
      setShowInactivityPopup(true);
      popupActiveRef.current = true;
      startSessionCloseTimer();
    }, 5 * 60 * 1000);
  }, [startSessionCloseTimer]);

  const handleContinue = useCallback(() => {
    setShowInactivityPopup(false);
    popupActiveRef.current = false;
    if (sessionCloseTimerRef.current) clearTimeout(sessionCloseTimerRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    setPopupCountdown(300);
    resetInactivityTimer();
  }, [resetInactivityTimer]);

  // Reset inactivity timer whenever form state or step changes (user is active)
  useEffect(() => {
    if (!form.email) return; // only track once user has entered contact info
    resetInactivityTimer();
    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [form, step, resetInactivityTimer]);

  // Clean up all inactivity timers on unmount
  useEffect(() => {
    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (sessionCloseTimerRef.current) clearTimeout(sessionCloseTimerRef.current);
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    };
  }, []);

  /* ── 20-minute abandon timer ──────────────────────────────── */
  // Resets on every form change. Fires auto-submit to Keane if user goes idle.
  const abandonTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Only start timer once we have contact info (step 1 filled)
    if (!form.email || !proposalId) return;

    if (abandonTimerRef.current) clearTimeout(abandonTimerRef.current);

    abandonTimerRef.current = setTimeout(async () => {
      // Auto-submit partial data to Keane — ensures lead attribution
      try {
        await fetch('/api/keane-submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            proposalId: proposalIdRef.current,
            formData: formRef.current,
            isPartial: true,
          }),
        });
      } catch {
        /* silent — data is already in Supabase */
      }
    }, 20 * 60 * 1000); // 20 minutes

    return () => {
      if (abandonTimerRef.current) clearTimeout(abandonTimerRef.current);
    };
  }, [form, proposalId]);

  /* ── Navigation ── */
  const nextStep = () => {
    saveDraft(step, form); // save to Supabase as user progresses
    setStep((s) => Math.min(s + 1, 7));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Final submit ── */
  const handleSubmit = async () => {
    if (!form.declarationAccepted) {
      setSubmitError('Please accept the declaration to proceed.');
      return;
    }
    setSubmitting(true);
    setSubmitError('');

    // Clear abandon timer — user completed the form
    if (abandonTimerRef.current) clearTimeout(abandonTimerRef.current);

    try {
      // 1. Save final state to Supabase
      await saveDraft(7, form);

      // 2. Submit to Keane API (single call, full data)
      let keaneReference = '';
      const keaneRes = await fetch('/api/keane-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ proposalId, formData: form, isPartial: false }),
      });
      if (keaneRes.ok) {
        const keaneData = await keaneRes.json();
        keaneReference = keaneData.reference || '';
      }
      // Even if Keane fails, we continue — data is safely in Supabase

      // 3. Email backup via existing Cloudflare Worker route
      try {
        await fetch('/api/proposal/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            ownerName: `${form.firstName} ${form.lastName}`.trim() || form.ownerName,
          }),
        });
      } catch {
        /* non-blocking */
      }

      // 4. Clear localStorage and redirect to thank-you
      localStorage.removeItem('marine-proposal-draft');
      localStorage.removeItem('marine-proposal-id');
      router.push(`/thank-you/?ref=${encodeURIComponent(keaneReference)}`);
    } catch {
      setSubmitError('Submission failed — please try again or email hello@cover4you.co.nz');
      setSubmitting(false);
    }
  };

  /* ── Sums Insured row ── */
  const siRow = (label: string, curField: keyof FormState, amtField: keyof FormState) => (
    <div className="flex gap-2 items-start" key={label}>
      <div className="w-28">
        <label className="block text-xs text-slate-400 mb-1.5">Currency</label>
        <select
          value={form[curField] as string}
          onChange={(e) => set(curField, e.target.value)}
          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          {CURRENCIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-xs text-slate-400 mb-1.5">{label}</label>
        <input
          type="number"
          min="0"
          step="1000"
          value={form[amtField] as string}
          onChange={(e) => set(amtField, e.target.value)}
          placeholder="Amount"
          className={inputCls}
        />
      </div>
    </div>
  );

  /* ── Steps ───────────────────────────────────────────────── */

  const step1 = (
    <div className="space-y-4">
      <Card title="Personal Information">
        {/* Title + First name + Last name */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Select
            label="Title"
            id="title"
            value={form.title}
            onChange={(v) => set('title', v)}
            options={['Mr', 'Mrs', 'Ms', 'Dr', 'Other']}
            required
          />
          <Field
            label="First Name"
            id="firstName"
            value={form.firstName}
            onChange={(v) => set('firstName', v)}
            required
            placeholder="First name"
          />
          <Field
            label="Last Name"
            id="lastName"
            value={form.lastName}
            onChange={(v) => set('lastName', v)}
            required
            placeholder="Last name"
          />
        </div>
        <Grid2>
          <DateSelect
            label="Date of Birth"
            id="dob"
            value={form.dob}
            onChange={(v) => set('dob', v)}
            required
            minYear={1920}
          />
          <Field
            label="Nationality"
            id="nationality"
            value={form.nationality}
            onChange={(v) => set('nationality', v)}
            required
            placeholder={`e.g. ${DEFAULT_COUNTRY}`}
          />
        </Grid2>
        <Field
          label="Residential Address"
          id="address"
          value={form.address}
          onChange={(v) => set('address', v)}
          required
          placeholder="Street address"
        />
        <Grid2>
          <Field
            label="City / Town"
            id="city"
            value={form.city}
            onChange={(v) => set('city', v)}
            required
          />
          <Field
            label="State / County (if applicable)"
            id="stateCounty"
            value={form.stateCounty}
            onChange={(v) => set('stateCounty', v)}
          />
        </Grid2>
        <Grid2>
          <Field
            label="Postcode / Zip"
            id="zipPostcode"
            value={form.zipPostcode}
            onChange={(v) => set('zipPostcode', v)}
          />
          <Field
            label="Country"
            id="country"
            value={form.country}
            onChange={(v) => set('country', v)}
            required
            placeholder={DEFAULT_COUNTRY}
          />
        </Grid2>
      </Card>
      <Card title="Contact Details">
        <Grid2>
          <Field
            label="Email Address"
            id="email"
            type="email"
            value={form.email}
            onChange={(v) => set('email', v)}
            required
            placeholder="your@email.com"
          />
          <Field
            label="Phone Number"
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(v) => set('phone', v)}
            required
            placeholder="+64 21 000 0000"
          />
        </Grid2>
        <Field
          label="Occupation"
          id="occupation"
          value={form.occupation}
          onChange={(v) => set('occupation', v)}
        />
      </Card>
      <Card title="Boating Background">
        <TextArea
          label="Boating Qualifications & Licences"
          id="boatingQualifications"
          value={form.boatingQualifications}
          onChange={(v) => set('boatingQualifications', v)}
          rows={3}
          placeholder="e.g. Day Skipper, NZQA Level 3, Commercial Licence..."
        />
        <Field
          label="Years of Boating Experience"
          id="boatingExperience"
          type="number"
          value={form.boatingExperience}
          onChange={(v) => set('boatingExperience', v)}
          placeholder="e.g. 10"
        />
        <TextArea
          label="Previous Vessels Owned or Operated"
          id="previousVessels"
          value={form.previousVessels}
          onChange={(v) => set('previousVessels', v)}
          rows={3}
          placeholder="List vessel name, type, length and years operated..."
        />
      </Card>
    </div>
  );

  const step2 = (
    <div className="space-y-4">
      <Card>
        <div className="flex items-start gap-3">
          <Toggle
            checked={form.hasAdditional}
            onChange={() => set('hasAdditional', !form.hasAdditional)}
          />
          <div>
            <p className="text-white font-medium">Include an additional insured person</p>
            <p className="text-slate-400 text-sm mt-0.5">
              Tick if another person (e.g. co-owner, partner) should also be named on the policy.
            </p>
          </div>
        </div>
      </Card>
      {form.hasAdditional ? (
        <>
          <Card title="Additional Insured — Personal Details">
            <Grid2>
              <Field
                label="Full Name"
                id="addl_name"
                value={form.addl_name}
                onChange={(v) => set('addl_name', v)}
                required
              />
              <DateSelect
                label="Date of Birth"
                id="addl_dob"
                value={form.addl_dob}
                onChange={(v) => set('addl_dob', v)}
                minYear={1920}
              />
            </Grid2>
            <Field
              label="Residential Address"
              id="addl_address"
              value={form.addl_address}
              onChange={(v) => set('addl_address', v)}
            />
            <Grid2>
              <Field
                label="City / Town"
                id="addl_city"
                value={form.addl_city}
                onChange={(v) => set('addl_city', v)}
              />
              <Field
                label="State / County"
                id="addl_stateCounty"
                value={form.addl_stateCounty}
                onChange={(v) => set('addl_stateCounty', v)}
              />
            </Grid2>
            <Field
              label="Postcode / Zip"
              id="addl_zipPostcode"
              value={form.addl_zipPostcode}
              onChange={(v) => set('addl_zipPostcode', v)}
            />
          </Card>
          <Card title="Additional Insured — Boating Experience">
            <Field
              label="Years of Boating Experience"
              id="addl_experience"
              type="number"
              value={form.addl_experience}
              onChange={(v) => set('addl_experience', v)}
            />
            <TextArea
              label="Boating Qualifications & Licences"
              id="addl_qualifications"
              value={form.addl_qualifications}
              onChange={(v) => set('addl_qualifications', v)}
              rows={3}
            />
          </Card>
        </>
      ) : (
        <div className="text-center py-8 text-slate-500 text-sm">
          No additional insured — proceed to the next step.
        </div>
      )}
    </div>
  );

  const step3 = (
    <div className="space-y-4">
      <Card title="Vessel Identity">
        <Grid2>
          <Field
            label="Vessel Name"
            id="vesselName"
            value={form.vesselName}
            onChange={(v) => set('vesselName', v)}
            required
          />
          <Field
            label="Hull / Serial Number"
            id="hullNumber"
            value={form.hullNumber}
            onChange={(v) => set('hullNumber', v)}
          />
        </Grid2>
        <Grid2>
          <Field
            label="Country of Flag / Registration"
            id="countryFlag"
            value={form.countryFlag}
            onChange={(v) => set('countryFlag', v)}
            placeholder={DEFAULT_COUNTRY}
            hint="Country where the vessel is registered"
          />
          <Field
            label="State Flag (USA only)"
            id="stateFlagUSA"
            value={form.stateFlagUSA}
            onChange={(v) => set('stateFlagUSA', v)}
          />
        </Grid2>
        <Field
          label="Registration State (USA only)"
          id="registrationStateUSA"
          value={form.registrationStateUSA}
          onChange={(v) => set('registrationStateUSA', v)}
        />
      </Card>
      <Card title="Vessel Specifications">
        <Grid2>
          <Field
            label="Year Built"
            id="yearBuilt"
            type="number"
            value={form.yearBuilt}
            onChange={(v) => set('yearBuilt', v)}
            required
            placeholder="e.g. 2005"
          />
          <Field
            label="Overall Length (metres)"
            id="length"
            value={form.length}
            onChange={(v) => set('length', v)}
            required
            placeholder="e.g. 12.5"
          />
        </Grid2>
        <Grid2>
          <Field
            label="Manufacturer / Builder"
            id="manufacturer"
            value={form.manufacturer}
            onChange={(v) => set('manufacturer', v)}
            required
          />
          <Field
            label="Model / Name"
            id="model"
            value={form.model}
            onChange={(v) => set('model', v)}
          />
        </Grid2>
        <Select
          label="Vessel Type"
          id="vesselType"
          value={form.vesselType}
          onChange={(v) => set('vesselType', v)}
          required
          options={[
            'Sail Monohull',
            'Sail Catamaran',
            'Motor Cruiser',
            'Motor Catamaran',
            'Sport Boat',
            'Runabout',
            'Jet Ski / PWC',
            'House Boat',
            'Commercial Vessel',
            'Other',
          ]}
        />
        <YesNo
          label="Is this vessel a conversion?"
          id="isConversion"
          value={form.isConversion}
          onChange={(v) => set('isConversion', v)}
        />
        {form.isConversion === 'Yes' && (
          <TextArea
            label="Conversion details"
            id="isConversionDetails"
            value={form.isConversionDetails}
            onChange={(v) => set('isConversionDetails', v)}
            rows={3}
            placeholder="Describe the conversion work, year completed, materials used..."
            required
          />
        )}
      </Card>
      <Card title="Construction Material">
        <p className={labelCls}>Select all that apply</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            'Fibreglass (GRP)',
            'Aluminium',
            'Steel',
            'Timber (Traditional)',
            'Timber (Cold Moulded)',
            'Ferro-Cement',
            'Carbon Fibre',
            'Kevlar',
            'Other',
          ].map((m) => (
            <CheckBox
              key={m}
              label={m}
              checked={form.constructionMaterials.includes(m)}
              onChange={() => toggleArr('constructionMaterials', m)}
            />
          ))}
        </div>
        {form.constructionMaterials.includes('Other') && (
          <Field
            label="Other Construction Material"
            id="constructionOther"
            value={form.constructionOther}
            onChange={(v) => set('constructionOther', v)}
            placeholder="Please specify"
          />
        )}
      </Card>
      <Card title="Purchase & Survey">
        <Grid2>
          <DateSelect
            label="Date Purchased"
            id="datePurchased"
            value={form.datePurchased}
            onChange={(v) => set('datePurchased', v)}
            minYear={1940}
          />
          <Field
            label="Price Paid"
            id="pricePaid"
            value={form.pricePaid}
            onChange={(v) => set('pricePaid', v)}
            placeholder="e.g. 150000"
          />
        </Grid2>
        <Grid2>
          <DateSelect
            label="Date of Last Survey"
            id="lastSurveyDate"
            value={form.lastSurveyDate}
            onChange={(v) => set('lastSurveyDate', v)}
            minYear={2000}
          />
          <Field
            label="Name of Surveyor"
            id="surveyorName"
            value={form.surveyorName}
            onChange={(v) => set('surveyorName', v)}
          />
        </Grid2>
      </Card>
    </div>
  );

  const step4 = (
    <div className="space-y-4">
      <Card title="Main Engine(s)">
        <Grid2>
          <Field
            label="Engine Manufacturer"
            id="engine_manufacturer"
            value={form.engine_manufacturer}
            onChange={(v) => set('engine_manufacturer', v)}
          />
          <Field
            label="Engine Model"
            id="engine_model"
            value={form.engine_model}
            onChange={(v) => set('engine_model', v)}
          />
        </Grid2>
        <Grid2>
          <Field
            label="Year Built"
            id="engine_yearBuilt"
            type="number"
            value={form.engine_yearBuilt}
            onChange={(v) => set('engine_yearBuilt', v)}
          />
          <Field
            label="Horsepower (HP)"
            id="engine_hp"
            value={form.engine_hp}
            onChange={(v) => set('engine_hp', v)}
          />
        </Grid2>
        <Grid2>
          <Select
            label="Fuel Type"
            id="engine_fuel"
            value={form.engine_fuel}
            onChange={(v) => set('engine_fuel', v)}
            options={['Diesel', 'Petrol', 'Electric', 'Hybrid', 'LPG']}
          />
          <Field
            label="Serial Number"
            id="engine_serial"
            value={form.engine_serial}
            onChange={(v) => set('engine_serial', v)}
          />
        </Grid2>
        <Grid2>
          <Field
            label="Number of Engines"
            id="engine_count"
            type="number"
            value={form.engine_count}
            onChange={(v) => set('engine_count', v)}
          />
          <Field
            label="Maximum Speed (knots)"
            id="engine_maxSpeed"
            value={form.engine_maxSpeed}
            onChange={(v) => set('engine_maxSpeed', v)}
          />
        </Grid2>
      </Card>

      <Card>
        <div className="flex items-start gap-3">
          <Toggle
            checked={form.hasTender}
            onChange={() => set('hasTender', !form.hasTender)}
          />
          <p className="text-white font-medium">Vessel has a tender / dinghy to include</p>
        </div>
      </Card>

      {form.hasTender && (
        <>
          <Card title="Tender / Dinghy">
            <Grid2>
              <Field
                label="Hull / Serial Number"
                id="tender_serial"
                value={form.tender_serial}
                onChange={(v) => set('tender_serial', v)}
              />
              <YesNo
                label="Displays parent vessel name on hull?"
                id="tender_displaysName"
                value={form.tender_displaysName}
                onChange={(v) => set('tender_displaysName', v)}
              />
            </Grid2>
            <Grid2>
              <Field
                label="Manufacturer"
                id="tender_manufacturer"
                value={form.tender_manufacturer}
                onChange={(v) => set('tender_manufacturer', v)}
              />
              <Field
                label="Model"
                id="tender_model"
                value={form.tender_model}
                onChange={(v) => set('tender_model', v)}
              />
            </Grid2>
            <Grid2>
              <Field
                label="Length (metres)"
                id="tender_length"
                value={form.tender_length}
                onChange={(v) => set('tender_length', v)}
              />
              <Field
                label="Year Built"
                id="tender_yearBuilt"
                type="number"
                value={form.tender_yearBuilt}
                onChange={(v) => set('tender_yearBuilt', v)}
              />
            </Grid2>
            <Grid2>
              <DateSelect
                label="Purchase Date"
                id="tender_purchaseDate"
                value={form.tender_purchaseDate}
                onChange={(v) => set('tender_purchaseDate', v)}
                minYear={1940}
              />
              <Field
                label="Purchase Price"
                id="tender_purchasePrice"
                value={form.tender_purchasePrice}
                onChange={(v) => set('tender_purchasePrice', v)}
              />
            </Grid2>
          </Card>
          <Card title="Tender Outboard Motor">
            <Grid2>
              <Field
                label="Manufacturer"
                id="tenderMotor_manufacturer"
                value={form.tenderMotor_manufacturer}
                onChange={(v) => set('tenderMotor_manufacturer', v)}
              />
              <Field
                label="Model"
                id="tenderMotor_model"
                value={form.tenderMotor_model}
                onChange={(v) => set('tenderMotor_model', v)}
              />
            </Grid2>
            <Grid2>
              <Field
                label="Year Built"
                id="tenderMotor_yearBuilt"
                type="number"
                value={form.tenderMotor_yearBuilt}
                onChange={(v) => set('tenderMotor_yearBuilt', v)}
              />
              <Field
                label="Horsepower (HP)"
                id="tenderMotor_hp"
                value={form.tenderMotor_hp}
                onChange={(v) => set('tenderMotor_hp', v)}
              />
            </Grid2>
            <Grid2>
              <Select
                label="Fuel Type"
                id="tenderMotor_fuel"
                value={form.tenderMotor_fuel}
                onChange={(v) => set('tenderMotor_fuel', v)}
                options={['Petrol', 'Electric', 'Diesel']}
              />
              <Field
                label="Serial Number"
                id="tenderMotor_serial"
                value={form.tenderMotor_serial}
                onChange={(v) => set('tenderMotor_serial', v)}
              />
            </Grid2>
            <YesNo
              label="Locked when not in use?"
              id="tenderMotor_locked"
              value={form.tenderMotor_locked}
              onChange={(v) => set('tenderMotor_locked', v)}
            />
          </Card>
        </>
      )}

      <Card>
        <div className="flex items-start gap-3">
          <Toggle
            checked={form.hasTrailer}
            onChange={() => set('hasTrailer', !form.hasTrailer)}
          />
          <p className="text-white font-medium">Vessel has a trailer to include</p>
        </div>
      </Card>

      {form.hasTrailer && (
        <Card title="Trailer">
          <Grid2>
            <Field
              label="Make / Model"
              id="trailer_makeModel"
              value={form.trailer_makeModel}
              onChange={(v) => set('trailer_makeModel', v)}
            />
            <Field
              label="Age (Years)"
              id="trailer_age"
              type="number"
              value={form.trailer_age}
              onChange={(v) => set('trailer_age', v)}
            />
          </Grid2>
          <Grid2>
            <Field
              label="Value"
              id="trailer_value"
              value={form.trailer_value}
              onChange={(v) => set('trailer_value', v)}
              placeholder="e.g. 8000"
            />
            <Field
              label="Serial Number"
              id="trailer_serial"
              value={form.trailer_serial}
              onChange={(v) => set('trailer_serial', v)}
            />
          </Grid2>
          <Grid2>
            <YesNo
              label="Wheel clamp fitted?"
              id="trailer_wheelClamp"
              value={form.trailer_wheelClamp}
              onChange={(v) => set('trailer_wheelClamp', v)}
            />
            <YesNo
              label="Locked in building when not in use?"
              id="trailer_lockedBuilding"
              value={form.trailer_lockedBuilding}
              onChange={(v) => set('trailer_lockedBuilding', v)}
            />
          </Grid2>
        </Card>
      )}
    </div>
  );

  const safetyItems = [
    'Fire Extinguisher(s)',
    'Smoke Detector(s)',
    'Radar',
    'GPS / Chart Plotter',
    'Depth Finder / Sounder',
    'Auto Pilot',
    'Engine Alarm System',
    'VHF Radio',
    'Theft / Intruder Alarm',
    'Tracking Device (GPS)',
    'Surveillance System',
    'Locked / Fenced Enclosure',
    'Secured Building / Shed',
    'Yacht Controller (remote cut-off)',
    'CO Detector',
  ];

  const step5 = (
    <div className="space-y-4">
      <Card title="Safety & Security Equipment On Board">
        <p className="text-slate-400 text-sm">Select all safety equipment present on the vessel</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {safetyItems.map((item) => (
            <CheckBox
              key={item}
              label={item}
              checked={form.safetyEquipment.includes(item)}
              onChange={() => toggleArr('safetyEquipment', item)}
            />
          ))}
        </div>
        <Field
          label="Other Safety Equipment (describe)"
          id="safetyOther"
          value={form.safetyOther}
          onChange={(v) => set('safetyOther', v)}
        />
        <Grid2>
          <Field
            label="Number of Handheld Fire Extinguishers"
            id="handheldExtCount"
            type="number"
            value={form.handheldExtCount}
            onChange={(v) => set('handheldExtCount', v)}
          />
          <div>
            <p className={labelCls}>Automatic Extinguisher Locations</p>
            <div className="space-y-2">
              {['Engine Room', 'Tank Space', 'Galley', 'Other'].map((loc) => (
                <CheckBox
                  key={loc}
                  label={loc}
                  checked={form.autoExtLocations.includes(loc)}
                  onChange={() => toggleArr('autoExtLocations', loc)}
                />
              ))}
            </div>
          </div>
        </Grid2>
      </Card>
      <Card title="Gas System">
        <YesNo
          label="Is LPG / gas used on board?"
          id="lpgUsed"
          value={form.lpgUsed}
          onChange={(v) => set('lpgUsed', v)}
        />
        {form.lpgUsed === 'Yes' && (
          <Grid2>
            <YesNo
              label="Gas cylinder stored in cockpit locker?"
              id="lpg_cockpitLocker"
              value={form.lpg_cockpitLocker}
              onChange={(v) => set('lpg_cockpitLocker', v)}
            />
            <YesNo
              label="Approved flexible delivery tubing installed?"
              id="lpg_approvedTubing"
              value={form.lpg_approvedTubing}
              onChange={(v) => set('lpg_approvedTubing', v)}
            />
          </Grid2>
        )}
      </Card>
      <Card title="Cruising Itinerary">
        <TextArea
          label="Describe your intended cruising area / itinerary"
          id="cruisingItinerary"
          value={form.cruisingItinerary}
          onChange={(v) => set('cruisingItinerary', v)}
          rows={4}
          placeholder="e.g. Coastal NZ — Waitemata Harbour, Hauraki Gulf, Bay of Islands. Occasional Cook Strait crossing..."
        />
      </Card>
      <Card title="Mooring & Storage">
        <Grid2>
          <Field
            label="Mooring Location Name / Marina"
            id="mooringName"
            value={form.mooringName}
            onChange={(v) => set('mooringName', v)}
            required
          />
          <Select
            label="Mooring Type"
            id="mooringType"
            value={form.mooringType}
            onChange={(v) => set('mooringType', v)}
            required
            options={[
              'Swing Mooring',
              'Pen / Marina Berth',
              'Hardstand / Boatyard',
              'At Home (trailer)',
              'Anchor',
              'Other',
            ]}
          />
        </Grid2>
        <Grid2>
          <Field
            label="Mooring Location Country"
            id="mooringCountry"
            value={form.mooringCountry}
            onChange={(v) => set('mooringCountry', v)}
            placeholder={DEFAULT_COUNTRY}
          />
          <Field
            label="Mooring Location Postcode"
            id="mooringPostcode"
            value={form.mooringPostcode}
            onChange={(v) => set('mooringPostcode', v)}
            placeholder="e.g. 1010"
          />
        </Grid2>
        <Field
          label="Laid-Up Location (if different)"
          id="laidUpLocation"
          value={form.laidUpLocation}
          onChange={(v) => set('laidUpLocation', v)}
        />
        <Grid2>
          <Field
            label="Laid Up From (month)"
            id="laidUpFrom"
            value={form.laidUpFrom}
            onChange={(v) => set('laidUpFrom', v)}
            placeholder="e.g. June"
          />
          <Field
            label="Laid Up To (month)"
            id="laidUpTo"
            value={form.laidUpTo}
            onChange={(v) => set('laidUpTo', v)}
            placeholder="e.g. September"
          />
        </Grid2>
        <YesNo
          label="Is the vessel stored ashore on a daily basis?"
          id="storedAshoreDaily"
          value={form.storedAshoreDaily}
          onChange={(v) => set('storedAshoreDaily', v)}
        />
        {form.storedAshoreDaily === 'Yes' && (
          <Field
            label="How is it stored / secured ashore?"
            id="storedAshoreHow"
            value={form.storedAshoreHow}
            onChange={(v) => set('storedAshoreHow', v)}
          />
        )}
      </Card>
    </div>
  );

  const step6 = (
    <div className="space-y-4">
      <Card title="Sums Insured">
        <p className="text-slate-400 text-sm">
          Enter the insured value for each item. Leave blank if not applicable.
        </p>
        <div className="space-y-3">
          {siRow('Hull (vessel)', 'si_hull_currency', 'si_hull_amount')}
          {siRow('Tender / Dinghy', 'si_tender_currency', 'si_tender_amount')}
          {siRow('Trailer', 'si_trailer_currency', 'si_trailer_amount')}
          {siRow('Personal Effects', 'si_effects_currency', 'si_effects_amount')}
          {siRow('Navigation Equipment', 'si_nav_currency', 'si_nav_amount')}
          {siRow('Third Party Liability', 'si_tpl_currency', 'si_tpl_amount')}
          {siRow('Uninsured Boater', 'si_uninsured_currency', 'si_uninsured_amount')}
          {siRow('Medical Payments', 'si_medical_currency', 'si_medical_amount')}
          {siRow('Captain / Crew', 'si_crew_currency', 'si_crew_amount')}
          {siRow('Passenger Liability', 'si_passenger_currency', 'si_passenger_amount')}
        </div>
      </Card>

      <Card title="Coverage Required">
        <Grid2>
          <YesNo
            label="Fully Comprehensive"
            id="cover_fullyComp"
            value={form.cover_fullyComp}
            onChange={(v) => set('cover_fullyComp', v)}
          />
          <YesNo
            label="Third Party Liability Only"
            id="cover_tplOnly"
            value={form.cover_tplOnly}
            onChange={(v) => set('cover_tplOnly', v)}
          />
        </Grid2>
        <Grid2>
          <YesNo
            label="Private Pleasure Use Only"
            id="cover_privatePleasure"
            value={form.cover_privatePleasure}
            onChange={(v) => set('cover_privatePleasure', v)}
          />
          <YesNo
            label="Commercial Use"
            id="cover_commercial"
            value={form.cover_commercial}
            onChange={(v) => set('cover_commercial', v)}
          />
        </Grid2>
        {form.cover_commercial === 'Yes' && (
          <div className="pl-4 border-l-2 border-teal-700 space-y-3">
            <Grid2>
              <YesNo
                label="Bareboat Charter"
                id="cover_barebat"
                value={form.cover_barebat}
                onChange={(v) => set('cover_barebat', v)}
              />
              <YesNo
                label="Crewed Charter"
                id="cover_captainCharter"
                value={form.cover_captainCharter}
                onChange={(v) => set('cover_captainCharter', v)}
              />
            </Grid2>
            <Grid2>
              <YesNo
                label="Fishing Charter"
                id="cover_fishingCharter"
                value={form.cover_fishingCharter}
                onChange={(v) => set('cover_fishingCharter', v)}
              />
              <YesNo
                label="Other Commercial"
                id="cover_commercialOther"
                value={form.cover_commercialOther}
                onChange={(v) => set('cover_commercialOther', v)}
              />
            </Grid2>
            {form.cover_commercialOther === 'Yes' && (
              <Field
                label="Describe Other Commercial Use"
                id="cover_commercialOtherDetails"
                value={form.cover_commercialOtherDetails}
                onChange={(v) => set('cover_commercialOtherDetails', v)}
              />
            )}
            <YesNo
              label="Commercial Passenger Liability Required"
              id="cover_commercialPassenger"
              value={form.cover_commercialPassenger}
              onChange={(v) => set('cover_commercialPassenger', v)}
            />
            {form.cover_commercialPassenger === 'Yes' && (
              <Field
                label="Maximum Number of Passengers"
                id="cover_maxPassengers"
                type="number"
                value={form.cover_maxPassengers}
                onChange={(v) => set('cover_maxPassengers', v)}
              />
            )}
          </div>
        )}
        <Grid2>
          <YesNo
            label="In-Water Activities (snorkelling, diving)"
            id="cover_inWater"
            value={form.cover_inWater}
            onChange={(v) => set('cover_inWater', v)}
          />
          <YesNo
            label="Employed Captain / Crew"
            id="cover_employedCrew"
            value={form.cover_employedCrew}
            onChange={(v) => set('cover_employedCrew', v)}
          />
        </Grid2>
        {form.cover_employedCrew === 'Yes' && (
          <Field
            label="Maximum Number of Employed Crew"
            id="cover_maxCrew"
            type="number"
            value={form.cover_maxCrew}
            onChange={(v) => set('cover_maxCrew', v)}
          />
        )}
        <Grid2>
          <YesNo
            label="Water Skiing / Towing Activities"
            id="cover_waterSkiing"
            value={form.cover_waterSkiing}
            onChange={(v) => set('cover_waterSkiing', v)}
          />
          <YesNo
            label="Medical Expenses Cover"
            id="cover_medicalExp"
            value={form.cover_medicalExp}
            onChange={(v) => set('cover_medicalExp', v)}
          />
        </Grid2>
        <YesNo
          label="Salvage & Wreck Removal Cover"
          id="cover_salvage"
          value={form.cover_salvage}
          onChange={(v) => set('cover_salvage', v)}
        />
      </Card>

      <Card title="Special Endorsements">
        <p className="text-slate-400 text-sm mb-3">
          Select any additional endorsements you wish to request (subject to underwriter approval).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <YesNo label="Agreed Value" id="end_agreedValue" value={form.end_agreedValue} onChange={(v) => set('end_agreedValue', v)} />
          <YesNo label="Breach of Warranty" id="end_breachWarranty" value={form.end_breachWarranty} onChange={(v) => set('end_breachWarranty', v)} />
          <YesNo label="Builder's Risk" id="end_buildersRisk" value={form.end_buildersRisk} onChange={(v) => set('end_buildersRisk', v)} />
          <YesNo label="Commercial Fishing" id="end_commercialFishing" value={form.end_commercialFishing} onChange={(v) => set('end_commercialFishing', v)} />
          <YesNo label="Diving Parties" id="end_diving" value={form.end_diving} onChange={(v) => set('end_diving', v)} />
          <YesNo label="Houseboat" id="end_houseboat" value={form.end_houseboat} onChange={(v) => set('end_houseboat', v)} />
          <YesNo label="New for Old Replacement" id="end_newForOld" value={form.end_newForOld} onChange={(v) => set('end_newForOld', v)} />
          <YesNo label="Night Navigation" id="end_nightNav" value={form.end_nightNav} onChange={(v) => set('end_nightNav', v)} />
          <YesNo label="Non-Emergency Towing" id="end_towing" value={form.end_towing} onChange={(v) => set('end_towing', v)} />
          <YesNo label="Racing Risks" id="end_racing" value={form.end_racing} onChange={(v) => set('end_racing', v)} />
          <YesNo label="Single-Handed Sailing" id="end_singleHanded" value={form.end_singleHanded} onChange={(v) => set('end_singleHanded', v)} />
          <YesNo label="Storm Cover Force 7–12" id="end_storm7to12" value={form.end_storm7to12} onChange={(v) => set('end_storm7to12', v)} />
          <YesNo label="Storm Cover Force 12+" id="end_storm12plus" value={form.end_storm12plus} onChange={(v) => set('end_storm12plus', v)} />
          <YesNo label="Taken Ashore" id="end_takenAshore" value={form.end_takenAshore} onChange={(v) => set('end_takenAshore', v)} />
          <YesNo label="Unattended" id="end_unattended" value={form.end_unattended} onChange={(v) => set('end_unattended', v)} />
          <YesNo label="Uninsured Boater" id="end_uninsuredBoater" value={form.end_uninsuredBoater} onChange={(v) => set('end_uninsuredBoater', v)} />
        </div>
        {form.end_breachWarranty === 'Yes' && (
          <Field
            label="Loan / Mortgage Amount (Breach of Warranty)"
            id="end_loanAmount"
            value={form.end_loanAmount}
            onChange={(v) => set('end_loanAmount', v)}
            placeholder="e.g. 120000"
          />
        )}
        {form.end_racing === 'Yes' && (
          <Grid2>
            <TextArea
              label="Races / Events to be Covered"
              id="end_racingNames"
              value={form.end_racingNames}
              onChange={(v) => set('end_racingNames', v)}
              rows={2}
              placeholder="List race names and dates..."
            />
            <Field
              label="Mast & Boom Replacement Value"
              id="end_mastValue"
              value={form.end_mastValue}
              onChange={(v) => set('end_mastValue', v)}
            />
          </Grid2>
        )}
        {form.end_storm12plus === 'Yes' && (
          <YesNo
            label="Storm preparation plan in place?"
            id="end_stormPrep"
            value={form.end_stormPrep}
            onChange={(v) => set('end_stormPrep', v)}
          />
        )}
      </Card>
    </div>
  );

  const step7 = (
    <div className="space-y-4">
      {/* Land ahoy finish-line banner */}
      <div className="bg-teal-900/30 border border-teal-700/50 rounded-xl p-5 flex items-center gap-4">
        <span className="text-4xl flex-shrink-0">🏝️</span>
        <div>
          <p className="text-teal-300 font-bold text-base mb-0.5">Land ahoy — you&apos;re nearly done!</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            You&apos;ve navigated 6 steps like a seasoned blue-water sailor. Just the declaration to go
            and your proposal is on its way to our underwriters. Fair winds from here.
          </p>
        </div>
      </div>

      <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4">
        <p className="text-amber-300 text-sm font-medium mb-1">Declaration Questions</p>
        <p className="text-slate-400 text-sm">
          Please answer each question honestly. Where Yes, provide full details.
        </p>
      </div>
      <Card>
        <div className="space-y-5">
          <div className="space-y-2">
            <YesNo
              label="1. Has any insurer ever declined, cancelled or imposed special terms on any insurance for you or this vessel?"
              id="decl_declined"
              value={form.decl_declined}
              onChange={(v) => set('decl_declined', v)}
            />
            {form.decl_declined === 'Yes' && (
              <TextArea
                label="Please provide details"
                id="decl_declinedDetails"
                value={form.decl_declinedDetails}
                onChange={(v) => set('decl_declinedDetails', v)}
                rows={3}
                required
              />
            )}
          </div>
          <div className="space-y-2">
            <YesNo
              label="2. Have you or any operator of this vessel had any accidents, losses or claims in the last 5 years?"
              id="decl_accidents"
              value={form.decl_accidents}
              onChange={(v) => set('decl_accidents', v)}
            />
            {form.decl_accidents === 'Yes' && (
              <TextArea
                label="Please provide full details (date, description, amount claimed)"
                id="decl_accidentDetails"
                value={form.decl_accidentDetails}
                onChange={(v) => set('decl_accidentDetails', v)}
                rows={3}
                required
              />
            )}
          </div>
          <div className="space-y-2">
            <YesNo
              label="3. Have you or any operator been convicted of any offence involving dishonesty or fraud?"
              id="decl_dishonesty"
              value={form.decl_dishonesty}
              onChange={(v) => set('decl_dishonesty', v)}
            />
            {form.decl_dishonesty === 'Yes' && (
              <TextArea
                label="Please provide details"
                id="decl_dishonestyDetails"
                value={form.decl_dishonestyDetails}
                onChange={(v) => set('decl_dishonestyDetails', v)}
                rows={3}
                required
              />
            )}
          </div>
          <div className="space-y-2">
            <YesNo
              label="4. Is the vessel subject to any mortgage, finance agreement, or loan?"
              id="decl_mortgage"
              value={form.decl_mortgage}
              onChange={(v) => set('decl_mortgage', v)}
            />
            {form.decl_mortgage === 'Yes' && (
              <TextArea
                label="Please provide lender name, loan amount and reference"
                id="decl_mortgageDetails"
                value={form.decl_mortgageDetails}
                onChange={(v) => set('decl_mortgageDetails', v)}
                rows={2}
                required
              />
            )}
          </div>
          <div className="space-y-2">
            <YesNo
              label="5. Are you the sole owner of the vessel?"
              id="decl_soleOwner"
              value={form.decl_soleOwner}
              onChange={(v) => set('decl_soleOwner', v)}
            />
            {form.decl_soleOwner === 'No' && (
              <TextArea
                label="Please provide details of other owners"
                id="decl_otherOwners"
                value={form.decl_otherOwners}
                onChange={(v) => set('decl_otherOwners', v)}
                rows={2}
                required
              />
            )}
          </div>
          <div className="space-y-2">
            <YesNo
              label="6. Do you have any physical disability or medical condition that may affect your ability to operate this vessel?"
              id="decl_disabilities"
              value={form.decl_disabilities}
              onChange={(v) => set('decl_disabilities', v)}
            />
            {form.decl_disabilities === 'Yes' && (
              <TextArea
                label="Please provide details"
                id="decl_disabilityDetails"
                value={form.decl_disabilityDetails}
                onChange={(v) => set('decl_disabilityDetails', v)}
                rows={2}
                required
              />
            )}
          </div>
        </div>
      </Card>
      <Card title="Policy Start Date & Previous Cover">
        <Grid2>
          <DateSelect
            label="Preferred Cover Start Date"
            id="preferredStartDate"
            value={form.preferredStartDate}
            onChange={(v) => set('preferredStartDate', v)}
            required
            futureOnly
          />
          <Field
            label="Previous / Current Insurer"
            id="previousInsurer"
            value={form.previousInsurer}
            onChange={(v) => set('previousInsurer', v)}
            placeholder="e.g. Vero, NZI, AMI"
          />
        </Grid2>
        <Field
          label="No Claims Bonus (if applicable)"
          id="noClaimsBonus"
          value={form.noClaimsBonus}
          onChange={(v) => set('noClaimsBonus', v)}
          placeholder="e.g. 3 years, 60%, None"
        />
      </Card>
      <Card title="Declaration & Consent">
        <div className="bg-slate-900 rounded-lg p-4 text-sm text-slate-400 leading-relaxed space-y-2">
          <p>
            I/We declare that to the best of my/our knowledge and belief all the statements and
            particulars given in this proposal are true and complete. I/We agree that this proposal
            and declaration shall form the basis of the contract of insurance and agree to notify the
            insurer of any material change prior to commencement of the policy.
          </p>
          <p>
            I/We understand that this proposal is subject to acceptance by the underwriter and does
            not constitute a binding contract of insurance until confirmed in writing.
          </p>
          <p>
            I/We consent to the collection and use of personal information provided herein for the
            purpose of assessing and administering this insurance. Our privacy policy is available at{' '}
            <span className="text-teal-400">yachtinsurance.co.nz/privacy/</span>.
          </p>
        </div>
        <label className="flex items-start gap-3 cursor-pointer group mt-2">
          <Toggle
            checked={form.declarationAccepted}
            onChange={() => set('declarationAccepted', !form.declarationAccepted)}
          />
          <span className="text-sm text-slate-300 leading-5">
            I confirm that the information provided is accurate and complete to the best of my
            knowledge, and I agree to the declaration above.{' '}
            <span className="text-teal-400 font-medium">*</span>
          </span>
        </label>
      </Card>
      {/* Honeypot */}
      <input
        type="text"
        name="company_url"
        value={form.company_url}
        onChange={(e) => set('company_url', e.target.value)}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      {submitError && (
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 text-red-300 text-sm">
          {submitError}
        </div>
      )}
    </div>
  );

  /* ── Render ──────────────────────────────────────────────── */
  const progressPct = (step / 7) * 100;
  const stepContent = [step1, step2, step3, step4, step5, step6, step7];

  const STEP_QUIPS = [
    "The quote process is longer than a sea shanty — but we promise it'll be worth it. ⚓",
    "Got a first mate? Add them here. They'll thank you when the boom swings. 🪝",
    "Your boat deserves better than 'big, floaty, goes fast' — the more detail, the sharper the deal. 🛥️",
    "Engines, tenders, trailers… our underwriters have seen worse. Considerably worse. ⚙️",
    "Nearly there. Even pirates had to fill out paperwork eventually. 🏴‍☠️",
    "The fun bit — deciding what everything's worth. Treat your hull value like a Tinder profile: honest, but put your best foot forward. 💰",
    "Land ahoy! 🏝️ You're nearly done — just the declaration left. Shorter than The Rime of the Ancient Mariner and considerably less tragic.",
  ];

  // Session timed out — show recovery screen (draft safely saved in Supabase)
  if (sessionExpired) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-6 text-3xl">
            ⏱
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Session Timed Out</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Your session closed due to inactivity — but your progress has been saved. Click below to
            pick up exactly where you left off.
          </p>
          <button
            type="button"
            onClick={() => {
              setSessionExpired(false);
              setShowInactivityPopup(false);
              popupActiveRef.current = false;
              setPopupCountdown(300);
              resetInactivityTimer();
            }}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold text-sm transition"
          >
            Continue My Proposal →
          </button>
          <p className="mt-4 text-slate-600 text-xs">
            Alternatively, email us at hello@cover4you.co.nz and we can complete the proposal for you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 pb-16 overflow-x-hidden">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative py-5 sm:py-8 px-4 text-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(2,8,23,0.45) 0%, rgba(2,8,23,0.70) 60%, rgba(2,8,23,0.95) 100%), url(/home-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700/60 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>⚓</span> Specialist Marine Insurance Quote
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Marine Insurance Proposal Form
          </h1>
        </div>
      </section>

      {/* ── Intro strip ───────────────────────────────────────── */}
      <div className="bg-slate-900/60 border-b border-slate-800/60 py-3 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-400 text-sm leading-relaxed">
            Fill in as much detail as you can — our underwriters love the specifics, and the more
            they know about your boat and how you use her, the more competitive your quote will be.
          </p>
        </div>
      </div>

      {/* Sticky progress */}
      <div className="bg-slate-900/70 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-700/50 px-4 py-2.5 sm:py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>
              Step {step} of 7 —{' '}
              <span className="text-teal-400 font-medium">{STEPS[step - 1]}</span>
            </span>
            <span>{Math.round(progressPct)}% complete</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5">
            <div
              className="bg-teal-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="hidden sm:flex gap-1 mt-3">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`flex-1 text-center text-xs py-1 rounded font-medium transition ${
                  i + 1 === step
                    ? 'bg-teal-600 text-white'
                    : i + 1 < step
                      ? 'bg-teal-900/60 text-teal-400'
                      : 'bg-slate-800 text-slate-600'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step content */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <div className="grid xl:grid-cols-[120px_1fr_120px] gap-5 items-start">

          {/* Left badge column — xl+ only */}
          <div className="hidden xl:flex flex-col gap-3">
            <div className="sticky top-24 space-y-3">
              {[
                { icon: <Lock className="w-5 h-5" />, label: '256-bit SSL', sub: 'Encrypted' },
                { icon: <Anchor className="w-5 h-5" />, label: 'Marine specialists', sub: 'Expert underwriters' },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl py-5 px-3 text-center">
                  <span className="text-teal-400">{icon}</span>
                  <p className="text-white text-xs font-semibold leading-snug">{label}</p>
                  <p className="text-slate-500 text-xs leading-tight">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">
              <span className="text-teal-500 mr-2">{step}.</span>
              {STEPS[step - 1]}
            </h2>
            <p className="text-slate-500 text-xs italic mb-5 leading-relaxed">
              {STEP_QUIPS[step - 1]}
            </p>

            {stepContent[step - 1]}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-800">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition border ${
                  step === 1
                    ? 'border-slate-800 text-slate-700 cursor-not-allowed'
                    : 'border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white'
                }`}
              >
                ← Back
              </button>

              {step < 7 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-5 sm:px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-semibold text-sm transition"
                >
                  <span className="sm:hidden">Next →</span>
                  <span className="hidden sm:inline">Next: {STEPS[step]} →</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting || !form.declarationAccepted}
                  className={`px-8 py-3 rounded-xl font-bold text-sm transition ${
                    submitting || !form.declarationAccepted
                      ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-900/40'
                  }`}
                >
                  {submitting ? 'Submitting…' : 'Submit Proposal'}
                </button>
              )}
            </div>
            <p className="text-center text-slate-600 text-xs mt-4">
              Your answers are saved automatically as you type.
            </p>
          </div>

          {/* Right badge column — xl+ only */}
          <div className="hidden xl:flex flex-col gap-3">
            <div className="sticky top-24 space-y-3">
              {[
                { icon: <Clock className="w-5 h-5" />, label: 'Quote in 2 days', sub: '2 working days' },
                { icon: <Save className="w-5 h-5" />, label: 'Auto-saved', sub: 'Never lose progress' },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl py-5 px-3 text-center">
                  <span className="text-teal-400">{icon}</span>
                  <p className="text-white text-xs font-semibold leading-snug">{label}</p>
                  <p className="text-slate-500 text-xs leading-tight">{sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Inactivity popup ──────────────────────────────────── */}
      {showInactivityPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm px-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto mb-5 text-2xl">
              ⏰
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Still there?</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              You&apos;ve been inactive for a few minutes. Your progress is saved — but this
              session will close in:
            </p>
            <div className="text-4xl font-mono font-bold text-amber-400 mb-6 tabular-nums">
              {Math.floor(popupCountdown / 60)}:{String(popupCountdown % 60).padStart(2, '0')}
            </div>
            <button
              type="button"
              onClick={handleContinue}
              className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-bold text-sm transition mb-3"
            >
              Continue My Proposal →
            </button>
            <p className="text-slate-600 text-xs">
              Your details are safe and will be here when you return.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
