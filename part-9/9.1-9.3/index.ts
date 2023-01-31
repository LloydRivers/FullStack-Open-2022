import express from "express";
import { calculateExercises } from "./exerciseCalculator";
const app = express();
app.use(express.json());
import { calculateBmi } from "./bmiCalculator";

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});
app.get("/bmi", (req, res) => {
  if (!req.query.height || !req.query.weight) {
    console.warn(
      "Error: Height or weight is missing from the query parameters"
    );
    res.send({ error: "malformed parameters" });
  } else {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    res.send(`
      <h1>BMI Calculator</h1>
      <p>Height: ${height}</p>
      <p>Weight: ${weight}</p>
      <p>BMI: ${calculateBmi(height, weight)}</p>
  
    `);
  }
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    console.warn("Error: Missing parameters");
    res.send({ error: "parameters missing" });
  } else if (!Array.isArray(daily_exercises) || !Number(target)) {
    console.warn("Error: Malformed parameters");
    res.send({ error: "malformed parameters" });
  } else {
    const result = calculateExercises(daily_exercises, target);
    res.send(result);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
