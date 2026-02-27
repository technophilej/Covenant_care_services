'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Heart, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero.jpg"
          alt="Caring for elderly"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-500/20 text-brand-blue-100 text-sm font-medium mb-6 backdrop-blur-sm">
              <Heart className="w-4 h-4" />
              Compassionate Home Care in Maine
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Quality Care,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-blue-100">
              Right at Home
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            At Covenant Care Services, we provide personalized, compassionate home care 
            that allows your loved ones to thrive in the comfort of their own home. 
            Serving families throughout Maine with dignity and respect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-brand-blue-600/20 hover:shadow-brand-blue-600/30 transition-all duration-300 group"
            >
              Request Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+12072528470"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              (207) 252-8470
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, text: 'Licensed & Insured' },
              { icon: Users, text: 'Experienced Caregivers' },
              { icon: Heart, text: '24/7 Support Available' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-300">
                <item.icon className="w-5 h-5 text-brand-blue-100" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

