'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="inline-block bg-white rounded p-3 mb-5">
              <Image
                src="/images/logo.jpg"
                alt="Covenant Care Services LLC"
                width={220}
                height={70}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-blue-200 leading-relaxed text-sm max-w-xs">
              Providing compassionate in-home personal care services throughout Maine. Helping members live safely and with dignity in their own homes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/contact?tab=careers', label: 'Careers' },
                { href: '/contact', label: 'Contact' },
                { href: '/request-services', label: 'Request Services' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-blue-300 flex-shrink-0" />
                <div>
                  <a href="tel:+12072528470" className="text-sm text-blue-200 hover:text-white transition-colors">
                    (207) 252-8470
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-blue-300 flex-shrink-0" />
                <a href="mailto:contact@covenantcareservices.org" className="text-sm text-blue-200 hover:text-white transition-colors break-all">
                  contact@covenantcareservices.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-300 flex-shrink-0" />
                <span className="text-sm text-blue-200">40 Gina Street, Lewiston, ME 04240</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-blue-300 flex-shrink-0" />
                <span className="text-sm text-blue-200">Mon–Fri: 8am–6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-7 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-blue-300 text-xs">© {currentYear} Covenant Care Services LLC. All rights reserved.</p>
          <Link href="/contact#privacy" className="text-blue-300 hover:text-white text-xs transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
