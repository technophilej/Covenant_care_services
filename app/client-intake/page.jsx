'use client'

import React from 'react';
import Layout from '../../components/layout/Layout';

export default function ClientIntakePage() {
  return (
    <Layout>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Client Intake</h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We determine whether services are appropriate and can be safely delivered in the home environment.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            To get started, please contact us and we will guide you through the referral and intake process.
          </p>
        </div>
      </section>
    </Layout>
  );
}
