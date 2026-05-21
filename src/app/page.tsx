import type { Metadata } from 'next';
import Link from 'next/link';
import { Ship, Waves, Sailboat, Anchor, Trophy, Compass, Globe, Shield, DollarSign, Lock, CloudRain, ChevronRight } from 'lucide-react';
import HowItWorks from '@/components/HowItWorks';
import AnimatedStats from '@/components/AnimatedStats';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import AnimatedTrustBar from '@/components/AnimatedTrustBar';
import { insurers } from '@/data/insurers';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Yacht Insurance NZ | Compare & Save | YachtInsurance.co.nz',
  description: 'Compare top yacht and marine insurance providers in New Zealand. Get instant quotes for boat, yacht, jet ski and marine insurance from specialists like Mariner, Tower and NMI. Save on premiums today.',
  keywords: [
    'yacht insurance nz',
    'boat insurance nz',
    'marine insurance new zealand',
    'jet ski insurance nz',
    'boat insurance quotes',
    'yacht insurance comparison',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz',
    title: 'Yacht Insurance NZ | Compare & Save',
    description: 'Compare top yacht and marine insurance providers in New Zealand. Get instant quotes for boat, yacht, jet ski and marine insurance.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Luxury yacht sailing in New Zealand waters',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz',
  },
};

const vesselTypes = [
  {
    title: 'Yacht',
    icon: Ship,
    description: 'Comprehensive coverage for sailing and motor yachts of all sizes',
    link: '/sectors/yacht',
    image: 'https://images.unsplash.com/photo-1701979343436-37b840cba400?w=600&h=400&fit=crop',
  },
  {
    title: 'Jet Ski',
    icon: Waves,
    description: 'Specialist personal watercraft insurance with liability protection',
    link: '/sectors/jetski',
    image: 'https://images.unsplash.com/photo-1768722688751-5d995b9e6393?w=600&h=400&fit=crop',
  },
  {
    title: 'Dinghy',
    icon: Sailboat,
    description: 'Affordable coverage for small sailing dinghies and tenders',
    link: '/sectors/dinghy',
    image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=600&h=400&fit=crop',
  },
  {
    title: 'Tender',
    icon: Anchor,
    description: 'Protection for auxiliary vessels and rescue dinghies',
    link: '/sectors/tender',
    image: 'https://images.unsplash.com/photo-1643476821614-33ae2ec8092b?w=600&h=400&fit=crop',
  },
  {
    title: 'Racing Boat',
    icon: Trophy,
    description: 'Specialized racing yacht insurance including competition coverage',
    link: '/sectors/racing-boat',
    image: 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=600&h=400&fit=crop',
  },
  {
    title: 'Coastal Cruising',
    icon: Compass,
    description: 'Perfect for vessels that cruise NZ regional and Tasman waters',
    link: '/sectors/coastal-cruising',
    image: 'https://images.unsplash.com/photo-1626869710563-be671a0cd919?w=600&h=400&fit=crop',
  },
  {
    title: 'Blue Water Cruiser',
    icon: Globe,
    description: 'Extended offshore coverage for international blue water passages',
    link: '/sectors/bluewater',
    image: 'https://images.unsplash.com/photo-1696028354827-0d36454dcaa8?w=600&h=400&fit=crop',
  },
];

const benefitCards = [
  {
    title: 'Hull & Machinery Protection',
    description: 'Comprehensive damage coverage for your vessel structure and engine systems',
    icon: Shield,
  },
  {
    title: 'Third-Party Liability',
    description: 'Protection against claims from damage to other vessels, swimmers, or property',
    icon: DollarSign,
  },
  {
    title: 'Theft & Vandalism Cover',
    description: 'Full replacement value if your vessel is stolen or deliberately damaged',
    icon: Lock,
  },
  {
    title: 'Storm & Weather Damage',
    description: 'Coverage for weather-related damage including wind, hail, and rough seas',
    icon: CloudRain,
  },
];

export default function Home() {
  const topInsurers = insurers.slice(0, 4);
  const homepageFaqs = faqs.slice(0, 5);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homepageFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative h-auto min-h-[78vh] sm:h-[78vh] sm:min-h-[580px] flex flex-col items-center justify-start sm:justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1625045641924-3c15809b6689?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        {/* Light Overlay Gradient - keeps image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/30 to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10 flex-grow flex flex-col justify-center pt-8 sm:pt-0">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-3xl drop-shadow-lg">
            Compare Yacht Insurance in New Zealand
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
            Find the right marine insurance for your vessel. Compare quotes from multiple top NZ insurers and save on your annual premium.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 sm:py-4 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Get a Quote
            </Link>
            <Link
              href="/compare"
              className="px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-sm border-2 border-white/60 text-white rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Compare Insurers
            </Link>
          </div>
        </div>

        {/* Animated Trust Bar - Overlaying Hero */}
        <AnimatedTrustBar />
      </section>

      {/* Vessel Types Grid */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Insurance for Every Vessel Type
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized coverage options tailored to your vessel's specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vesselTypes.map((vessel, index) => {
              const Icon = vessel.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full overflow-hidden group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={vessel.image}
                      alt={`${vessel.title} insurance in New Zealand`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="p-2 bg-white/90 rounded-lg backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-sky-600" />
                      </div>
                      <h3 className="text-lg font-bold text-white drop-shadow-md">{vessel.title}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-slate-600 text-sm mb-4 flex-grow">
                      {vessel.description}
                    </p>
                    <Link
                      href={vessel.link}
                      className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors text-sm"
                    >
                      Learn More
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note for 7 items in lg view */}
          <div className="block lg:hidden mt-6">
            <Link
              href="/vessels"
              className="w-full block text-center px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors"
            >
              View All Vessel Types
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Insure Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-sky-900/75 to-slate-900/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Insure Your Vessel?
            </h2>
            <p className="text-lg text-sky-200 max-w-2xl mx-auto">
              Comprehensive protection for your marine investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitCards.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-sky-400/50 transition-all"
                >
                  <div className="p-3 bg-sky-400/20 border border-sky-400/30 rounded-lg mb-4 w-fit">
                    <Icon className="w-6 h-6 text-sky-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sky-100/80 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Featured Insurers Preview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Insurance Partners
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Leading NZ marine insurers covering vessels across the country
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topInsurers.map((insurer, index) => (
              <div
                key={index}
                className={`relative rounded-lg p-6 hover:shadow-lg transition-all ${
                  insurer.featured
                    ? 'bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-400 ring-2 ring-amber-400/20 scale-[1.02]'
                    : 'bg-gradient-to-br from-slate-50 to-sky-50 border border-sky-200'
                }`}
              >
                {insurer.featured && insurer.badge && (
                  <div className="absolute -top-px left-0 right-0 flex justify-center">
                    <span className="bg-amber-400 text-slate-900 text-xs font-black tracking-widest px-4 py-0.5 rounded-b-lg">
                      {insurer.badge}
                    </span>
                  </div>
                )}
                <div className={`flex items-center justify-between mb-4 ${insurer.featured ? 'mt-3' : ''}`}>
                  <h3 className={`text-lg font-bold ${insurer.featured ? 'text-amber-600' : 'text-slate-900'}`}>
                    {insurer.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-amber-500">
                      {insurer.rating}
                    </span>
                    <span className="text-xs text-slate-500">/5</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {insurer.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">Pricing</p>
                  <p className={`text-lg font-semibold ${insurer.featured ? 'text-amber-600' : 'text-sky-600'}`}>
                    {insurer.featured ? insurer.minPremium : <><span className="text-xs font-normal text-slate-500">from </span>{insurer.minPremium}</>}
                  </p>
                </div>
                <Link
                  href="/compare"
                  className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full text-center ${
                    insurer.featured
                      ? 'bg-amber-400 text-slate-900 hover:bg-amber-500'
                      : 'bg-sky-600 text-white hover:bg-sky-700'
                  }`}
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/compare"
              className="inline-block px-8 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors"
            >
              Compare All {insurers.length} Insurers
            </Link>
          </div>
        </div>
      </section>

      {/* Mini Quote Form Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1696028354827-0d36454dcaa8?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-sky-900/70 to-slate-900/80" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Quote in 2 Minutes
            </h2>
            <p className="text-lg text-sky-200">
              No credit card required. Instant quotes from multiple insurers.
            </p>
          </div>

          <QuoteForm mode="compact" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to common yacht insurance questions
            </p>
          </div>

          <div className="space-y-4">
            {homepageFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-lg border border-slate-200 hover:border-sky-300 transition-colors"
              >
                <summary className="flex items-center justify-between w-full p-6 cursor-pointer font-semibold text-slate-900 hover:text-sky-600 transition-colors">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faqs"
              className="inline-block px-8 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors"
            >
              View More FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
