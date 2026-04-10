import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTopButton from '../components/ScrollTopButton'
import {
  useScrollEffect,
  useMobileNav,
  useScrollToTop,
  useAOS,
  useGLightbox,
  useSmoothScroll,
  useNavbarScrollspy,
  useFAQToggle,
} from '../hooks/useEffects'

const MainLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useScrollEffect()
  useMobileNav()
  useScrollToTop()
  useAOS()
  useGLightbox()
  useSmoothScroll()
  useNavbarScrollspy()
  useFAQToggle()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton isVisible={showScrollTop} />
    </>
  )
}

export default MainLayout
