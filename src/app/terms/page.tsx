import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | YachtInsurance.co.nz',
  description:
    'Terms of service for YachtInsurance.co.nz. Read our terms and conditions for using our website and services.',
  alternates: {
    canonical: 'https://www.yachtinsurance.co.nz/terms',
  },
};

export default function TermsPage() {
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
        name: 'Terms of Service',
        item: 'https://www.yachtinsurance.co.nz/terms',
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
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sky-100">
            Please read these terms and conditions carefully
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
              1. Agreement to Terms
            </h2>
            <p className="text-slate-700 mb-4">
              By accessing and using the YachtInsurance.co.nz website and services, you
              accept and agree to be bound by the terms and provision of this agreement.
              These Terms of Service ("Terms") constitute the entire agreement between
              YachtInsurance.co.nz ("we," "us," "our," or the "Company") and you
              regarding the use of our website and services.
            </p>
            <p className="text-slate-700">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Use License */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Use License
            </h2>
            <p className="text-slate-700 mb-4">
              Permission is granted to temporarily download one copy of the materials
              (information or software) on YachtInsurance.co.nz for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a transfer of
              title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the site</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Attempt to gain unauthorized access to restricted portions or features of the site</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Disclaimer
            </h2>
            <p className="text-slate-700 mb-4">
              The materials on YachtInsurance.co.nz are provided on an 'as is' basis. We
              make no warranties, expressed or implied, and hereby disclaim and negate
              all other warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-slate-700">
              We do not warrant or make any representations concerning the accuracy,
              likely results, or reliability of the use of the materials on its website
              or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          {/* Limitations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Limitations of Liability
            </h2>
            <p className="text-slate-700 mb-4">
              In no event shall YachtInsurance.co.nz or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data or profit,
              or due to business interruption) arising out of the use or inability to use
              the materials on YachtInsurance.co.nz, even if we or an authorized
              representative has been notified orally or in writing of the possibility of
              such damage.
            </p>
            <p className="text-slate-700">
              Because some jurisdictions do not allow limitations on implied warranties,
              or limitations of liability for consequential or incidental damages, these
              limitations may not apply to you.
            </p>
          </section>

          {/* Accuracy of Materials */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Accuracy of Materials
            </h2>
            <p className="text-slate-700 mb-4">
              The materials appearing on YachtInsurance.co.nz could include technical,
              typographical, or photographic errors. We do not warrant that any of the
              materials on our website are accurate, complete, or current. We may make
              changes to the materials contained on our website at any time without notice.
            </p>
            <p className="text-slate-700">
              We do not, however, make any commitment to update the materials.
            </p>
          </section>

          {/* Materials & Content Ownership */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Materials & Content Ownership
            </h2>
            <p className="text-slate-700 mb-4">
              The materials on YachtInsurance.co.nz are owned by us or our suppliers and
              are protected by international copyright laws. You agree that you will not
              use any of these materials or content for any purpose other than the
              permitted use defined in these Terms of Service.
            </p>
            <p className="text-slate-700">
              Any unauthorized use of the materials is prohibited and may violate copyright,
              trademark, and other laws.
            </p>
          </section>

          {/* Links & Third-Party Sites */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Links & Third-Party Sites
            </h2>
            <p className="text-slate-700 mb-4">
              YachtInsurance.co.nz has not reviewed all of the sites linked to our website
              and is not responsible for the contents of any such linked site. The inclusion
              of any link does not imply endorsement by us of the site. Use of any such linked
              website is at the user's own risk.
            </p>
            <p className="text-slate-700">
              If you decide to leave our website and access a third-party site, you do so
              at your own risk and subject to the terms of use of that website.
            </p>
          </section>

          {/* Modifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              8. Modifications of Terms
            </h2>
            <p className="text-slate-700 mb-4">
              YachtInsurance.co.nz may revise these Terms of Service for our website at any
              time without notice. By using this website, you are agreeing to be bound by
              the then current version of these Terms of Service.
            </p>
            <p className="text-slate-700">
              If you do not agree with our Terms of Service or any changes we have made,
              please do not use or continue to use our website.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              9. Governing Law
            </h2>
            <p className="text-slate-700">
              These Terms and Conditions are governed by and construed in accordance with
              the laws of New Zealand, and you irrevocably submit to the exclusive
              jurisdiction of the courts located in New Zealand.
            </p>
          </section>

          {/* Quote Requests */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              10. Insurance Quote Requests
            </h2>
            <p className="text-slate-700 mb-4">
              When you submit a quote request through our website:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
              <li>You certify that all information provided is accurate and complete</li>
              <li>You authorize us to share your information with insurance providers</li>
              <li>You understand quotes are estimates and may vary based on further information</li>
              <li>Insurance providers may contact you directly regarding your quote</li>
              <li>You are responsible for reviewing insurance policy terms before purchase</li>
            </ul>
            <p className="text-slate-700">
              We do not guarantee any particular quote, insurance offering, or coverage from
              any provider.
            </p>
          </section>

          {/* User Conduct */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              11. User Conduct
            </h2>
            <p className="text-slate-700 mb-4">
              You agree that you will not use YachtInsurance.co.nz to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Harass, abuse, or threaten others</li>
              <li>Submit false or misleading information</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Attempt to access unauthorized portions of our systems</li>
              <li>Interfere with the normal operation of our website</li>
              <li>Engage in any activity that violates applicable laws or regulations</li>
            </ul>
          </section>

          {/* Disclaimer of Insurance Advice */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              12. Disclaimer of Insurance Advice
            </h2>
            <p className="text-slate-700 mb-4">
              The information provided on YachtInsurance.co.nz is for informational purposes
              only and should not be construed as professional insurance advice. We recommend
              that you consult with qualified insurance professionals before making any
              insurance decisions.
            </p>
            <p className="text-slate-700">
              We are not licensed insurance agents or brokers. Insurance coverage and terms
              are determined by the insurance providers themselves.
            </p>
          </section>

          {/* Limitation on Insurance Providers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              13. Insurance Provider Relationships
            </h2>
            <p className="text-slate-700 mb-4">
              YachtInsurance.co.nz is an independent website that connects users with
              insurance providers. We are not affiliated with any specific insurance company,
              and we do not provide insurance directly. Each insurance provider is solely
              responsible for:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>The quotes and coverage they provide</li>
              <li>Claims handling and customer service</li>
              <li>Policy terms and conditions</li>
              <li>Compliance with insurance regulations</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              14. Indemnification
            </h2>
            <p className="text-slate-700">
              You agree to indemnify and hold harmless YachtInsurance.co.nz and its officers,
              directors, employees, and agents from any and all claims, damages, losses, and
              expenses (including attorney's fees) arising out of or relating to your use of
              our website or violation of these Terms of Service.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              15. Contact Information
            </h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <p className="text-slate-900 font-semibold mb-2">
                Yacht Insurance NZ (Cover4You)
              </p>
              <p className="text-slate-700 mb-1">Email: hello@cover4you.co.nz</p>
              <p className="text-slate-700 mb-1">Website: yachtinsurance.co.nz</p>
            </div>
          </section>

          {/* Severability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              16. Severability
            </h2>
            <p className="text-slate-700">
              If any provision of these Terms of Service is found to be invalid or
              unenforceable, the remaining provisions shall continue in full force and
              effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              17. Entire Agreement
            </h2>
            <p className="text-slate-700">
              These Terms of Service and our Privacy Policy constitute the entire agreement
              between you and YachtInsurance.co.nz regarding the use of our website and
              services, and supersede all prior and contemporaneous agreements, understandings,
              and negotiations.
            </p>
          </section>

          {/* Acknowledgment */}
          <div className="bg-sky-50 rounded-lg p-6 border border-sky-200 mt-12">
            <p className="text-slate-700">
              By using YachtInsurance.co.nz, you acknowledge that you have read these Terms
              of Service, understand them, and agree to be bound by them.
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
              href="/privacy"
              className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
            >
              Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
