const jwt = require("jsonwebtoken");
const User = require("../Database/models/user");

const authenticate = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    throw new Error("Invalid username or password");
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  return token;
};

module.exports = { authenticate };
