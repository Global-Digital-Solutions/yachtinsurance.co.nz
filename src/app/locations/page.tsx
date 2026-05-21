import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ChevronRight, Anchor } from 'lucide-react';
import { locations } from '@/data/locations';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Yacht Insurance by Location | YachtInsurance.co.nz',
  description: 'Find yacht and boat insurance guides for your region. Local marine insurance advice for Auckland, Wellington, Bay of Islands, Marlborough, Queenstown and more.',
  alternates: { canonical: 'https://yachtinsurance.co.nz/locations/' },
  openGraph: {
    title: 'Yacht Insurance by Location',
    description: 'Local yacht and marine insurance guides for every major NZ boating region.',
    url: 'https://yachtinsurance.co.nz/locations/',
    type: 'website',
    siteName: 'Yacht Insurance NZ',
  },
};

export default function LocationsIndex() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-sky-400" />
            <span className="text-sky-400 font-medium text-sm uppercase tracking-wide">Marine Insurance by Region</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Yacht Insurance Across New Zealand
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Local guides to yacht and boat insurance for every major New Zealand boating region — from Auckland's Hauraki Gulf to Queenstown's alpine lakes and Marlborough's sheltered sounds.
          </p>
        </div>
      </section>

      {/* Locations grid */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all bg-white"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={loc.heroImage}
                    alt={`Yacht insurance ${loc.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-300" />
                    <span className="text-white text-xs font-medium">{loc.region}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2 flex items-center justify-between">
                    {loc.name}
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{loc.metaDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local knowledge matters */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Anchor className="w-8 h-8 text-sky-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Local Knowledge Matters</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Insurance needs vary significantly depending on where you sail. A vessel moored in Auckland's Waitemata Harbour faces different risks to one cruising Marlborough Sounds or sailing on Lake Wakatipu. Our region-specific guides help you understand the particular conditions, hazards, and insurance requirements for your home waters — so you get the right cover, not just any cover.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors"
          >
            Get a Quote <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
