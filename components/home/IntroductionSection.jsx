'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function IntroductionSection() {
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
            Welcome to Covenant Care Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-lg text-gray-700 leading-relaxed"
          >
            Covenant Care Services LLC is a Maine-based Personal Care Agency providing in-home assistance with Activities of Daily Living (ADLs)
            and Instrumental Activities of Daily Living (IADLs) through trained Personal Support Specialists in accordance with an authorized
            Service Plan.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-700 leading-relaxed"
          >
            Services are provided in the memberCs place of residence. We do not operate residential care facilities or group home settings.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
