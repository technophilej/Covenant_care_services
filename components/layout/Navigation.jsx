'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699d184dd0f6d95225007a40/5a5b59179_2c0df5d6-aca3-46d0-91b1-302cde780ad2.JPG";

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
    { href: '/#about', label: 'About Us', current: pathname === '/' },
    { href: '/services', label: 'Services', current: pathname === '/services' },
    { href: '/contact', label: 'Contact', current: pathname === '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top Info Bar */}
      <div className="bg-brand-navy text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="tel:+12072528470"
                className="flex items-center gap-2 hover:text-brand-blue-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(207) 252-8470</span>
              </a>
              <a
                href="mailto:contact@covenantcareservices.com"
                className="flex items-center gap-2 hover:text-brand-blue-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@covenantcareservices.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Serving All of Maine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src={LOGO_URL}
                alt="Covenant Care Services LLC"
                className="h-14 w-auto"
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
                      : 'text-gray-700 hover:text-brand-blue-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white px-7 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-brand-blue-600/20"
              >
                Request Services
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-brand-blue-700 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                        : 'text-gray-700 hover:text-brand-blue-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
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
