import { useEffect } from 'react'

/**
 * Hook to detect scroll position and apply scrolled class
 */
export const useScrollEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#header')
      if (!header) return
      
      if (
        !header.classList.contains('scroll-up-sticky') &&
        !header.classList.contains('sticky-top') &&
        !header.classList.contains('fixed-top')
      ) {
        return
      }
      
      if (window.scrollY > 100) {
        document.body.classList.add('scrolled')
      } else {
        document.body.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

/**
 * Hook for mobile navigation toggle
 */
export const useMobileNav = () => {
  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle') as HTMLElement
    
    if (!mobileNavToggleBtn) return

    const toggleMobileNav = () => {
      document.body.classList.toggle('mobile-nav-active')
      mobileNavToggleBtn.classList.toggle('bi-list')
      mobileNavToggleBtn.classList.toggle('bi-x')
    }

    mobileNavToggleBtn.addEventListener('click', toggleMobileNav)

    // Close mobile nav on same-page links
    document.querySelectorAll('#navmenu a').forEach((navLink) => {
      navLink.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          toggleMobileNav()
        }
      })
    })

    // Toggle dropdown in mobile nav
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = (toggle as HTMLElement).parentNode as HTMLElement
        const sibling = parent.nextElementSibling as HTMLElement
        parent.classList.toggle('active')
        sibling?.classList.toggle('dropdown-active')
        e.stopImmediatePropagation()
      })
    })

    return () => {
      mobileNavToggleBtn.removeEventListener('click', toggleMobileNav)
    }
  }, [])
}

/**
 * Hook for scroll to top button
 */
export const useScrollToTop = () => {
  useEffect(() => {
    const scrollTopBtn = document.querySelector('.scroll-top') as HTMLElement

    if (!scrollTopBtn) return

    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        scrollTopBtn.classList.add('active')
      } else {
        scrollTopBtn.classList.remove('active')
      }
    }

    const handleScrollTop = (e: Event) => {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    scrollTopBtn.addEventListener('click', handleScrollTop)
    window.addEventListener('load', toggleScrollTop)
    document.addEventListener('scroll', toggleScrollTop)
    toggleScrollTop()

    return () => {
      scrollTopBtn.removeEventListener('click', handleScrollTop)
      window.removeEventListener('load', toggleScrollTop)
      document.removeEventListener('scroll', toggleScrollTop)
    }
  }, [])
}

/**
 * Hook for AOS (Animate On Scroll) initialization
 */
export const useAOS = () => {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      })
    })
  }, [])
}

/**
 * Hook for GLightbox initialization
 */
export const useGLightbox = () => {
  useEffect(() => {
    import('glightbox').then((module) => {
      module.default({
        selector: '.glightbox',
      })
    })
  }, [])
}

/**
 * Hook for smooth scroll to hash links
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash)
        if (element) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(element).scrollMarginTop
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - parseInt(scrollMarginTop),
              behavior: 'smooth',
            })
          }, 100)
        }
      }
    }

    window.addEventListener('load', handleHashScroll)
    return () => window.removeEventListener('load', handleHashScroll)
  }, [])
}

/**
 * Hook for navbar active link on scroll (scrollspy)
 */
export const useNavbarScrollspy = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navmenu a')

    const updateActiveLink = () => {
      navLinks.forEach((link) => {
        const hash = (link as HTMLAnchorElement).hash
        if (!hash) return

        const section = document.querySelector(hash)
        if (!section) return

        const position = window.scrollY + 200
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight

        if (position >= sectionTop && position <= sectionTop + sectionHeight) {
          document.querySelectorAll('.navmenu a.active').forEach((activeLink) => {
            activeLink.classList.remove('active')
          })
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    }

    window.addEventListener('load', updateActiveLink)
    document.addEventListener('scroll', updateActiveLink)
    updateActiveLink()

    return () => {
      window.removeEventListener('load', updateActiveLink)
      document.removeEventListener('scroll', updateActiveLink)
    }
  }, [])
}

/**
 * Hook for FAQ toggle functionality
 */
export const useFAQToggle = () => {
  useEffect(() => {
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        ((faqItem as HTMLElement).parentNode as HTMLElement)?.classList.toggle('faq-active')
      })
    })
  }, [])
}
