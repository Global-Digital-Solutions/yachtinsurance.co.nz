import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, Shield } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Yacht Insurance Blog & Guides | YachtInsurance.co.nz',
  description:
    'Read expert guides on yacht insurance in New Zealand. Learn about coverage types, risk management, and how to protect your vessel with comprehensive insurance.',
  keywords: [
    'yacht insurance guides',
    'boat insurance blog',
    'marine insurance tips',
    'yacht insurance nz',
    'boat insurance advice',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.yachtinsurance.co.nz/blog',
    title: 'Yacht Insurance Blog & Guides',
    description:
      'Expert guides on yacht and marine insurance in New Zealand to help boat owners make informed decisions.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1774256627968-01e193f1e777?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Yacht sailing in blue water',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/blog',
  },
};

export default function BlogPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Yacht Insurance Blog & Guides',
    description:
      'Expert guides on yacht and marine insurance in New Zealand',
    url: 'https://www.yachtinsurance.co.nz/blog',
    mainEntity: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      articleBody: post.content,
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
        name: 'Blog',
        item: 'https://www.yachtinsurance.co.nz/blog',
      },
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[100vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(/blog-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 via-slate-900/40 to-slate-900/15" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Blog</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg max-w-4xl">
            Yacht Insurance Blog & Guides
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mb-6 max-w-3xl leading-relaxed">
            Expert insights and guides to help you protect your vessel and make informed insurance decisions
          </p>
          <div className="space-y-4 text-slate-300 max-w-3xl">
            <p>
              Explore our collection of expert articles on yacht insurance, marine coverage, risk management, and best practices for boat owners in New Zealand.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-sky-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-sky-600" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-sky-600" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-NZ', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-sky-600" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Shield size={16} className="text-white" />
            <span className="text-sm font-medium text-white">No-Obligation Quotes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Vessel?
          </h2>
          <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
            Compare quotes from multiple top NZ marine insurers and find the right coverage for your boat, yacht, or jet ski.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marine-proposal"
              className="px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </Link>
            <Link
              href="/compare"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-sky-700 transition-colors"
            >
              Compare Insurers
            </Link>
            <Link
              href="/coverage"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-sky-700 transition-colors"
            >
              Learn About Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Related Pages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/coverage" className="text-sky-600 hover:text-sky-700">What's Covered in Yacht Insurance</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Learn about coverage types, exclusions, and how to select the right protection level for your vessel.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/compare" className="text-sky-600 hover:text-sky-700">Compare Insurance Providers</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Find the best marine insurance provider with our comprehensive comparison of NZ insurers.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/faqs" className="text-sky-600 hover:text-sky-700">Frequently Asked Questions</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Get answers to common questions about yacht insurance, coverage, and claims.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                <Link href="/marine-proposal" className="text-sky-600 hover:text-sky-700">Get Your Quote</Link>
              </h3>
              <p className="text-slate-600 text-sm mb-4">Compare quotes from multiple NZ marine insurers and find the right protection for your boat.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
