import { Entry } from "./full_entry_types";

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export type NonSensitivePatient = Omit<Patient, "ssn">;
export type NewPatientEntry = Omit<Patient, "id">;

export interface Patient {
  id: string;
  name: string;
  img?: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[];
}
export type PublicPatient = Omit<Patient, "ssn" | "entries">;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
