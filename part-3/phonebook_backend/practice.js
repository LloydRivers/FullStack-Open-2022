const express = require("express");
const app = express();

const errorHandler = (error, request, response, next) => {
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
};
app.use(express.json());
/* What does Express JSON () do?
json() is a built-in middleware function in Express. This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser. This method returns the middleware that only parses JSON and only looks at the requests where the content-type header matches the type option. */

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.get("/", (request, response) => {
  response.send("<h1>Not shown</h1>");
});

app.get("/api/notes", (request, response) => {
  console.log(request);
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  /**params is an object of the req object that contains route parameters. If the params are specified when a URL is built, then the req. params object will be populated when the URL is requested. */
  const id = Number(request.params.id);
  // What does find return if it doesn't find anything?
  // find() returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
  const note = notes.find((note) => note.id === id);
  const other = note;
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  };

  notes = notes.concat(note);

  response.json(note);
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/getSelectedPatient", (req, res) => {
  try {
    if (checkNamePassesValidation(name)) {
      res.status(200).json({ message: "success" });
    }
  } catch ({ message }) {
    handleError(message, res);
  }
});

// const checkName = (name) => {
//   if (name.length > 3 && name.length < 20 && name.includes("# ")) return true;
//   else return false;
// };
