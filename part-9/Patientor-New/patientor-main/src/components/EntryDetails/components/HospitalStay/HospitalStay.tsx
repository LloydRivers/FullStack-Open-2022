// Import mui icon
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

// Import types
import { Entry } from "../../../../types/details";

interface HealthCheckProps {
  entry: Entry;
}
const HospitalStay = ({ entry }: HealthCheckProps) => {
  if (entry.type !== "Hospital") return null;
  return (
    <div>
      <h3>Hospital stay</h3>
      <LocalHospitalIcon />
      <p>{entry.date}</p>
      <p>{entry.description}</p>
      <div>
        <h4>Discharge</h4>
        <p>{entry.discharge.date}</p>
        <p>{entry.discharge.criteria}</p>
        <p>Specialist: {entry.specialist}</p>
      </div>
    </div>
  );
};

export default HospitalStay;
