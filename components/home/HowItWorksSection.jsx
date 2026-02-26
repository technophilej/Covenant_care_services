'use client'

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Referral / Intake',
    description: 'We determine whether services are appropriate and can be safely delivered in the home environment.',
  },
  {
    title: 'Service Plan',
    description: 'Care is delivered according to an authorized Service Plan including services and frequency.',
  },
  {
    title: 'Ongoing Review',
    description: 'Plans are reviewed annually and updated with any change in condition.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            How It Works
          </motion.h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue-700 text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
