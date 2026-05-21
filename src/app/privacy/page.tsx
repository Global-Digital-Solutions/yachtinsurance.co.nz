import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | YachtInsurance.co.nz',
  description:
    'Privacy policy for YachtInsurance.co.nz. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/privacy',
  },
};

export default function PrivacyPage() {
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
        name: 'Privacy Policy',
        item: 'https://www.yachtinsurance.co.nz/privacy',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-teal-500 text-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sky-100">
            How we collect, use, and protect your information
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Last Updated */}
          <p className="text-sm text-slate-500 mb-8">
            Last updated: April 2026
          </p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Introduction
            </h2>
            <p className="text-slate-700 mb-4">
              YachtInsurance.co.nz ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website and use our
              services.
            </p>
            <p className="text-slate-700">
              Please read this Privacy Policy carefully. If you do not agree with our
              policies and practices, please do not use our site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">
              Information You Provide Directly
            </h3>
            <p className="text-slate-700 mb-4">
              When you complete our quote form or contact us, we collect:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Vessel details and insurance history</li>
              <li>Vessel value and coverage requirements</li>
              <li>Additional information you choose to provide</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-slate-700 mb-4">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on site</li>
              <li>Internet Protocol (IP) address</li>
              <li>Cookie information and usage data</li>
              <li>Referring website information</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Cookies and Tracking Technologies
            </h3>
            <p className="text-slate-700">
              We use cookies to improve your browsing experience. You can control cookie
              settings through your browser preferences. Some site functionality may be
              limited if cookies are disabled.
            </p>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Process your insurance quote requests</li>
              <li>Contact you about your application or quote</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze website usage and trends</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Information Sharing & Disclosure
            </h2>
            <p className="text-slate-700 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
              <li>Insurance providers to process your quote</li>
              <li>Third-party service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-slate-700">
              We do not sell your personal information to third parties for marketing
              purposes. Insurance providers may use your information according to their
              own privacy policies.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate technical and organizational measures to protect
              your personal information, including:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
              <li>256-bit SSL encryption for data transmission</li>
              <li>Secure servers and firewalls</li>
              <li>Limited access to personal information</li>
              <li>Regular security updates and monitoring</li>
            </ul>
            <p className="text-slate-700">
              While we strive to protect your information, no security system is
              completely impenetrable. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Your Rights
            </h2>
            <p className="text-slate-700 mb-4">
              You have rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
              <li>Access: Request a copy of your information</li>
              <li>Correction: Request corrections to inaccurate data</li>
              <li>Deletion: Request deletion of your information</li>
              <li>Opt-out: Unsubscribe from marketing communications</li>
              <li>Portability: Request your data in a portable format</li>
            </ul>
            <p className="text-slate-700">
              To exercise these rights, contact us using the information below.
            </p>
          </section>

          {/* Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Data Retention
            </h2>
            <p className="text-slate-700">
              We retain personal information only as long as necessary to fulfill the
              purposes for which it was collected. Information related to quote requests
              is typically retained for 12 months. You may request earlier deletion of
              your information at any time.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-slate-700">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of external sites. We encourage you
              to review privacy policies of any third-party sites before providing
              personal information.
            </p>
          </section>

          {/* Marketing Communications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              8. Marketing Communications
            </h2>
            <p className="text-slate-700 mb-4">
              If you opt in to receive marketing communications, we may send you:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
              <li>Email newsletters about yacht insurance topics</li>
              <li>Information about new services and products</li>
              <li>Industry updates and guide releases</li>
            </ul>
            <p className="text-slate-700">
              You can unsubscribe from marketing emails at any time by clicking the
              unsubscribe link in our emails or contacting us directly.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-slate-700">
              Our website is not intended for children under 18. We do not knowingly
              collect personal information from children. If we become aware that a
              child has provided personal information, we will delete such information
              and terminate the child's account.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-slate-700 mb-4">
              We may update this Privacy Policy periodically to reflect changes in our
              practices or legal requirements. We will notify you of material changes
              by posting the updated policy on our website and updating the "Last
              Updated" date.
            </p>
            <p className="text-slate-700">
              Your continued use of our website following the posting of revised Privacy
              Policy means that you accept and agree to the changes.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              11. Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices,
              please contact us:
            </p>
            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <p className="text-slate-900 font-semibold mb-2">
                Yacht Insurance NZ (Cover4You)
              </p>
              <p className="text-slate-700 mb-1">Email: hello@cover4you.co.nz</p>
              <p className="text-slate-700 mb-1">Website: yachtinsurance.co.nz</p>
            </div>
          </section>

          {/* Data Protection Officer */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              12. Data Protection Rights in New Zealand
            </h2>
            <p className="text-slate-700 mb-4">
              New Zealand residents have rights under the Privacy Act 2020. You may
              lodge a complaint with the Privacy Commissioner if you believe we have
              breached your privacy rights:
            </p>
            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <p className="text-slate-900 font-semibold mb-2">
                Office of the Privacy Commissioner
              </p>
              <p className="text-slate-700">
                Website: www.privacy.org.nz
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <div className="bg-sky-50 rounded-lg p-6 border border-sky-200 mt-12">
            <p className="text-slate-700">
              By using YachtInsurance.co.nz, you acknowledge that you have read and
              understood this Privacy Policy and agree to our collection and use of
              personal information as described.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-4">
            <Link
              href="/"
              className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              href="/terms"
              className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
            >
              Terms of Service →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
