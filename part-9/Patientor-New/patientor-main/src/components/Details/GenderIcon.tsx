import { Gender } from "../../types/types";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import Typography from "@mui/material/Typography";

interface GenderIconProps {
  gender?: Gender;
}

const GenderIcon = ({ gender }: GenderIconProps) => {
  return <>{gender === Gender.Male ? <MaleIcon /> : <FemaleIcon />}</>;
};

export default GenderIcon;
