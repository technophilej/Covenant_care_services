import HeroSection from '../components/home/HeroSection'
import IntroductionSection from '../components/home/IntroductionSection'
import PcaServicesOverview from '../components/home/PcaServicesOverview'
import HowItWorksSection from '../components/home/HowItWorksSection'
import ComplianceSafetySection from '../components/home/ComplianceSafetySection'
import OurStaffSection from '../components/home/OurStaffSection'
import WireframeCTASection from '../components/home/WireframeCTASection'
import Layout from '../components/layout/Layout'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <IntroductionSection />
      <PcaServicesOverview />
      <HowItWorksSection />
      <ComplianceSafetySection />
      <OurStaffSection />
      <WireframeCTASection />
    </Layout>
  )
}
