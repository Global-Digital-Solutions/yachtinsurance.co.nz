import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, ChevronRight, Check } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { insurers } from '@/data/insurers';

export const metadata: Metadata = {
  title: 'Compare Yacht Insurance Providers NZ | YachtInsurance.co.nz',
  description: 'Compare yacht and boat insurance providers in New Zealand. View ratings, features, premiums and specialties for Mariner, Tower, NMI, Gallagher, Baileys, AMI, NZI and Star Insurance.',
  keywords: [
    'yacht insurance comparison nz',
    'boat insurance providers new zealand',
    'compare marine insurance',
    'best yacht insurance nz',
    'boat insurance quotes nz',
    'marine insurance companies',
    'yacht insurance rates nz',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.yachtinsurance.co.nz/compare',
    title: 'Compare Yacht Insurance Providers NZ',
    description: 'Compare top yacht and boat insurance providers in New Zealand side-by-side.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1626869710563-be671a0cd919?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Comparing yacht insurance options',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/compare',
  },
};

const chooseInsurertips = [
  {
    title: 'Compare Premium Costs',
    description: 'Get quotes from multiple insurers. Premiums vary based on your vessel, usage, and coverage level. Lowest price isn\'t always best value—compare what\'s included.',
  },
  {
    title: 'Check Claims Processing',
    description: 'Look at claims assessment timeframes and support availability. 24/7 claims support and quick settlement are crucial when you need help on the water.',
  },
  {
    title: 'Verify Specialties Match Your Needs',
    description: 'Choose an insurer specializing in your vessel type. Racing yacht owners should pick specialists in racing cover; offshore cruisers need blue water expertise.',
  },
  {
    title: 'Review Coverage Options',
    description: 'Ensure the insurer offers the specific coverage you need—agreed value, salvage rights, new-for-old, or racing coverage. Standard options vary significantly.',
  },
  {
    title: 'Consider Customer Service',
    description: 'Read reviews and check accessibility. Good marine insurers offer personalized service, expert advice, and responsive support for their customers.',
  },
];

export default function Compare() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Compare Yacht Insurance Providers in New Zealand',
    description: 'Comprehensive comparison of marine insurance providers in NZ',
    url: 'https://www.yachtinsurance.co.nz/compare',
    publisher: {
      '@type': 'Organization',
      name: 'YachtInsurance.co.nz',
      url: 'https://www.yachtinsurance.co.nz',
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
        item: 'https://www.yachtinsurance.co.nz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Compare Insurers',
        item: 'https://www.yachtinsurance.co.nz/compare',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Full Above-Fold Hero with Background Image */}
      <section
        className="relative min-h-[100vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1626869710563-be671a0cd919?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text */}
            <div className="lg:col-span-3">
              <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white font-medium">Compare Insurers</span>
              </nav>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Compare Yacht Insurance Providers
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Side-by-side comparison of New Zealand's leading marine insurers. Find the right provider for your vessel.
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <p className="leading-relaxed text-lg">
                  New Zealand has 1.6 million recreational vessels and the highest boat ownership per capita in the world. With numerous yacht and boat insurance providers each offering different coverage options, premium rates, and specialties, this comparison helps you find the insurer that best matches your vessel type and insurance needs.
                </p>
                <p className="leading-relaxed">
                  Whether you own a small <Link href="/sectors/dinghy" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">dinghy</Link>, <Link href="/sectors/yacht" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">cruising yacht</Link>, <Link href="/sectors/racing-boat" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">racing boat</Link>, or <Link href="/sectors/jetski" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">jet ski</Link>, New Zealand's marine insurers have coverage options available. Compare ratings, minimum premiums, key features, and specialties to make an informed decision.
                </p>
                <p className="leading-relaxed">
                  While boat insurance isn't legally required in New Zealand, approximately 87% of boat owners carry coverage. Marinas, yacht clubs, and lenders typically require at minimum third-party liability insurance. <Link href="/coverage" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">Comprehensive coverage</Link> protects against hull damage, theft, storm damage, and personal liability — giving you peace of mind on the water.
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

      {/* Insurer Cards Grid - Above the Fold */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Insurer Profiles & Ratings
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compare New Zealand's leading marine insurance providers side-by-side
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insurers.map((insurer, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col ${
                  insurer.featured
                    ? 'border-2 border-amber-400 ring-2 ring-amber-400/30 bg-white scale-[1.02]'
                    : 'border-t-4 border-sky-600 bg-white'
                }`}
              >
                {/* Featured badge */}
                {insurer.featured && insurer.badge && (
                  <div className="absolute -top-px left-0 right-0 flex justify-center">
                    <span className="bg-amber-400 text-slate-900 text-xs font-black tracking-widest px-5 py-1 rounded-b-lg shadow">
                      {insurer.badge}
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className={`p-6 pb-4 border-b border-slate-200 ${insurer.featured ? 'pt-8' : ''}`}>
                  <h3 className={`text-lg font-bold mb-3 ${insurer.featured ? 'text-amber-600' : 'text-slate-900'}`}>
                    {insurer.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(insurer.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      {insurer.rating}/5
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {insurer.description}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow">
                  <div className="mb-6">
                    <p className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">
                      Pricing
                    </p>
                    <p className={`text-lg font-bold ${insurer.featured ? 'text-amber-600' : 'text-sky-600 text-2xl'}`}>
                      {insurer.featured ? insurer.minPremium : <><span className="text-xs font-normal text-slate-400">from </span>{insurer.minPremium}</>}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-3 uppercase tracking-wide">
                      Key Specialties
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {insurer.specialties.slice(0, 3).map((specialty, i) => (
                        <span
                          key={i}
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            insurer.featured
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-sky-50 text-sky-700'
                          }`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className={`p-6 pt-4 border-t ${insurer.featured ? 'border-amber-100 bg-amber-50' : 'border-slate-200 bg-slate-50'}`}>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      insurer.featured
                        ? 'bg-amber-400 text-slate-900 hover:bg-amber-500'
                        : 'bg-sky-600 text-white hover:bg-sky-700'
                    }`}
                  >
                    Get Quote
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Callout */}
      <section className="py-8 bg-teal-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-lg leading-snug">
                Not sure which provider suits your vessel? Our advisers compare these options on your behalf.
              </p>
              <p className="text-teal-100 text-sm mt-1">
                Submit one form — a licensed marine insurance adviser will review your vessel details and come back with the most suitable coverage and pricing within 24 hours. No obligation.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-block px-7 py-3 bg-white text-teal-700 rounded-lg font-bold text-sm hover:bg-teal-50 transition-colors whitespace-nowrap shadow"
            >
              Get Expert Advice →
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Comparison Table */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Provider Comparison Table
            </h2>
            <p className="text-lg text-slate-600">
              Side-by-side comparison of features across major NZ yacht insurance providers
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto bg-white rounded-lg shadow-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Insurer</th>
                  <th className="px-6 py-4 text-center font-bold">Rating</th>
                  <th className="px-6 py-4 text-center font-bold">Min Premium</th>
                  <th className="px-6 py-4 text-left font-bold">Key Specialties</th>
                  <th className="px-6 py-4 text-center font-bold">Hull Cover</th>
                  <th className="px-6 py-4 text-center font-bold">Liability</th>
                </tr>
              </thead>
              <tbody>
                {insurers.map((insurer, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {insurer.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <span className="font-bold text-amber-500">{insurer.rating}</span>
                        <span className="text-xs text-slate-500">/5</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-medium text-sky-600">
                      <span className="text-xs font-normal text-slate-400">from </span>{insurer.minPremium}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {insurer.specialties.slice(0, 2).join(', ')}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison */}
          <div className="lg:hidden space-y-6">
            {insurers.map((insurer, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-900 text-white px-6 py-4">
                  <h3 className="font-bold text-lg mb-2">{insurer.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(insurer.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}
                        />
                      ))}
                    </div>
                    <span className="text-sm">{insurer.rating}/5</span>
                  </div>
                </div>
                <div className="px-6 py-4 space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-1">Min Premium</p>
                    <p className="text-xl font-bold text-sky-600"><span className="text-xs font-normal text-slate-400">from </span>{insurer.minPremium}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-2">Specialties</p>
                    <p className="text-slate-700">{insurer.specialties.join(', ')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-green-600" />
                      <span className="text-sm text-slate-700">Hull Cover</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-green-600" />
                      <span className="text-sm text-slate-700">Liability</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section — 5 columns */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How to Choose the Right Marine Insurer
            </h2>
            <p className="text-lg text-slate-600">
              Five key considerations when selecting a yacht insurance provider
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {chooseInsurertips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all text-center group">
                <div className="mx-auto mb-3 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {tip.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA underneath */}
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-sky-600 to-teal-500 text-white rounded-xl font-semibold text-lg hover:from-sky-700 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Compare Quotes Now →
            </Link>
            <p className="text-sm text-slate-500 mt-3">No obligation, no brokerage fees</p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Understanding Yacht Insurance in New Zealand
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              Yacht and boat insurance is a specialized form of marine insurance that protects vessel owners against financial risks associated with boat ownership and operation. In New Zealand, where boating is a popular recreational activity, several insurance providers specialize in marine coverage with expertise in local conditions and specific vessel types.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">How We Compare Providers</h3>
            <p>
              YachtInsurance.co.nz is a specialist marine insurance referral service. When you submit a quote request, your details go to a licensed marine insurance adviser who reviews the market on your behalf — matching your vessel type, usage, and location with the most appropriate coverage options. Our featured partner, Keane, is a specialist marine underwriter able to cover virtually any vessel on any waters, including complex risks that general insurers will not write.
            </p>

            <p>
              The comparison on this page covers the main providers active in the NZ marine market: specialist marine underwriters, general insurers with dedicated marine products, and broker-placed cover for higher-value or complex risks. Each provider has strengths suited to particular vessel types and usage patterns — which is why matching the right underwriter to your specific situation matters more than simply choosing the provider with the most marketing presence.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Specialist vs General Insurers</h3>
            <p>
              The market divides broadly into specialist marine underwriters and general insurers offering boat cover as a product extension. Specialist underwriters — including Keane, Gallagher, Baileys, and Star Insurance — focus exclusively on marine risks, employ experienced marine claims handlers, and can write policies for vessels or situations that fall outside general insurer appetites: liveaboards, bluewater passage cover, classic or high-value vessels, and offshore cruising beyond standard navigation limits. General insurers like Tower, AMI, and NZI offer competitive pricing for standard recreational vessel types, and appeal particularly to owners who want to consolidate policies under one provider.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">What Drives Premium Differences</h3>
            <p>
              Premium quotes for the same vessel can vary substantially between providers because each insurer applies different underwriting criteria. Key factors include vessel type and hull material, agreed insured value, navigation area limits, mooring and storage arrangement, the owner&apos;s boating experience and claims history, and whether racing or charter use is involved. A specialist underwriter may price a bluewater cruiser or liveaboard vessel more competitively than a general insurer — or vice versa for a standard trailered runabout. <Link href="/coverage" className="text-sky-600 hover:text-sky-700 font-semibold">Understanding coverage types</Link> helps you compare like-for-like when reviewing quotes.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Claims Handling Matters as Much as Price</h3>
            <p>
              The real test of an insurer is how it behaves at claim time. Specialist marine insurers typically employ marine surveyors and engineers who understand vessel damage in a way that general claims handlers may not. This translates to more accurate assessments, faster resolution, and fewer disputes over repair methodology or replacement values. When comparing providers, look beyond the premium figure to the insurer&apos;s track record, claims process, and whether they have <Link href="/claims" className="text-sky-600 hover:text-sky-700 font-semibold">dedicated claims support</Link> for marine incidents.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">ICNZ Fair Insurance Code</h3>
            <p>
              All providers listed on this page operate under the Insurance Council of New Zealand (ICNZ) Fair Insurance Code, which sets minimum standards for policy clarity, claims handling timeframes, and complaints resolution. If a claim is disputed, the ICNZ process provides a structured escalation path before formal dispute resolution. Our advisers are licensed under the Financial Markets Conduct Act and operate under disclosure obligations — meaning you will always be told how they are remunerated before a policy is placed.
            </p>

            <p className="text-slate-600 italic mt-8">
              The most efficient path to the right cover is a single conversation with an adviser who knows the market. Submit your details and a licensed marine insurance adviser will come back with coverage options matched to your vessel within 24 hours.
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
                <Link href="/coverage" className="text-sky-600 hover:text-sky-700">What's Covered in Yacht Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Understand all coverage types, from hull and machinery to specialized racing and offshore cruising protection.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/faqs" className="text-sky-600 hover:text-sky-700">Frequently Asked Questions</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Get answers about selecting the right insurer, coverage differences, and how providers are rated.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/sectors/yacht" className="text-sky-600 hover:text-sky-700">Yacht Insurance Specialists</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Find specialized coverage for yachts, racing boats, jet skis, dinghies, and other vessel types.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/contact" className="text-sky-600 hover:text-sky-700">Get Your Quote</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Start comparing quotes from NZ's leading marine insurers and find the best value for your vessel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
