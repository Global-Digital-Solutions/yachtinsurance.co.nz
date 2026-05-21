import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Shield, Anchor, Mail } from 'lucide-react';
import { faqs } from '@/data/faqs';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Yacht Insurance FAQs | Common Questions Answered | YachtInsurance.co.nz',
  description: 'Find answers to frequently asked questions about yacht and boat insurance in New Zealand. Learn about coverage, costs, claims, racing insurance, offshore sailing and more.',
  keywords: [
    'yacht insurance faq',
    'boat insurance questions nz',
    'marine insurance nz faq',
    'yacht insurance cost nz',
    'boat insurance claims nz',
    'jet ski insurance nz',
    'offshore sailing insurance',
    'racing yacht insurance nz',
    'marine liability insurance nz',
    'vessel insurance questions',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.yachtinsurance.co.nz/faqs',
    title: 'Yacht Insurance FAQs | Common Questions Answered',
    description: 'Find answers to frequently asked questions about yacht and boat insurance in New Zealand.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Yacht sailing in New Zealand waters',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/faqs',
  },
};

export default function FAQsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
        name: 'FAQs',
        item: 'https://www.yachtinsurance.co.nz/faqs',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">FAQs</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg max-w-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-3xl leading-relaxed">
            Everything you need to know about yacht and marine insurance in New Zealand
          </p>
          <div className="space-y-4 text-slate-300 max-w-3xl">
            <p>
              Navigating yacht and boat insurance in New Zealand can feel overwhelming, especially if you&apos;re a first-time boat owner or switching providers. Below we&apos;ve compiled the most common questions our visitors ask about marine insurance coverage, costs, claims, and policy features. If you can&apos;t find the answer you&apos;re looking for, feel free to{' '}
              <Link href="/contact" className="text-sky-300 hover:text-white transition-colors font-medium underline underline-offset-2">
                contact us directly
              </Link>{' '}
              for personalised advice from a qualified NZ marine insurance adviser.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-200 hover:border-sky-300 transition-all shadow-sm hover:shadow-md"
              >
                <summary className="flex items-center justify-between w-full p-6 cursor-pointer font-semibold text-slate-900 hover:text-sky-600 transition-colors text-left">
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 ml-11">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Additional Context Section */}
          <div className="mt-16 bg-sky-50 rounded-2xl p-8 md:p-10 border border-sky-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Understanding Yacht Insurance in New Zealand
            </h2>
            <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed">
              <p>
                New Zealand is a maritime nation with over 1.6 million recreational vessels registered across the country.
                From the Bay of Islands to the Marlborough Sounds, Kiwi boat owners enjoy some of the best cruising
                grounds in the world. However, with this privilege comes the responsibility of properly insuring your
                vessel against the unique risks of New Zealand waters — from unpredictable weather patterns to the
                specific navigational hazards found around our coastline.
              </p>
              <p>
                Marine insurance in New Zealand is regulated by the Insurance Council of New Zealand (ICNZ) and governed
                by the Marine Insurance Act 1908, which sets out the legal framework for marine insurance contracts.
                Unlike car insurance, marine insurance is not compulsory in New Zealand. However, most lenders,
                marinas, and mooring facilities require proof of insurance before they will allow your vessel to be
                stored or financed through them. Understanding what your policy covers — and what it excludes — is
                essential for making an informed decision.
              </p>
              <p>
                At YachtInsurance.co.nz, we compare policies from over 10 leading NZ marine insurers to help you find
                the right balance of coverage and cost. Whether you own a small dinghy, a coastal cruiser, a racing
                yacht, or a blue water vessel, our comparison service connects you with specialist marine insurance
                advisers who understand the unique needs of New Zealand boaters. There are no brokerage fees, no
                obligations — just clear, unbiased information to help you protect your investment on the water.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            <Link
              href="/coverage"
              className="flex items-center gap-3 p-5 bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="p-2 bg-sky-100 rounded-lg group-hover:bg-sky-200 transition-colors">
                <Shield size={20} className="text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">Coverage Types</p>
                <p className="text-sm text-slate-500">Hull, liability &amp; more</p>
              </div>
            </Link>
            <Link
              href="/compare"
              className="flex items-center gap-3 p-5 bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors">
                <Anchor size={20} className="text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">Compare Insurers</p>
                <p className="text-sm text-slate-500">Side-by-side comparison</p>
              </div>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 p-5 bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                <Mail size={20} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">Get a Quote</p>
                <p className="text-sm text-slate-500">No obligation</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
