'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Heart } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=80"
              alt="Happy family"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 text-teal-400" />
              <span className="text-green-300 font-medium">Start Your Care Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Ready to Experience the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">
                Covenant Care Difference?
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation consultation. We'll work with
              you to create a personalized care plan that meets your family's needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-blue-700 hover:from-green-600 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+12075551234"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call (207) 555-1234
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </motion.div>
      </div>
    </section>
  );
}