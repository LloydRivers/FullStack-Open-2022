const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { info } = require("../utils/logger");
{
}
userRouter.get("/", async (request, response) => {
  // The second object is for filtering, so as per the screen shot on the full stack open, I filtering out the blogs array.
  const users = await User.find({}).populate("blogs", {
    url: 1,
    title: 1,
    author: 1,
    id: 1,
  });
  response.json(users);
});
userRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const user = await User.findById(id);

  if (user) {
    response.json(user.toJSON());
  } else {
    response.status(404).end();
  }
});

userRouter.post("/", async (request, response) => {
  console.log("frontend hit the backend");
  const { username, name, password } = request.body;
  if (username && username.length > 3) {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return response.status(400).json({ error: "username must be unique" });
    } else if (!password || password.length < 3) {
      return response.status(400).json({
        error: "username and or password must be at least 3 characters long",
      });
    } else {
      try {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const user = new User({
          username,
          name,
          password: passwordHash,
          blogs: [],
        });
        const result = await user.save();
        response.status(201).json(result);
      } catch (error) {
        info(error.message);
      }
    }
  } else {
    return response
      .status(400)
      .json({ error: "username must be at least 3 characters long" });
  }
});

module.exports = userRouter;
