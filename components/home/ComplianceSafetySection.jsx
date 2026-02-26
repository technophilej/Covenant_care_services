'use client'

import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'Background checks through the Maine Background Check Center',
  'APS/CPS Screening',
  'Staff orientation prior to independent work',
  'Liability insurance coverage',
  'Annual staff training',
  'Emergency contingency planning',
];

export default function ComplianceSafetySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Compliance & Safety
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {items.map((item) => (
              <li key={item} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
