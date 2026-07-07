'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const inputClass =
  'w-full px-3 py-2.5 bg-slate-700/60 border border-white/10 rounded-lg text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all';

export default function HeroForm() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // Honeypot — real users never fill this
    if (fd.get('company_url') && String(fd.get('company_url')).trim() !== '') return;

    setLoading(true);

    // Build query params to pre-populate the full marine proposal form
    const params = new URLSearchParams({
      hf:    '1',
      name:  String(fd.get('name')              || ''),
      email: String(fd.get('email')             || ''),
      phone: String(fd.get('phone')             || ''),
      vmm:   String(fd.get('vessel_make_model') || ''),
      vt:    String(fd.get('vessel_type')       || ''),
      vv:    String(fd.get('vessel_value')      || ''),
      ml:    String(fd.get('mooring_location')  || ''),
    });

    window.location.href = `/marine-proposal?${params.toString()}`;
  }

  return (
    <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="px-6 py-5 border-b border-white/10">
        <h3 className="text-lg font-bold text-white">Get a Quote</h3>
        <p className="text-slate-400 text-sm mt-0.5">Fast response from specialist marine advisors</p>
      </div>

      {/* Form */}
      <div className="px-6 py-5">
        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Honeypot — must stay empty */}
          <input
            type="text"
            name="company_url"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
          />

          {/* Name + Email */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
              <input type="text" name="name" required placeholder="Full name" className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
              <input type="email" name="email" required placeholder="email@example.com" className={inputClass} />
            </div>
          </div>

          {/* Phone + Make/Model */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
              <input type="tel" name="phone" required placeholder="+64 9 XXX XXXX" className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Vessel Make &amp; Model *</label>
              <input type="text" name="vessel_make_model" required placeholder="e.g. Beneteau Oceanis 46" className={inputClass} />
            </div>
          </div>

          {/* Vessel Type + Value */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Vessel Type *</label>
              <select name="vessel_type" required className={inputClass}>
                <option value="">Select...</option>
                <option>Yacht</option>
                <option>Jet Ski</option>
                <option>Dinghy</option>
                <option>Tender</option>
                <option>Racing Boat</option>
                <option>Coastal Cruising</option>
                <option>Blue Water Cruiser</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Estimated Value *</label>
              <select name="vessel_value" required className={inputClass}>
                <option value="">Select range...</option>
                <option>Under $25,000</option>
                <option>$25,000 – $75,000</option>
                <option>$75,000 – $150,000</option>
                <option>$150,000 – $500,000</option>
                <option>Over $500,000</option>
              </select>
            </div>
          </div>

          {/* Mooring Location */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Current Vessel Location *</label>
            <input type="text" name="mooring_location" required placeholder="e.g. Westhaven Marina, Auckland" className={inputClass} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-1"
          >
            {loading ? (
              <><Loader2 size={16} className="animate-spin" /> Starting your quote…</>
            ) : (
              'Get a Quote →'
            )}
          </button>

          <p className="text-center text-xs text-slate-500 mt-1">No obligation · Responds within 24 hours</p>
        </form>
      </div>
    </div>
  );
}
