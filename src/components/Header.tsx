'use client';

import { useState } from 'react';
import Link from 'next/link';

const vesselTypes = [
  { label: 'Yacht', href: '/sectors/yacht' },
  { label: 'Jet Ski', href: '/sectors/jetski' },
  { label: 'Dinghy', href: '/sectors/dinghy' },
  { label: 'Tender', href: '/sectors/tender' },
  { label: 'Racing Boat', href: '/sectors/racing-boat' },
  { label: 'Coastal Cruising', href: '/sectors/coastal-cruising' },
  { label: 'Blue Water Cruiser', href: '/sectors/bluewater' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 28 L15 4 Q15 4 6 22 Z" fill="#14b8a6" />
                <path d="M15 8 L15 24 L26 24 Z" fill="#0f766e" />
                <line x1="4" y1="28" x2="28" y2="28" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="15" y1="4" x2="15" y2="28" stroke="#e2e8f0" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-baseline gap-0 leading-none">
              <span className="text-teal-400 font-bold text-lg tracking-tight">Yacht</span>
              <span className="text-white font-bold text-lg tracking-tight">Insurance</span>
              <span className="text-slate-400 font-semibold text-lg tracking-tight">.co.nz</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Vessel Types dropdown */}
            <div className="relative group">
              <button className="text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                Vessel Types
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-slate-800 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2">
                {vesselTypes.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/coverage" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Coverage</Link>
            <Link href="/compare" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Compare</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Resources</Link>
            <Link href="/faqs" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">FAQs</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/marine-proposal"
              className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-slate-300 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-white/10 px-4 py-4 space-y-1">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold px-3 py-1">Vessel Types</p>
          {vesselTypes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-slate-300 hover:text-white text-sm transition-colors rounded-lg hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-2 mt-2 space-y-1">
            <Link href="/coverage" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white text-sm rounded-lg hover:bg-white/5">Coverage</Link>
            <Link href="/compare" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white text-sm rounded-lg hover:bg-white/5">Compare</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white text-sm rounded-lg hover:bg-white/5">Resources</Link>
            <Link href="/faqs" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white text-sm rounded-lg hover:bg-white/5">FAQs</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white text-sm rounded-lg hover:bg-white/5">About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-slate-300 hover:text-white text-sm rounded-lg hover:bg-white/5">Contact</Link>
          </div>
          <div className="pt-2">
            <Link
              href="/marine-proposal"
              onClick={() => setMobileOpen(false)}
              className="block w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold px-5 py-3 rounded-xl text-sm text-center transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
