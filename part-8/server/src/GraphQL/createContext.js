const jwt = require("jsonwebtoken");
const User = require("../Models/User");
console.log("Before createContext");
async function createContext({ req }) {
  console.log("createContext: req.headers", req.headers);
  console.log("-----------");

  const auth = req ? req.headers.authorization : null;
  console.log("createContext: auth", auth);
  if (auth && auth.startsWith("Bearer ")) {
    const decodedToken = jwt.verify(auth.substring(7), process.env.JWT_SECRET);
    const currentUser = await User.findById(decodedToken.id);

    console.log("createContext: currentUser", currentUser);

    return { currentUser };
  }
}
console.log("After createContext");
module.exports = { createContext };
