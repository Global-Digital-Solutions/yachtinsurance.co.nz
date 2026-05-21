import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, Mail, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quote Submitted | Thank You | YachtInsurance.co.nz',
  description:
    'Your insurance quote request has been submitted successfully. Our specialists will contact you within 24 hours.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Header with Success Icon */}
          <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-8 py-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-sky-400 rounded-full animate-pulse opacity-50" />
                <CheckCircle2 className="w-20 h-20 text-white relative" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Quote Request Submitted!
            </h1>
            <p className="text-sky-100 text-lg">
              Thank you for choosing YachtInsurance.co.nz
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 md:px-12">
            {/* Confirmation Message */}
            <div className="mb-8 p-6 bg-sky-50 rounded-xl border border-sky-200">
              <p className="text-slate-700 text-center">
                We've received your insurance quote request. Our specialist team is
                reviewing your vessel details and will contact you shortly with personalized
                coverage options and competitive quotes.
              </p>
            </div>

            {/* What Happens Next */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                What Happens Next
              </h2>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      We Review Your Details
                    </h3>
                    <p className="text-slate-600">
                      Our team analyzes your vessel information and insurance requirements to
                      find the best coverage options.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Quick Contact (Usually Within 24 Hours)
                    </h3>
                    <p className="text-slate-600">
                      A specialist will email you with personalized insurance quotes
                      from top providers. Check your email and voicemail for their message.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Compare & Choose
                    </h3>
                    <p className="text-slate-600">
                      Review the quotes from different providers, compare coverage options, and
                      choose the best policy for your needs.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Get Coverage & Peace of Mind
                    </h3>
                    <p className="text-slate-600">
                      Complete your purchase and get insurance protection for your vessel. We're
                      here to support you throughout the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-gradient-to-br from-sky-50 to-teal-50 rounded-xl p-8 border border-sky-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Need to Reach Us?
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3 items-start">
                  <Mail className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Email</p>
                    <p className="text-slate-600">hello@cover4you.co.nz</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Clock className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Hours</p>
                    <p className="text-slate-600">Mon-Fri 9am - 5pm NZST</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Support</p>
                    <p className="text-slate-600">24-hour response guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ-style content */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 font-semibold text-slate-900 hover:bg-slate-200 transition-colors">
                    <span>When will I hear back from your team?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-4 py-3 text-slate-600">
                    Most customers hear from us within 24 hours. We typically respond
                    during business hours (Monday-Friday 9am-5pm NZST). If you submit your
                    request after hours, expect contact the next business day.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 font-semibold text-slate-900 hover:bg-slate-200 transition-colors">
                    <span>Is my information secure?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-4 py-3 text-slate-600">
                    Yes. Your personal information is encrypted with 256-bit SSL encryption
                    and protected by our secure servers. We never share your details with
                    third parties without your consent. Read our Privacy Policy for details.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 font-semibold text-slate-900 hover:bg-slate-200 transition-colors">
                    <span>Can I change my vessel details?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-4 py-3 text-slate-600">
                    Absolutely. When our specialist contacts you, you can provide additional
                    information or corrections to your original submission. They'll use the
                    most current information to generate accurate quotes.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 font-semibold text-slate-900 hover:bg-slate-200 transition-colors">
                    <span>Am I obligated to buy insurance?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-4 py-3 text-slate-600">
                    No. This is a no-obligation quote service. You can review the
                    quotes and coverage options without any commitment. Insurance decisions
                    are entirely yours to make.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 font-semibold text-slate-900 hover:bg-slate-200 transition-colors">
                    <span>How accurate are your quotes?</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-4 py-3 text-slate-600">
                    Our quotes are estimates based on the information you provided. Final
                    prices may vary based on additional details discovered during the
                    underwriting process. However, our specialists work to get accurate
                    quotes based on your specific vessel and situation.
                  </div>
                </details>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="text-center p-4 bg-sky-50 rounded-lg border border-sky-200">
                <p className="text-sm font-semibold text-sky-900 mb-1">
                  Fair Practice Standard
                </p>
                <p className="text-xs text-sky-700">
                  Transparent referral service
                </p>
              </div>

              <div className="text-center p-4 bg-sky-50 rounded-lg border border-sky-200">
                <p className="text-sm font-semibold text-sky-900 mb-1">
                  No Broker Fees
                </p>
                <p className="text-xs text-sky-700">
                  Our service is completely free
                </p>
              </div>

              <div className="text-center p-4 bg-sky-50 rounded-lg border border-sky-200">
                <p className="text-sm font-semibold text-sky-900 mb-1">
                  256-bit SSL Encryption
                </p>
                <p className="text-xs text-sky-700">
                  Your data is secure and protected
                </p>
              </div>

              <div className="text-center p-4 bg-sky-50 rounded-lg border border-sky-200">
                <p className="text-sm font-semibold text-sky-900 mb-1">
                  24hr Response
                </p>
                <p className="text-xs text-sky-700">
                  Quick specialist follow-up
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link
            href="/blog"
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Yacht Insurance Blog
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Learn about yacht insurance coverage, risk management, and marine insurance
              topics.
            </p>
            <span className="inline-flex items-center gap-1 text-sky-600 font-semibold text-sm">
              Read Guides <ArrowRight size={16} />
            </span>
          </Link>

          <Link
            href="/sectors/yacht"
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Yacht Insurance Information
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Explore detailed information about yacht insurance coverage, pricing factors,
              and what's covered.
            </p>
            <span className="inline-flex items-center gap-1 text-sky-600 font-semibold text-sm">
              Learn More <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition-colors shadow-md"
          >
            Back to Home
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center text-slate-600">
          <p className="text-sm">
            Have a great day on the water, and thank you for choosing
            YachtInsurance.co.nz!
          </p>
        </div>
      </div>
    </div>
  );
}
