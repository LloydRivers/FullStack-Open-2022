require("dotenv").config();
const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const { info } = require("../utils/logger");
const { getTokenFrom } = require("../utils/getToken");

const User = require("../models/user");

blogsRouter.get("/", async (request, response) => {
  try {
    const blogs = await Blog.find({}).populate("user", {
      username: 1,
      name: 1,
      id: 1,
    });
    response.json(blogs);
  } catch (error) {
    info(error);
  }
});

blogsRouter.post("/", async (request, response) => {
  const { title, author, url, likes } = request.body;
  const token_id = request.user;

  if (!title || !url) {
    return response.status(400).json({ error: "title or url missing" });
  } else {
    try {
      const user = await User.findById(token_id);
      const blog = new Blog({
        title,
        author,
        url,
        likes: likes || 0,
        user: user._id,
      });
      // Saving the blog to the database.
      const result = await blog.save();
      // Appending the blog to the user's blogs array.
      user.blogs = user.blogs.concat(result._id);
      // Save the user to the database.
      await user.save();
      response.status(201).json(result);
    } catch (error) {
      info(error);
    }
  }
});

blogsRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const token_id = request.user;

  try {
    const blog = await Blog.findOneAndDelete({
      _id: id,
      user: token_id,
    });
    if (blog) {
      response.status(204).end();
    }
  } catch (error) {
    info(error);
  }
});

blogsRouter.put("/:id", async (request, response) => {
  try {
    const blog = await Blog.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });

    response.json(blog);
  } catch ({ message }) {
    info();
    response.status(404).send({ error: message });
  }
});
module.exports = blogsRouter;
