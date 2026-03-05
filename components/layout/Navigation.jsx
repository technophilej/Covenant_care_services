'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/contact?tab=careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) => {
    const path = href.split('?')[0];
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Covenant Care Services LLC"
              width={280}
              height={80}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-brand-blue-700'
                    : 'text-brand-navy hover:text-brand-blue-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/request-services"
              className="bg-brand-blue-700 hover:bg-brand-blue-800 text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors duration-200"
            >
              Request Services
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded text-brand-navy hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2.5 text-sm font-semibold rounded transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-blue-700 bg-brand-blue-50'
                    : 'text-brand-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <Link
                href="/request-services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-brand-blue-700 hover:bg-brand-blue-800 text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors"
              >
                Request Services
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
