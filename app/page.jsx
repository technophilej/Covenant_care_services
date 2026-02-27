import HeroSection from '../components/home/HeroSection'
import Layout from '../components/layout/Layout'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Welcome to Covenant Care Services</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Covenant Care Services LLC is a Maine-based Personal Care Agency providing in-home assistance with Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs) through trained Personal Support Specialists in accordance with an authorized Service Plan.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Services are provided in the member’s place of residence. We do not operate residential care facilities or group home settings.
          </p>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Us</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Covenant Care Services LLC supports independence through in-home personal care assistance. We work with families across Maine to help members live safely and with dignity in their own homes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our PCA Services Overview</h2>
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-brand-blue-600/20 transition-all duration-300"
            >
              View All Services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Activities of Daily Living (ADLs)</h3>
              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  'Bathing',
                  'Grooming',
                  'Dressing',
                  'Toileting',
                  'Eating Assistance',
                  'Transfers',
                  'Personal Hygiene',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Instrumental Activities of Daily Living (IADLs)</h3>
              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  'Meal Preparation',
                  'Laundry',
                  'Light Housekeeping',
                  'Shopping',
                  'Transportation',
                  'Managing Finances',
                  'Medication Reminders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Referral / Intake',
                body: 'We determine whether services are appropriate and can be safely delivered in the home environment.',
              },
              {
                title: 'Service Plan',
                body: 'Care is delivered according to an authorized Service Plan including services and frequency.',
              },
              {
                title: 'Ongoing Review',
                body: 'Plans are reviewed annually and updated with any change in condition.',
              },
            ].map((step, idx) => (
              <div key={step.title} className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-blue-700 text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Staff</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            All direct care staff must hold CNA or PSS certification or be enrolled in a Department-approved Personal Support Specialist training program within 60 days of hire.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Need In-Home Personal Care Assistance?</h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-brand-blue-600 to-brand-blue-500 hover:from-brand-blue-700 hover:to-brand-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-brand-blue-600/20 transition-all duration-300"
            >
              Request Services
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              Contact Us Today
            </a>
          </div>
          <div className="mt-8 text-gray-200">
            <p>Phone: 207-252-8470</p>
            <p>Email: contact@covenantcareservices.com</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
