'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const features = [
  'Personalized care plans tailored to individual needs',
  'Thoroughly vetted and trained caregivers',
  'Flexible scheduling to fit your lifestyle',
  '24/7 support and monitoring',
  'Regular family communication and updates',
  'Affordable care with transparent pricing',
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:pb-16"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Caregiver with patient"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 z-20 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80"
                alt="Happy senior"
                className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-brand-blue-700 font-semibold text-sm tracking-wider uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Dedicated to Enhancing Quality of Life
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Covenant Care Services was founded with a simple mission: to provide
              exceptional home care that allows individuals to age gracefully in the
              comfort of their own homes. Based in Maine, we understand the unique
              needs of our community.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of compassionate caregivers is committed to treating every
              client like family, ensuring they receive the dignity, respect, and
              personalized attention they deserve.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}