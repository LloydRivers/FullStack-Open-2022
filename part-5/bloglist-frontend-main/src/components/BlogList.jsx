import React, { useState } from "react";
import PropTypes from "prop-types";
import { update, remove } from "../utils/blogService";
const BlogList = ({ blog, setRender, username }) => {
  const [view_or_hide_text, setView_or_hide_text] = useState("view");
  const [showBlog, setShowBlog] = useState(false);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const showBlogList = () => {
    setShowBlog(!showBlog);
    if (showBlog) {
      setView_or_hide_text("view");
    } else {
      setView_or_hide_text("hide");
    }
  };
  const increaseLikes = async (id) => {
    console.log("frontend id", id);
    const newBlog = {
      ...blog,
      likes: blog.likes + 1,
    };
    try {
      const { data } = await update(id, newBlog);
      setRender((prev) => !prev);
    } catch (error) {}
  };
  const removeBlog = async (id) => {
    window.confirm(`Remove blog ${blog.title} by ${blog.author}?`);
    try {
      await remove(id);
      setRender((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ul className="blog" style={blogStyle}>
      <li className="title">
        Title: {blog.title}
        <button id="view-button" className="view-button" onClick={showBlogList}>
          {view_or_hide_text}
        </button>
      </li>
      <li className="author">Author: {blog.author}</li>
      {showBlog && (
        <div className="blog-details">
          <div>{blog.url}</div>
          <div>
            Likes: {blog.likes}
            <button className="like-btn" id="like-btn" onClick={increaseLikes}>
              like
            </button>
          </div>
          <div>{blog?.user?.name}</div>
          {blog.user.username === username && (
            <button id="delete-btn" onClick={() => removeBlog(blog.id)}>
              delete
            </button>
          )}
        </div>
      )}
    </ul>
  );
};

BlogList.propTypes = {
  blog: PropTypes.object.isRequired,
  setRender: PropTypes.func,
};
export default BlogList;
