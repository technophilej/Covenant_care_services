'use client'

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Heart, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    legal: [
      { href: '/contact?tab=careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue-600 to-brand-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CC</span>
              </div>
              <span className="text-xl font-bold">Covenant Care Services LLC</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing compassionate home care solutions throughout Maine, 
              helping your loved ones maintain independence and quality of life 
              in the comfort of their own homes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-brand-blue-200" />
                <span>(207) 252-8470</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-brand-blue-200" />
                <span>Fax: (207) 601-3590</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-brand-blue-200" />
                <span>contact@covenantcareservices.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-brand-blue-200" />
                <span>
                  40 Gina Street
                  <br />
                  Lewiston, ME 04240
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-brand-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-brand-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-brand-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-blue-200 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Covenant Care Services. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for Maine families
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
