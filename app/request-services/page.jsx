'use client'

import React from 'react';
import Layout from '../../components/layout/Layout';
import ClientIntakeUploadForm from '../../components/request-services/ClientIntakeUploadForm';
import { Download, Phone, Mail, CheckCircle } from 'lucide-react';

export default function RequestServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <section className="bg-brand-navy py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Request Services</h1>
            <p className="text-blue-200 max-w-2xl leading-relaxed">
              Download the client intake form, complete it, and upload it below. A care coordinator will follow up with you promptly.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-brand-navy mb-2">How to Get Started</h2>
                  <ol className="space-y-4">
                    {[
                      'Download the Client Intake Form below.',
                      'Complete and sign all sections of the form.',
                      'Upload the completed form using the form on the right.',
                      'A care coordinator will contact you within one business day.',
                    ].map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full bg-brand-blue-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="border border-gray-100 rounded-lg p-5">
                  <h3 className="font-semibold text-brand-navy mb-2 text-sm">Client Intake Form</h3>
                  <p className="text-gray-500 text-xs mb-4">Download the PDF, fill it out, then upload it using the form.</p>
                  <a
                    href="/forms/EmploymentApplication.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-brand-blue-700 hover:bg-brand-blue-800 text-white px-4 py-2.5 rounded text-sm font-semibold transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Form (PDF)
                  </a>
                </div>

                <div className="border border-gray-100 rounded-lg p-5">
                  <h3 className="font-semibold text-brand-navy mb-3 text-sm">Need Help?</h3>
                  <div className="space-y-3">
                    <a href="tel:+12072528470" className="flex items-center gap-2 text-gray-600 hover:text-brand-blue-700 text-sm transition-colors">
                      <Phone className="w-4 h-4 text-brand-blue-600" />
                      (207) 252-8470
                    </a>
                    <a href="mailto:contact@covenantcareservices.org" className="flex items-center gap-2 text-gray-600 hover:text-brand-blue-700 text-sm transition-colors">
                      <Mail className="w-4 h-4 text-brand-blue-600" />
                      contact@covenantcareservices.org
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                  <h3 className="font-semibold text-brand-navy mb-3 text-sm">What Happens Next</h3>
                  <ul className="space-y-2">
                    {[
                      'Intake review by a care coordinator',
                      'Assessment of service needs',
                      'Authorized Service Plan created',
                      'Care begins with a matched PSS',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-500 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-blue-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-lg font-bold text-brand-navy mb-6">Upload Completed Intake Form</h2>
                <ClientIntakeUploadForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
