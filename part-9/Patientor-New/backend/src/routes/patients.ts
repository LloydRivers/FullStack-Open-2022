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

patientRouter.get("/:id", (req, res) => {
  const patient = getPatientByID(req.params.id);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).end();
  }
});

patientRouter.post("/:id/entries", (req, res) => {
  /*
  

Remember that we have different kinds of entries in our app, so our backend should support all those types and check that at least all required fields are given for each type.

In this exercise you quite likely need to remember this trick.

You may assume that the diagnostic codes are sent in a correct form and use eg. the following kind of parser to extract those from the request body:
  */
});

// Adding the steps I think I need to take. I am almost 100% blocked on this one so might need to go away, upskill and return to the course.

// 1. Add a new route in patientRouter for the /api/patients/:id/entries endpoint.

// 2. Create a new controller function for this route that accepts a request and response object as arguments.

// 3. Extract the id parameter from the request URL using req.params.id.

// 4. Use the findPatientById function to find the patient with the given id.

// 5. Parse the request body to extract the new entry object.

// 6. Use a function to validate that the new entry object has all required fields for its type.

// 7. Add the new entry object to the patient's entries array.

// 8. Save the updated patient to the patients array.

// 9. Return the updated patient object in the response.

// If there is an error, return a response with an appropriate error message and status code.

export default patientRouter;
