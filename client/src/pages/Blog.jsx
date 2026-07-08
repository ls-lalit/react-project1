import { Link } from "react-router-dom";
import blogs from "../data/blogs";

function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="section-head">
        <div className="eyebrow">LATEST BLOGS</div>
        <h2>Blogs & Articles</h2>
        <p>
          Explore our latest thoughts on Salesforce, Oracle,
          integrations, and enterprise technology.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>

            <img src={blog.image} alt={blog.title} />

            <h3>{blog.title}</h3>

            <p>{blog.excerpt}</p>

            <Link to={blog.link}>
              Read More →
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;