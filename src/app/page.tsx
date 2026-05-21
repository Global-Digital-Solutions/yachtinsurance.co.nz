import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Yacht Insurance NZ — Compare Marine Insurance Quotes | YachtInsurance.co.nz',
  description: "Compare yacht and marine insurance quotes from New Zealand's leading insurers. Specialist coverage for sailing yachts, motor vessels, jet skis, and blue water cruisers.",
};

const nzLocations = [
  { name: 'Auckland & Hauraki Gulf', slug: 'auckland', tagline: "NZ's biggest sailing hub — 6,000+ moored yachts", highlights: ['Waitemata Harbour', 'Great Barrier Island', 'Hauraki Gulf'], image: 'photo-1602943554726-d8bebe914982', season: 'Year-round', risk: 'busy' },
  { name: 'Bay of Islands', slug: 'bay-of-islands', tagline: '144 islands, world-class anchorages, blue marlin', highlights: ['Opua Marina', 'Russell', 'Cape Brett'], image: 'photo-1540946485063-a40da27545f8', season: 'Oct – Apr', risk: 'popular' },
  { name: 'Marlborough Sounds', slug: 'marlborough', tagline: 'Secluded bays, stunning scenery, year-round sailing', highlights: ['Queen Charlotte Sound', 'Pelorus Sound', 'Picton'], image: 'photo-1544551763-46a013bb70d5', season: 'Year-round', risk: 'sheltered' },
  { name: 'Wellington & Cook Strait', slug: 'wellington', tagline: "NZ's most challenging waters — demanding but rewarding", highlights: ['Wellington Harbour', 'Cook Strait', 'Picton crossing'], image: 'photo-1559494007-9f5847c49d94', season: 'Oct – Mar', risk: 'demanding' },
  { name: 'Fiordland & Southland', slug: 'queenstown', tagline: 'Remote wilderness sailing — Milford, Doubtful, Dusky Sounds', highlights: ['Milford Sound', 'Doubtful Sound', 'Dusky Sound'], image: 'photo-1526481280693-3bfa7568e0f3', season: 'Nov – Apr', risk: 'remote' },
  { name: 'Tauranga & Bay of Plenty', slug: 'tauranga', tagline: 'Sunshine Coast sailing — Mayor Island & White Island', highlights: ['Tauranga Harbour', 'Mayor Island', 'White Island'], image: 'photo-1548115184-bc6544d06a58', season: 'Oct – Apr', risk: 'moderate' },
];

const coverageCards = [
  { slug: 'hull-machinery',         name: 'Hull & Machinery',       tagline: 'Physical vessel damage and equipment cover', bullets: ['Hull, structure & fittings', 'Navigation equipment', 'Grounding & storm damage'], color: 'teal' },
  { slug: 'third-party-liability',  name: 'Third Party Liability',  tagline: 'Protection against claims from others',       bullets: ['Bodily injury liability', 'Property damage claims', 'Environmental liability'],  color: 'blue' },
  { slug: 'all-risks',              name: 'All Risks',              tagline: 'Broadest available cover for peace of mind',  bullets: ['Combines H&M + liability', 'Theft, fire & weather', 'Crew & personal effects'],   color: 'emerald' },
  { slug: 'charter-cover',          name: 'Charter Cover',          tagline: 'Commercial operations and charter liability', bullets: ['Commercial charter ops', 'Passenger liability', 'Loss of hire cover'],           color: 'amber' },
  { slug: 'racing-cover',           name: 'Racing Cover',           tagline: 'Specialist cover for competitive sailing',    bullets: ['Race-specific endorsements', 'Regatta liability', 'NZ racing circuits'],         color: 'purple' },
  { slug: 'trailer-boat',           name: 'Trailer Boat',           tagline: 'On-road and in-water trailer boat cover',    bullets: ['Transit & launch cover', 'Theft from trailer', 'On-road liability'],              color: 'red' },
];

const colorBg: Record<string, string> = { teal: 'bg-teal-500/15 border-teal-500/20', blue: 'bg-blue-500/15 border-blue-500/20', emerald: 'bg-emerald-500/15 border-emerald-500/20', amber: 'bg-amber-500/15 border-amber-500/20', purple: 'bg-purple-500/15 border-purple-500/20', red: 'bg-red-500/15 border-red-500/20' };
const iconBg:  Record<string, string> = { teal: 'bg-teal-500/20',    blue: 'bg-blue-500/20',    emerald: 'bg-emerald-500/20',    amber: 'bg-amber-500/20',    purple: 'bg-purple-500/20',    red: 'bg-red-500/20' };
const iconCol: Record<string, string> = { teal: 'text-teal-400',     blue: 'text-blue-400',     emerald: 'text-emerald-400',     amber: 'text-amber-400',     purple: 'text-purple-400',     red: 'text-red-400' };

const riskBadge: Record<string, string> = { busy: 'bg-amber-500/90 text-white', popular: 'bg-emerald-500/90 text-white', sheltered: 'bg-emerald-500/90 text-white', demanding: 'bg-red-500/90 text-white', remote: 'bg-amber-500/90 text-white', moderate: 'bg-emerald-500/90 text-white' };
const riskLabel: Record<string, string> = { busy: 'High traffic', popular: 'Popular', sheltered: 'Sheltered', demanding: 'Demanding', remote: 'Remote', moderate: 'Moderate' };

const latestPosts = [
  { slug: 'understanding-yacht-insurance-nz', title: 'Understanding Yacht Insurance in New Zealand: A Complete Guide', excerpt: "Everything you need to know about marine insurance cover, policy types, and what to look for when insuring your vessel in NZ waters.", category: 'Guides', readTime: '8 min read', image: 'photo-1540946485063-a40da27545f8' },
  { slug: 'coastal-cruising-bay-islands-fiordland', title: 'Coastal Cruising: Insurance from Bay of Islands to Fiordland', excerpt: "NZ offers world-class coastal cruising but each region has distinct risks. Here's what your policy needs to cover.", category: 'Cruising', readTime: '7 min read', image: 'photo-1544551763-46a013bb70d5' },
  { slug: 'storm-season-vessel-protection', title: 'Storm Season Preparation: Protecting Your Vessel in NZ Waters', excerpt: "How to prepare your vessel and insurance for New Zealand's storm season — and what to check before cyclone risk peaks.", category: 'Safety', readTime: '6 min read', image: 'photo-1559494007-9f5847c49d94' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1800&h=900&fit=crop" alt="Sailing yacht on New Zealand waters" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr,420px] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 text-teal-400 text-sm font-medium mb-6">
                <span>⚓</span> New Zealand Specialist Marine Insurance
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Yacht Insurance for<br /><span className="text-teal-400">New Zealand Waters</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                From Auckland&apos;s Hauraki Gulf to Fiordland&apos;s remote sounds — specialist marine insurance for every NZ sailing destination. Hull &amp; machinery, liability, racing cover, and blue water cruising policies.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Auckland', 'Bay of Islands', 'Marlborough Sounds', 'Wellington', 'Fiordland', 'Tauranga'].map(d => (
                  <span key={d} className="bg-white/10 text-slate-300 text-sm px-3 py-1.5 rounded-full border border-white/10">{d}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-xl transition-colors">Get a Quote</Link>
                <Link href="/compare" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-colors">Compare Insurers</Link>
              </div>
            </div>
            <div className="lg:block w-full">
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: 'Registered Advisors', value: 'ICNZ', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
              { label: 'Quote Response',       value: '<24hrs', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { label: 'Nationwide Cover',     value: 'NZwide', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /> },
              { label: 'Claims Support',       value: '24/7',   icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></> },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center text-center px-6 py-4 gap-3">
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{s.icon}</svg>
                </div>
                <div>
                  <div className="text-2xl font-black text-white tracking-tight">{s.value}</div>
                  <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NZ Sailing Locations */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-teal-400 font-medium text-sm mb-3 uppercase tracking-wider">Where NZ Sailors Go</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Top Sailing Locations in New Zealand</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Each NZ region has distinct conditions, risks, and insurance requirements. Click to see what your policy needs to cover.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nzLocations.map(loc => (
              <Link key={loc.slug} href={`/locations/${loc.slug}/`} className="group bg-slate-800 rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
                <div className="relative h-48 overflow-hidden">
                  <img src={`https://images.unsplash.com/${loc.image}?w=600&h=400&fit=crop`} alt={`${loc.name} sailing`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className={`absolute top-2.5 right-2.5 text-xs px-2 py-0.5 rounded-full font-semibold ${riskBadge[loc.risk]}`}>{riskLabel[loc.risk]}</div>
                  <div className="absolute bottom-2 left-3"><span className="text-xs text-teal-300 font-medium">Best: {loc.season}</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white text-base mb-1.5 group-hover:text-teal-400 transition-colors leading-snug">{loc.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-2">{loc.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.highlights.slice(0, 2).map(h => (
                      <span key={h} className="text-xs bg-white/5 text-slate-400 px-2 py-0.5 rounded-full border border-white/10">{h}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/locations/" className="border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-bold px-8 py-3 rounded-xl transition-colors">View All NZ Locations →</Link>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">What We Cover</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Marine Insurance Built<br className="hidden sm:block" /> for NZ Waters</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed sm:text-right">Every coverage type your vessel needs — from basic third-party liability to full all-risks policies.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coverageCards.map(ct => (
              <Link key={ct.slug} href="/coverage" className={`group relative rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${colorBg[ct.color]}`}>
                <div className={`w-11 h-11 rounded-xl ${iconBg[ct.color]} flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 ${iconCol[ct.color]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-teal-300 transition-colors">{ct.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{ct.tagline}</p>
                <ul className="space-y-1.5 mb-5">
                  {ct.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-xs text-slate-300">
                      <svg className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1.5 text-teal-400 text-xs font-semibold group-hover:gap-2.5 transition-all">
                  Learn more <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm">Not sure which cover you need? Our advisors will guide you through the options.</p>
            <div className="flex gap-3">
              <Link href="/coverage" className="border border-white/20 hover:border-teal-400 text-white hover:text-teal-300 font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors">All Coverage Types</Link>
              <Link href="/contact" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / How It Works */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why NZ Boat Owners Choose Us</h2>
              <div className="space-y-5">
                {[
                  { icon: '🇳🇿', title: 'NZ Expertise', desc: "We know Hauraki Gulf conditions, Cook Strait crossings, Fiordland remoteness, and the specific risks that matter for New Zealand boat owners." },
                  { icon: '🛡️', title: 'Market Access', desc: "We compare quotes from multiple NZ and international marine insurers — finding the best coverage for your vessel type and sailing grounds." },
                  { icon: '📄', title: 'ICNZ Registered', desc: "All referred advisors are registered with the Insurance Council of New Zealand and hold relevant qualifications under the Financial Advice Regime." },
                  { icon: '⏱️', title: 'Fast Turnaround', desc: "Cruising plans don't wait. Competitive quotes in less than 24 hours — even for specialist blue water or racing cover." },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">How to Get Your Quote</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Submit Your Request', desc: 'Fill in our quote form with vessel details, mooring location, and planned sailing grounds. Takes about 3 minutes.' },
                  { step: '2', title: 'We Source Options', desc: 'Our specialist advisors compare NZ and international marine insurers to find cover that suits your vessel and budget.' },
                  { step: '3', title: 'Compare & Choose', desc: 'We present competitive options with clear explanations of coverage differences and any exclusions. No pressure, no obligation.' },
                  { step: '4', title: 'Sail with Confidence', desc: 'Receive your policy documents and certificates — ready for harbourmasters, marina berth requirements, or offshore passages.' },
                ].map(item => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                    <div>
                      <h4 className="text-white font-semibold mb-0.5">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-8 block w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 rounded-xl text-center transition-colors">Get a Quote Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="text-teal-400 font-medium text-sm mb-3 uppercase tracking-wider">Resources</div>
              <h2 className="text-3xl font-bold text-white mb-2">NZ Yacht Insurance Guides</h2>
              <p className="text-slate-400">Expert articles on NZ marine regulations, coverage, and sailing grounds</p>
            </div>
            <Link href="/blog" className="text-teal-400 hover:text-teal-300 text-sm font-semibold hidden sm:block">View all guides →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-slate-900 rounded-2xl border border-white/10 overflow-hidden hover:border-teal-500/40 hover:shadow-lg transition-all hover:-translate-y-0.5">
                <div className="h-48 overflow-hidden">
                  <img src={`https://images.unsplash.com/${post.image}?w=400&h=300&fit=crop`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 font-medium border border-teal-500/20">{post.category}</span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug mb-2 group-hover:text-teal-400 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 bg-teal-600 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1600&h=600&fit=crop" alt="Sailing in New Zealand" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Vessel?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Get competitive yacht insurance quotes from New Zealand&apos;s specialist marine advisors. Compare multiple insurers — no obligation, response within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white hover:bg-teal-50 text-teal-700 font-bold px-8 py-4 rounded-xl transition-colors">Get a Quote</Link>
            <Link href="/compare" className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors">Compare Insurers</Link>
          </div>
        </div>
      </section>
    </>
  );
}
