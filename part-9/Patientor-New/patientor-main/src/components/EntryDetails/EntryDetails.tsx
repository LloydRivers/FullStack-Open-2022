// Import types
import { Entry } from "../../types/details";

// Import components
import { HealthCheck, HospitalStay, Occupational } from "./components";

interface EntryDetailsProps {
  entry: Entry;
}

const EntryDetails = ({ entry }: EntryDetailsProps) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  switch (entry.type) {
    case "HealthCheck":
      return <HealthCheck entry={entry} />;
    case "Hospital":
      return <HospitalStay entry={entry} />;
    case "OccupationalHealthcare":
      return <Occupational entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;
