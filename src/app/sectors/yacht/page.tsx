import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Ship,
  Shield,
  Anchor,
  TrendingUp,
  Waves,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Yacht Insurance | Comprehensive Marine Coverage',
  description:
    'Get expert yacht insurance coverage in New Zealand. We offer comprehensive protection for sailing and motor yachts of all sizes. Specialist quotes available.',
  keywords: [
    'yacht insurance nz',
    'sailing yacht insurance',
    'motor yacht insurance',
    'luxury yacht insurance',
    'yacht insurance quotes',
    'marine insurance',
    'boat insurance nz',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/sectors/yacht',
    title: 'Yacht Insurance',
    description:
      'Comprehensive yacht insurance coverage for sailing and motor yachts in New Zealand waters.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Luxury yacht sailing in New Zealand',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/sectors/yacht',
  },
};

const coveragePoints = [
  {
    title: 'Hull & Machinery Protection',
    description:
      'Comprehensive coverage for your yacht structure, engines, and systems against collision, storm damage, and other maritime perils.',
    icon: Ship,
  },
  {
    title: 'Third-Party Liability',
    description:
      'Protection against claims for damage to other vessels, swimmers, or property. Essential protection in busy New Zealand harbors.',
    icon: Shield,
  },
  {
    title: 'Salvage & Towing',
    description:
      'Coverage for professional assistance if your yacht becomes disabled, stranded, or requires emergency recovery services.',
    icon: Anchor,
  },
  {
    title: 'Personal Effects',
    description:
      'Protect valuable equipment, navigation systems, electronics, and personal items stored aboard your yacht.',
    icon: TrendingUp,
  },
  {
    title: 'Crew & Passenger Protection',
    description:
      'Medical expense coverage for crew members and passengers injured while aboard your yacht during authorized activities.',
    icon: Waves,
  },
  {
    title: 'Legal Expenses',
    description:
      'Coverage for legal representation and defense costs in case of maritime disputes or accident investigations.',
    icon: AlertCircle,
  },
];

const yachtTypes = [
  {
    type: 'Sailing Yachts',
    description:
      'From day sailers to offshore cruising boats, we cover all sailing vessels with specialized rigging and sail protection.',
  },
  {
    type: 'Motor Yachts',
    description:
      'Comprehensive coverage for power vessels, including cruising motor yachts and high-performance speedboats.',
  },
  {
    type: 'Superyachts',
    description:
      'Luxury coverage for large, valuable vessels with specialized systems and extended navigation capabilities.',
  },
  {
    type: 'Classic Yachts',
    description:
      'Specialized insurance for historic and vintage yachts with agreed value and preservation coverage.',
  },
];

const costFactors = [
  { factor: 'Vessel Value', impact: 'Primary cost driver' },
  {
    factor: 'Vessel Age & Condition',
    impact: 'Older vessels may have higher premiums',
  },
  { factor: 'Location & Moorings', impact: 'Exposed locations cost more' },
  { factor: 'Cruising Area', impact: 'Extended offshore passages increase cost' },
  { factor: 'Claims History', impact: 'Previous claims affect rates' },
  {
    factor: 'Safety Equipment',
    impact: 'Modern systems can reduce premiums',
  },
  { factor: 'Crew Experience', impact: 'Professional captains get better rates' },
  {
    factor: 'Annual Usage Hours',
    impact: 'More time on water means higher premium',
  },
];

export default function YachtInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Yacht Insurance',
    description:
      'Comprehensive yacht and marine insurance coverage for sailing yachts, motor yachts, superyachts and classic yachts in New Zealand.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Yacht Insurance',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'NZD',
      price: 'Variable',
      description: 'Customized yacht insurance quotes based on vessel details',
    },
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
        name: 'Yacht',
        item: 'https://yachtinsurance.co.nz/sectors/yacht',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1920&h=1080&fit=crop)',
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
                <span className="text-white font-medium">Yacht</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Yacht Insurance
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Comprehensive marine coverage for sailing and motor yachts of all sizes
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <p>
                  Whether you own a modest sailing yacht, a sleek motor vessel, or a luxury superyacht, comprehensive insurance protects your investment and provides peace of mind on the water. New Zealand's dynamic marine environment demands specialized coverage tailored to your specific vessel and cruising patterns.
                </p>
                <p>
                  Our yacht insurance specialists understand the unique risks facing boat owners in NZ waters. We connect you with the best insurers offering competitive rates, flexible coverage options, and claims service you can trust when you need it most. <Link href="/compare" className="text-sky-300 hover:text-white underline underline-offset-2">Compare providers</Link> and <Link href="/coverage" className="text-sky-300 hover:text-white underline underline-offset-2">learn about available coverage</Link>.
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
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Why NZ Boat Owners Choose Us</h2>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Dedicated marine insurance specialists — not generalists</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Coverage tailored to NZ waters and conditions</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Fast claims support when you need it most</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Access to exclusive insurer rates and discounts</span>
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

      {/* What's Covered Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Covered with Yacht Insurance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive protection designed for yacht owners in New Zealand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coveragePoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Yachts Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Yacht Types We Cover
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From modest cruising boats to luxury superyachts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yachtTypes.map((yacht, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-lg p-6 border border-sky-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {yacht.type}
                </h3>
                <p className="text-slate-600 text-sm">{yacht.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guide Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Factors Affecting Your Premium
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding what impacts your yacht insurance cost
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {costFactors.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {item.factor}
                    </h4>
                    <p className="text-sm text-slate-600">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sky-50 rounded-xl p-8 border border-sky-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Get an Accurate Quote
            </h3>
            <p className="text-slate-700 mb-6">
              Premium costs vary significantly based on your specific yacht, usage
              patterns, and coverage needs. Our specialists will assess all factors
              to find you the best rate from providers who specialize in yachts
              like yours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
            >
              Get Your Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Rich SEO Content */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto prose prose-slate max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Everything You Need to Know About Yacht Insurance in New Zealand
          </h2>

          <p className="text-lg text-slate-700 mb-6">
            Yacht insurance in New Zealand protects one of your most valuable
            possessions—your boat. Whether you own a modest cruising yacht or a
            luxury superyacht, comprehensive marine insurance coverage provides
            essential financial protection against the unique risks of sailing in
            New Zealand waters.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Why Yacht Insurance is Essential
          </h3>
          <p className="text-slate-700 mb-4">
            New Zealand's marine environment presents distinct challenges. From
            unpredictable Southern Ocean weather to congested harbors, boat owners
            face significant financial exposure. The cost to repair or replace a
            yacht can easily exceed $50,000 to several million dollars for luxury
            vessels. A single storm, collision, or equipment failure could
            devastate your personal finances without proper insurance coverage.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Choosing the Right Coverage
          </h3>
          <p className="text-slate-700 mb-4">
            Modern yacht insurance offers flexible <Link href="/coverage" className="text-sky-600 hover:text-sky-700 font-semibold">coverage options</Link>. Most policies
            include hull protection, third-party liability, salvage services, and
            crew protection. Many boat owners also add coverage for navigation
            equipment, personal effects, and extended cruising areas.
          </p>

          <p className="text-slate-700 mb-4">
            The key is selecting coverage that matches your vessel type and usage
            patterns. A racing yacht has different needs than a cruising motor
            yacht. A vessel moored in an exposed location requires different
            coverage than one in a protected marina. Our specialists ensure your
            policy aligns with your actual boating activities.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Understanding Premium Costs
          </h3>
          <p className="text-slate-700 mb-4">
            Yacht insurance premiums typically range from 0.8% to 1.5% of your
            vessel's agreed value annually for cruising boats, with variations based
            on the factors listed above. Racing yachts and high-performance vessels
            may have higher premiums. Getting quotes from multiple insurers is
            essential to finding competitive rates.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            The Claims Process
          </h3>
          <p className="text-slate-700 mb-4">
            When you need your insurance most—after an accident or loss—the claims
            process matters. Reputable marine insurers offer prompt claims
            assessment and settlement. Documentation of your vessel condition,
            maintenance records, and incident details supports faster claims
            resolution.
          </p>

          <p className="text-slate-700">
            Choosing YachtInsurance.co.nz connects you with specialist providers
            who understand marine claims and deliver service when you need it. We
            handle the comparison work, letting you focus on your boating passion
            with confidence that your vessel is protected.
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
                <Link href="/sectors/jetski" className="text-sky-600 hover:text-sky-700">Jet Ski Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Fast-track coverage for personal watercraft and jet skis.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/racing-boat" className="text-sky-600 hover:text-sky-700">Racing Yacht Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Specialized coverage for competitive racing yachts.</p>
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

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Protect Your Yacht Today
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get a quote from our marine insurance specialists in under 2
            minutes
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
