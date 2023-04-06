import express from "express";
import patientService from "../services/patientService";
import { toNewPatientEntry } from "../utils/patientUtils";

const patientRouter = express.Router();

patientRouter.get("/", (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

patientRouter.post("/", (_req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(_req.body);
    const addedEntry = patientService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch ({ message }) {
    res.status(400).send({
      status: `error`,
      message: message,
    });
  }
});

patientRouter.get("/:id", (_req, res) => {
  const patient = patientService.getPatientByID(_req.params.id);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).end();
  }
});

export default patientRouter;
