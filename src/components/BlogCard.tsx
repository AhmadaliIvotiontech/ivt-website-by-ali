import { Link } from "react-router-dom";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description?: string;
  link: string;
  delay?: number;
}

const BlogCard = ({
  image,
  category,
  date,
  title,
  description,
  link,
}: BlogCardProps) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="blog-card shadow-sm h-100">
        <div className="blog-img-wrapper">
          <img src={image} alt="blog" className="img-fluid" />
          <div className="overlay"></div>
        </div>

        <div className="blog-content p-4">
          <div className="d-flex justify-content-between text-muted-new mb-2">
            <span>{category}</span>
            <span>{date}</span>
          </div>

          <h6 className="blog-title">{title}</h6>

          {description && (
            <p className="blog-desc">{description}</p>
          )}

          <Link to={link} className="btn-arrow blue">
            <i className="bi bi-arrow-right-short font-24"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;