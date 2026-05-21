import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Shield, BadgeCheck, Lock, Zap, CheckCircle2 } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Get Your Yacht Insurance Quote | YachtInsurance.co.nz',
  description: 'Get a no-obligation yacht insurance quote in under 2 minutes. Compare rates from multiple NZ insurers. ICNZ registered, 100% secure, instant response.',
  keywords: [
    'yacht insurance quote',
    'boat insurance quote nz',
    'marine insurance quote',
    'insurance quote',
    'yacht insurance contact',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/contact',
    title: 'Get Your Yacht Insurance Quote | YachtInsurance.co.nz',
    description: 'Get a no-obligation yacht insurance quote in under 2 minutes. Compare rates from multiple NZ insurers.',
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
    canonical: 'https://yachtinsurance.co.nz/contact',
  },
};

const trustBadges = [
  {
    icon: BadgeCheck,
    title: 'ICNZ Registered',
    description: 'Insurance Council of NZ verified',
  },
  {
    icon: Zap,
    title: 'No Broker Fees',
    description: 'Direct rates, no middleman markup',
  },
  {
    icon: Lock,
    title: '100% Secure',
    description: '256-bit SSL encryption on all data',
  },
  {
    icon: Zap,
    title: 'Instant Quotes',
    description: 'Same-day response from insurers',
  },
];

const whyChooseUs = [
  'Dedicated marine insurance specialists',
  'Personalized service from our expert team',
  'Access to exclusive insurer rates',
  'No hidden fees or surprise charges',
  'Fast claims support coordination',
  'Tailored coverage for all vessel types',
];

const contactFaqs = [
  faqs[0], // What does yacht insurance cover in NZ?
  faqs[1], // Do I need insurance for my yacht in New Zealand?
  faqs[4], // What is marine third-party liability?
];

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Yacht Insurance NZ Contact',
    description: 'Get your yacht insurance quote',
    url: 'https://yachtinsurance.co.nz/contact',
    email: 'hello@cover4you.co.nz',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'NZ',
      availableLanguage: 'en',
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
        name: 'Contact',
        item: 'https://yachtinsurance.co.nz/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section with Form */}
      <section
        id="quote-form"
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
                <span className="text-white font-medium">Contact</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg max-w-4xl">
                Get Your Yacht Insurance Quote
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-3xl leading-relaxed">
                Takes less than 2 minutes. No credit card required.
              </p>
              <div className="space-y-4 text-slate-300 max-w-3xl">
                <p>
                  Compare quotes from multiple top New Zealand marine insurers and find the perfect coverage for your yacht, boat, or jet ski.
                </p>
              </div>

              {/* Why Choose Us USP List */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-5">
                  Why Choose Yacht Insurance NZ?
                </h2>
                <ul className="space-y-3">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                  >
                    Learn More About Our Service
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Badge */}
                <div className="absolute -top-4 left-6 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-xs font-semibold z-10">
                  Takes less than 2 minutes
                </div>

                {/* Form Container */}
                <QuoteForm mode="full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting the right yacht insurance in New Zealand is simple with our comparison service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: '1', title: 'Tell Us About Your Vessel', description: 'Fill out our quick form with details about your boat, yacht, or jet ski. It takes less than 2 minutes and there\'s no obligation.', icon: '🚤' },
              { step: '2', title: 'We Compare Multiple Insurers', description: 'Our team contacts top NZ marine insurers on your behalf to find the best coverage options and most competitive premiums.', icon: '📊' },
              { step: '3', title: 'Get Your Tailored Quote', description: 'Receive personalised quotes within 24 hours. Choose the policy that suits you best with guidance from our expert advisors.', icon: '✅' },
            ].map((item) => (
              <div key={item.step} className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all group">
                <div className="absolute -top-5 left-8 w-10 h-10 bg-gradient-to-br from-sky-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {item.step}
                </div>
                <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Contact Info Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {[
              { value: '24hrs', label: 'Average Response Time' },
              { value: 'Multiple', label: 'Insurance Partners' },
              { value: 'All Types', label: 'Vessels Covered' },
              { value: '$0', label: 'Brokerage Fees' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-3xl lg:text-4xl font-bold text-sky-400 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Contact Info + Trust Badges */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-amber-600/20 rounded-xl">
                    <Shield className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Office Hours</p>
                    <p className="text-lg text-white font-semibold">Mon–Fri, 8:30am – 5:00pm NZST</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact/#quote-form"
                    className="inline-block w-full text-center px-6 py-3.5 bg-gradient-to-r from-sky-600 to-teal-500 text-white rounded-xl font-semibold text-lg hover:from-sky-700 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Complete a Quote Form
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust & Guarantee Badges */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">Our Guarantee</h3>

              <div className="grid grid-cols-2 gap-4">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                      <div className="p-2.5 bg-sky-600/20 rounded-lg w-fit mb-3">
                        <Icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <p className="font-semibold text-white text-sm mb-1">{badge.title}</p>
                      <p className="text-xs text-slate-400">{badge.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Below Form */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Insurance FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about yacht insurance in New Zealand
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg border border-slate-200 hover:border-sky-300 transition-colors"
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
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200">
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
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-sky-600 to-teal-500 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Vessel?
          </h2>
          <p className="text-lg text-sky-100 mb-8">
            Get your personalized insurance quote now and find the perfect coverage for your yacht or boat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote-form"
              className="px-8 py-3 bg-white text-sky-700 rounded-xl font-semibold hover:bg-sky-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Your Quote
            </a>
            <Link
              href="/compare"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-sky-700 transition-colors"
            >
              Compare All Insurers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
