import ServiceItem from '../ServiceItem'

const IndustriesSpecializeSection = () => {
  const industries = [
    {
      id: 1,
      icon: 'assets/img/industries/ind-1.svg',
      title: 'Real Estate',
      delay: 100,
    },
    {
      id: 2,
      icon: 'assets/img/industries/ind-2.svg',
      title: 'Restaurants',
      delay: 200,
    },
    {
      id: 3,
      icon: 'assets/img/industries/ind-3.svg',
      title: 'FinTech',
      delay: 300,
    },
    {
      id: 4,
      icon: 'assets/img/industries/ind-4.svg',
      title: 'Government',
      delay: 400,
    },
    {
      id: 5,
      icon: 'assets/img/industries/ind-5.svg',
      title: 'Travel & Tourist',
      delay: 500,
    },
    {
      id: 6,
      icon: 'assets/img/industries/ind-6.svg',
      title: 'Legal',
      delay: 600,
    },
    {
      id: 7,
      icon: 'assets/img/industries/ind-7.svg',
      title: 'HealthCare',
      delay: 700,
    },
    {
      id: 8,
      icon: 'assets/img/industries/ind-8.svg',
      title: 'SPA & Wellness',
      delay: 800,
    },
        {
      id: 9,
      icon: 'assets/img/industries/ind-9.svg',
      title: 'Utility',
      delay: 900,
    },
    {
      id: 10,
      icon: 'assets/img/industries/ind-10.svg',
      title: 'Retail',
      delay: 1000,
    },
    {
      id: 11,
      icon: 'assets/img/industries/ind-11.svg',
      title: 'Beauty & Lifestyle',
      delay: 1100,
    },
    {
      id: 12,
      icon: 'assets/img/industries/ind-12.svg',
      title: 'Agriculture',
      delay: 1200,
    },
        {
      id: 13,
      icon: 'assets/img/industries/ind-13.svg',
      title: 'Education',
      delay: 1300,
    },
    {
      id: 14,
      icon: 'assets/img/industries/ind-14.svg',
      title: 'Logistics',
      delay: 1400,
    },
    {
      id: 15,
      icon: 'assets/img/industries/ind-15.svg',
      title: 'Insurance',
      delay: 1500,
    },
    {
      id: 16,
      icon: 'assets/img/industries/ind-16.svg',
      title: 'Sports',
      delay: 1600,
    },
        {
      id: 17,
      icon: 'assets/img/industries/ind-17.svg',
      title: 'Energy & Utilities',
      delay: 1700,
    },
    {
      id: 18,
      icon: 'assets/img/industries/ind-18.svg',
      title: 'IT & Telecom',
      delay: 1800,
    },
    {
      id: 19,
      icon: 'assets/img/industries/ind-19.svg',
      title: 'Power CRM',
      delay: 1900,
    }    
  ]

  return (
    <section id="featured-services" className="featured-services ivt-featured-services section">
      <div className="container">
        <div className="section-title text-center mb-0 pb-5">
          <h2>Industries We <span className='text-title-blue'>Specialize</span> In</h2>
        </div>
        <div className="row gy-4">
          {industries.map((service, index) => (
            <ServiceItem key={index} icon={service.icon} title={service.title} delay={service.delay} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSpecializeSection
