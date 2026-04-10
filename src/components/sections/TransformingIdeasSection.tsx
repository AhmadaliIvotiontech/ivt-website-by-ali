
import { useEffect, useRef, useState } from 'react';

const TransformingIdeasSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(180, setProjectsCount);
            animateCounter(90, setClientsCount);
            animateCounter(12, setExperienceCount);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = (target: number, setCount: (value: number) => void) => {
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 50); // Update every 50ms
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);
  };

  return (
    <section ref={sectionRef} id="hero" className="transforming-ideas section light-background">
      <div className='container'>
        <div className='row'>
          {/* Left Content */}
          <div className="col-lg-6 px-lg-0 px-3 text-center m-0" data-aos="zoom-in">
            <div className='transforming-ideas-image'>
              <img
                src='assets/img/transforming-ideas.png'
                alt='Transforming Ideas'
                className="img-fluid"
              />
              <a href='https://www.youtube.com/watch?v=wd2hAMIENDY' className='play-video-btn glightbox'>
                <img src='assets/img/play-video-icon.svg' className='play-icon' />
              </a>
            </div>
          </div>
          {/* Right Image */}
          <div className="col-lg-6 m-0 p-lg-5 p-4" data-aos="zoom-out">
            <div className='hero-banner-content'>
              <div className='services-with-us'>
                <ul>
                  <li>Mobile App</li>
                  <li>Software</li>
                  <li>AI/ML Development</li>
                  <li>Website Design</li>
                </ul>
              </div>
              <div className='ideas-content-titles'>
                <h2 className='title-font font-weight-400 text-white mb-4'>
                  Transforming <span className="text-title-blue">Ideas</span> Into Powerful <span className="text-title-blue">Digital Products</span>
                </h2>
                <p className='font-16 font-weight-500 text-white mb-0'>
                  As the providers of high-end IT consulting and enterprise business solutions, we take pride in enabling the latest technology solutions for our clients. We spearhead digital modernization and innovation with decades of expertise in MS SQL, Tableau, Angular JS, React JS, MS SQL, DevOps & Azure, MS 365 Dynamic CRM, .Net core with MVC, Process Methodologies, Power Apps and related technologies.
                </p>
              </div>

              <a href="{item.btnLink}" className="btn-get-started yellow mb-5">
                <span>See Why We’re</span>
              </a>
              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-11 col-sm-12 col-xs-12 col-12">
                  <div className="d-flex gap-4 justify-content-between flex-wrap text-center">
                    <div className="ivt-counter">
                      <h3 className="counter-value title-font font-weight-400 text-white" data-count="180">{projectsCount}+</h3>
                      <p className="counter-text font-14 text-white">Project Done</p>
                    </div>
                    <div className="ivt-counter">
                      <h3 className="counter-value title-font font-weight-400 text-white" data-count="90">{clientsCount}+</h3>
                      <p className="counter-text font-14 text-white">Happy Clients</p>
                    </div>
                    <div className="ivt-counter">
                      <h3 className="counter-value title-font font-weight-400 text-white" data-count="12">{experienceCount}+</h3>
                      <p className="counter-text font-14 text-white">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransformingIdeasSection
