// Import dependencies
import axios from "axios";

// Import types
import { Patient, PatientFormValues } from "../types/types";

// Import constants
import { apiBaseUrl } from "../constants/constants";

export const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
};

export const getOne = async (id: string) => {
  const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);

  return data;
};

export const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);

  return data;
};

export const getDiagnoses = async () => {
  const { data } = await axios.get(`${apiBaseUrl}/diagnoses`);

  return data;
};
