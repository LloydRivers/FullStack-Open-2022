import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Patient } from "../types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useStateValue } from "../state";

const DetailsPage = () => {
  const [patients, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();

  const found = Object.values(patients)[0];
  const values = Object.values(found).filter((value) => {
    return value.id === id;
  });
  console.log("values", values);

  useEffect(() => {
    const get_patient_by_id = async () => {
      if (!id) return;
      try {
        const { data: patient } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch({ type: "UPDATE_PATIENT", payload: patient });
      } catch ({ message }) {
        console.error(message);
      }
    };
    if (!values[0].ssn) {
      console.log("fetching");
      void get_patient_by_id();
    }
  }, [id]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://plus.unsplash.com/premium_photo-1661963794992-eac7643e228b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {values[0].name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {values[0].ssn}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {values[0].occupation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetailsPage;
