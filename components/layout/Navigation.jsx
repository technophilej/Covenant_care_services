'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LOGO_URL = '/images/logo.jpg';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', current: pathname === '/' },
    { href: '/services', label: 'Services', current: pathname === '/services' },
    { href: '/contact?tab=careers', label: 'Careers', current: pathname === '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="relative z-50"
    >
      {/* Main Nav */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={LOGO_URL}
                alt="Covenant Care Services LLC"
                width={420}
                height={140}
                priority
                className="h-24 w-auto"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold transition-colors duration-200 whitespace-nowrap ${
                    link.current
                      ? 'text-brand-blue-700'
                      : 'text-brand-navy hover:text-brand-blue-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/request-services"
                className="bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white px-7 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-brand-blue-600/20"
              >
                Request Services
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-brand-navy hover:text-brand-blue-700 hover:bg-gray-100 transition-colors"
              suppressHydrationWarning
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" suppressHydrationWarning /> : <Menu className="w-6 h-6" suppressHydrationWarning />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                      link.current
                        ? 'text-brand-blue-700 bg-brand-blue-50'
                        : 'text-brand-navy hover:text-brand-blue-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/request-services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-2 mx-3 bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white px-4 py-2.5 rounded-full font-semibold text-center transition-all duration-300"
                >
                  Request Services
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
