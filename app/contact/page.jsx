'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Briefcase, 
  Heart, Users, Award, Sparkles 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import ContactForm from '../../components/contact/ContactForm';
import ApplicationForm from '../../components/contact/ApplicationForm';
import Layout from '../../components/layout/Layout';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '(207) 555-1234',
    link: 'tel:+12075551234',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@covenantcareme.com',
    link: 'mailto:info@covenantcareme.com',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    content: 'All of Maine',
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
  const [activeTab, setActiveTab] = useState('contact');

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
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-brand-blue-100 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Get in Touch
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Contact Us
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
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-brand-blue-700 hover:text-brand-blue-800 transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
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
                    value="contact"
                    className="rounded-full px-6 py-3 data-[state=active]:bg-brand-blue-700 data-[state=active]:text-white font-medium transition-all"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Us
                  </TabsTrigger>
                  <TabsTrigger
                    value="careers"
                    className="rounded-full px-6 py-3 data-[state=active]:bg-orange-500 data-[state=active]:text-white font-medium transition-all"
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    Join Our Team
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="contact" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Let's Start the Conversation
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Whether you're looking for care for a loved one or have questions 
                      about our services, we're here to help. Fill out the form and one 
                      of our care coordinators will contact you within 24 hours.
                    </p>

                    <div className="bg-brand-blue-50 rounded-2xl p-6 mb-8">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        What Happens Next?
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'We review your inquiry and care needs',
                          'A care coordinator contacts you to discuss options',
                          'We schedule a free in-home consultation',
                          'Together, we create a personalized care plan',
                        ].map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-brand-blue-700 text-white rounded-full flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <img
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
                      alt="Caregiver with client"
                      className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    />
                  </motion.div>

                  {/* Right Column - Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <ContactForm />
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="careers" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Join Our Caregiving Team
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Are you passionate about making a difference in people's lives? 
                      We're always looking for compassionate, dedicated caregivers to 
                      join our team. Apply today and become part of our family.
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
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-orange-50 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        We Offer:
                      </h3>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                        {[
                          'Competitive pay',
                          'Flexible scheduling',
                          'Paid training',
                          'Health benefits',
                          'Paid time off',
                          'Referral bonuses',
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
              <p className="text-lg text-gray-600">
                Proudly serving families throughout the state of Maine
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-blue-100 to-brand-blue-50 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80"
                  alt="Maine landscape"
                  className="w-full h-full object-cover"
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
      </div>
    </Layout>
  );
}
