'use client'

import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '../../components/lib/utils';
import { motion } from 'framer-motion';
import { 
  Heart, Home, Users, Clock, Utensils, Car, Pill,
  Brain, Sparkles, Phone, ArrowRight, CheckCircle2 
} from 'lucide-react';
import Layout from '../../components/layout/Layout';

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Our trained caregivers provide compassionate assistance with daily living activities to help maintain dignity and independence.',
    features: [
      'Bathing and personal hygiene',
      'Dressing assistance',
      'Grooming and hair care',
      'Mobility support',
      'Toileting assistance',
      'Skin and nail care',
    ],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Home,
    title: 'Companion Care',
    description: 'Meaningful companionship that promotes emotional well-being and social engagement for your loved ones.',
    features: [
      'Conversation and social interaction',
      'Playing games and puzzles',
      'Reading together',
      'Accompaniment to appointments',
      'Light housekeeping',
      'Meal planning and preparation',
    ],
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Users,
    title: 'Respite Care',
    description: 'Temporary relief for family caregivers, allowing them to rest while ensuring quality care continues.',
    features: [
      'Short-term care coverage',
      'Emergency care needs',
      'Vacation coverage',
      'Weekend relief',
      'Overnight care',
      'Flexible scheduling',
    ],
    image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Clock,
    title: 'Hourly & Live-In Care',
    description: 'Flexible care options ranging from a few hours a week to around-the-clock live-in assistance.',
    features: [
      'Minimum 4-hour visits',
      'Full-day care options',
      '24/7 live-in care',
      'Night shift coverage',
      'Weekend care',
      'Holiday coverage',
    ],
    image: 'https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Utensils,
    title: 'Meal Preparation',
    description: 'Nutritious meal planning and preparation tailored to dietary needs and preferences.',
    features: [
      'Meal planning',
      'Grocery shopping',
      'Cooking and preparation',
      'Special diet accommodations',
      'Feeding assistance',
      'Kitchen cleanup',
    ],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Safe and reliable transportation to appointments, errands, and social activities.',
    features: [
      'Medical appointments',
      'Grocery shopping',
      'Social outings',
      'Religious services',
      'Family visits',
      'Recreational activities',
    ],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Pill,
    title: 'Medication Reminders',
    description: 'Assistance with medication management to ensure proper timing and dosage.',
    features: [
      'Medication reminders',
      'Prescription pickup',
      'Organizing pill boxes',
      'Monitoring intake',
      'Communication with pharmacy',
      'Family updates',
    ],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Brain,
    title: 'Alzheimer\'s & Dementia Care',
    description: 'Specialized care for individuals with memory-related conditions, focusing on safety and quality of life.',
    features: [
      'Memory care activities',
      'Cognitive stimulation',
      'Wandering prevention',
      'Behavior management',
      'Daily routine structure',
      'Family education',
    ],
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Services() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-brand-blue-700 to-brand-navy overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-brand-blue-100 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Comprehensive Care Solutions
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-brand-blue-100 max-w-2xl mx-auto"
            >
              Discover our comprehensive range of home care services designed to meet 
              the unique needs of every individual and family we serve.
            </motion.p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                      />
                      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-brand-blue-600 to-brand-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Contact us today for a free consultation. We'll work with you to create 
                a personalized care plan that meets your family's unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={createPageUrl('Contact')}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-brand-blue-600/20 hover:shadow-brand-blue-600/30 transition-all duration-300 group"
                >
                  Request a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+12075551234"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <Phone className="w-5 h-5" />
                  (207) 555-1234
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
