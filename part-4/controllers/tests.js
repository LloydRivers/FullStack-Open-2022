const testingRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");

testingRouter.post("/reset", async (request, response) => {
  try {
    await Blog.deleteMany({});
    await User.deleteMany({});
    response.status(204).end();
  } catch (error) {
    console.log(error);
    response.status(500).end();
  }
});

module.exports = testingRouter;
