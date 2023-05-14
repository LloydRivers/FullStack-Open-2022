// Import mui icon
import WorkIcon from "@mui/icons-material/Work";

// Import types
import { Entry } from "../../../../types/details";

interface OccupationalProps {
  entry: Entry;
}
const Occupational = ({ entry }: OccupationalProps) => {
  if (entry.type !== "OccupationalHealthcare") return null;
  return (
    <div>
      <h3>Occupational Healthcare details:</h3>
      <WorkIcon />
      <p>Employer Name: {entry.employerName}</p>
      <p>Description: {entry.description}</p>

      <div>
        <h4>Sick Leave:</h4>
        <p>
          Start Date: {entry.sickLeave?.startDate} | End Date:
          {entry.sickLeave?.endDate}
        </p>
      </div>
    </div>
  );
};

export default Occupational;
