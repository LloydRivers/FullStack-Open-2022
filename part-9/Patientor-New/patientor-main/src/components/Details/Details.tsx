// Import dependencies
import { useParams } from "react-router-dom";

// Import Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

// Import Components
import GenderIcon from "../Details/GenderIcon";
// Import Custom Hook
import { UsePatientDetails } from "../../utils/customHooks";

const Details = () => {
  const { id = "" } = useParams<{ id: string }>();
  const details = UsePatientDetails(id);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://plus.unsplash.com/premium_photo-1661963794992-eac7643e228b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="green iguana"
      />
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" color="text.secondary">
            <GenderIcon gender={details?.gender} />
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
            {details?.name}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary">
          {details?.ssn}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details?.occupation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Details;