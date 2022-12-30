require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { PORT = 3000, MONGODB_URI } = process.env;
const restaurantRouter = require("./routes/restaurantRouter.js");
const { unknownEndpoint } = require("./utils/middleWare.js");

app.use(express.json());
app.use("/", restaurantRouter);

try {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to MongoDB");
} catch ({ message }) {
  console.warn(`Error connecting to MongoDB: ${message}`);
}

app.use(unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
