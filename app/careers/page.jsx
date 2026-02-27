'use client'

import React from 'react';
import Layout from '../../components/layout/Layout';
import OurStaffSection from '../../components/home/OurStaffSection';

export default function CareersPage() {
  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Careers</h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Interested in joining Covenant Care Services LLC? We are always looking for compassionate, professional caregivers.
          </p>
        </div>
      </section>
      <OurStaffSection />
    </Layout>
  );
}
