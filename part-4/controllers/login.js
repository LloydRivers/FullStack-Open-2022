require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/user");
const { info } = require("../utils/logger");

loginRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  try {
    const user = await User.find({ username });
    if (user.length === 0) {
      return response.status(401).json({
        error: "invalid username or password",
      });
    } else {
      const passwordCorrect = await bcrypt.compare(password, user[0].password);

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

      response
        .status(200)
        .send({ token, username: user[0].username, name: user[0].name });
    }
  } catch (error) {
    response.status(500).json({ error: "something went wrong" });
    info("Error", error);
  }
});

module.exports = loginRouter;
