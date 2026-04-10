import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSection = () => {
  const heroSlider = [
    {
      id: 1,
      title: 'Welcome to',
      title2: 'Best IT Solution For Your Business',
      withUsTitle: 'Create Your Dream Project WIth Us',
      description: 'Transforming ideas into reality through product engineering and digital transformation services',
      img: 'assets/img/banner-img-1.png',
      alt: 'Banner Image 1',
      btnText: 'Get In Touch',
      btnLink: '#'
    },
    {
      id: 2,
      title: 'Welcome to',
      title2: 'Best IT Solution For Your Business 2',
      withUsTitle: 'Create Your Dream Project WIth Us',
      description: 'Transforming ideas into reality through product engineering and digital transformation services',
      img: 'assets/img/banner-img-1.png',
      alt: 'Banner Image 2',
      btnText: 'Get In Touch',
      btnLink: '#'
    }
  ];

  return (
    <section id="hero" className="hero section light-background">
      <div className='container-fluid px-0'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="hero-carousel"
        >
          {heroSlider.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='row'>
                {/* Left Content */}
                <div className="col-lg-6 px-lg-0 px-3 text-center m-0" data-aos="zoom-in">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="img-fluid"
                  />
                </div>
                {/* Right Image */}
                <div className="col-lg-6 m-0 p-lg-5 p-4" data-aos="zoom-out">
                  <div className='hero-banner-content'>
                    <div className='dream-project-with-us'>
                      <img src='assets/img/like-ico.svg' className='like-ico-img me-3' />
                      <span className='font-16 font-weight-500'>{item.withUsTitle}</span>
                    </div>
                    <div className='banner-content-titles'>
                      <h4 className='mb-2'>{item.title}</h4>
                      <h1 className='title-font font-weight-600 mb-4'>{item.title2}</h1>
                      <p className='font-16 font-weight-500 text-black mb-0'>{item.description}</p>
                    </div>

                    <a href="{item.btnLink}" className="btn-get-started mb-5">
                      <span>{item.btnText}</span><i className="bi bi-arrow-right ms-3 font-16"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default HeroSection
