import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ChevronRight, MapPin, Anchor, Shield, HelpCircle } from 'lucide-react';
import { locations } from '@/data/locations';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `https://www.yachtinsurance.co.nz/locations/${slug}/` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://www.yachtinsurance.co.nz/locations/${slug}/`,
      type: 'website',
      siteName: 'Yacht Insurance NZ',
      images: [{ url: loc.heroImage, width: 1920, height: 1080, alt: `${loc.name} yacht insurance` }],
    },
  };
}

const author = {
  name: 'Liam Ngata',
  role: 'Marine Insurance Specialist',
  bio: 'Liam has 12 years of experience in marine insurance across New Zealand. He specialises in matching boat owners with the right cover for their specific vessel, waters, and budget.',
};

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  const pageUrl = `https://www.yachtinsurance.co.nz/locations/${slug}/`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': pageUrl,
    name: `Yacht Insurance ${loc.name}`,
    description: loc.metaDescription,
    url: pageUrl,
    areaServed: { '@type': 'City', name: loc.name, containedInPlace: { '@type': 'Country', name: 'New Zealand' } },
    provider: { '@type': 'Organization', name: 'YachtInsurance.co.nz', url: 'https://www.yachtinsurance.co.nz' },
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${loc.name} Yacht & Marine Insurance Guide`,
    description: loc.metaDescription,
    url: pageUrl,
    author: { '@type': 'Person', name: author.name, jobTitle: author.role },
    publisher: { '@type': 'Organization', name: 'YachtInsurance.co.nz', url: 'https://www.yachtinsurance.co.nz' },
    datePublished: '2026-04-01',
    dateModified: '2026-04-23',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: loc.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.yachtinsurance.co.nz' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.yachtinsurance.co.nz/locations/' },
      { '@type': 'ListItem', position: 3, name: loc.name, item: pageUrl },
    ],
  };

  const otherLocations = locations.filter((l) => l.slug !== slug).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${loc.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/55 to-slate-900/25" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations/" className="hover:text-white transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-white font-medium">{loc.name}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-sky-400" />
            <span className="text-sky-300 font-medium text-sm">{loc.region}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl drop-shadow-lg">
            Yacht &amp; Boat Insurance in {loc.name}
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            {loc.metaDescription}
          </p>
        </div>
      </section>

      {/* Main content + form */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Article */}
            <div className="lg:col-span-2 prose-slate max-w-none">

              {/* Author */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-sky-50 rounded-xl border border-sky-100">
                <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{author.name}</p>
                  <p className="text-sky-600 text-xs font-medium">{author.role}</p>
                </div>
              </div>

              {/* Intro */}
              <div className="space-y-4 mb-10">
                {loc.intro.split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed text-[17px]">{para}</p>
                ))}
              </div>

              {/* Local facts */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-10">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Anchor className="w-5 h-5 text-sky-600" /> {loc.name} Boating at a Glance
                </h2>
                <ul className="space-y-3">
                  {loc.localFacts.map((fact, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Boating context */}
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Boating Conditions in {loc.name}</h2>
              <div className="space-y-4 mb-10">
                {loc.boatingContext.split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed text-[17px]">{para}</p>
                ))}
              </div>

              {/* Coverage advice */}
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Insurance Advice for {loc.name} Boat Owners</h2>
              <div className="space-y-4 mb-10">
                {loc.coverageAdvice.split('\n\n').map((para, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed text-[17px]">{para}</p>
                ))}
              </div>

              {/* Coverage types */}
              <div className="bg-sky-900 rounded-xl p-6 mb-10 text-white">
                <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-sky-300" /> Key Cover Types for {loc.name} Vessels
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Hull & Machinery', desc: 'Physical damage to your vessel' },
                    { label: 'Third-Party Liability', desc: 'Damage or injury to others' },
                    { label: 'Personal Effects', desc: 'On-board gear and electronics' },
                    { label: 'Salvage & Wreck Removal', desc: 'Recovery costs if vessel sinks' },
                    { label: 'Offshore Cover', desc: 'Extended range beyond coastal waters' },
                    { label: 'Storm Damage', desc: 'Weather-related loss and damage' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start bg-white/10 rounded-lg p-3">
                      <CheckCircle2 className="w-4 h-4 text-sky-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">{item.label}</p>
                        <p className="text-sky-200 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-sky-600" /> Frequently Asked Questions
              </h2>
              <div className="space-y-4 mb-10">
                {loc.faqs.map((faq, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Author bio */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-3">About the Author</p>
                <div className="flex gap-4 items-start">
                  <div className="w-14 h-14 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{author.name}</p>
                    <p className="text-sky-600 text-sm font-medium mb-2">{author.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{author.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky form */}
            <div className="lg:sticky lg:top-8 h-fit">
              <QuoteForm mode="full" />
            </div>
          </div>
        </div>
      </section>

      {/* Other locations */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Marine Insurance Across New Zealand</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}/`}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-sky-600 transition-colors text-sm">{other.name}</p>
                    <p className="text-xs text-slate-500">{other.region}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/locations/" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium text-sm">
              View all locations <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
