import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Clock, Mail, FileText, Heart, ShieldCheck, ChevronRight, Phone } from 'lucide-react';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Making a Claim | Yacht Insurance NZ',
  description: 'Guidance on making a marine insurance claim, complaints process, and support for vulnerable customers. YachtInsurance.co.nz is a referral service — claims are handled directly by your insurer.',
  alternates: { canonical: 'https://www.yachtinsurance.co.nz/claims/' },
};

const insurerClaims = [
  { name: 'Keane', contact: 'Contact Keane directly via your policy documents or broker', website: 'https://www.keanespecialty.com' },
  { name: 'Mariner', contact: 'Contact Mariner Marine Insurance via your policy schedule', website: 'https://www.mariner.co.nz' },
  { name: 'Nautilus Marine Insurance (NMI)', contact: 'Lodge claims via NMI directly using your policy contact details', website: 'https://www.nautilusmarine.com.au' },
  { name: 'Tower Insurance', contact: 'Call Tower or log in to your Tower account to lodge a claim', website: 'https://www.tower.co.nz/claims' },
  { name: 'AMI Insurance', contact: 'Contact AMI via their website or your policy documents', website: 'https://www.ami.co.nz/claims' },
  { name: 'Gallagher', contact: 'Contact your Gallagher broker directly — they manage claims on your behalf', website: 'https://www.ajg.com/nz' },
  { name: 'NZI', contact: 'Lodge your NZI claim online or via your NZI broker', website: 'https://www.nzi.co.nz/claims' },
  { name: 'Star Insurance', contact: 'Contact Star Insurance via your policy documents or appointed broker', website: 'https://www.starinsurance.co.nz' },
];

const claimSteps = [
  {
    step: '1',
    title: 'Ensure Safety First',
    desc: 'Make sure all people on board are safe. Call Maritime New Zealand (0508 472 269) if there is a risk to life or if the vessel is in distress.',
  },
  {
    step: '2',
    title: 'Prevent Further Damage',
    desc: 'Take reasonable steps to prevent further damage to your vessel — for example, temporary repairs, pumping bilges, or securing the vessel in a safe berth. Keep receipts for any emergency costs.',
  },
  {
    step: '3',
    title: 'Document Everything',
    desc: 'Photograph all damage thoroughly from multiple angles. Note the time, location, weather conditions, and sequence of events. Gather contact details of any witnesses.',
  },
  {
    step: '4',
    title: 'Notify Your Insurer Promptly',
    desc: 'Contact your insurer as soon as practicable after the incident — most policies require prompt notification. Use the contact details on your policy schedule or certificate of insurance.',
  },
  {
    step: '5',
    title: 'Cooperate With the Claims Process',
    desc: 'Your insurer may appoint a marine surveyor or loss adjuster to assess the damage. Provide full and accurate information. Do not authorise permanent repairs until your insurer has assessed the damage, unless emergency repairs are needed to prevent further loss.',
  },
  {
    step: '6',
    title: 'Keep Records',
    desc: 'Retain all correspondence, repair quotes, receipts, and documentation. Your insurer will advise on their preferred repairers and the reimbursement process.',
  },
];

export default function ClaimsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.yachtinsurance.co.nz' },
      { '@type': 'ListItem', position: 2, name: 'Making a Claim', item: 'https://www.yachtinsurance.co.nz/claims/' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534854638093-bada1813ca19?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 via-slate-900/45 to-slate-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Making a Claim</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl drop-shadow-lg">
            Making a Claim
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
            Guidance on how to make a marine insurance claim, complaints process, and support if you need extra help.
          </p>
        </div>
      </section>

      {/* Important notice */}
      <section className="bg-amber-50 border-b border-amber-200 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">We are a referral service — not your insurer</p>
              <p className="text-amber-800 text-sm leading-relaxed">
                YachtInsurance.co.nz connects you with licensed insurance advisers and brokers — we do not issue insurance policies or handle claims directly. If you need to make a claim, you must contact your insurer using the details on your policy schedule or certificate of insurance. If you are unsure who your insurer is, contact us at <a href="mailto:hello@cover4you.co.nz" className="underline font-medium">hello@cover4you.co.nz</a> and we will help direct you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to make a claim */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">How to Make a Marine Insurance Claim</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            If your vessel is damaged, stolen, or involved in an incident, follow these steps to ensure your claim is handled as smoothly and quickly as possible.
          </p>
          <div className="space-y-6">
            {claimSteps.map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Policy documentation advice */}
          <div className="mt-10 bg-sky-50 rounded-xl p-6 border border-sky-200">
            <div className="flex gap-3 items-start">
              <FileText className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sky-900 mb-2">Read Your Policy Carefully</h3>
                <p className="text-sky-800 text-sm leading-relaxed">
                  Always read your policy renewal schedule carefully and check that all details are correct — particularly your vessel's sum insured, agreed value, cruising area, and any exclusions. If anything looks incorrect, contact your insurer or adviser before an incident occurs. An incorrect sum insured can significantly affect your claim outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurer claim contacts */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Claim Contacts by Insurer</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            The first step in making a claim is to contact your insurer directly. Below are the insurers we work with and how to reach their claims teams. Always refer to your policy schedule for the most current contact details.
          </p>
          <div className="space-y-3">
            {insurerClaims.map((insurer) => (
              <div key={insurer.name} className="bg-white rounded-xl p-5 border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="font-bold text-slate-900">{insurer.name}</p>
                  <p className="text-slate-600 text-sm mt-0.5">{insurer.contact}</p>
                </div>
                <a
                  href={insurer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 text-sm font-semibold whitespace-nowrap flex-shrink-0"
                >
                  Visit website <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-6">
            * Website links are provided for convenience. Always verify contact details on your policy documents. YachtInsurance.co.nz does not manage claims on behalf of any insurer.
          </p>
        </div>
      </section>

      {/* Complaints */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Making a Complaint</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            We take complaints seriously and are committed to resolving them promptly and fairly. There are two types of complaints — those about your insurance policy or insurer, and those about our referral service.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Complaint about insurer */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-sky-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Complaint About Your Insurer</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                If you have a complaint about your insurance policy, a claim decision, or the conduct of your insurer, contact your insurer directly in the first instance. Major NZ insurers are members of the Insurance Council of New Zealand (ICNZ) and are bound by the <a href="https://icnz.org.nz/fair-insurance-code/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">Fair Insurance Code</a>.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex gap-2 items-start">
                  <Clock className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span>Acknowledgement within <strong>5 business days</strong></span>
                </div>
                <div className="flex gap-2 items-start">
                  <Clock className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span>Full response within <strong>10 business days</strong></span>
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-4">
                If your complaint remains unresolved, you may escalate to an approved dispute resolution scheme such as <a href="https://www.fscl.org.nz" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Financial Services Complaints Ltd (FSCL)</a> or <a href="https://www.ifso.nz" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Insurance & Financial Services Ombudsman (IFSO)</a>.
              </p>
            </div>

            {/* Complaint about our service */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <Mail className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">Complaint About Our Service</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                If you have a complaint about YachtInsurance.co.nz or the referral service provided by Cover4You, please contact us in writing. We are committed to responding fairly and promptly.
              </p>
              <a
                href="mailto:hello@cover4you.co.nz?subject=Complaint"
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
              >
                <Mail className="w-4 h-4" /> Email a Complaint
              </a>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div className="flex gap-2 items-start">
                  <Clock className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Acknowledgement within <strong>5 business days</strong></span>
                </div>
                <div className="flex gap-2 items-start">
                  <Clock className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Full response within <strong>10 business days</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerable customers */}
      <section className="py-14 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start mb-6">
            <Heart className="w-8 h-8 text-sky-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Support for Vulnerable Customers</h2>
              <p className="text-slate-300 leading-relaxed">
                We are committed to identifying and appropriately supporting customers who may be in vulnerable circumstances — including those experiencing financial hardship, health difficulties, bereavement, domestic circumstances, or other challenges that may affect their ability to engage with insurance services.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-bold text-white mb-2 text-sm">Extra Time & Patience</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We will take extra time and care when communicating with customers who need it. Please tell us if you need information presented differently or if you need more time.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-bold text-white mb-2 text-sm">Third-Party Support</h3>
              <p className="text-slate-400 text-sm leading-relaxed">You can authorise a trusted person — a family member, support worker, or advocate — to communicate with us on your behalf. Let us know and we will accommodate this.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
              <h3 className="font-bold text-white mb-2 text-sm">No Pressure Approach</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We will never pressure you into making decisions. If you need time to consider your options or seek independent advice, we encourage you to do so.</p>
            </div>
          </div>
          <div className="mt-8 p-5 bg-slate-800 rounded-xl border border-slate-700">
            <p className="text-slate-300 text-sm leading-relaxed">
              If you need support or want to discuss your circumstances, contact us at{' '}
              <a href="mailto:hello@cover4you.co.nz" className="text-sky-400 hover:text-sky-300 font-medium">hello@cover4you.co.nz</a>. For financial hardship support, the <a href="https://www.moneytalks.co.nz" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium">MoneyTalks helpline</a> (0800 345 123) provides free financial guidance. For crisis support, <a href="https://www.lifeline.org.nz" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium">Lifeline</a> is available on 0800 543 354.
            </p>
          </div>
        </div>
      </section>

      {/* Contact prompt */}
      <section className="py-10 bg-sky-50 border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-700 mb-4">Not sure where to start? We can help direct you to the right insurer.</p>
          <a
            href="mailto:hello@cover4you.co.nz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact Us
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
