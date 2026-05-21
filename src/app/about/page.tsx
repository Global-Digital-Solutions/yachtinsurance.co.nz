import type { Metadata } from 'next';
import Link from 'next/link';
import { Eye, TrendingUp, Award, Users, Shield, CheckCircle, BookOpen } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'About YachtInsurance.co.nz | NZ Boat Insurance Comparison',
  description: 'Learn about YachtInsurance.co.nz, how we help NZ boat owners find better marine insurance coverage, and our commitment to transparency and independence.',
  keywords: [
    'about yacht insurance nz',
    'insurance comparison nz',
    'marine insurance broker',
    'boat insurance quotes nz',
    'insurance council nz',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/about',
    title: 'About YachtInsurance.co.nz',
    description: 'Learn about our mission to help NZ boat owners find better yacht and marine insurance.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1625694175188-8f596781bed9?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'YachtInsurance.co.nz team',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/about',
  },
};

const values = [
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We provide honest, unbiased information about insurance options. No hidden fees, no sponsored recommendations—just clear facts to help you decide.',
  },
  {
    icon: Shield,
    title: 'Independence',
    description: 'We are not owned by any insurance company. Our recommendations are based solely on your needs and available coverage, never influenced by commission structures.',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Our team understands marine insurance thoroughly. We know the differences between providers, coverage options, and what matters most for New Zealand boating.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Every recommendation we make puts your interests first. We want you to find better coverage at fairer prices, building trust through consistent delivery.',
  },
];


export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About YachtInsurance.co.nz',
    description: 'Information about YachtInsurance.co.nz and our commitment to transparent, independent yacht insurance comparison',
    url: 'https://yachtinsurance.co.nz/about',
    publisher: {
      '@type': 'Organization',
      name: 'YachtInsurance.co.nz',
      url: 'https://yachtinsurance.co.nz',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'info@yachtinsurance.co.nz',
      },
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
        name: 'About',
        item: 'https://yachtinsurance.co.nz/about',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Full Above-Fold Hero with Background Image */}
      <section
        className="relative min-h-[100vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1625694175188-8f596781bed9?w=1920&h=1080&fit=crop)',
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
                <span className="text-white font-medium">About</span>
              </nav>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                About YachtInsurance.co.nz
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-2xl leading-relaxed">
                Helping New Zealand boat owners find better yacht and marine insurance coverage
              </p>
              <div className="space-y-4 text-slate-300 max-w-2xl">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Our Mission
                  </h2>
                  <p className="leading-relaxed text-lg mb-4">
                    YachtInsurance.co.nz exists to simplify yacht and boat insurance for New Zealand vessel owners. We believe finding the right insurance shouldn't be complicated or time-consuming.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Our mission is to provide transparent, independent insurance <Link href="/compare" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">comparison services that help you find better coverage</Link> at fairer premiums. We <Link href="/compare" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">compare policies from New Zealand's leading marine insurers</Link>, explaining <Link href="/coverage" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">coverage differences</Link> so you can make informed decisions.
                  </p>
                  <p className="leading-relaxed">
                    Whether you own a small recreational boat, a <Link href="/sectors/yacht" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">cruising yacht</Link>, or a <Link href="/sectors/racing-boat" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">racing vessel</Link>, we're committed to matching you with the insurance provider and coverage level that best fits your needs and budget. <Link href="/contact" className="text-sky-300 hover:text-white underline underline-offset-2 transition-colors">Get a quote today</Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="lg:col-span-2">
              <QuoteForm mode="full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            How We Started
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              YachtInsurance.co.nz was founded by marine industry professionals who recognized a significant gap in the New Zealand boating market. While insurance is essential for vessel owners, the process of finding suitable coverage was fragmented, time-consuming, and often left boat owners uncertain whether they had the best available rates and options.
            </p>

            <p>
              Our founders spent years working within the marine industry—from boat ownership and yacht management to insurance brokerage—and saw firsthand how challenging it was for vessel owners to navigate insurance options. Each year, they watched fellow boaters settle for insurance that wasn't ideal simply because comparing options was too difficult.
            </p>

            <p>
              That frustration inspired us to create a better way. In 2022, we launched YachtInsurance.co.nz with a single clear goal: help every New Zealand boat owner find the right insurance, quickly and transparently.
            </p>

            <p>
              Today, we've built relationships with major marine insurance providers in New Zealand. We maintain detailed knowledge of each insurer's coverage options, specialty focuses, and claims handling processes. This expertise allows us to guide vessel owners toward the providers and policies that genuinely fit their specific needs.
            </p>

            <p>
              Whether you're buying your first boat insurance policy or shopping for a better rate on your annual renewal, our platform handles the complexity so you can focus on enjoying your vessel on New Zealand waters.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-sky-50 to-slate-50 rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-sky-100 rounded-lg mb-4 w-fit">
                    <Icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Compare Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            How We Compare Insurers
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            Our process ensures you get comprehensive, accurate comparisons
          </p>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Deep Insurer Analysis',
                description: 'We analyze each marine insurer\'s coverage options, pricing structures, claims processes, and specializations. Our team stays current with policy changes and new offerings across the NZ market.',
              },
              {
                step: '2',
                title: 'Vessel-Specific Evaluation',
                description: 'When you request quotes, we assess your specific vessel details—type, value, usage patterns, and coverage needs—to match you with insurers offering optimal protection.',
              },
              {
                step: '3',
                title: 'Multi-Provider Quotes',
                description: 'We obtain quotes from multiple insurers using your information, ensuring you see a range of premium options and coverage levels available in the market.',
              },
              {
                step: '4',
                title: 'Transparent Presentation',
                description: 'We present all quotes side-by-side with clear explanations of coverage differences, exclusions, and optional add-ons so you can compare effectively.',
              },
              {
                step: '5',
                title: 'Ongoing Support',
                description: 'Our team helps answer questions about coverage options, explains policy terms, and supports you throughout the selection process until you\'re confident in your choice.',
              },
            ].map((process, idx) => (
              <div key={idx} className="flex gap-6 items-start bg-white p-6 rounded-lg border border-slate-200">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-600 text-white font-bold text-lg">
                    {process.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-slate-600">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICNZ Compliance Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border-l-4 border-sky-600 p-8 shadow-md">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <BookOpen className="w-8 h-8 text-sky-600" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Insurance Council of New Zealand (ICNZ) Compliance
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  YachtInsurance.co.nz operates in compliance with the Insurance Council of New Zealand (ICNZ) regulations and professional standards. The ICNZ is the peak body for the insurance industry in Aotearoa, ensuring member organizations maintain ethical practices, consumer protections, and industry compliance.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  All insurance providers we work with are ICNZ-registered and comply with New Zealand insurance regulations. This ensures they maintain appropriate reserves, follow fair claims practices, and adhere to professional standards that protect consumers.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Ethical Standards</h4>
                      <p className="text-sm text-slate-600 mt-1">We maintain highest ethical practices in insurance comparison and recommendation</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Consumer Protection</h4>
                      <p className="text-sm text-slate-600 mt-1">We prioritize your privacy and data security in all insurance comparisons</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Regulated Partners</h4>
                      <p className="text-sm text-slate-600 mt-1">All insurers we connect you with are ICNZ-registered and regulated</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Industry Oversight</h4>
                      <p className="text-sm text-slate-600 mt-1">We maintain compliance with ICNZ professional practice standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Why Choose YachtInsurance.co.nz
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              Choosing where to get yacht insurance quotes is an important decision. With YachtInsurance.co.nz, you benefit from several key advantages:
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">No Cost to Compare</h3>
            <p>
              Getting quotes through our platform is completely free. We don't charge boat owners any fees for comparing insurance options or accessing provider quotes. Our revenue comes from our insurer partnerships, never from customer charges.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Strong Market Coverage</h3>
            <p>
              We work with major marine insurance providers in New Zealand. Rather than contacting multiple insurers individually, you get access to a range of competitive options through a single request. This saves hours of research time and connects you with providers well-suited to your vessel and needs.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Expert Guidance</h3>
            <p>
              Our team understands marine insurance thoroughly. We explain <Link href="/coverage" className="text-sky-600 hover:text-sky-700 font-semibold">coverage differences</Link>, highlight what each policy includes and excludes, and help you understand what different coverage levels mean for your specific vessel and usage. This expert guidance helps you make confident decisions.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Tailored Recommendations</h3>
            <p>
              We don't recommend the same insurance for every boat owner. Your vessel type, value, usage patterns, and coverage needs are unique. Our process matches you with providers offering coverage that genuinely fits your situation, not generic one-size-fits-all recommendations.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Ongoing Support</h3>
            <p>
              Our relationship doesn't end when you select insurance. Our team continues to support you with policy questions, coverage clarifications, and assistance throughout the quote process and policy selection.
            </p>

            <p className="text-slate-600 italic mt-8">
              Ready to compare yacht insurance from New Zealand's leading providers? Start your quote comparison today and discover how much you could save on your marine insurance.
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
              <p className="text-slate-600 text-sm mb-4">Explore all coverage options available across different policy types and understand what protection is right for your vessel.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/compare" className="text-sky-600 hover:text-sky-700">Compare Insurance Providers</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">View side-by-side comparison of New Zealand's leading marine insurers and their ratings, specialties, and minimum premiums.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/faqs" className="text-sky-600 hover:text-sky-700">Frequently Asked Questions</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Get answers to common questions about yacht insurance coverage, costs, claims, and specialized coverage options.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/contact" className="text-sky-600 hover:text-sky-700">Get Your Quote</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Start comparing quotes from multiple NZ marine insurers and find the best coverage for your vessel today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
