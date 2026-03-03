'use client'

import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import ApplicationForm from '../../components/contact/ApplicationForm';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Heart,
  Users,
  Sparkles,
  Award,
} from 'lucide-react';
import Image from 'next/image';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: ['(207) 252-8470', 'Fax: (207) 601-3590'],
    link: 'tel:+12072528470',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@covenantcareservices.org',
    link: 'mailto:contact@covenantcareservices.org',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '40 Gina Street, Lewiston, ME 04240',
    link: null,
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: 'Mon-Fri: 8am-6pm',
    link: null,
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Make a Difference',
    description: 'Help improve the quality of life for seniors in your community',
  },
  {
    icon: Users,
    title: 'Supportive Team',
    description: 'Work with a caring, professional team that values your contributions',
  },
  {
    icon: Award,
    title: 'Growth Opportunities',
    description: 'Training programs and career advancement paths',
  },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState('careers');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('tab') === 'careers') {
      setActiveTab('careers');
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-brand-blue-700 to-brand-navy overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Careers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-brand-blue-100 max-w-2xl mx-auto"
            >
              We're here to answer your questions and help you find the perfect care 
              solution for your family. Reach out today!
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="relative -mt-10 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-blue-700" />
                  </div>
                  <h3 className="font-semibold text-brand-navy mb-1">{item.title}</h3>
                  {Array.isArray(item.content) ? (
                    <div className="text-brand-navy/75 space-y-1">
                      <a href={item.link} className="text-brand-blue-700 hover:text-brand-blue-800 transition-colors">
                        {item.content[0]}
                      </a>
                      <p className="text-brand-navy/75">{item.content[1]}</p>
                    </div>
                  ) : item.link ? (
                    <a
                      href={item.link}
                      className="text-brand-blue-700 hover:text-brand-blue-800 transition-colors break-words"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-brand-navy/75">{item.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="bg-white shadow-md rounded-full p-1.5 h-auto">
                  <TabsTrigger
                    value="careers"
                    className="rounded-full px-6 py-3 data-[state=active]:bg-brand-blue-700 data-[state=active]:text-white font-medium transition-all"
                  >
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="careers" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-brand-navy mb-6">
                      Join Our Caregiving Team
                    </h2>
                    <p className="text-lg text-brand-navy/75 mb-8 leading-relaxed">
                      Are you passionate about making a difference in people's lives? 
                      We're always looking for compassionate, dedicated caregivers to 
                      apply today and become part of our family.
                    </p>

                    {/* Benefits */}
                    <div className="space-y-6 mb-8">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-md"
                        >
                          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-brand-navy mb-1">
                              {benefit.title}
                            </h3>
                            <p className="text-brand-navy/75 text-sm">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-brand-blue-50 rounded-2xl p-6">
                      <h3 className="font-semibold text-brand-navy mb-3">
                        We Offer:
                      </h3>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-brand-navy/80">
                        {[
                          'Competitive pay',
                          'Flexible scheduling',
                          'Paid training',
                          'Health benefits',
                          'Paid time off',
                          'Referral bonuses',
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-blue-600 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 bg-white rounded-2xl p-6 shadow-md">
                      <h3 className="font-semibold text-brand-navy mb-2">Employment Application Form</h3>
                      <p className="text-sm text-brand-navy/75 mb-4">
                        Download the PDF, fill it out, then upload it using the form.
                      </p>
                      <a
                        href="/forms/EmploymentApplication.pdf"
                        download
                        className="inline-flex items-center justify-center bg-brand-blue-700 hover:bg-brand-blue-800 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
                      >
                        Download Employment Application (PDF)
                      </a>
                    </div>
                  </motion.div>

                  {/* Right Column - Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <ApplicationForm />
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Service Area</h2>
              <p className="text-lg text-brand-navy/75">
                Proudly serving families throughout the state of Maine
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-blue-100 to-brand-blue-50 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/images/contact/maine-landscape.jpg"
                  alt="Maine landscape"
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative text-center">
                <MapPin className="w-16 h-16 text-brand-blue-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy">Serving All of Maine</h3>
                <p className="text-brand-blue-700 mt-2">From Portland to Bangor and everywhere in between</p>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-navy">Privacy Policy</h2>
            <p className="mt-6 text-brand-navy/80 leading-relaxed">
              Covenant Care Services LLC respects your privacy. Information submitted through our forms is used only to respond to your request and to coordinate services or employment inquiries. We do not sell your personal information.
            </p>
            <p className="mt-4 text-brand-navy/80 leading-relaxed">
              If you have questions about privacy, contact us at contact@covenantcareservices.org or call (207) 252-8470.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
