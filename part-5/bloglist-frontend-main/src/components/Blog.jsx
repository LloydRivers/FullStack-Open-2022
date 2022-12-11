import PropTypes from "prop-types";
const Blog = ({ blog }) => (
  <div className="blog">
    <span className="blog-title">{blog.title}</span>
    <span className="blog-author"> {blog.author}</span>
  </div>
);
{
  /*  */
}
// Blog.propTypes = {
//   blog: PropTypes.object.isRequired,
// };

export default Blog;
