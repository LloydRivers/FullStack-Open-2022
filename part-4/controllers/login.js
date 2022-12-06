require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  const user = await User.find({ username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user[0].password);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    username: user[0].username,
    id: user[0]._id,
  };
  //If the password is correct, a token is created with the method jwt.sign. The token contains the username and the user id in a digitally signed form.
  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60,
  });

  console.log("token", token);

  response
    .status(200)
    .send({ token, username: user[0].username, name: user[0].name });
});

module.exports = loginRouter;
