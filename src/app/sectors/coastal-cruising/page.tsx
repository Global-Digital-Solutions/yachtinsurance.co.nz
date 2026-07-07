import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  Waves,
  Shield,
  Anchor,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Coastal Cruising Insurance NZ | Bay Cruiser Coverage',
  description:
    'Specialist coastal and bay cruising insurance for New Zealand. Coverage for Hauraki Gulf, Bay of Islands, and regional waters. Get instant quotes.',
  keywords: [
    'coastal cruising insurance',
    'bay cruising insurance nz',
    'hauraki gulf insurance',
    'bay of islands insurance',
    'regional cruising insurance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.yachtinsurance.co.nz/sectors/coastal-cruising',
    title: 'Coastal Cruising Insurance',
    description:
      'Insurance for coastal and bay cruising in New Zealand regional waters.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1768667779694-c8a1ec81528e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Coastal cruising in New Zealand',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/sectors/coastal-cruising',
  },
};

const popularyRoutes = [
  {
    name: 'Bay of Islands',
    location: 'Far North',
    description: 'Sheltered waters perfect for leisurely cruising and island exploration',
  },
  {
    name: 'Hauraki Gulf',
    location: 'Auckland',
    description: 'New Zealand\'s busiest cruising ground with numerous islands and anchorages',
  },
  {
    name: 'Marlborough Sounds',
    location: 'South Island',
    description: 'Dramatic waterways ideal for scenic cruising and adventure sailing',
  },
  {
    name: 'Great Barrier Island',
    location: 'Auckland Region',
    description: 'Remote island cruising offering pristine anchorages and adventure',
  },
];

const coverageItems = [
  {
    title: 'Hull & Machinery',
    description: 'Protection against accidental damage while cruising regional waters.',
    icon: Waves,
  },
  {
    title: 'Third-Party Liability',
    description:
      'Coverage for legal liability in busy harbors and anchorages.',
    icon: Shield,
  },
  {
    title: 'Navigation Limits',
    description:
      'Insurance valid for defined coastal cruising areas in specified zones.',
    icon: Compass,
  },
  {
    title: 'Salvage & Towing',
    description:
      'Professional recovery services in case of emergency or breakdown.',
    icon: Anchor,
  },
];

export default function CoastalCruisingInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Coastal Cruising Insurance',
    description:
      'Insurance for coastal and bay cruising in New Zealand regional waters including Hauraki Gulf and Bay of Islands.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://www.yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Coastal Cruising Insurance',
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
        name: 'Coastal Cruising',
        item: 'https://www.yachtinsurance.co.nz/sectors/coastal-cruising',
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
          backgroundImage: 'url(/vessels/cabin-cruiser.jpg)',
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
                <span className="text-white font-medium">Coastal Cruising</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Coastal Cruising Insurance
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Perfect for regional bay and coastal water cruising
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <p>
                  New Zealand's coastal waters offer some of the world's most beautiful cruising grounds. From the Bay of Islands to the Marlborough Sounds, coastal cruising is a favorite pastime for Kiwi boat owners. Coastal cruising insurance provides protection tailored to regional waters, typically at more affordable rates than blue water coverage.
                </p>
                <p>
                  Our coastal cruising insurance specialists connect you with insurers who understand the specific characteristics and risks of regional NZ waters, providing coverage that matches your cruising patterns.
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
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Why Coastal Cruisers Choose Us</h2>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Coverage tailored to NZ regional waters and harbours</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Protection for Bay of Islands to Fiordland passages</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Haul-out and storm damage cover included</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Flexible policies for seasonal cruising patterns</span>
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

      {/* Popular Cruising Routes */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Popular NZ Cruising Routes
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Iconic coastal cruising destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularyRoutes.map((route, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm"
              >
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {route.name}
                    </h3>
                    <p className="text-sm font-medium text-sky-600 mb-2">
                      {route.location}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {route.description}
                    </p>
                  </div>
                </div>
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
              Coastal Cruising Coverage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Protection for your regional cruising adventures
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

      {/* Navigation Limits */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Understanding Navigation Limits
          </h2>

          <div className="bg-white rounded-xl p-8 border border-sky-200 shadow-md">
            <p className="text-slate-700 mb-6">
              Coastal cruising insurance defines specific cruising areas where your
              vessel is covered. These limits are typically measured in nautical miles
              from designated ports or coastlines.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Typical Cruising Zones
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Within 50-100 nautical miles of home port</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Defined regional cruising areas (Gulf, Sounds, etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Specific anchorages and harbors</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Exceeding Limits
                </h3>
                <p className="text-slate-600 mb-3">
                  If you plan occasional offshore passages or extended cruising beyond
                  your defined area:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Notify your insurer before departing</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Purchase extended coverage for longer trips</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Consider blue water coverage if cruising offshore regularly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cruising Area Details */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Coastal Cruising Areas
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-sky-600 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                North Island Coastal
              </h3>
              <p className="text-slate-600 mb-3">
                Coverage for cruising in the Bay of Islands, Hauraki Gulf, Bay of Plenty,
                and Tasman coastal waters. These routes are ideal for year-round cruising
                with generally protected anchorages and established cruising communities.
              </p>
              <p className="text-sm text-slate-500">
                Includes: Auckland, Whangarei, Tauranga regions
              </p>
            </div>

            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                South Island Coastal
              </h3>
              <p className="text-slate-600 mb-3">
                Coverage for the Marlborough Sounds, Fiordland, and Southland coastal
                cruising. These regions offer dramatic scenery and can involve longer
                passages between anchorages.
              </p>
              <p className="text-sm text-slate-500">
                Includes: Nelson, Southland, West Coast regions
              </p>
            </div>

            <div className="border-l-4 border-cyan-600 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Strait Cruising
              </h3>
              <p className="text-slate-600 mb-3">
                Special coverage for Cook Strait and Tasman Strait passages. These
                routes connect North and South Island cruising grounds with reliable
                weather windows.
              </p>
              <p className="text-sm text-slate-500">
                Seasonal cruising March-October recommended
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Affordable Coastal Cruising Insurance
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm text-center">
              <p className="text-sm font-semibold text-sky-900 mb-2">
                Small Cruisers
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-1">$400-700</p>
              <p className="text-xs text-sky-700">per year</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm text-center">
              <p className="text-sm font-semibold text-sky-900 mb-2">
                Mid-Size Yachts
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-1">$700-1,200</p>
              <p className="text-xs text-sky-700">per year</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm text-center">
              <p className="text-sm font-semibold text-sky-900 mb-2">
                Larger Yachts
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-1">$1,200+</p>
              <p className="text-xs text-sky-700">per year</p>
            </div>
          </div>

          <p className="text-center text-slate-600 mt-8 text-sm">
            Based on vessel value and cruising area. Exact premiums depend on many factors.
          </p>
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
                <Link href="/sectors/bluewater" className="text-sky-600 hover:text-sky-700">Blue Water Cruising</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Extended coverage for offshore cruising expeditions.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/racing-boat" className="text-sky-600 hover:text-sky-700">Racing Yacht Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Specialist coverage for competitive sailing and regattas.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/coverage" className="text-sky-600 hover:text-sky-700">Coverage Guide</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Understand all coverage types and choose the right protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Explore Coastal Waters with Confidence
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get a quote for coastal cruising insurance
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
