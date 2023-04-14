const mongoose = require("mongoose");
const Person = require("../models/person");

require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
  }
}

module.exports = { connectToDatabase };
