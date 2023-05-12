// Import dependencies
import { useState, useEffect } from "react";

// Import services
import { getOne, getDiagnoses } from "../../services/patients";

// Import types
import { Patient, Diagnose } from "../../types/types";

export const UsePatientDetails = (id: string) => {
  const [details, setDetails] = useState<Patient>();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getOne(id);
      setDetails(data);
    };
    fetchDetails();
  }, [id]);

  return details;
};

export const useDiagnoses = () => {
  const [diagnoses, setDiagnoses] = useState<Diagnose[]>([]);

  useEffect(() => {
    const fetchDiagnoses = async () => {
      try {
        const data = await getDiagnoses();
        console.log(data);
        setDiagnoses(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDiagnoses();
  }, []);

  return diagnoses;
};
