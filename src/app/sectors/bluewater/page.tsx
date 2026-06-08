import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe,
  Compass,
  Shield,
  AlertCircle,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Blue Water Cruiser Insurance NZ | Offshore Passages',
  description:
    'Blue water and offshore cruiser insurance for New Zealand-based vessels. Coverage for transoceanic passages, Pacific routes, and extended ocean voyages.',
  keywords: [
    'blue water insurance',
    'offshore cruiser insurance',
    'transoceanic insurance',
    'pacific cruising insurance',
    'extended navigation insurance',
    'yacht insurance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.yachtinsurance.co.nz/sectors/bluewater',
    title: 'Blue Water Cruiser Insurance New Zealand',
    description:
      'Comprehensive insurance for offshore passages, transoceanic voyages, and extended blue water cruising from New Zealand.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1696028354827-0d36454dcaa8?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Offshore sailing vessel',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/sectors/bluewater',
  },
};

const routeExamples = [
  {
    route: 'Pacific Island Routes',
    description:
      'Passages to Samoa, Tonga, Fiji, and other Pacific destinations common for NZ cruisers.',
  },
  {
    route: 'Transoceanic Passages',
    description:
      'Extended offshore voyages to Australia, Indonesia, or South Pacific destinations.',
  },
  {
    route: 'Southern Ocean Cruising',
    description:
      'High-latitude cruising to Subantarctic islands and remote Southern Ocean destinations.',
  },
];

const coverageItems = [
  {
    title: 'Extended Navigation Limits',
    description:
      'Coverage valid for offshore passages and transoceanic voyages, not just coastal waters.',
    icon: Globe,
  },
  {
    title: 'Ocean-Specific Perils',
    description:
      'Protection against heavy weather, high seas, and deep-water specific maritime risks.',
    icon: AlertCircle,
  },
  {
    title: 'Crew Safety & Medical',
    description:
      'Medical evacuation coverage and crew protection for extended voyages.',
    icon: Users,
  },
  {
    title: 'Comprehensive Equipment',
    description:
      'Coverage for safety equipment, navigation systems, and offshore-specific gear.',
    icon: Compass,
  },
];

const requirements = [
  {
    category: 'Vessel Requirements',
    items: [
      'Seaworthy certification or surveyed condition documentation',
      'Extended offshore safety equipment (liferafts, EPIRB, SSB radio)',
      'Proper hull construction for ocean-going vessels',
      'Documented engine and systems maintenance history',
    ],
  },
  {
    category: 'Crew Requirements',
    items: [
      'Qualified skipper with offshore sailing experience',
      'Crew with relevant maritime qualifications',
      'First aid and safety training documentation',
      'Experience appropriate to intended passage',
    ],
  },
];

export default function BlueWaterInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Blue Water Cruiser Insurance New Zealand',
    description:
      'Comprehensive insurance for offshore passages and transoceanic voyages from New Zealand.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://www.yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Blue Water Cruiser Insurance',
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
        name: 'Blue Water',
        item: 'https://www.yachtinsurance.co.nz/sectors/bluewater',
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
          backgroundImage: 'url(/vessels/catamaran.jpg)',
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
                <span className="text-white font-medium">Blue Water</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Blue Water Cruiser Insurance
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Coverage for offshore passages and extended ocean voyages from New Zealand
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <p>
                  Many New Zealand-based cruisers undertake ambitious offshore voyages: passages to the Pacific Islands, extended transoceanic cruises, and remote region exploration. These blue water adventures demand specialized insurance that extends far beyond coastal coverage limits.
                </p>
                <p>
                  Blue water cruiser insurance provides the comprehensive protection you need for extended passages, allowing you to cruise the world's oceans with confidence knowing your vessel and crew are fully insured.
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
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Why Blue Water Sailors Choose Us</h2>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Worldwide offshore passage coverage included</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Emergency assistance coordination at sea</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Coverage for international port stops and moorings</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Specialist salvage and towage cover options</span>
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

      {/* Route Examples */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Popular Blue Water Routes from NZ
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common offshore passages for New Zealand-based vessels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {routeExamples.map((route, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {route.route}
                </h3>
                <p className="text-slate-600">{route.description}</p>
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
              Blue Water Coverage Details
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive protection for offshore passages
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
            Extended Navigation Limits
          </h2>

          <div className="bg-white rounded-xl p-8 border border-sky-200 shadow-md">
            <p className="text-slate-700 mb-6">
              Blue water insurance allows your vessel to cruise far beyond the navigation
              limits of coastal coverage:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Typical Navigation Limits
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Worldwide Cruising</p>
                      <p className="text-sm text-slate-600">
                        Extended offshore passages unlimited
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Pacific Routes</p>
                      <p className="text-sm text-slate-600">
                        Passages to Pacific Islands and beyond
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Remote Cruising</p>
                      <p className="text-sm text-slate-600">
                        Access to remote and isolated destinations
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Coverage Conditions
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Current Weather
                      </p>
                      <p className="text-sm text-slate-600">
                        Follow weather routing recommendations
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Safety Equipment
                      </p>
                      <p className="text-sm text-slate-600">
                        Complete offshore safety gear required
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Crew Qualifications
                      </p>
                      <p className="text-sm text-slate-600">
                        Qualified crew with offshore experience
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Blue Water Insurance Requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-6 border border-sky-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 rounded-lg p-6 border border-amber-200">
            <p className="text-slate-700">
              <strong>Important:</strong> Blue water insurance providers conduct detailed
              vessel and crew assessments. Be prepared to provide extensive documentation
              of your vessel's condition, maintenance records, and crew qualifications.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Considerations */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Offshore Safety Essentials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-sky-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Safety Equipment
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  USCG-approved liferaft
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  Emergency Position Indicating Radio Beacon (EPIRB)
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  Personal Locator Beacons (PLBs)
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  SSB radio or satellite communication
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  First aid and medical supplies
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Weather & Navigation
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  Weather routing service subscription
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  Updated nautical charts & pilots
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  GPS and backup navigation systems
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  Modern engine and systems maintenance
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  Weather monitoring capability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Crew Requirements */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Crew Qualifications for Blue Water Cruising
          </h2>

          <div className="bg-sky-50 rounded-lg p-8 border border-sky-200">
            <p className="text-slate-700 mb-6">
              Insurance providers require documented crew qualifications for blue water
              passages:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Skipper</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 5+ years offshore sailing experience</li>
                  <li>• Captain's or Master's qualification</li>
                  <li>• Advanced navigation skills</li>
                  <li>• First aid & medical training</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Crew</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 2+ years offshore experience</li>
                  <li>• Yachtmaster qualifications ideal</li>
                  <li>• Safety training certifications</li>
                  <li>• Watch-standing competence</li>
                </ul>
              </div>
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
                <Link href="/sectors/coastal-cruising" className="text-sky-600 hover:text-sky-700">Coastal Cruising</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Coverage for exploring New Zealand's coastal waters.</p>
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
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Start Your Blue Water Adventure
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get a specialized quote for blue water cruiser insurance from New Zealand
          </p>
          <Link
            href="/contact"
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
