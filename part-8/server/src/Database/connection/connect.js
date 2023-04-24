const mongoose = require("mongoose");
/*
the default value for strictQuery will be changed to false in Mongoose 7, and it is recommended to prepare for this change. To do so, you can use the mongoose.set() method to set the value of strictQuery explicitly.
*/
mongoose.set("strictQuery", false);

require("dotenv").config();

const url = process.env.MONGO_ENDPOINT;
console.log("url", url);

async function connectToDatabase() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
  }
}

module.exports = { connectToDatabase };
