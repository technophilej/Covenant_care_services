'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const adls = [
  'Bathing',
  'Grooming',
  'Dressing',
  'Toileting',
  'Eating Assistance',
  'Transfers',
  'Personal Hygiene',
];

const iadls = [
  'Meal Preparation',
  'Laundry',
  'Light Housekeeping',
  'Shopping',
  'Transportation',
  'Managing Finances',
  'Medication Reminders',
];

export default function PcaServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Our PCA Services Overview
          </motion.h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-brand-navy">Activities of Daily Living (ADLs)</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              {adls.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-brand-navy">Instrumental Activities of Daily Living (IADLs)</h3>
            <ul className="mt-6 space-y-3 text-gray-700">
              {iadls.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-brand-blue-600/20 hover:shadow-brand-blue-600/30 transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
