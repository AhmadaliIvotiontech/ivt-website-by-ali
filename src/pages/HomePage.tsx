import { useEffect } from 'react'
import HeroSection from '../components/sections/HeroSection'
import IndustriesSpecializeSection from '../components/sections/IndustriesSpecializeSection'
import AboutSection from '../components/sections/AboutSection'
import BlogSection from '../components/sections/BlogSection'
import StatsSection from '../components/sections/StatsSection'
import ServicesSection from '../components/sections/ServicesSection'
import TransformingIdeasSection from '../components/sections/TransformingIdeasSection'
import TrustedCustomersSection from '../components/sections/TrustedCustomersSection'

const HomePage = () => {
  useEffect(() => {
    document.body.className = 'index-page'
  }, [])

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TransformingIdeasSection />
      <TrustedCustomersSection />
      <IndustriesSpecializeSection />
      <BlogSection />
      <AboutSection />
      <StatsSection />
    </>
  )
}

export default HomePage
