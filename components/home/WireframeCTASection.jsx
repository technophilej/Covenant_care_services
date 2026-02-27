'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function WireframeCTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-blue-700 to-brand-navy rounded-3xl p-10 sm:p-14 text-white overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-20">
            <img
              src="/images/contact/maine-landscape.jpg"
              alt="Maine landscape"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Need In-Home Personal Care Assistance?</h2>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors"
              >
                Request Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                Contact Us Today
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-brand-blue-100">
              <a href="tel:+12072528470" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>(207) 252-8470</span>
              </a>
              <a href="mailto:contact@covenantcareservices.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>contact@covenantcareservices.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
