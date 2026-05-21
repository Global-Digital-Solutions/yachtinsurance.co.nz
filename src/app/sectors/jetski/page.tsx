import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Waves,
  Shield,
  AlertCircle,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Lock,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Jet Ski Insurance | Personal Watercraft Coverage',
  description:
    'Get specialist jet ski and personal watercraft insurance in New Zealand. Comprehensive coverage with liability protection. Specialist quotes available.',
  keywords: [
    'jet ski insurance nz',
    'personal watercraft insurance',
    'pwc insurance',
    'jet ski insurance quotes',
    'marine insurance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/sectors/jetski',
    title: 'Jet Ski Insurance',
    description:
      'Specialist jet ski and personal watercraft insurance with comprehensive coverage.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1769655991063-cc63efc4e2d0?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Jet ski racing in New Zealand waters',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/sectors/jetski',
  },
};

const coverageItems = [
  {
    title: 'Hull Damage Protection',
    description:
      'Covers repairs or replacement if your jet ski is damaged by collision, accident, or theft.',
    icon: Shield,
  },
  {
    title: 'Third-Party Liability',
    description:
      'Essential protection for claims if you damage other vessels, property, or cause injury.',
    icon: AlertCircle,
  },
  {
    title: 'Medical Payments',
    description:
      'Covers medical expenses for you and your passengers injured during authorized use.',
    icon: Users,
  },
  {
    title: 'Towing & Recovery',
    description:
      'Professional towing and recovery services if your jet ski becomes disabled on the water.',
    icon: Zap,
  },
];

const costFactors = [
  { factor: 'Model & Value', impact: 'Primary cost determinant' },
  { factor: 'Age', impact: 'Newer units may cost more' },
  { factor: 'Storage Location', impact: 'Secure storage reduces premiums' },
  { factor: 'Usage', impact: 'Recreational vs. racing affects rates' },
  { factor: 'Driver Experience', impact: 'Certification reduces cost' },
  { factor: 'Claims History', impact: 'Previous claims increase premium' },
];

const safetyRequirements = [
  {
    title: 'Operator Licensing',
    description:
      'Most insurers require PWC operators to hold a boating license or maritime operators license.',
  },
  {
    title: 'Safety Equipment',
    description:
      'USCG-approved personal flotation devices, fire extinguishers, and emergency flares required.',
  },
  {
    title: 'Age Restrictions',
    description:
      'Operators must typically be at least 16 years old; some insurers require age 18 minimum.',
  },
  {
    title: 'Alcohol & Drug Policy',
    description:
      'Operating while impaired voids coverage. Must follow maritime DUI laws.',
  },
  {
    title: 'Speed Zones',
    description:
      'Coverage applies only in designated zones. No racing outside approved areas.',
  },
];

export default function JetSkiInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Jet Ski Insurance',
    description:
      'Specialist jet ski and personal watercraft insurance with comprehensive coverage for New Zealand operators.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Jet Ski Insurance',
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
        name: 'Jet Ski',
        item: 'https://yachtinsurance.co.nz/sectors/jetski',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1768722688751-5d995b9e6393?w=1920&h=1080&fit=crop)',
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
                <span className="text-white font-medium">Jet Ski</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Jet Ski Insurance
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Specialist personal watercraft coverage with comprehensive protection
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <p>
                  Jet skiing is one of New Zealand's most exciting water sports, but it comes with significant liability exposure. Without proper insurance, a single accident could leave you facing thousands in legal costs and damages.
                </p>
                <p>
                  Our jet ski insurance specialists provide fast, affordable coverage that protects you and your passengers while you enjoy the thrill of the water. Get comprehensive protection with liability limits that match New Zealand maritime law. <Link href="/coverage" className="text-sky-300 hover:text-white underline underline-offset-2">Learn about coverage options</Link>.
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
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Why Jet Ski Owners Choose Us</h2>
                <ul className="space-y-2.5">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Specialist PWC policies — not generic boat insurance</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Third-party liability meeting NZ maritime requirements</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Coverage for towing, wakeboarding and water sports</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">Theft and trailer protection included</span>
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

      {/* Coverage Details Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Jet Ski Coverage Details
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What's included in comprehensive personal watercraft insurance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
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

      {/* Cost Factors */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Factors Affecting Your Premium
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Several factors influence your jet ski insurance cost
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {costFactors.map((item, idx) => (
              <div
                key={idx}
                className="bg-sky-50 rounded-lg p-6 border border-sky-200"
              >
                <h3 className="font-semibold text-slate-900 mb-2">
                  {item.factor}
                </h3>
                <p className="text-slate-600 text-sm">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Requirements */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Safety Requirements & Insurance
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Most insurers require compliance with these safety standards
          </p>

          <div className="space-y-4">
            {safetyRequirements.map((req, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {req.title}
                    </h3>
                    <p className="text-slate-600">{req.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 rounded-xl p-6 border border-amber-200">
            <p className="text-slate-700">
              <strong>Important:</strong> Operating your jet ski in violation of
              safety regulations or licensing requirements can void your insurance
              coverage. Always follow New Zealand maritime safety laws and inform
              your insurer of your intended usage patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Coverage */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Types of Jet Ski Insurance Available
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Liability Only
              </h3>
              <p className="text-slate-600 mb-4">
                Covers third-party injury and property damage claims. Most
                cost-effective option but doesn't protect your jet ski from damage.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">+</span>
                  Affordable premium
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">+</span>
                  Meets legal minimums
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 font-bold">-</span>
                  No coverage for your vessel
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Comprehensive Coverage
              </h3>
              <p className="text-slate-600 mb-4">
                Includes hull damage, collision, theft, and liability protection.
                Best protection for your jet ski investment.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">+</span>
                  Full vessel protection
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">+</span>
                  Theft & damage coverage
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-600 font-bold">+</span>
                  Complete peace of mind
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NZ-Specific Considerations */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Jet Skiing in New Zealand Waters
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            New Zealand's unique marine environment presents specific challenges and opportunities for jet ski enthusiasts
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Regional Usage Patterns
              </h3>
              <p className="text-slate-700 mb-3">
                Popular jet skiing destinations across New Zealand include the Hauraki Gulf near Auckland, the Bay of Islands in Northland, and Lake Taupo. Each region has distinct water conditions and seasonal patterns that affect insurance rates. Insurers often provide better premiums for riders who stick to protected harbours and designated recreation areas rather than open ocean riding.
              </p>
              <p className="text-slate-600 text-sm">
                If you primarily use your jet ski in a specific region—like cruising between Waiheke and Great Barrier Island, or in sheltered Lake Waikato—inform your insurer. Many offer location-based discounts for safer, protected waters.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Seasonal Considerations
              </h3>
              <p className="text-slate-700 mb-3">
                New Zealand's summer season (November to March) sees peak jet ski activity, particularly around the Auckland waterfront and Bay of Islands. Winter months bring rougher conditions and higher accident rates due to larger swells and colder water temperatures. Some insurers adjust premiums seasonally or offer reduced-premium policies for winter-only storage.
              </p>
              <p className="text-slate-600 text-sm">
                Consider a seasonal policy if you only operate your jet ski during summer months. You could save 30-40% on annual premiums by insuring coverage only during your active riding season.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Common Claims & Prevention
              </h3>
              <p className="text-slate-700 mb-3">
                In New Zealand waters, the most frequent jet ski insurance claims involve collision with other vessels, damage from rock strikes in shallow areas, and theft from unattended moorings. The Ministry of Transport reports that personal watercraft operators have higher accident rates than other boating types, particularly when operating near populated beaches and harbours.
              </p>
              <p className="text-slate-600 text-sm">
                To reduce your premium, maintain a clean riding record, complete a boating safety course recognized by the Maritime Safety Authority, and use reliable security measures such as chain locks and electronic tracking for your jet ski. Riders who invest in safety certifications often qualify for 15-20% premium discounts.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Storage & Security Requirements
              </h3>
              <p className="text-slate-700 mb-3">
                Jet ski theft is a significant concern in popular boating areas like Auckland, Tauranga, and Rotorua. Insurance companies in New Zealand typically require secure storage solutions to maintain coverage at standard rates. This might include locked boat sheds, secure marina berths, or on-property storage with proper security measures.
              </p>
              <p className="text-slate-600 text-sm">
                Leaving your jet ski unattended on a beach or public ramp is typically not covered by standard insurance. Invest in secure parking facilities and you'll likely see your premiums drop. Some marinas offer jet ski-specific secure parking with 24-hour surveillance, which can substantially improve your insurance rates.
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
                <Link href="/sectors/racing-boat" className="text-sky-600 hover:text-sky-700">Racing Yacht Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Specialist coverage for competitive sailing and regattas.</p>
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
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Get Jet Ski Insurance Today
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Protect yourself and your passengers with comprehensive coverage
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
