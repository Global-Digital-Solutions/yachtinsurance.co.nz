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
    url: 'https://www.yachtinsurance.co.nz/contact',
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
    canonical: 'https://www.yachtinsurance.co.nz/contact',
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
    url: 'https://www.yachtinsurance.co.nz/contact',
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
        item: 'https://www.yachtinsurance.co.nz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://www.yachtinsurance.co.nz/contact',
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 via-slate-900/40 to-slate-900/15" />
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

      {/* Separator strip */}
      <section className="bg-white border-y border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { value: '24 hrs', label: 'Average response time', icon: (
                <svg className="w-6 h-6 text-teal-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )},
              { value: '$0', label: 'Brokerage fees charged', icon: (
                <svg className="w-6 h-6 text-teal-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
                </svg>
              )},
              { value: 'All types', label: 'Vessels & watercraft covered', icon: (
                <svg className="w-6 h-6 text-teal-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              )},
              { value: 'Licensed', label: 'FMCA-regulated advisers', icon: (
                <svg className="w-6 h-6 text-teal-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              )},
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                {item.icon}
                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/97 via-slate-900/92 to-teal-900/88" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block text-teal-400 text-xs font-bold tracking-widest uppercase mb-3 bg-teal-400/10 px-4 py-1.5 rounded-full border border-teal-400/20">
              Simple · Fast · Expert
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              One form connects you with a specialist marine insurance adviser who handles the rest
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid md:grid-cols-3 gap-8 md:gap-0">

            {/* Connector line between circles — desktop only */}
            <div className="hidden md:block absolute top-[52px] left-[calc(50%/3+40px)] right-[calc(50%/3+40px)] h-px bg-gradient-to-r from-teal-500 via-sky-400 to-teal-500 z-0 opacity-50" />

            {[
              {
                step: '01',
                title: 'Tell Us About Your Vessel',
                description: 'Fill in our 2-minute form with your vessel type, value, and how you use it. No commitment, no credit card — just the basics so we can match you accurately.',
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'We Search the Market',
                description: 'A licensed marine insurance adviser reviews your details and searches specialist underwriters on your behalf to find the most suitable cover at the best available rate.',
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Get Covered Within 24 Hours',
                description: "Receive tailored coverage recommendations within 24 hours. Your adviser explains your options in plain English and arranges the policy — at no cost to you.",
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center px-4 md:px-8">
                {/* Step circle */}
                <div className="relative w-[104px] h-[104px] rounded-full bg-gradient-to-br from-teal-500 to-sky-600 flex flex-col items-center justify-center mb-7 shadow-2xl shadow-teal-900/50 ring-4 ring-slate-900 ring-offset-0">
                  <span className="text-teal-200 text-[9px] font-black tracking-widest uppercase mb-0.5">{item.step}</span>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="#quote-form"
              className="inline-block px-10 py-4 bg-gradient-to-r from-teal-500 to-sky-500 text-white rounded-xl font-bold text-lg hover:from-teal-400 hover:to-sky-400 transition-all shadow-2xl shadow-teal-900/50 hover:-translate-y-0.5 transform"
            >
              Get My Quote Now →
            </a>
            <p className="text-slate-400 text-sm mt-3">No obligation &nbsp;·&nbsp; No brokerage fees &nbsp;·&nbsp; Response within 24 hours</p>
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
