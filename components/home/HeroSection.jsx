import React from 'react';
import Link from 'next/link';
import { Phone, ShieldCheck, Users, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-brand-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-brand-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Maine-Based Personal Care Agency
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Compassionate Care,<br />Right at Home
          </h1>
          <p className="text-lg text-blue-200 leading-relaxed mb-10 max-w-2xl">
            Covenant Care Services LLC provides in-home personal care assistance to help members live safely and with dignity in their own homes across Maine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="/request-services"
              className="inline-flex items-center justify-center bg-white text-brand-navy hover:bg-gray-100 px-7 py-3.5 rounded font-semibold text-sm transition-colors duration-200"
            >
              Request Services
            </Link>
            <a
              href="tel:+12072528470"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded font-semibold text-sm transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              (207) 252-8470
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: ShieldCheck, text: 'Licensed & Insured' },
              { icon: Users, text: 'Certified Caregivers' },
              { icon: Heart, text: 'Person-Centered Care' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-blue-300">
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
