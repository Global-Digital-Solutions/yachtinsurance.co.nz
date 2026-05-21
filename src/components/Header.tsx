'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

const vesselTypes = [
  { label: 'Yacht', href: '/sectors/yacht' },
  { label: 'Jet Ski', href: '/sectors/jetski' },
  { label: 'Dinghy', href: '/sectors/dinghy' },
  { label: 'Tender', href: '/sectors/tender' },
  { label: 'Racing Boat', href: '/sectors/racing-boat' },
  { label: 'Coastal Cruising', href: '/sectors/coastal-cruising' },
  { label: 'Blue Water Cruiser', href: '/sectors/bluewater' },
];

const navLinks = [
  { label: 'Coverage', href: '/coverage' },
  { label: 'Compare', href: '/compare' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white shadow-md border-b border-slate-200'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {/* Vessel Types Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-slate-700 hover:text-sky-600 transition-colors font-medium text-sm"
            >
              Vessel Types
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-200">
              {vesselTypes.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 hover:bg-sky-50 hover:text-sky-600 text-sm first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-sky-600 text-white rounded-xl font-medium text-sm hover:bg-sky-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-sky-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {/* Vessel Types Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-slate-700 hover:text-sky-600 font-medium text-sm w-full"
              >
                Vessel Types
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {vesselTypes.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-slate-600 hover:text-sky-600 text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-slate-700 hover:text-sky-600 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block w-full px-4 py-2.5 bg-sky-600 text-white rounded-xl font-medium text-sm text-center hover:bg-sky-700 transition-colors mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
