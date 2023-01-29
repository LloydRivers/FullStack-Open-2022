const mongoose = require("mongoose");

const scheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },

  favouriteGenre: {
    type: String,
    required: true,
    minlength: 3,
  },
});

module.exports = mongoose.model("User", scheme);
