require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

const url = process.env.MONGO_ENDPOINT;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const Person = require("./models/person");

// cors
const cors = require("cors");
app.use(cors());
// cors

// Morgan logger
const morgan = require("morgan");
app.use(morgan("tiny"));
morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length]  :response-time ms - :body")
);
// Morgan logger

const PORT = process.env.PORT || 4001;

app.get("/api/persons", async (req, res) => {
  try {
    const person = await Person.find({});
    res.json(person);
  } catch (error) {
    console.log(error);
  }
});

app.get("/info", (req, res) => {
  const date = new Date();
  res.send(`
  <p>Phonebook has info for ${data.length} people</p>
  <p>${date}</p>`);
});

app.get("/api/persons/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const person = await Person.findById(id);
    if (person) {
      res.json(person);
    }
    res.status(404).send("<h2>person not found</h2>");
  } catch (error) {
    res.status(400).send("<h2>malformatted id</h2>");
  }
});

app.delete("/api/persons/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Person.findByIdAndRemove(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).send("<h2>malformatted id</h2>");
  }
});

app.post("/api/persons", async (req, res) => {
  const { name, number } = req.body;
  if (!name || !number) {
    res.status(400).json({ error: "All fields are required" });
  } else {
    try {
      const person = await Person.create({
        name,
        number,
      });
      res.json(person);
    } catch (error) {
      console.log(error);

      res.status(400).json({ error: error.message });
    }
  }
});

app.put("/api/persons/:name", async (req, res) => {
  const { name } = req.params;
  const { number } = req.body;
  try {
    const foundInDB = Person.findOne({
      name: name,
    });

    if (foundInDB) {
      const updatedPerson = await Person.findOneAndUpdate(
        { name },
        { number },
        { new: true, runValidators: true, context: "query" }
      );
      res.json(updatedPerson);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("person not found");
  }
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const ErrorHandler = (error, req, res, next) => {
  console.log(error.message);
  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }
  next(error);
};

app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Export the Express API
module.exports = app;
