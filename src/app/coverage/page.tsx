import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, DollarSign, Anchor, Wind, Lock, LifeBuoy, Ship, Truck, ChevronRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Yacht Insurance Coverage in NZ | What\'s Covered | YachtInsurance.co.nz',
  description: 'Comprehensive guide to yacht insurance coverage in New Zealand. Learn what\'s covered: hull, machinery, liability, theft, weather damage, salvage and more. Understand coverage types and exclusions.',
  keywords: [
    'yacht insurance coverage nz',
    'boat insurance coverage',
    'marine insurance what is covered',
    'yacht hull insurance',
    'boat liability insurance',
    'marine coverage types',
    'yacht insurance exclusions',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.yachtinsurance.co.nz/coverage',
    title: 'Yacht Insurance Coverage in NZ | What\'s Covered',
    description: 'Learn what yacht insurance covers in New Zealand: hull, machinery, liability, theft, weather and more.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1769655991063-cc63efc4e2d0?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Yacht sailing in New Zealand waters',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/coverage',
  },
};

const coverageTypes = [
  {
    icon: Shield,
    title: 'Hull & Machinery',
    description: 'Covers physical damage to the hull, structure, engine, and mechanical systems. Includes damage from collision, grounding, fire, and operational failures. This is the core protection for your vessel.',
  },
  {
    icon: DollarSign,
    title: 'Third-Party Liability',
    description: 'Protects you against claims from damage to other vessels, swimmers, divers, or property caused by your boat. Essential protection for the financial risk of operating a marine vessel.',
  },
  {
    icon: Anchor,
    title: 'Personal Effects & Equipment',
    description: 'Covers your onboard belongings, safety equipment, fishing gear, navigational instruments, and personal items. Protection extends to sails, rigging, anchors, and installed electronic systems.',
  },
  {
    icon: Wind,
    title: 'Storm & Weather Damage',
    description: 'Covers damage from severe weather including wind, hail, lightning, rough seas, and natural disasters. Essential for vessels operating in New Zealand\'s variable marine conditions.',
  },
  {
    icon: Lock,
    title: 'Theft & Vandalism',
    description: 'Full replacement value if your vessel is stolen or deliberately damaged. Covers break-ins, attempted thefts, and malicious damage while moored or in storage.',
  },
  {
    icon: LifeBuoy,
    title: 'Salvage & Wreck Removal',
    description: 'Covers costs to recover a sunken or disabled vessel and removal of wreck debris. Includes towage, salvage operations, and environmental cleanup to comply with maritime regulations.',
  },
  {
    icon: Ship,
    title: 'Racing Cover',
    description: 'Specialized coverage for racing yachts during competition and training. Covers damage during racing activities with specific terms for high-risk events and international racing.',
  },
  {
    icon: Truck,
    title: 'Transit & Trailer Cover',
    description: 'Protection while your vessel is being transported on a trailer, launched, or towed. Covers damage during loading, unloading, and overland transport to different locations.',
  },
];

const exclusions = [
  'Normal wear and tear, corrosion, and osmosis',
  'Damage caused by lack of maintenance or negligence',
  'Unattended vessels without active security systems',
  'Damage while vessel is in dry-dock for repairs',
  'Mechanical breakdown not resulting from external damage',
  'Manufacturer defects or design flaws',
  'Damage due to improper operation or operator error',
  'Coverage for chartered or commercially operated vessels (unless specifically included)',
];

export default function Coverage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Yacht Insurance Coverage',
    description: 'Comprehensive yacht and marine insurance coverage in New Zealand',
    provider: {
      '@type': 'Organization',
      name: 'YachtInsurance.co.nz',
      url: 'https://www.yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'NZ',
    },
    serviceType: 'Marine Insurance',
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
        name: 'Coverage',
        item: 'https://www.yachtinsurance.co.nz/coverage',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Full Above-Fold Hero with Background Image */}
      <section
        className="relative min-h-[100vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1769655991063-cc63efc4e2d0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 via-slate-900/40 to-slate-900/15" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text */}
            <div className="lg:col-span-3">
              <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white font-medium">Coverage</span>
              </nav>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Yacht Insurance Coverage in New Zealand
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Understand what&apos;s covered, what&apos;s excluded, and choose the right protection level for your vessel.
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <p className="leading-relaxed">
                  Marine insurance typically falls into two main categories: damage to your own vessel (hull and machinery) and liability for damage you cause to others. Most policies also include optional covers for personal effects, weather damage, theft, and specialized needs like <Link href="/sectors/racing-boat" className="text-sky-300 hover:text-white font-semibold underline underline-offset-2">racing</Link> or overseas cruising.
                </p>
                <p className="leading-relaxed">
                  <Link href="/compare" className="text-sky-300 hover:text-white font-semibold underline underline-offset-2">Compare providers</Link> to find the right protection, or fill in the form to <Link href="/contact" className="text-sky-300 hover:text-white font-semibold underline underline-offset-2">get a quote today</Link>.
                </p>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="lg:col-span-2">
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types Grid */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Types of Coverage Available
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn about the different coverage options available in yacht insurance policies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageTypes.map((coverage, index) => {
              const Icon = coverage.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-sky-600"
                >
                  <div className="p-3 bg-sky-50 rounded-lg mb-4 w-fit">
                    <Icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {coverage.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {coverage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Excluded Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What's Typically Excluded
            </h2>
            <p className="text-lg text-slate-600">
              Understanding exclusions helps you know what's not covered and plan accordingly
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {exclusions.map((exclusion, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="pt-1">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">-</span>
                  </div>
                </div>
                <p className="text-slate-700">{exclusion}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Important:</h4>
            <p className="text-slate-700">
              Always review your specific policy documents for exact coverage details and exclusions. Insurance policies vary between providers and coverage levels. Many exclusions can be covered through optional add-ons or higher tier policies.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Comparison Table */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Coverage Tier Comparison
            </h2>
            <p className="text-lg text-slate-600">
              Compare coverage features across different insurance policy levels
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-lg border border-slate-200">
            <table className="w-full">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Coverage Feature</th>
                  <th className="px-6 py-4 text-center font-bold">Basic</th>
                  <th className="px-6 py-4 text-center font-bold">Standard</th>
                  <th className="px-6 py-4 text-center font-bold">Comprehensive</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Hull & Machinery</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Third-Party Liability</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Weather Damage</td>
                  <td className="px-6 py-4 text-center text-slate-600">-</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Theft & Vandalism</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-amber-600 font-bold">Optional</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Personal Effects</td>
                  <td className="px-6 py-4 text-center text-slate-600">-</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-amber-600 font-bold">Optional</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Salvage & Wreck</td>
                  <td className="px-6 py-4 text-center text-slate-600">-</td>
                  <td className="px-6 py-4 text-center text-slate-600">-</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Racing Coverage</td>
                  <td className="px-6 py-4 text-center text-slate-600">-</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-amber-600 font-bold">Optional</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Transit & Trailer</td>
                  <td className="px-6 py-4 text-center text-slate-600">-</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-amber-600 font-bold">Optional</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {[
              {
                tier: 'Basic',
                color: 'sky-50',
                features: [
                  { name: 'Hull & Machinery', included: true },
                  { name: 'Third-Party Liability', included: true },
                  { name: 'Weather Damage', included: false },
                  { name: 'Theft & Vandalism', included: false },
                  { name: 'Personal Effects', included: false },
                  { name: 'Salvage & Wreck', included: false },
                  { name: 'Racing Coverage', included: false },
                  { name: 'Transit & Trailer', included: false },
                ],
              },
              {
                tier: 'Standard',
                color: 'blue-50',
                features: [
                  { name: 'Hull & Machinery', included: true },
                  { name: 'Third-Party Liability', included: true },
                  { name: 'Weather Damage', included: true },
                  { name: 'Theft & Vandalism', included: true },
                  { name: 'Personal Effects', included: false },
                  { name: 'Salvage & Wreck', included: false },
                  { name: 'Racing Coverage', included: false },
                  { name: 'Transit & Trailer', included: false },
                ],
              },
              {
                tier: 'Comprehensive',
                color: 'emerald-50',
                features: [
                  { name: 'Hull & Machinery', included: true },
                  { name: 'Third-Party Liability', included: true },
                  { name: 'Weather Damage', included: true },
                  { name: 'Theft & Vandalism', included: true },
                  { name: 'Personal Effects', included: true },
                  { name: 'Salvage & Wreck', included: true },
                  { name: 'Racing Coverage', included: true },
                  { name: 'Transit & Trailer', included: true },
                ],
              },
            ].map((tier, idx) => (
              <div key={idx} className={`p-6 rounded-lg border-2 border-slate-200 bg-${tier.color}`}>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{tier.tier}</h3>
                <div className="space-y-3">
                  {tier.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <span className={tier.color === 'sky-50' ? (feature.included ? 'text-green-600' : 'text-slate-400') : tier.color === 'blue-50' ? (feature.included ? 'text-blue-600' : 'text-slate-400') : (feature.included ? 'text-emerald-600' : 'text-slate-400')}>
                        {feature.included ? '✓' : '-'}
                      </span>
                      <span className="text-slate-700">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Choosing the Right Coverage Level for Your Needs
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              When selecting yacht insurance coverage in New Zealand, it's important to consider your specific circumstances, the value of your vessel, how frequently you use it, and where you operate. Basic coverage provides essential protection for everyday cruising on familiar waters, while comprehensive coverage is recommended for valuable vessels, offshore cruising, or racing activities.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Basic Coverage: Ideal for Budget-Conscious Boat Owners</h3>
            <p>
              Basic yacht insurance provides the fundamental protections required by most lenders and harbormasters. This tier includes hull and machinery coverage for accidental damage, plus third-party liability protection. Basic plans are perfect for small recreational vessels, day-cruisers, or boats kept primarily on home moorings. The lower premium makes this option attractive for budget-conscious owners of lower-value vessels.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Standard Coverage: Most Popular Choice for NZ Sailors</h3>
            <p>
              Standard coverage represents the best balance between price and protection for most boat owners. In addition to basic protections, standard policies include weather damage coverage, which is crucial in New Zealand's variable marine climate. This tier typically adds theft and vandalism protection, ensuring your vessel is covered against opportunistic crimes. Standard coverage is ideal for regularly used cruising yachts, regular coastal passages, and vessels valued between NZD 50,000 and 500,000.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Comprehensive Coverage: Premium Protection for High-Value Vessels</h3>
            <p>
              Comprehensive marine insurance provides maximum protection for valuable yachts and owners requiring specialized coverage. This tier includes all standard protections plus salvage and wreck removal (critical for expensive vessels), personal effects coverage for onboard equipment, racing coverage for competition yachts, and transit coverage for transport between locations. Racing yacht owners particularly benefit from comprehensive policies, which specifically cover damage during racing activities and competition events.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Optional Add-Ons and Specialized Coverage</h3>
            <p>
              Beyond the standard tiers, most insurers offer optional add-ons to customize your coverage. These include agreed value options (guaranteeing payout without depreciation deduction), medical expenses coverage, legal liability protection, and specialized racing equipment coverage. Many policies also offer optional covers for international cruising to offshore racing, extended geographic coverage, and crew liability protection for charter operations.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">New for Old Replacement Policies</h3>
            <p>
              Some specialist marine insurers offer "new for old" or "replacement as new" policies, particularly valuable for newer vessels. Rather than paying depreciated value after a claim, these policies pay the cost of new replacement components. While these policies carry higher premiums, they provide superior protection for vessels where maintaining pristine condition is important.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Understanding Your Policy Excess</h3>
            <p>
              All insurance policies include an excess—the amount you pay toward any claim. Most marine policies offer flexible excess options, allowing you to choose higher excesses in exchange for lower premiums. Standard excesses range from NZD 500 to 2,500, though you can often select higher amounts for savings. Consider your financial position when selecting excess amounts; while higher excesses reduce premiums, ensure you can afford the excess if a claim occurs.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Comparing Marine Insurers for Best Coverage</h3>
            <p>
              New Zealand has numerous marine insurance providers, from large national insurers like Tower and NZI to specialist marine operators like Mariner, Star Insurance, and Nautilus Marine. Each offers slightly different coverage variations, premium calculations, and claims experiences. Specialist marine insurers typically offer superior claims handling specific to marine risks and may provide better value for serious sailors. <Link href="/compare" className="text-sky-600 hover:text-sky-700 font-semibold">Compare quotes across multiple providers</Link> to ensure you get the best coverage at competitive rates.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Coverage for Different Vessel Types</h3>
            <p>
              Your vessel type significantly influences coverage needs. Small recreational boats and jet skis can often be covered on standard homeowner policies with marine add-ons. Sailing yachts and racing boats require specialized coverage accounting for their specific risks. Commercial or charter vessels need completely different policies with crew liability. Catamarans and multihulls sometimes cost more to insure due to their value and specialized repair requirements.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Geographic Coverage Considerations</h3>
            <p>
              Most standard policies cover New Zealand coastal waters and a limited offshore range. Cruising beyond the standard geographic limits—such as extended overseas passages or South Pacific voyages—requires blue water cruising insurance with extended geographic coverage. These specialized policies account for the increased risks of open ocean passages and remote locations with limited emergency services.
            </p>

            <p className="text-slate-600 italic mt-8">
              Ready to find the right coverage for your yacht? Compare quotes from New Zealand's leading marine insurers to get the protection you need at a price that suits your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Related Pages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/compare" className="text-sky-600 hover:text-sky-700">Compare Insurance Providers</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Find the best marine insurance provider for your vessel with side-by-side comparison of ratings, premiums, and specialties.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/yacht" className="text-sky-600 hover:text-sky-700">Yacht Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Explore comprehensive coverage options specifically designed for sailing yachts, motor yachts, and superyachts.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/faqs" className="text-sky-600 hover:text-sky-700">Frequently Asked Questions</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Get answers to common questions about coverage types, exclusions, and finding the right insurance policy.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/contact" className="text-sky-600 hover:text-sky-700">Get Your Quote</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Compare quotes from multiple NZ insurers and discover how much coverage you could get at the right price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
