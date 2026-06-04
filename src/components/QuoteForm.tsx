'use client';

import { useState } from 'react';
import { CheckCircle2, Shield, Lock, Loader2 } from 'lucide-react';

interface QuoteFormProps {
  mode?: 'compact' | 'full';
}

const inputClass =
  'w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400 bg-white';
const labelClass = 'block text-sm font-medium text-slate-700 mb-1.5';

export default function QuoteForm({ mode = 'full' }: QuoteFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      vessel_type: fd.get('vessel_type'),
      vessel_value: fd.get('vessel_value'),
      vessel_make_model: fd.get('vessel_make_model'),
      mooring_location: fd.get('mooring_location'),
      company_url: fd.get('company_url') || '',
    };

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      window.location.href = '/thank-you/';
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us at hello@cover4you.co.nz.');
    }
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Honeypot — must stay empty */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>Full Name</label>
        <input
          type="text" id="name" name="name" required
          className={inputClass}
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input
          type="email" id="email" name="email" required
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number</label>
        <input
          type="tel" id="phone" name="phone" required
          className={inputClass}
          placeholder="+64 9 XXX XXXX"
        />
      </div>

      {/* Vessel Type */}
      <div>
        <label htmlFor="vesselType" className={labelClass}>Vessel Type</label>
        <select id="vesselType" name="vessel_type" required className={inputClass}>
          <option value="">Select a vessel type...</option>
          <option value="Yacht">Yacht</option>
          <option value="Jet Ski">Jet Ski</option>
          <option value="Dinghy">Dinghy</option>
          <option value="Tender">Tender</option>
          <option value="Racing Boat">Racing Boat</option>
          <option value="Coastal Cruising">Coastal Cruising</option>
          <option value="Blue Water Cruiser">Blue Water Cruiser</option>
        </select>
      </div>

      {/* Estimated Vessel Value */}
      <div>
        <label htmlFor="vesselValue" className={labelClass}>Estimated Vessel Value</label>
        <select id="vesselValue" name="vessel_value" required className={inputClass}>
          <option value="">Select a value range...</option>
          <option value="Under $25,000">Under $25,000</option>
          <option value="$25,000 - $75,000">$25,000 – $75,000</option>
          <option value="$75,000 - $150,000">$75,000 – $150,000</option>
          <option value="$150,000 - $500,000">$150,000 – $500,000</option>
          <option value="Over $500,000">Over $500,000</option>
        </select>
      </div>

      {/* Make & Model */}
      <div>
        <label htmlFor="vesselMakeModel" className={labelClass}>Make &amp; Model</label>
        <input
          type="text" id="vesselMakeModel" name="vessel_make_model" required
          className={inputClass}
          placeholder="e.g. Beneteau Oceanis 46 or Yamaha WaveRunner"
        />
      </div>

      {/* Mooring / Currently Located */}
      <div>
        <label htmlFor="mooringLocation" className={labelClass}>Currently Located</label>
        <input
          type="text" id="mooringLocation" name="mooring_location" required
          className={inputClass}
          placeholder="e.g. Westhaven Marina, Auckland"
        />
      </div>

      {/* Additional Details (full mode only) */}
      {mode === 'full' && (
        <div>
          <label htmlFor="details" className={labelClass}>
            Additional Details <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="details" name="additional_details" rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Tell us more about your vessel, usage, or coverage needs..."
          />
        </div>
      )}

      {/* Error message */}
      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-4 py-3.5 bg-gradient-to-r from-sky-600 to-teal-500 text-white rounded-xl font-semibold text-lg hover:from-sky-700 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending…
          </>
        ) : (
          'Get My Quote →'
        )}
      </button>

      <p className="text-center text-xs text-slate-400 mt-2">No credit card required</p>
    </form>
  );

  const trustBadges = (
    <div className="mt-6 pt-6 border-t border-slate-200">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
          <span className="text-xs text-slate-600 font-medium">Fair Practice Standard</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
          <span className="text-xs text-slate-600 font-medium">No Broker Fees</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock size={16} className="text-emerald-500 flex-shrink-0" />
          <span className="text-xs text-slate-600 font-medium">256-bit SSL Secure</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-emerald-500 flex-shrink-0" />
          <span className="text-xs text-slate-600 font-medium">24hr Response</span>
        </div>
      </div>
    </div>
  );

  if (mode === 'compact') {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg ring-2 ring-sky-500 sticky top-20">
        <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-5 py-4">
          <div className="flex items-center gap-2 mb-1">
            <Shield size={18} className="text-white" />
            <h3 className="text-lg font-bold text-white">Get Your Quote</h3>
          </div>
          <p className="text-sky-100 text-sm">No obligation — takes under 2 minutes</p>
        </div>
        <div className="px-5 py-5">
          {formContent}
          {trustBadges}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-xl ring-2 ring-sky-500">
      <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-6 py-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/20 rounded-lg">
            <Shield size={22} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">No-Obligation Quote</h2>
        </div>
        <p className="text-sky-100 mt-1">Get a personalized quote in under 2 minutes</p>
      </div>
      <div className="px-6 py-8">
        {formContent}
        {trustBadges}
      </div>
    </div>
  );
}
