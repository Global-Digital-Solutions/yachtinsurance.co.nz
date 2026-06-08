import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { blogPosts } from '@/data/blog-posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | YachtInsurance.co.nz Blog`,
    description: post.excerpt,
    keywords: [
      'yacht insurance',
      'marine insurance',
      'boat insurance',
      'insurance guide',
      post.category.toLowerCase(),
    ],
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      locale: 'en_NZ',
      url: `https://www.yachtinsurance.co.nz/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      siteName: 'Yacht Insurance NZ',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/jpeg',
        },
      ],
    },
    alternates: {
      canonical: `https://www.yachtinsurance.co.nz/blog/${post.slug}`,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
      // Skip the top-level title since we render it separately in the header
      return;
    }

    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={idx} className="text-2xl font-bold text-slate-900 mb-4 mt-10">
          {trimmed.replace('## ', '')}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={idx} className="text-xl font-bold text-slate-900 mb-3 mt-6">
          {trimmed.replace('### ', '')}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={idx} className="ml-6 mb-2 text-slate-700 list-disc">
          {trimmed.substring(2)}
        </li>
      );
      return;
    }

    // Handle bold-prefixed paragraphs like "**Hull Coverage** protects..."
    const boldMatch = trimmed.match(/^\*\*(.+?)\*\*\s*(.*)/);
    if (boldMatch) {
      elements.push(
        <p key={idx} className="mb-4 text-slate-700 leading-relaxed">
          <strong className="text-slate-900">{boldMatch[1]}</strong>{' '}
          {boldMatch[2]}
        </p>
      );
      return;
    }

    // Regular paragraph
    elements.push(
      <p key={idx} className="mb-4 text-slate-700 leading-relaxed">
        {trimmed}
      </p>
    );
  });

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The blog post you are looking for does not exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
          >
            Back to Blog
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.label,
      item: `https://www.yachtinsurance.co.nz${crumb.href}`,
    })),
  };

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.yachtinsurance.co.nz/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.yachtinsurance.co.nz/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-slate-50 border-b border-slate-200 py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm md:text-base flex-wrap">
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Link
                  href={crumb.href}
                  className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
                >
                  {crumb.label}
                </Link>
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight size={16} className="text-slate-400" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Post Header Image */}
      <section className="relative h-96 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Article Content */}
          <article className="md:col-span-2">
            {/* Article Header */}
            <div className="mb-12">
              <div className="flex gap-2 mb-6">
                <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-sm font-semibold rounded-full">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-sky-600" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-sky-600" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-NZ', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-sky-600" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg prose-slate max-w-none mb-12">
              {renderContent(post.content)}
            </div>

            {/* Author Bio Section */}
            <section className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-xl p-8 mb-12 border border-sky-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                About the Author
              </h3>
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {post.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {post.author}
                  </h4>
                  <p className="text-slate-600">
                    {post.author === 'Liam Ngata'
                      ? 'Marine insurance specialist with deep knowledge of New Zealand waters and vessel types.'
                      : post.author === 'Sophie Hartley'
                      ? 'Risk management expert focused on maritime safety and insurance protection.'
                      : 'Expert contributor to yacht and marine insurance topics.'}
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-sky-600 to-teal-500 rounded-xl p-8 text-white mb-12">
              <h3 className="text-2xl font-bold mb-3">Get Protected Today</h3>
              <p className="mb-6 text-sky-100">
                Don't leave your vessel unprotected. Get a personalized quote
                from our marine insurance specialists.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-colors"
              >
                Get Your Quote
                <ArrowRight size={18} />
              </Link>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            {/* Quote Form */}
            <div className="sticky top-4 mb-8">
              <QuoteForm mode="compact" />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block p-3 bg-white rounded-lg border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-colors"
                    >
                      <p className="font-semibold text-slate-900 text-sm hover:text-sky-600 line-clamp-2">
                        {relatedPost.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-2">
                        {relatedPost.readTime} min read
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-sky-600 to-teal-500 py-12 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to protect your vessel?
          </h2>
          <p className="text-lg text-sky-100 mb-8">
            Get a no-obligation quote from our marine insurance specialists
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-sky-50 transition-colors shadow-lg"
          >
            Get Your Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
