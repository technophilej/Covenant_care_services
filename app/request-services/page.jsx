'use client'

import React from 'react';
import Layout from '../../components/layout/Layout';
import ClientIntakeUploadForm from '../../components/request-services/ClientIntakeUploadForm';

export default function RequestServicesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-brand-navy">Request Services</h1>
            <p className="mt-4 text-brand-navy/75 leading-relaxed">
              Download the client intake form, complete it, then upload it below. A care coordinator will follow up with you.
            </p>

            <div className="mt-10 bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-semibold text-brand-navy">Client Intake Form</h2>
              <p className="mt-2 text-sm text-brand-navy/75">
                Download the PDF, fill it out, then upload it using the form.
              </p>
              <a
                href="/forms/EmploymentApplication.pdf"
                download
                className="mt-4 inline-flex items-center justify-center bg-brand-blue-700 hover:bg-brand-blue-800 text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
              >
                Download Client Intake Form (PDF)
              </a>
            </div>

            <div className="mt-8">
              <ClientIntakeUploadForm />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
