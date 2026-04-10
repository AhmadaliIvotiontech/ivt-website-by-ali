import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  // const [navmenuDropdown, setNavmenuDropdown] = useState(false)

  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active')
    } else {
      document.body.classList.remove('mobile-nav-active')
    }
  }, [mobileNavActive])

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive)
  }

  // const toggleDropdown = (e: React.MouseEvent) => {
  //   e.preventDefault()
  //   setNavmenuDropdown(!navmenuDropdown)
  // }

  const handleNavLinkClick = () => {
    if (mobileNavActive) {
      setMobileNavActive(false)
    }
  }

  return (
    <header id="header" className="header sticky-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <a href="mailto:business@ivotiontech.com" className="d-flex align-items-center">
              <i className="bi bi-envelope-fill font-20"></i>
              <span className='font-15'>business@ivotiontech.com</span>
            </a>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="https://www.facebook.com/Ivotiontech/" target='_blank' className="facebook">
              <img src='assets/img/fb-icon.svg' width={20} height={20} />
            </a>
            <a href="https://www.linkedin.com/company/ivotiontech/" target='_blank' className="linkedin">
              <img src='assets/img/li-icon.svg' width={20} height={20} />
            </a>
            <a href="https://x.com/ivotiontech" target='_blank' className="twitter">
              <img src='assets/img/x-icon.svg' width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <img src='assets/img/logo.png' className='img-fluid' alt='Ivotiontech Logo' />
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/" className="active" onClick={handleNavLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <a href="/" onClick={handleNavLinkClick}>
                  About
                </a>
              </li>
              <li>
                <a href="/" onClick={handleNavLinkClick}>
                  AI
                </a>
              </li>
              <li>
                <a href="/" onClick={handleNavLinkClick}>
                  Services
                </a>
              </li>
              <li>
                <a href="/" onClick={handleNavLinkClick}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/" onClick={handleNavLinkClick}>
                  Industries
                </a>
              </li>
              <li>
                <a href="/" onClick={handleNavLinkClick}>
                  Contact Us
                </a>
              </li>
            </ul>
            <i
              className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? 'bi-x' : 'bi-list'}`}
              onClick={toggleMobileNav}
            ></i>
          </nav>

          <div className='call-us-today'>
            <a className='d-flex align-items-center text-black' href="tel:+919723229138">
              <img src="assets/img/call-us-icon.svg" alt='Call Us Today' />
              <div className='ms-2'>
                <span className='font-14 font-weight-500'>Call us Today</span>
                <p className='font-19 font-weight-700 title-font mt-0 mb-0'>+91-972-322-9138</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
