'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function OurStaffSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Our Staff
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-lg text-gray-700 leading-relaxed"
          >
            All direct care staff must hold CNA or PSS certification or be enrolled in a Department-approved Personal Support Specialist training
            program within 60 days of hire.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
