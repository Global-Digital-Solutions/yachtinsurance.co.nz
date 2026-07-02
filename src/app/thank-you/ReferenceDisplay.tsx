'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ReferenceInner() {
  const params = useSearchParams();
  const ref = params.get('ref');
  if (!ref) return null;

  return (
    <div className="bg-teal-900/30 border border-teal-700/60 rounded-2xl px-6 py-5 text-center mt-6">
      <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-2">
        Your Reference Number
      </p>
      <p className="text-white text-3xl font-bold tracking-widest font-mono">{ref}</p>
      <p className="text-slate-400 text-sm mt-2">
        Quote this reference in all correspondence with your adviser
      </p>
    </div>
  );
}

export default function ReferenceDisplay() {
  return (
    <Suspense fallback={null}>
      <ReferenceInner />
    </Suspense>
  );
}
