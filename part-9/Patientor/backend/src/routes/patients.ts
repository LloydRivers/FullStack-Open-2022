import express from "express";
import {
  getPatientByID,
  getNonSensitiveEntries,
  addPatient,
} from "../services/patientService";
import { toNewPatientEntry } from "../utils/patientUtils";
import errorHandler from "./helpers";

const patientRouter = express.Router();

patientRouter.get("/", (_req, res) => {
  res.send(getNonSensitiveEntries());
});

patientRouter.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    errorHandler(res, error);
  }
});

patientRouter.get("/:id", (_req, res) => {
  const patient = getPatientByID(_req.params.id);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).end();
  }
});

export default patientRouter;
