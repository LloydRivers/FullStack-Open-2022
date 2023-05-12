import express from "express";
import { getEntries } from "../services/diagnoseService";

const diagnosesRouter = express.Router();

diagnosesRouter.get("/", (_req, res) => {
  res.send(getEntries());
});

export default diagnosesRouter;
