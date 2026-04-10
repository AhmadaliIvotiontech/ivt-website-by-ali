import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const TrustedCustomersSection = () => {
  const clients = [
    { src: 'assets/img/clients/client-1.png', alt: 'Floson' },
    { src: 'assets/img/clients/client-2.png', alt: 'Player Fire' },
    { src: 'assets/img/clients/client-3.png', alt: 'Hoshi' },
    { src: 'assets/img/clients/client-4.png', alt: 'Company' },
    { src: 'assets/img/clients/client-5.png', alt: 'Creative' },
    { src: 'assets/img/clients/client-6.png', alt: 'Better Technology' },
    { src: 'assets/img/clients/client-7.png', alt: 'Client Logo 7' },
    { src: 'assets/img/clients/client-8.png', alt: 'Client Logo 8' },
  ]

  return (
    <section id="trusted-customers" className="trusted-customers section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="section-title text-center mb-0 pb-5">
          <h2>Trusted Over 285 + Customers</h2>
        </div>

        <div className="trusted-customers-carousel">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="client-logo-item">
                  <img src={client.src} alt={client.alt} className="img-fluid" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default TrustedCustomersSection
