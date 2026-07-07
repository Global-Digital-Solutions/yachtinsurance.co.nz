import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-sky-600 to-sky-700 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Ready to Protect Your Vessel?
        </h2>
        <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
          Compare quotes from NZ's leading marine insurers. No-obligation, no hidden fees — most enquiries answered within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/marine-proposal"
            className="px-8 py-3 bg-white text-sky-700 rounded-xl font-semibold hover:bg-sky-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Get a Quote
          </Link>
          <Link
            href="/compare"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-sky-700 transition-colors"
          >
            Compare Insurers
          </Link>
        </div>
      </div>
    </section>
  );
}
