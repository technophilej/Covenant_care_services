'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Heart, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="inline-flex items-center justify-center bg-white rounded-2xl p-4 shadow-2xl shadow-black/30 mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Covenant Care Services LLC"
                width={320}
                height={120}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Providing compassionate, professional home care services throughout Maine. We're dedicated to helping your loved ones live comfortably and safely at home.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact?tab=careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5" />
                <div>
                  <div className="text-sm">Call Us</div>
                  <a href="tel:+12075551234" className="text-white font-semibold hover:underline">
                    (207) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5" />
                <div>
                  <div className="text-sm">Email</div>
                  <a
                    href="mailto:info@covenantcareservices.com"
                    className="text-white font-semibold hover:underline break-all"
                  >
                    info@covenantcareservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <div className="text-sm">Service Area</div>
                  <div className="text-white font-semibold">All of Maine</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-sm">© {currentYear} Covenant Care Services LLC. All rights reserved.</p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for Maine families
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
