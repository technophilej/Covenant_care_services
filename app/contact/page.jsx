'use client'

import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import ApplicationForm from '../../components/contact/ApplicationForm';
import ContactForm from '../../components/contact/ContactForm';
import { Phone, Mail, MapPin, Clock, Heart, Users, Award, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(207) 252-8470', href: 'tel:+12072528470' },
  { icon: Mail, label: 'Email', value: 'contact@covenantcareservices.org', href: 'mailto:contact@covenantcareservices.org' },
  { icon: MapPin, label: 'Address', value: '40 Gina Street, Lewiston, ME 04240', href: null },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 8am–6pm', href: null },
];

const benefits = [
  { icon: Heart, title: 'Make a Difference', description: 'Help improve the quality of life for members in your community.' },
  { icon: Users, title: 'Supportive Team', description: 'Work with a caring, professional team that values your contributions.' },
  { icon: Award, title: 'Growth Opportunities', description: 'Training programs and career advancement paths available.' },
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
      <div className="min-h-screen bg-white">
        <section className="bg-brand-navy py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {activeTab === 'careers' ? 'Join Our Team' : 'Contact Us'}
            </h1>
            <p className="text-blue-200 max-w-2xl leading-relaxed">
              {activeTab === 'careers'
                ? "We're always looking for compassionate, dedicated caregivers to join our team."
                : "We're here to answer your questions and help you find the right care solution for your family."}
            </p>
          </div>
        </section>

        <section className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="py-6 pr-6 border-r border-gray-100 last:border-r-0">
                  <div className="flex items-center gap-2 text-brand-blue-700 mb-2">
                    <item.icon className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide">{item.label}</span>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-brand-navy text-sm font-medium hover:text-brand-blue-700 transition-colors break-words">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-brand-navy text-sm font-medium">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-0">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === 'contact'
                    ? 'border-brand-blue-700 text-brand-blue-700'
                    : 'border-transparent text-gray-500 hover:text-brand-navy'
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab('careers')}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === 'careers'
                    ? 'border-brand-blue-700 text-brand-blue-700'
                    : 'border-transparent text-gray-500 hover:text-brand-navy'
                }`}
              >
                Careers
              </button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'contact' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">Send Us a Message</h2>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    Have questions about our services or want to learn more? Fill out the form and we will get back to you within one business day.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="font-bold text-brand-navy mb-4 text-sm">Service Area</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      We proudly serve families throughout the state of Maine — from Portland to Bangor and everywhere in between.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-brand-blue-700 text-sm font-medium">
                      <MapPin className="w-4 h-4" />
                      Serving all of Maine
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            )}

            {activeTab === 'careers' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">Join Our Caregiving Team</h2>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    Are you passionate about making a difference in people's lives? We are always looking for compassionate, dedicated caregivers to become part of our team.
                  </p>

                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit) => (
                      <div key={benefit.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="w-9 h-9 bg-brand-blue-50 rounded flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-4 h-4 text-brand-blue-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-navy text-sm mb-1">{benefit.title}</h3>
                          <p className="text-gray-500 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-brand-blue-700 rounded-lg p-6 text-white mb-6">
                    <h3 className="font-semibold mb-4 text-sm">We Offer</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {['Competitive pay', 'Flexible scheduling', 'Paid training', 'Health benefits', 'Paid time off', 'Referral bonuses'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-gray-100 rounded-lg p-5">
                    <h3 className="font-semibold text-brand-navy mb-2 text-sm">Employment Application Form</h3>
                    <p className="text-gray-500 text-xs mb-4">Download the PDF, fill it out, then upload it using the form on the right.</p>
                    <a
                      href="/forms/EmploymentApplication.pdf"
                      download
                      className="inline-flex items-center bg-brand-navy hover:bg-brand-blue-800 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                    >
                      Download Application (PDF)
                    </a>
                  </div>
                </div>

                <div>
                  <ApplicationForm />
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="privacy" className="py-14 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-brand-navy mb-4">Privacy Policy</h2>
            <p className="text-gray-500 leading-relaxed text-sm mb-3">
              Covenant Care Services LLC respects your privacy. Information submitted through our forms is used only to respond to your request and to coordinate services or employment inquiries. We do not sell your personal information.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              If you have questions about privacy, contact us at contact@covenantcareservices.org or call (207) 252-8470.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
