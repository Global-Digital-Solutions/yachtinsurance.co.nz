import type { Metadata } from 'next';
import Link from 'next/link';
import { Anchor, Shield, Waves, Zap, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Tender Insurance | Yacht Tender & RIB Coverage',
  description:
    'Specialist tender and RIB boat insurance for New Zealand yacht owners. Protect your auxiliary vessel with comprehensive coverage.',
  keywords: [
    'tender insurance nz',
    'rib boat insurance',
    'yacht tender insurance',
    'inflatable tender',
    'rescue tender insurance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.yachtinsurance.co.nz/sectors/tender',
    title: 'Tender Insurance',
    description:
      'Specialist insurance for yacht tenders, RIBs, and inflatable auxiliary vessels.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1769655991063-cc63efc4e2d0?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Tender boat alongside yacht',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/sectors/tender',
  },
};

const tenderTypes = [
  {
    type: 'RIBs (Rigid Inflatables)',
    description:
      'Popular auxiliary vessels for yacht access, with rigid hulls and inflatable tubes.',
  },
  {
    type: 'Inflatable Tenders',
    description:
      'Lightweight, packable dinghies perfect for cruising yachts with storage constraints.',
  },
  {
    type: 'Hard Dinghies',
    description:
      'Traditional wooden or plastic tenders used alongside larger yachts.',
  },
  {
    type: 'Rescue Tenders',
    description:
      'Specialized rescue and recovery vessels used for emergency response.',
  },
];

const coverageItems = [
  {
    title: 'Hull & Engine Protection',
    description:
      'Comprehensive damage coverage for your tender vessel and outboard engine.',
    icon: Anchor,
  },
  {
    title: 'Third-Party Liability',
    description:
      'Protection for claims when your tender causes injury or damage to others.',
    icon: Shield,
  },
  {
    title: 'Equipment & Outboards',
    description:
      'Coverage for engines, GPS, communication equipment, and other marine gear.',
    icon: Waves,
  },
  {
    title: 'Towing & Recovery',
    description:
      'Professional assistance if your tender becomes disabled or requires recovery.',
    icon: Zap,
  },
];

export default function TenderInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tender Insurance',
    description:
      'Specialist tender and RIB boat insurance for New Zealand yacht owners.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://www.yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Tender Insurance',
  };

  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Liam Ngata',
    jobTitle: 'Marine Insurance Specialist',
    worksFor: { '@type': 'Organization', name: 'YachtInsurance.co.nz', url: 'https://www.yachtinsurance.co.nz' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.yachtinsurance.co.nz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Vessel Types',
        item: 'https://www.yachtinsurance.co.nz/sectors',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Tender',
        item: 'https://www.yachtinsurance.co.nz/sectors/tender',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Full Above-Fold Hero */}
      <section
        className="relative lg:min-h-[100vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(/vessels/inflatable-rib.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 via-slate-900/40 to-slate-900/15" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/" className="hover:text-white transition-colors">Vessel Types</Link>
                <span>/</span>
                <span className="text-white font-medium">Tender</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Tender Insurance
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Protection for yacht tenders, RIBs, and auxiliary vessels
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <p>
                  Your tender is an essential part of your cruising setup, whether it's a sturdy RIB, an inflatable dinghy, or a traditional hard tender. Often left unattended at anchorages or marinas, tenders face unique risks—theft, damage from weather, and collision damage.
                </p>
                <p>
                  Tender insurance is often overlooked by yacht owners but is essential protection. We help you find affordable coverage that works with your yacht insurance or as a standalone policy.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-white font-medium">ICNZ Registered Advisors</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-white font-medium">Multiple Insurers Compared</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-white font-medium">Same-Day Quote Response</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-white font-medium">No Broker Fees or Markups</span>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-8">
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Why Tender Owners Choose Us</h2>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Standalone or combined with your yacht policy</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Coverage for RIBs, inflatables and rigid tenders</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Outboard motor and electronics protection</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Affordable premiums for auxiliary vessels</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Tender Types */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Types of Tenders We Cover
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From RIBs to traditional hard dinghies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tenderTypes.map((tender, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {tender.type}
                </h3>
                <p className="text-slate-600">{tender.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tender Coverage Options
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive protection for your auxiliary vessel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-sky-50 rounded-lg p-6 border border-sky-200"
                >
                  <Icon className="w-8 h-8 text-sky-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Linked Vessel Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Linked Vessel Coverage
          </h2>

          <div className="bg-white rounded-xl p-8 border border-sky-200 shadow-md">
            <p className="text-slate-700 mb-6">
              Most tender insurance is linked to your primary yacht insurance
              policy. This integration offers several advantages:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Single Deductible
                  </h4>
                  <p className="text-slate-600">
                    One deductible applies across yacht and tender claims
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Package Discounts
                  </h4>
                  <p className="text-slate-600">
                    Bundled coverage typically costs 20-30% less than separate policies
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Coordinated Claims
                  </h4>
                  <p className="text-slate-600">
                    Single insurer handles both yacht and tender claims for faster
                    resolution
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Easy Updates
                  </h4>
                  <p className="text-slate-600">
                    Simple process to adjust tender coverage as you upgrade or change
                    vessels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage & Storage */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Tender Usage & Storage
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                At-Anchor Storage
              </h3>
              <p className="text-slate-700 mb-4">
                Most tender insurance covers your vessel while moored at anchor or
                tied to your yacht. This is the primary use case for cruising sailors.
              </p>
              <p className="text-slate-600 text-sm">
                Insurers appreciate that at-anchor tender storage with proper
                security typically costs less to insure than marina mooring.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Marina Mooring
              </h3>
              <p className="text-slate-700 mb-4">
                Tender insurance also covers your vessel at marina moorings, though
                premiums may be slightly higher due to increased theft risk.
              </p>
              <p className="text-slate-600 text-sm">
                Inform your insurer if you typically moor your tender at a specific
                marina for best rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NZ Tender Insurance Specifics */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Tender Insurance for New Zealand Cruisers
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Essential coverage for your auxiliary vessel in NZ waters
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Popular NZ Cruising Grounds
              </h3>
              <p className="text-slate-700 mb-3">
                New Zealand's cruising destinations—the Bay of Islands, Hauraki Gulf, Marlborough Sounds, and Fiordland—each present unique tender insurance considerations. Cruisers in the Marlborough Sounds deal with strong tidal currents that increase collision risk, while Bay of Islands cruisers contend with exposed anchorages and stronger weather. Fiordland cruisers often operate tenders in remote areas with limited rescue services, which some insurers factor into premiums.
              </p>
              <p className="text-slate-600 text-sm">
                Be specific with your insurer about where you primarily cruise. If you spend most of the year in the Hauraki Gulf but occasionally venture to Fiordland, that distinction affects your coverage and premiums. Some insurers offer regional variations and may provide better rates for relatively protected cruising grounds.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Tender Theft in NZ Waters
              </h3>
              <p className="text-slate-700 mb-3">
                Tender theft is a significant problem in New Zealand, particularly in popular cruising areas and near populated centers. Inflatable tenders and RIBs left unattended at anchorages are vulnerable to opportunistic theft, especially high-end brands like Zodiac and Brig. Auckland, Tauranga, and Wellington anchorages report particularly high theft rates for unattended tenders.
              </p>
              <p className="text-slate-600 text-sm">
                Protect your premium by implementing proper security: keep your tender locked to your yacht with a quality marine-grade chain lock, use GPS tracking devices (now affordable and widely recommended), and consider installing visibility deterrents like bright reflective tape. Tenders with security systems installed may qualify for 10-15% premium reductions from some insurers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Seasonal Weather & Tender Damage
              </h3>
              <p className="text-slate-700 mb-3">
                New Zealand's summer season (November-March) is prime cruising time but also brings stronger wind and swell conditions later in the season. Winter anchoring requires tenders to withstand heavier chop and stronger gusts, which increases damage claims. RIBs are generally better suited to rough conditions than inflatable tenders, and insurers price accordingly—RIB premiums are typically 20-30% higher than softer inflatable tenders due to higher usage intensity.
              </p>
              <p className="text-slate-600 text-sm">
                If you cruise seasonally (only during summer), consider a seasonal tender insurance policy that covers November through March. This can reduce annual costs by 30-40% compared to year-round coverage, though ensure you maintain proper winterization of your tender and engine during off-season storage.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Common Tender Claims in NZ
              </h3>
              <p className="text-slate-700 mb-3">
                Insurance claims data from New Zealand marine insurers show that the most frequent tender losses involve: outboard engine damage or theft (nearly 30% of claims), punctures and damage to inflatable tenders (25%), collision damage at anchorages (20%), and complete vessel theft (15%). Engine theft is particularly common for high-value four-stroke outboards worth $4,000-8,000.
              </p>
              <p className="text-slate-600 text-sm">
                Protect against these specific risks: remove or secure your outboard engine when the tender is unattended; carry spare patches and repair kits for inflatable tenders; maintain situational awareness of other vessels at your anchorage; and consider removing your engine entirely if leaving the boat unattended for extended periods, or store it in a locked cabin.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Reducing Your Tender Insurance Premiums
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">1.</span>
                  <span className="text-slate-600"><strong>Bundle with yacht policy:</strong> Insuring your tender with your yacht provider typically saves 20-30% versus separate coverage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">2.</span>
                  <span className="text-slate-600"><strong>Install security systems:</strong> GPS tracking, engine locks, and chain security can reduce premiums 10-15%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">3.</span>
                  <span className="text-slate-600"><strong>Seasonal coverage:</strong> Insure only during cruising season (Nov-March) for potential 30-40% savings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">4.</span>
                  <span className="text-slate-600"><strong>Increase deductible:</strong> Moving from $500 to $1,500 deductible saves approximately 20-25% annually</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">5.</span>
                  <span className="text-slate-600"><strong>Maintain proper records:</strong> Document maintenance, engine servicing, and haul-outs to prove responsible ownership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sectors Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Insurance for Other Vessel Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/yacht" className="text-sky-600 hover:text-sky-700">Yacht Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Comprehensive coverage for cruising yachts and motor vessels.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/dinghy" className="text-sky-600 hover:text-sky-700">Dinghy Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Coverage for small boats and additional support vessels.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/racing-boat" className="text-sky-600 hover:text-sky-700">Racing Yacht Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Specialist coverage for competitive sailing and regattas.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/bluewater" className="text-sky-600 hover:text-sky-700">Blue Water Cruising</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Extended coverage for offshore cruising expeditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Insure Your Tender Today
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get a quote for tender insurance, standalone or linked to your yacht
            policy
          </p>
          <Link
            href="/marine-proposal"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-sky-50 transition-colors shadow-xl"
          >
            Get Your Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
