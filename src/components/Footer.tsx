import Link from 'next/link';
import { Mail } from 'lucide-react';

const vesselTypes = [
  { label: 'Yacht', href: '/sectors/yacht' },
  { label: 'Jet Ski', href: '/sectors/jetski' },
  { label: 'Dinghy', href: '/sectors/dinghy' },
  { label: 'Tender', href: '/sectors/tender' },
  { label: 'Racing Boat', href: '/sectors/racing-boat' },
  { label: 'Coastal Cruising', href: '/sectors/coastal-cruising' },
  { label: 'Blue Water Cruiser', href: '/sectors/bluewater' },
];

const locationLinks = [
  { label: 'Auckland', href: '/locations/auckland/' },
  { label: 'Wellington', href: '/locations/wellington/' },
  { label: 'Christchurch', href: '/locations/christchurch/' },
  { label: 'Bay of Islands', href: '/locations/bay-of-islands/' },
  { label: 'Tauranga', href: '/locations/tauranga/' },
  { label: 'Marlborough Sounds', href: '/locations/marlborough/' },
  { label: 'Queenstown', href: '/locations/queenstown/' },
  { label: 'All Locations →', href: '/locations/' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100 border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 28 L15 4 Q15 4 6 22 Z" fill="#14b8a6" />
                  <path d="M15 8 L15 24 L26 24 Z" fill="#0f766e" />
                  <line x1="4" y1="28" x2="28" y2="28" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="15" y1="4" x2="15" y2="28" stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex items-baseline gap-0 leading-none">
                <span className="text-teal-400 font-bold text-base tracking-tight">Yacht</span>
                <span className="text-white font-bold text-base tracking-tight">Insurance</span>
                <span className="text-slate-500 font-semibold text-base tracking-tight">.co.nz</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              New Zealand's specialist yacht and marine insurance referral service. Compare top insurers and protect your vessel with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Coverage', href: '/coverage' },
                { label: 'Compare Insurers', href: '/compare' },
                { label: 'Resources', href: '/blog' },
                { label: 'About', href: '/about' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Making a Claim', href: '/claims' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vessel Types */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Vessel Types</h3>
            <ul className="space-y-3">
              {vesselTypes.map((type) => (
                <li key={type.href}>
                  <Link href={type.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {type.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">By Location</h3>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@cover4you.co.nz" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  hello@cover4you.co.nz
                </a>
              </li>
              <li className="text-slate-400 text-sm leading-relaxed">
                Quote <span className="font-semibold text-white">YI</span> for best prices
              </li>
              <li>
                <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-lg px-3 py-2">
                  <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-teal-400 text-xs font-semibold">Response within 24 hours</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* How This Site Works Disclaimer */}
        <div className="bg-slate-900 rounded-xl p-6 mb-8 border border-white/5">
          <h4 className="text-white font-bold text-sm mb-2">How This Site Works</h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            YachtInsurance.co.nz is operated by <a href="https://www.cover4you.co.nz" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">Cover4You</a>. We are a referral service — when you submit a quote request, your details are passed to licensed insurance advisers and brokers who will contact you with quotes and coverage options. We do not sell insurance directly and do not provide regulated financial advice. Our advisers earn commission from insurers when a policy is placed. This service is completely free to you — you pay nothing extra.
          </p>
        </div>

        {/* Global Marine Insurance Network */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-semibold">Our Global Marine Insurance Network</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="https://www.floridacover.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-xs transition-colors">Florida Marine Insurance</a>
            <a href="https://www.yachtinsurance.co.uk/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-xs transition-colors">Yacht Insurance UK</a>
            <a href="https://www.yachtinsurance.co.za/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-xs transition-colors">Yacht Insurance South Africa</a>
            <a href="https://www.boatinsurance.co.za/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-xs transition-colors">Boat Insurance South Africa</a>
            <a href="https://www.yachtinsurance.asia/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 text-xs transition-colors">Yacht Insurance Asia</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-slate-500 text-xs">
              <p>
                &copy; {new Date().getFullYear()} YachtInsurance.co.nz — operated by <a href="https://www.cover4you.co.nz" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Cover4You</a>. All rights reserved. |{' '}
                <a href="https://icnz.org.nz" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                  Insurance Council of New Zealand (ICNZ)
                </a>
              </p>
            </div>
            <div className="flex gap-5">
              <Link href="/privacy" className="text-slate-500 hover:text-teal-400 transition-colors text-xs">Privacy Policy</Link>
              <Link href="/terms" className="text-slate-500 hover:text-teal-400 transition-colors text-xs">Terms of Service</Link>
            </div>
          </div>
          <div className="text-center text-slate-600 text-xs mt-6">
            <p>Powered by <a href="https://www.cover4you.co.nz" target="_blank" rel="noopener noreferrer" className="text-teal-500 font-semibold hover:text-teal-400 transition-colors">Cover4You</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
