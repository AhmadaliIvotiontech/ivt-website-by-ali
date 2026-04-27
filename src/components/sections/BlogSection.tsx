import BlogCard from '../BlogCard'

const BlogSection = () => {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      category: "UI/UX Designer",
      date: "July 4, 2025",
      title: "Yourself Everyone else is Already Marketing Team",
      description: '',
      link: '#',
      delay: 100
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      category: "UI/UX Designer",
      date: "July 4, 2025",
      title: "Yourself Everyone else is Already Marketing Team",
      description: '',
      link: '#',
      delay: 200
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      category: "UI/UX Designer",
      date: "July 4, 2025",
      title: "Yourself Everyone else is Already Marketing Team",
      description: '',
      link: '#',
      delay: 300
    }
  ];

  return (
    <section id="blog-section" className="ivt-blog-section section">
      <div className="container">
        <div className="section-title text-center mb-0 pb-5">
          <h2>Watch Our Latest Blog</h2>
        </div>
        <div className="row">
          {blogs.map((blog, index) => (
            <BlogCard key={index} image={blog.image} title={blog.title} category={blog.category} date={blog.date} description={blog.description} link={blog.link} delay={blog.delay} />
          ))}
          <div className="col-md-12 text-center mt-4 text-center">
            <a href="/your-link" className="btn-get-started yellow mx-auto px-5">
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
