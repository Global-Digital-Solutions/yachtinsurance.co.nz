import type { Metadata } from 'next';
import Link from 'next/link';
import { Trophy, Shield, Zap, Users, Globe, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Racing Boat Insurance | Yacht Racing Coverage',
  description:
    'Specialist racing yacht and sailing boat insurance in New Zealand. Coverage for competitive sailing, regattas, and racing events. America\'s Cup heritage.',
  keywords: [
    'racing boat insurance nz',
    'yacht racing insurance',
    'competitive sailing insurance',
    'regatta insurance',
    'sailing yacht insurance',
    'americas cup',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.yachtinsurance.co.nz/sectors/racing-boat',
    title: 'Racing Boat Insurance',
    description:
      'Specialist racing yacht insurance for competitive sailing and regattas in New Zealand.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1759809278965-cce79bb60611?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Racing yachts competing',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/sectors/racing-boat',
  },
};

const coverageItems = [
  {
    title: 'Race-Specific Damage',
    description:
      'Coverage for incident damage that occurs during sanctioned racing events and regattas.',
    icon: Trophy,
  },
  {
    title: 'Crew Liability',
    description:
      'Protection against claims for crew injuries and third-party liability during racing.',
    icon: Users,
  },
  {
    title: 'Rigging & Equipment',
    description:
      'Specialized coverage for racing sails, carbon masts, rigging systems, and performance gear.',
    icon: Zap,
  },
  {
    title: 'Protest & Legal',
    description:
      'Coverage for legal costs and representation in race protests and sailing disputes.',
    icon: Globe,
  },
];

const racingCoverageTypes = [
  {
    type: 'Day Racing',
    description:
      'Coverage for local club racing series and regular competitive events.',
  },
  {
    type: 'Regional Championships',
    description:
      'Extended coverage for regional racing series and qualifying events.',
  },
  {
    type: 'National Events',
    description:
      'Full coverage for national championship regattas and elite competitions.',
  },
  {
    type: 'Offshore Racing',
    description:
      'Specialized coverage for offshore and long-distance racing events.',
  },
];

export default function RacingBoatInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Racing Boat Insurance',
    description:
      'Specialist racing yacht and competitive sailing boat insurance for New Zealand racers.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://www.yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Racing Boat Insurance',
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
        name: 'Racing Boat',
        item: 'https://www.yachtinsurance.co.nz/sectors/racing-boat',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/" className="hover:text-white transition-colors">Vessel Types</Link>
                <span>/</span>
                <span className="text-white font-medium">Racing Boat</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Racing Boat Insurance
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Specialist coverage for competitive sailing and racing yachts
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <p>
                  New Zealand has a rich tradition of competitive sailing, from club racing series to national championships and the legendary America's Cup. Racing demands specialized insurance that protects your investment while accommodating the unique risks of competitive sport.
                </p>
                <p>
                  Standard yacht insurance often excludes or limits racing coverage. Our specialist racing boat insurance is designed specifically for competitive sailors, with coverage tailored to racing activities and competitive events. <Link href="/compare" className="text-sky-300 hover:text-white underline underline-offset-2">Compare racing boat specialists</Link> today.
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
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Why Racers Choose Us</h2>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Racing-specific policies that don't exclude competition</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Crew liability and regatta coverage included</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Fast claims support for race-day incidents</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Specialist rigging and equipment cover options</span>
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

      {/* America's Cup Context */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-sky-200 shadow-md">
            <div className="flex gap-6 items-start">
              <Trophy className="w-12 h-12 text-sky-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  New Zealand's Racing Pedigree
                </h3>
                <p className="text-slate-700 mb-4">
                  New Zealand's racing sailors have achieved extraordinary success on
                  the international stage. With two America's Cup victories and
                  countless world championships, Kiwi racers are known for skill,
                  innovation, and competitive excellence.
                </p>
                <p className="text-slate-700">
                  From professional campaigns to dedicated club racers, New Zealand's
                  competitive sailing community demands insurance partners who
                  understand the sport's unique requirements and risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Race-Specific Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Race-Specific Coverage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Protection designed for competitive sailing activities
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

      {/* Types of Racing Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Racing Coverage Levels
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From club racing to national championships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {racingCoverageTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {type.type}
                </h3>
                <p className="text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Special Considerations for Racing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Rigging & Equipment
              </h3>
              <p className="text-slate-700 mb-4">
                Racing yachts feature expensive, specialized equipment. Your insurance
                should specifically cover:
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Carbon fiber masts and booms
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Racing sails and sail systems
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Advanced rigging and fittings
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Navigation and performance systems
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Racing Activity Documentation
              </h3>
              <p className="text-slate-700 mb-4">
                To get the best rates on racing boat insurance:
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Provide racing schedule and series information
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Document racing club memberships
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Share crew qualifications and experience
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Maintain safety equipment certifications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Protest & Legal Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Protest & Legal Coverage
          </h2>

          <div className="bg-white rounded-xl p-8 border border-sky-200 shadow-md">
            <p className="text-slate-700 mb-6">
              Racing disputes can result in expensive protest hearings and potential
              appeals. Our racing insurance includes coverage for:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-sky-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Legal Representation
                </h4>
                <p className="text-slate-600 text-sm">
                  Coverage for attorney fees in racing protests and legal disputes
                </p>
              </div>
              <div className="border-l-4 border-sky-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Expert Witnesses
                </h4>
                <p className="text-slate-600 text-sm">
                  Costs for technical experts in race protest hearings
                </p>
              </div>
              <div className="border-l-4 border-sky-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Appeals
                </h4>
                <p className="text-slate-600 text-sm">
                  Coverage for appeals of protest decisions
                </p>
              </div>
              <div className="border-l-4 border-sky-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Regulatory Compliance
                </h4>
                <p className="text-slate-600 text-sm">
                  Support for equipment rule compliance verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Racing Series */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Coverage for NZ Racing Series
          </h2>

          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We provide specialized insurance for major New Zealand racing competitions
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Summer & Winter Racing Series
              </h3>
              <p className="text-slate-600 text-sm">
                Coverage for club-level racing series throughout Auckland, Wellington,
                and Christchurch
              </p>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Offshore Yacht Racing
              </h3>
              <p className="text-slate-600 text-sm">
                Extended coverage for offshore racing events including the Round the
                North Island Race
              </p>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Classic & Vintage Classes
              </h3>
              <p className="text-slate-600 text-sm">
                Specialized coverage for classic yacht divisions and heritage racing
                classes
              </p>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Match Racing Events
              </h3>
              <p className="text-slate-600 text-sm">
                Coverage for head-to-head match racing competitions and fleet racing
              </p>
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
                <Link href="/sectors/jetski" className="text-sky-600 hover:text-sky-700">Jet Ski Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Fast-track coverage for personal watercraft.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/dinghy" className="text-sky-600 hover:text-sky-700">Dinghy Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Coverage for small boats and tender vessels.</p>
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
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Race with Confidence
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get specialist racing boat insurance for competitive sailing
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
