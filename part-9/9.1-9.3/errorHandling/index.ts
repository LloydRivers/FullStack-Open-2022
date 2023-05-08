import { Response } from "express";
export const handleMissingParameters = (res: Response) => {
  console.warn("Error: Missing parameters");
  res.send({ error: "parameters missing" });
};

export const handleMalformedParameters = (res: Response) => {
  console.warn("Error: Malformed parameters");
  res.send({ error: "malformed parameters" });
};

export const handleMissingQueryParameters = (res: Response) => {
  console.warn("Error: Height or weight is missing from the query parameters");
  res.send({ error: "malformed parameters" });
};
