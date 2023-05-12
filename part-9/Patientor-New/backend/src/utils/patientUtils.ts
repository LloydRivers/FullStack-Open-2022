import { NewPatientEntry, Gender } from "../../types/Patientor/types";

// Define a function that checks if a value is a string
// The 'unknown' type allows us to pass any type of value as an argument
const isString = (text: unknown): text is string => {
  // The 'typeof' operator returns the type of the operand, which in this case is 'text'
  // We also check if the value is an instance of the 'String' constructor
  return typeof text === "string" || text instanceof String;
};

// Define a function that parses and returns a string value
const parseValue = (value: unknown, field: string): string => {
  // Check if value is null, undefined, or not a string
  if (!value || !isString(value)) {
    // Throw an error message indicating the incorrect or missing field value
    throw new Error(`Incorrect or missing ${field}: ${value}`);
  }
  return value;
};

// Define a function that checks if a date string is a valid date
const isDate = (date: string): boolean => {
  // Check if the date string can be parsed into a valid date object
  return Boolean(Date.parse(date));
};

// Define a function that parses and returns a valid date string
const parseDate = (date: unknown): string => {
  // Check if the date value is null, undefined, or not a valid date string
  if (!date || !isString(date) || !isDate(date)) {
    // Throw an error message indicating the incorrect or missing date value
    throw new Error(`Incorrect or missing date: ${date}`);
  }
  return date;
};

// Define a function that checks if a value is a valid gender value
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // Check if the value is included in the Gender enum values
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

// Define a function that parses and returns a valid gender value
const parseGender = (gender: unknown): Gender => {
  // Check if the gender value is null, undefined, or not a valid gender value
  if (!gender || !isGender(gender)) {
    // Throw an error message indicating the incorrect or missing gender value
    throw new Error(`Incorrect or missing gender: ${gender}`);
  }
  return gender;
};

// Define a function that converts a request body object into a new patient entry object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toNewPatientEntry = (object: any): NewPatientEntry => {
  // Create a new patient entry object with required fields and an empty array of entries
  const newEntry: NewPatientEntry = {
    name: parseValue(object.name, "name"),
    ssn: parseValue(object.ssn, "ssn"),
    dateOfBirth: parseDate(object.dateOfBirth),
    occupation: parseValue(object.occupation, "occupation"),
    gender: parseGender(object.gender),
    entries: object.entries,
  };

  return newEntry;
};
