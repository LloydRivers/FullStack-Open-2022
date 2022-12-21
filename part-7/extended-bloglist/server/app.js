const config = require("./utils/config");
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const usersRouter = require("./controllers/users");
const blogsRouter = require("./controllers/blogs");
const loginRouter = require("./controllers/login");
const {
  requestLogger,
  tokenExtractor,
  userExtractor,
  unknownEndpoint,
  errorHandler,
} = require("./utils/middleware");
const { info, error } = require("./utils/logger");
const mongoose = require("mongoose");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    info("connected to MongoDB");
  })
  .catch((error) => {
    error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use([requestLogger, tokenExtractor]);
// app.use(tokenExtractor);

app.use("/api/users", usersRouter);
app.use("/api/blogs", userExtractor, blogsRouter);
app.use("/api/login", loginRouter);

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use("/api/testing", testingRouter);
}

app.use([unknownEndpoint, errorHandler]);
// app.use(errorHandler);

app.listen(config.PORT, () => {
  info(`Server running on port ${config.PORT}`);
});
module.exports = app;
