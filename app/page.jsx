import HeroSection from '../components/home/HeroSection'
import ServicesPreview from '../components/home/ServicesPreview'
import AboutSection from '../components/home/AboutSection'
import CTASection from '../components/home/CTASection'
import Layout from '../components/layout/Layout'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <AboutSection />
      <CTASection />
    </Layout>
  )
}
