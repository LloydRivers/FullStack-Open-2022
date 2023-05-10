import patients from "../data/patients";
import {
  Patient,
  NonSensitivePatient,
  NewPatientEntry,
} from "../../types/Patientor/types";
import { v1 as uuid } from "uuid";
/** I think this function is unused */
export const getEntries = (): Array<Patient> => {
  return patients;
};
/** I think this function is unused */

export const getPatientByID = (id: string): Patient | undefined => {
  const found = patients.find((patient) => patient.id === id);

  if (found) {
    return found;
  } else {
    return undefined;
  }
};

export const getNonSensitiveEntries = (): NonSensitivePatient[] => {
  return patients.map((patient) => ({
    id: patient.id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation,
    entries: patient.entries,
  }));
};

export const addPatient = (entry: NewPatientEntry): Patient => {
  const id: string = uuid();
  const newPatientEntry = { id, ...entry };
  patients.push(newPatientEntry);
  return newPatientEntry;
};
