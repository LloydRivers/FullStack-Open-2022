// Import mui icon
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

// Import types
import { Entry } from "../../../../types/details";

interface HealthCheckProps {
  entry: Entry;
}

const HealthCheck = ({ entry }: HealthCheckProps) => {
  if (entry.type !== "HealthCheck") return null;

  return (
    <div>
      <h3>Health Check</h3>
      <MedicalInformationIcon />
      <p>{entry?.description}</p>
      <p>Health check rating: {entry.healthCheckRating}</p>
    </div>
  );
};

export default HealthCheck;
