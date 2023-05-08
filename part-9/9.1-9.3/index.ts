import express from "express";
import { calculateExercises } from "./exerciseCalculator";
import { calculateBmi } from "./bmiCalculator";
import {
  handleMissingParameters,
  handleMalformedParameters,
  handleMissingQueryParameters,
} from "./errorHandling";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  if (!req.query.height || !req.query.weight) {
    handleMissingQueryParameters(res);
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
  console.log("/exercises");
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    handleMissingParameters(res);
  } else if (!Array.isArray(daily_exercises) || !Number(target)) {
    handleMalformedParameters(res);
  } else {
    const result = calculateExercises(daily_exercises, target);
    res.json(result);
  }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
