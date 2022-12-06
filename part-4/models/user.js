const mongoose = require("mongoose");
/*The type of the field is ObjectId that references blog-style documents. Mongo does not inherently know that this is a field that references blogs, the syntax is purely related to and defined by Mongoose. */

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  passwordHash: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("User", userSchema);
