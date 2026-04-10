interface BlogCardProps {
  image: string
  category: string
  date: string
  title: string
  description: string
  link: string
  delay?: number
}

const BlogCard = ({ image, category, date, title, description, link, delay = 0 }: BlogCardProps) => {
  return (
    <div className="col-xl-4 col-md-4 col-sm-6 col-xs-12 col-12" data-aos="fade-up" data-aos-delay={delay}>
      <div className="blog-item-main">
        <div className="blog-item position-relative">
          <div className="icon">
            <img src={image} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
