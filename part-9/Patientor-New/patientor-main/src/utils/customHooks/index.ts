// Import dependencies
import { useState, useEffect } from "react";

// Import services
import { getOne } from "../../services/patients";

// Import types
import { Patient } from "../../types/types";

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
