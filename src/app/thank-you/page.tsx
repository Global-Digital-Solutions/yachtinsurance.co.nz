import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, Mail, ArrowRight, Shield, Anchor, Star, Award } from 'lucide-react';
import ReferenceDisplay from './ReferenceDisplay';

export const metadata: Metadata = {
  title: 'Proposal Submitted | Thank You | YachtInsurance.co.nz',
  description:
    'Your marine insurance proposal has been submitted to Keane Specialty. You will receive a tailored quote within 2 working days.',
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  {
    n: '1',
    title: 'Your Proposal Is With Keane Specialty',
    body: "Keane's underwriting team has received your full vessel and cover details. They are a specialist marine underwriter — not a general insurer — so your proposal is being reviewed by people who understand boats.",
  },
  {
    n: '2',
    title: 'You Will Hear From Keane Within 2 Working Days',
    body: 'Keane will contact you directly by email with a tailored quote. Please check your inbox — and your spam folder. The email will come from a keanespecialty.com address, so you know it\'s genuine.',
  },
  {
    n: '3',
    title: 'Review Your Quote At Your Own Pace',
    body: "There's no obligation to proceed. Review Keane's quote carefully and get in touch with us or them if you have any questions about cover, excesses, or endorsements.",
  },
  {
    n: '4',
    title: 'Confirm and Get on the Water',
    body: 'Once you accept, cover can often be bound the same day. Keane handles the policy documentation and we\'re here to help with anything you need.',
  },
];

const FAQS = [
  {
    q: 'Why Keane Specialty?',
    a: "We matched you with Keane because they specialise exclusively in marine insurance — yachts, motor vessels, liveaboards, racing boats and commercial craft. They write cover that general insurers won't touch, at competitive premiums. They cover vessels worldwide, have no restrictions on vessel age, and their team are boaters themselves.",
  },
  {
    q: 'Is the email from Keane genuine?',
    a: "Yes. Keane Specialty will contact you directly from a @keanespecialty.com email address. We let them know your proposal has come through our site, so they're expecting to hear from you. If anything looks suspicious, contact us at hello@cover4you.co.nz.",
  },
  {
    q: 'Can I make changes to my proposal?',
    a: "Absolutely. When Keane contacts you, simply tell them about any changes to your vessel details, cover requirements or sums insured — they'll update the quote accordingly before binding.",
  },
  {
    q: 'What if I need cover to start urgently?',
    a: "Email us at hello@cover4you.co.nz and we can flag the urgency with Keane directly. In many cases cover can be bound on the same day once the proposal is reviewed.",
  },
  {
    q: 'Am I committed to buying?',
    a: "No. This is a no-obligation proposal — you're not committed to anything. Review the quote at your leisure and proceed only when you're completely happy.",
  },
];

const KEANE_USPS = [
  { icon: '🌊', label: 'Marine Specialists Only', detail: 'Dedicated to boats — not a general insurer with a marine division' },
  { icon: '🌍', label: 'Worldwide Cover Available', detail: 'Blue water cruisers, liveaboards, offshore racing — all covered' },
  { icon: '⚓', label: 'No Vessel Age Restrictions', detail: 'Classic, vintage and modern vessels all considered on merit' },
  { icon: '🏆', label: 'Competitive Premiums', detail: 'Specialist underwriting means more accurate pricing for your risk' },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(2,8,23,0.35) 0%, rgba(2,8,23,0.60) 60%, rgba(2,8,23,0.92) 100%), url(/home-hero.png)',
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
            Proposal Submitted
          </h1>
          <p className="text-teal-300 text-xl font-medium mb-6">
            You&apos;ve been matched with Keane Specialty
          </p>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
            Based on your vessel details and cover requirements, we&apos;ve forwarded your
            proposal to <strong className="text-white">Keane Specialty</strong> — one of the
            leading specialist marine underwriters in the market. They will contact you with a
            tailored quote within <strong className="text-white">2 working days</strong>.
          </p>

          {/* Reference number (shows when returned from Keane API) */}
          <ReferenceDisplay />

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-400" /> No obligation
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" /> 2-day quote turnaround
            </span>
            <span className="flex items-center gap-2">
              <Anchor className="w-4 h-4 text-teal-400" /> Marine specialists
            </span>
          </div>
        </div>
      </section>

      {/* ── Why Keane Specialty ──────────────────────────────── */}
      <section className="py-16 px-4 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-5 h-5 text-teal-400" />
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider">
              Your Matched Underwriter
            </p>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Why Keane Specialty?</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Keane Specialty are a dedicated marine underwriter with decades of experience
            insuring everything from day boats to blue water cruisers. Unlike general insurers,
            their entire focus is maritime risk — which means more accurate pricing, fewer
            exclusions, and underwriters who actually understand boats.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {KEANE_USPS.map(({ icon, label, detail }) => (
              <div
                key={label}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 flex gap-4 items-start"
              >
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Keane rating */}
          <div className="mt-6 bg-teal-900/20 border border-teal-700/40 rounded-xl p-5 flex items-center gap-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-300 text-sm">
              <strong className="text-white">Highly rated</strong> by yacht and motor vessel
              owners across New Zealand, Australia and the Pacific.
            </p>
          </div>
        </div>
      </section>

      {/* ── What Happens Next ───────────────────────────────── */}
      <section className="py-16 px-4 bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">What Happens Next</h2>
          <div className="space-y-4">
            {NEXT_STEPS.map(({ n, title, body }) => (
              <div
                key={n}
                className="flex gap-5 items-start bg-slate-800/40 border border-slate-700 rounded-xl p-5"
              >
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
              <span className="text-sm">
                <span className="text-slate-400">Questions? Email us: </span>
                <span className="text-white font-medium">hello@cover4you.co.nz</span>
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-700" />
            <div className="flex items-center gap-3 text-slate-300">
              <Clock className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <span className="text-sm">
                <span className="text-slate-400">Hours: </span>
                <span className="text-white font-medium">Mon–Fri, 9am–5pm NZST</span>
              </span>
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
              <details
                key={q}
                className="group bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 font-medium text-slate-200 hover:text-white transition-colors list-none">
                  <span>{q}</span>
                  <span className="text-teal-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-45 text-lg leading-none">
                    +
                  </span>
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
          <Link
            href="/blog"
            className="group bg-slate-800/40 border border-slate-700 hover:border-teal-500/50 rounded-xl p-6 transition-colors"
          >
            <h3 className="font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
              Marine Insurance Guides
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Coverage tips, NZ boating seasons, and what to watch for in your policy.
            </p>
            <span className="inline-flex items-center gap-1 text-teal-400 text-sm font-medium">
              Read guides <ArrowRight size={14} />
            </span>
          </Link>
          <Link
            href="/compare"
            className="group bg-slate-800/40 border border-slate-700 hover:border-teal-500/50 rounded-xl p-6 transition-colors"
          >
            <h3 className="font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
              Compare NZ Marine Insurers
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              See how Keane compares with other major marine insurance providers in the market.
            </p>
            <span className="inline-flex items-center gap-1 text-teal-400 text-sm font-medium">
              Compare now <ArrowRight size={14} />
            </span>
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
