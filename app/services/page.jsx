'use client'

import React from 'react';
import {
  Heart, Home, Users, Clock, Utensils, Car, Pill, Brain, CheckCircle, Phone, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Our trained caregivers provide compassionate assistance with daily living activities to help maintain dignity and independence.',
    features: ['Bathing and personal hygiene', 'Dressing assistance', 'Grooming and hair care', 'Mobility support', 'Toileting assistance', 'Skin and nail care'],
  },
  {
    icon: Home,
    title: 'Companion Care',
    description: 'Meaningful companionship that promotes emotional well-being and social engagement for your loved ones.',
    features: ['Conversation and social interaction', 'Playing games and puzzles', 'Reading together', 'Accompaniment to appointments', 'Light housekeeping', 'Meal planning and preparation'],
  },
  {
    icon: Users,
    title: 'Respite Care',
    description: 'Temporary relief for family caregivers, allowing them to rest while ensuring quality care continues.',
    features: ['Short-term care coverage', 'Emergency care needs', 'Vacation coverage', 'Weekend relief', 'Overnight care', 'Flexible scheduling'],
  },
  {
    icon: Clock,
    title: 'Hourly & Live-In Care',
    description: 'Flexible care options ranging from a few hours a week to around-the-clock live-in assistance.',
    features: ['Minimum 4-hour visits', 'Full-day care options', '24/7 live-in care', 'Night shift coverage', 'Weekend care', 'Holiday coverage'],
  },
  {
    icon: Utensils,
    title: 'Meal Preparation',
    description: 'Nutritious meal planning and preparation tailored to dietary needs and preferences.',
    features: ['Meal planning', 'Grocery shopping', 'Cooking and preparation', 'Special diet accommodations', 'Feeding assistance', 'Kitchen cleanup'],
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Safe and reliable transportation to appointments, errands, and social activities.',
    features: ['Medical appointments', 'Grocery shopping', 'Social outings', 'Religious services', 'Family visits', 'Recreational activities'],
  },
  {
    icon: Pill,
    title: 'Medication Reminders',
    description: 'Assistance with medication management to ensure proper timing and dosage.',
    features: ['Medication reminders', 'Prescription pickup', 'Organizing pill boxes', 'Monitoring intake', 'Communication with pharmacy', 'Family updates'],
  },
  {
    icon: Brain,
    title: "Alzheimer's & Dementia Care",
    description: 'Specialized care for individuals with memory-related conditions, focusing on safety and quality of life.',
    features: ['Memory care activities', 'Cognitive stimulation', 'Wandering prevention', 'Behavior management', 'Daily routine structure', 'Family education'],
  },
];

export default function Services() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <section className="bg-brand-navy py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-blue-200 max-w-2xl leading-relaxed">
              Comprehensive in-home personal care services delivered by trained Personal Support Specialists in accordance with an authorized Service Plan.
            </p>
          </div>
        </section>

        <section className="py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div key={service.title} className="border border-gray-100 rounded-lg p-6 hover:border-brand-blue-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 bg-brand-blue-50 rounded flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-brand-blue-700" />
                  </div>
                  <h2 className="font-bold text-brand-navy mb-2">{service.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-600 text-xs">
                        <CheckCircle className="w-3 h-3 text-brand-blue-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Ready to Get Started?</h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Contact us today. We will work with you to create a personalized care plan that meets your family's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-services"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue-700 hover:bg-brand-blue-800 text-white px-8 py-3.5 rounded font-semibold text-sm transition-colors"
              >
                Request Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+12072528470"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-brand-navy px-8 py-3.5 rounded font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                (207) 252-8470
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
