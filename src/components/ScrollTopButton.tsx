interface ScrollTopButtonProps {
  isVisible?: boolean
}

const ScrollTopButton = ({ isVisible }: ScrollTopButtonProps) => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a href="#" className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`} onClick={scrollToTop}>
      <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}

export default ScrollTopButton
