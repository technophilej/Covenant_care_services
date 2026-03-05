import HeroSection from '../components/home/HeroSection'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import { Heart, Home, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react'

const serviceHighlights = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Assistance with bathing, grooming, dressing, toileting, and personal hygiene.',
  },
  {
    icon: Home,
    title: 'Companion Care',
    description: 'Meaningful companionship and light housekeeping to support daily living.',
  },
  {
    icon: Users,
    title: 'Respite Care',
    description: 'Temporary relief for family caregivers with flexible scheduling.',
  },
  {
    icon: Clock,
    title: 'Hourly & Live-In Care',
    description: 'Flexible care from a few hours a week to around-the-clock assistance.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Referral & Intake',
    body: 'We assess whether services are appropriate and can be safely delivered in the home environment.',
  },
  {
    num: '02',
    title: 'Service Plan',
    body: 'Care is delivered according to an authorized Service Plan including the type of services and their frequency.',
  },
  {
    num: '03',
    title: 'Ongoing Review',
    body: 'Plans are reviewed annually and updated whenever there is a change in the member\'s condition.',
  },
]

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight mb-6">
                Supporting Independence Across Maine
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Covenant Care Services LLC is a Maine-based Personal Care Agency providing in-home assistance with Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs) through trained Personal Support Specialists.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                All care is delivered in the member's place of residence, in accordance with an authorized Service Plan. We do not operate residential care facilities or group home settings.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-brand-blue-700 font-semibold hover:text-brand-blue-800 transition-colors group text-sm"
              >
                View all our services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-brand-navy mb-4 text-sm uppercase tracking-wide">ADL Services</h3>
                <ul className="space-y-2">
                  {['Bathing', 'Grooming', 'Dressing', 'Toileting', 'Eating Assistance', 'Transfers', 'Personal Hygiene'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-blue-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-brand-navy mb-4 text-sm uppercase tracking-wide">IADL Services</h3>
                <ul className="space-y-2">
                  {['Meal Preparation', 'Laundry', 'Light Housekeeping', 'Shopping', 'Transportation', 'Managing Finances', 'Medication Reminders'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-blue-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-brand-blue-700 text-sm font-semibold uppercase tracking-widest mb-2">What We Offer</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">Our Services</h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-blue-700 hover:bg-brand-blue-800 text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors flex-shrink-0"
            >
              All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 bg-brand-blue-50 rounded flex items-center justify-center mb-5">
                  <service.icon className="w-5 h-5 text-brand-blue-700" />
                </div>
                <h3 className="font-bold text-brand-navy mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-brand-blue-700 text-sm font-semibold uppercase tracking-widest mb-2">Getting Started</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="relative">
                <span className="text-5xl font-bold text-gray-100 select-none">{step.num}</span>
                <div className="-mt-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-blue-700 text-sm font-semibold uppercase tracking-widest mb-2">Our Team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">Qualified, Caring Staff</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                All direct care staff must hold CNA or PSS certification, or be enrolled in a Department-approved Personal Support Specialist training program within 60 days of hire.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are committed to placing only qualified, compassionate caregivers in your home — people who treat every member with the dignity and respect they deserve.
              </p>
              <Link
                href="/contact?tab=careers"
                className="inline-flex items-center gap-2 text-brand-blue-700 font-semibold hover:text-brand-blue-800 transition-colors group text-sm"
              >
                Join our team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-brand-blue-700 rounded-lg p-10 text-white">
              <h3 className="text-xl font-bold mb-6">Staff Requirements</h3>
              <ul className="space-y-4">
                {[
                  'CNA or PSS certification required',
                  'Enrollment in approved PSS training within 60 days of hire',
                  'Background check completed',
                  'Ongoing training and supervision provided',
                  'Care delivered per authorized Service Plan',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-blue-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need In-Home Personal Care?</h2>
          <p className="text-blue-200 mb-10 max-w-xl mx-auto">
            Contact us today to learn how we can support your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-services"
              className="inline-flex items-center justify-center bg-white text-brand-navy hover:bg-gray-100 px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              Request Services
            </Link>
            <a
              href="tel:+12072528470"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded font-semibold text-sm transition-colors"
            >
              Call (207) 252-8470
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
