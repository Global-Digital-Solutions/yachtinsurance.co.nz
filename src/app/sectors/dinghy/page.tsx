import type { Metadata } from 'next';
import Link from 'next/link';
import { Sailboat, Shield, Trophy, Users, CheckCircle2, ArrowRight, Zap, Lock } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Dinghy Insurance | Sailing & Tender Coverage',
  description:
    'Affordable dinghy insurance in New Zealand for sailing dinghies, racing dinghies, and tenders. Quick quotes from specialist providers.',
  keywords: [
    'dinghy insurance nz',
    'sailing dinghy insurance',
    'inflatable dinghy insurance',
    'racing dinghy insurance',
    'tender insurance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/sectors/dinghy',
    title: 'Dinghy Insurance',
    description:
      'Affordable insurance for sailing dinghies, racing dinghies, and tender vessels.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1768667779694-c8a1ec81528e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Sailing dinghies on the water',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/sectors/dinghy',
  },
};

const dinghyTypes = [
  {
    type: 'Sailing Dinghies',
    description:
      'Single or double-handed racing dinghies and day sailers. Includes popular classes like Optimist, Laser, and 470.',
  },
  {
    type: 'Inflatable Dinghies',
    description:
      'Rigid inflatable boats and soft inflatables used for recreation and water sports.',
  },
  {
    type: 'Tenders',
    description:
      'Small auxiliary vessels used to access larger yachts or as standalone fishing boats.',
  },
  {
    type: 'Racing Dinghies',
    description:
      'High-performance racing vessels competing in club and national racing series.',
  },
];

const coveragePoints = [
  {
    title: 'Hull Damage',
    description: 'Protection against accidental damage and collision repair costs.',
  },
  {
    title: 'Third-Party Liability',
    description:
      'Covers injuries to others and damage to other property or vessels.',
  },
  {
    title: 'Theft Protection',
    description:
      'Coverage if your dinghy or equipment is stolen from moorings or storage.',
  },
  {
    title: 'Racing Coverage (Optional)',
    description:
      'Additional protection specifically for racing incidents and competition damage.',
  },
];

export default function DinghyInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dinghy Insurance',
    description:
      'Affordable dinghy and small boat insurance for sailing dinghies, racing dinghies, and inflatable tenders.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Dinghy Insurance',
  };

  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Liam Ngata',
    jobTitle: 'Marine Insurance Specialist',
    worksFor: { '@type': 'Organization', name: 'YachtInsurance.co.nz', url: 'https://yachtinsurance.co.nz' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yachtinsurance.co.nz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Vessel Types',
        item: 'https://yachtinsurance.co.nz/sectors',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Dinghy',
        item: 'https://yachtinsurance.co.nz/sectors/dinghy',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1920&h=1080&fit=crop)',
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
                <span className="text-white font-medium">Dinghy</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Dinghy Insurance
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Affordable coverage for sailing dinghies and small vessels
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <p>
                  Sailing dinghies and small boats are cherished by New Zealand's boating community, whether you compete in racing series or enjoy casual day sailing. Even small vessels need proper insurance protection against damage, theft, and liability.
                </p>
                <p>
                  We help dinghy owners find affordable coverage that protects their investment without breaking the bank. From racing dinghies to inflatable tenders, we connect you with specialist insurers who understand small boat insurance.
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
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Why Dinghy Owners Choose Us</h2>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Affordable policies starting from just a few dollars a week</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Racing and recreational use both covered</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Trailer and transport coverage included</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Quick and easy claims process for small vessels</span>
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

      {/* Dinghy Types */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Types of Dinghies We Cover
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From racing dinghies to inflatable tenders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dinghyTypes.map((dinghy, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {dinghy.type}
                </h3>
                <p className="text-slate-600">{dinghy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            What's Covered
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {coveragePoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-sky-50 rounded-lg p-6 border border-sky-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Racing Dinghy Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Racing Dinghy Insurance
              </h2>
              <p className="text-slate-700 mb-4">
                New Zealand has a vibrant dinghy racing community with competitive
                series at clubs throughout the country. Racing brings special
                insurance considerations.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Trophy className="w-6 h-6 text-sky-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Race-Specific Coverage
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Includes incident damage during sanctioned races and regattas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="w-6 h-6 text-sky-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Protest Coverage
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Legal costs for race protests and sailing disputes
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Equipment Protection
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Coverage for sails, masts, rigging, and racing gear
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border border-sky-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Racing Dinghy Coverage Options
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Day Racing
                  </h4>
                  <p className="text-sm text-slate-600">
                    Coverage for local club racing events
                  </p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Regional Events
                  </h4>
                  <p className="text-sm text-slate-600">
                    Extended coverage for regional championships
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    National Regattas
                  </h4>
                  <p className="text-sm text-slate-600">
                    Full coverage for national-level racing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Information */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Affordable Dinghy Insurance
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200 text-center">
              <p className="text-sm font-semibold text-sky-900 mb-2">
                Small Dinghies
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-1">$150-300</p>
              <p className="text-xs text-sky-700">per year</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 border border-teal-200 text-center">
              <p className="text-sm font-semibold text-teal-900 mb-2">
                Racing Dinghies
              </p>
              <p className="text-2xl font-bold text-teal-600 mb-1">$300-500</p>
              <p className="text-xs text-teal-700">per year</p>
            </div>

            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200 text-center">
              <p className="text-sm font-semibold text-cyan-900 mb-2">
                Inflatable Tenders
              </p>
              <p className="text-2xl font-bold text-cyan-600 mb-1">$200-400</p>
              <p className="text-xs text-cyan-700">per year</p>
            </div>
          </div>

          <p className="text-center text-slate-600 mt-8">
            Actual premiums depend on vessel value, usage, and coverage selected
          </p>
        </div>
      </section>

      {/* NZ Dinghy Racing & Regional Considerations */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Dinghy Sailing in New Zealand
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            From weekend club racing to serious competition, dinghies are central to New Zealand's sailing culture
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                NZ Dinghy Racing Scene
              </h3>
              <p className="text-slate-700 mb-3">
                New Zealand's dinghy racing community is vibrant and competitive, with active sailing clubs in Auckland, Wellington, Christchurch, and throughout the regions. Popular classes include the Laser, Optimist, 470, and increasingly, modern single-designs. The New Zealand Sailing Association organizes nationals and supports regional championships across the country, particularly strong in the Hauraki Gulf and around the Marlborough Sounds.
              </p>
              <p className="text-slate-600 text-sm">
                Racing dinghies experience higher wear and tear due to competitive use, which is reflected in insurance premiums. Many insurers offer specialized racing-specific policies that account for the elevated accident and damage rates typical in competitive sailing, with premiums starting around $300-400 annually for active racers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Club Vs. Independent Sailing
              </h3>
              <p className="text-slate-700 mb-3">
                If your dinghy is based at a sailing club, you'll typically get better insurance rates than independent sailors. Clubs often have shared moorings with security measures, regular maintenance facilities, and structured insurance programs through their clubs. Club-based dinghies average $100-150 less annually in insurance than similarly valued independent dinghies.
              </p>
              <p className="text-slate-600 text-sm">
                Most clubs either provide collective insurance or offer preferred rates from partner insurers. Check with your sailing club about bundled insurance options—you may qualify for automatic premium reductions by sailing with an organized club versus at a private mooring.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Regional Sailing Conditions
              </h3>
              <p className="text-slate-700 mb-3">
                Dinghy insurance costs vary considerably by region. Waters in the Hauraki Gulf and Bay of Islands see higher accident rates due to challenging tide and current conditions, which can increase premiums by 15-25%. Conversely, protected lake sailing (Lake Taupo, Lake Wanaka) and sheltered harbours like Marlborough Sounds typically offer lower premiums due to calmer conditions and lower collision risk.
              </p>
              <p className="text-slate-600 text-sm">
                Report your primary sailing location to insurers for the most accurate quotes. If you split your sailing between multiple regions, focus on your most-used location for the policy description.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Common Dinghy Claims & Loss Prevention
              </h3>
              <p className="text-slate-700 mb-3">
                The most frequent dinghy insurance claims in New Zealand involve collision damage with other vessels during racing, rig damage from high wind events, and theft of equipment from unattended dinghies at moorings. Winter sailing brings increased claims related to water damage and broken masts in heavy weather conditions.
              </p>
              <p className="text-slate-600 text-sm">
                To reduce your premiums, maintain your dinghy properly, store it securely (not on public beaches), and document your safety record. Completing a RYA or similar sailing course can reduce premiums by 10-15%. Additionally, installing GPS trackers on your dinghy can qualify you for theft discounts, particularly important for high-value racing dinghies worth $5,000+.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Tips for Lower Premiums
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">1.</span>
                  <span className="text-slate-600"><strong>Join a club:</strong> Organized club membership can reduce premiums by 20%+ through preferred rates and collective schemes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">2.</span>
                  <span className="text-slate-600"><strong>Secure storage:</strong> Keep your dinghy locked at a secure facility rather than exposed at a public ramp</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">3.</span>
                  <span className="text-slate-600"><strong>Increase deductible:</strong> Choosing a $1,000 deductible instead of $500 can save 15-25% on premiums</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">4.</span>
                  <span className="text-slate-600"><strong>Maintenance record:</strong> Document regular maintenance and servicing to prove you're a responsible owner</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-600 font-bold flex-shrink-0">5.</span>
                  <span className="text-slate-600"><strong>Bundle with yacht:</strong> If you own a larger yacht, insuring your dinghy with the same provider typically costs 20-30% less</span>
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
                <Link href="/sectors/jetski" className="text-sky-600 hover:text-sky-700">Jet Ski Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Fast-track coverage for personal watercraft.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/tender" className="text-sky-600 hover:text-sky-700">Tender Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Protection for boat tenders and support vessels.</p>
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
            Protect Your Dinghy Today
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get an instant quote for dinghy insurance
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
