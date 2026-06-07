import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, Mail, ArrowRight, Shield, Anchor } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quote Submitted | Thank You | YachtInsurance.co.nz',
  description: 'Your insurance quote request has been submitted. Our specialists will contact you within 24 hours.',
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    n: '1',
    title: 'We Review Your Details',
    body: 'Our specialist team analyses your vessel information and requirements to match you with the best marine insurance options available.',
  },
  {
    n: '2',
    title: 'We Contact You Within 24 Hours',
    body: 'A specialist will be in touch by email — usually same business day. Check your inbox (and spam folder just in case).',
  },
  {
    n: '3',
    title: 'Compare Your Options',
    body: 'Review the tailored quotes from our panel of marine insurers and pick the cover that suits your vessel and budget.',
  },
  {
    n: '4',
    title: 'Get on the Water With Confidence',
    body: "Once you choose a policy our team handles the paperwork. You're covered — get back to what matters.",
  },
];

const FAQS = [
  {
    q: 'When will I hear back?',
    a: 'Most customers hear from us within 24 hours on business days. If you submitted after hours, expect contact the next morning.',
  },
  {
    q: 'Is my information secure?',
    a: 'Yes — your data is transmitted over 256-bit SSL encryption. We never share your details with third parties without your consent.',
  },
  {
    q: 'Can I update my vessel details?',
    a: "Absolutely. When our specialist calls or emails, simply let them know any changes — they'll use the latest info for your quote.",
  },
  {
    q: 'Am I obligated to buy?',
    a: "Not at all. This is a no-obligation referral service. Review the quotes at your leisure — there's no pressure to proceed.",
  },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ── Hero with background image ──────────────────────── */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(2,8,23,0.55) 0%, rgba(2,8,23,0.72) 60%, rgba(2,8,23,0.95) 100%), url(/home-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated success ring */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-teal-500/30 animate-ping" />
              <div className="relative w-24 h-24 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center backdrop-blur-sm">
                <CheckCircle2 className="w-12 h-12 text-teal-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Enquiry Submitted
          </h1>
          <p className="text-teal-300 text-xl font-medium mb-6">
            Thank you — we'll be in touch shortly.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
            Your request has been received by our specialist team. We'll review
            your vessel details and come back to you with tailored marine
            insurance options — usually within 24 hours.
          </p>

          {/* Quick trust strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" /> No obligation</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal-400" /> 24-hr response</span>
            <span className="flex items-center gap-2"><Anchor className="w-4 h-4 text-teal-400" /> Marine specialists</span>
          </div>
        </div>
      </section>

      {/* ── What Happens Next ───────────────────────────────── */}
      <section className="py-16 px-4 bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            What Happens Next
          </h2>
          <div className="space-y-4">
            {STEPS.map(({ n, title, body }) => (
              <div key={n} className="flex gap-5 items-start bg-slate-800/40 border border-slate-700 rounded-xl p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-sm">
                  {n}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 justify-center">
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <span className="text-sm"><span className="text-slate-400">Email us: </span><span className="text-white font-medium">hello@cover4you.co.nz</span></span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-700" />
            <div className="flex items-center gap-3 text-slate-300">
              <Clock className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <span className="text-sm"><span className="text-slate-400">Hours: </span><span className="text-white font-medium">Mon–Fri, 9am–5pm NZST</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────── */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white text-center mb-8">Common Questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 font-medium text-slate-200 hover:text-white transition-colors list-none">
                  <span>{q}</span>
                  <span className="text-teal-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-45 text-lg leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-700 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resource links ──────────────────────────────────── */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          <Link href="/blog" className="group bg-slate-800/40 border border-slate-700 hover:border-teal-500/50 rounded-xl p-6 transition-colors">
            <h3 className="font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">Marine Insurance Guides</h3>
            <p className="text-slate-400 text-sm mb-4">Coverage tips, NZ boating seasons, and what to watch for in your policy.</p>
            <span className="inline-flex items-center gap-1 text-teal-400 text-sm font-medium">Read guides <ArrowRight size={14} /></span>
          </Link>
          <Link href="/sectors/yacht" className="group bg-slate-800/40 border border-slate-700 hover:border-teal-500/50 rounded-xl p-6 transition-colors">
            <h3 className="font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">Yacht Insurance Details</h3>
            <p className="text-slate-400 text-sm mb-4">What's covered, pricing factors, and specialist add-ons for NZ yacht owners.</p>
            <span className="inline-flex items-center gap-1 text-teal-400 text-sm font-medium">Learn more <ArrowRight size={14} /></span>
          </Link>
        </div>
      </section>

      {/* ── Back to home ────────────────────────────────────── */}
      <section className="py-12 px-4 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-teal-900/40"
        >
          Back to Home <ArrowRight size={18} />
        </Link>
        <p className="mt-6 text-slate-500 text-sm">
          Fair winds and following seas — the YachtInsurance.co.nz team.
        </p>
      </section>

    </div>
  );
}
