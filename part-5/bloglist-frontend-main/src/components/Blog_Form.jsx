import React, { useState, useEffect } from "react";
import { create, getAll, setToken } from "../utils/blogService";
import BlogList from "./BlogList";
import PropTypes from "prop-types";

const BlogForm = ({ user, set_User_Alert_Message }) => {
  const { username, token } = user;
  const [showBlogForm, setShowBlogForm] = useState(false);

  const [render, setRender] = useState(false);

  const [allBlogs, setAllBlogs] = useState([]);
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    url: "",
    likes: "",
  });

  const blogsList = async () => {
    try {
      const { data } = await getAll();
      console.log("Here is the data", data);
      setAllBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };
  const addBlog = async (event) => {
    event.preventDefault();

    try {
      const { data } = await create(blog);
      window.localStorage.setItem("logged_in_user", JSON.stringify(data));
      setBlog({
        title: "",
        author: "",
        url: "",
        likes: "",
      });
      setRender(!render);
      set_User_Alert_Message(`A new blog: ${data.title} by ${data.author}`);
      setTimeout(() => {
        set_User_Alert_Message(null);
        setShowBlogForm(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      set_User_Alert_Message("error: " + error.response.data.error);
      setTimeout(() => {
        set_User_Alert_Message(null);
      }, 5000);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("logged_in_user");
    window.location.reload();
  };

  useEffect(() => {
    setToken(token);
    blogsList();
  }, [render]);
  return (
    <>
      <div>
        <h3>{username} is logged in</h3>
        <button onClick={handleLogout}>logout</button>
        <div>
          <h3>Recent blogs:</h3>
          {allBlogs
            .sort((a, b) => b.likes - a.likes)
            .map((blog) => (
              <BlogList
                username={user.username}
                key={blog.id}
                blog={blog}
                setRender={setRender}
              />
            ))}
        </div>
      </div>
      <button onClick={() => setShowBlogForm(true)}>new Blog</button>
      {showBlogForm && (
        <form onSubmit={addBlog}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={({ target }) =>
                setBlog({ ...blog, title: target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={({ target }) =>
                setBlog({ ...blog, author: target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="url">url...</label>
            <input
              type="text"
              name="url"
              value={blog.url}
              onChange={({ target }) => setBlog({ ...blog, url: target.value })}
            />
          </div>
          <div>
            <label htmlFor="likes">Likes</label>
            <input
              type="number"
              name="likes"
              value={blog.likes}
              onChange={({ target }) =>
                setBlog({ ...blog, likes: target.value })
              }
            />
          </div>
          <button type="submit">Post a blog</button>
        </form>
      )}
    </>
  );
};

BlogForm.propTypes = {
  user: PropTypes.object.isRequired,
  set_User_Alert_Message: PropTypes.func.isRequired,
};

export default BlogForm;
