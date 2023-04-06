import diagnoses from "../data/diagnoses";
import { Diagnose } from "../../types/Patientor/types";

const getEntries = (): Array<Diagnose> => {
  return diagnoses;
};

export default {
  getEntries,
};
