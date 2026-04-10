import BlogCard from '../BlogCard'

const BlogSection = () => {
  const industries = [
    {
      id: 1,
      image: 'assets/img/industries/ind-1.svg',
      title: 'Real Estate',
      category: 'Real Estate',
      date: 'Aug 15, 2024',
      description: 'Discover the latest trends and insights in the real estate industry with our expert analysis and market updates.',
      link: '#',
      delay: 100,
    },
    {
      id: 2,
      image: 'assets/img/industries/ind-2.svg',
      title: 'Restaurants',
      category: 'Real Estate',
      date: 'Aug 15, 2024',
      description: 'Discover the latest trends and insights in the real estate industry with our expert analysis and market updates.',
      link: '#',
      delay: 200,
    },
    {
      id: 3,
      image: 'assets/img/industries/ind-3.svg',
      title: 'FinTech',
      category: 'Real Estate',
      date: 'Aug 15, 2024',
      description: 'Discover the latest trends and insights in the real estate industry with our expert analysis and market updates.',
      link: '#',
      delay: 300,
    }   
  ]

  return (
    <section id="blog-section" className="ivt-blog-section section">
      <div className="container">
        <div className="section-title text-center mb-0 pb-5">
          <h2>Watch Our Latest Blog</h2>
        </div>
        <div className="row gy-4">
          {industries.map((service, index) => (
            <BlogCard key={index} image={service.image} title={service.title} category={service.category}  date={service.date}  description={service.description} link={service.link} delay={service.delay} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
