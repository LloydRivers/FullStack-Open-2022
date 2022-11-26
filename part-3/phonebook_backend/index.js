const express = require("express");
const app = express();
app.use(express.json());

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

const PORT = 3001;
let data = require("./data.json");

app.get("/api/persons", (req, res) => {
  res.send(data);
});

app.get("/info", (req, res) => {
  const date = new Date();
  res.send(`
  <p>Phonebook has info for ${data.length} people</p>
  <p>${date}</p>`);
});

app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const person = data.find((person) => person.id === Number(id));
  if (person) {
    res.send(person);
  } else {
    res.status(404).send("person not found");
  }
});

app.delete("/api/persons/:id", (req, res) => {
  try {
    const isFound = data.find((person) => person.id === Number(req.params.id));
    if (isFound) {
      data = data.filter((person) => person.id !== Number(req.params.id));
      res.status(204).end();
    } else {
      res.status(404).send("person not found");
    }
  } catch (error) {
    console.warn(error);
    res.status(404).send("person not found");
  }
});

app.post("/api/persons", (req, res) => {
  const id = data.length > 0 ? Math.max(...data.map((n) => n.id)) + 1 : 1;
  const { name, number } = req.body;
  const already_exists = data.find((person) => person.name === name);
  if (already_exists) {
    res.status(400).send({ error: "name must be unique" });
  } else if (!name || !number) {
    res.status(400).send({ error: "name or number missing" });
  } else {
    const person = {
      id,
      name,
      number,
    };
    data = data.concat(person);
    res.send(person);
  }
});

app.put("/api/persons/:name", (req, res) => {
  try {
    const { name } = req.params;
    const { number } = req.body;
    const person = data.find((person) => person.name === name);
    if (person) {
      const newPerson = {
        ...person,
        number,
      };
      data = data.map((person) => (person.name === name ? newPerson : person));

      res.send(newPerson);
    } else {
      res.status(404).send("person not found");
    }
  } catch (error) {
    console.warn(error);
    res.status(404).send("person not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Export the Express API
module.exports = app;
