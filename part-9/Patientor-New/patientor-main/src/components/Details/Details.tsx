// Import dependencies
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { List, ListItem, ListItemText } from "@mui/material";

// Import custom hooks
import { UsePatientDetails, useDiagnoses } from "../../utils/customHooks";

// Import icon
import GenderIcon from "../Details/GenderIcon";

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

const Details = () => {
  const { id = "" } = useParams<{ id: string }>();
  const details = UsePatientDetails(id);
  const diagnoses = useDiagnoses();
  console.log(diagnoses);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://plus.unsplash.com/premium_photo-1661963794992-eac7643e228b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div style={{ display: "flex", alignItems: "center" }}>
            <GenderIcon gender={details?.gender} />
            <span style={{ marginLeft: "0.5rem" }}>{details?.name}</span>
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ssn: {details?.ssn}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          occupation: {details?.occupation}
        </Typography>
        <List sx={{ paddingLeft: 0 }}>
          {details?.entries.map((entry) => (
            <ListItem
              style={{
                paddingLeft: 0,
              }}
              key={entry.id}
            >
              <ListItemText
                primary={entry.date}
                secondary={
                  <div>
                    {entry.description}
                    {entry.diagnosisCodes &&
                      entry.diagnosisCodes.length > 0 && (
                        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                          {entry.diagnosisCodes.map((code) => {
                            const diagnosis = diagnoses.find(
                              (d) => d.code === code
                            );
                            const description = diagnosis
                              ? diagnosis.name
                              : "Unknown diagnosis";
                            return (
                              <li key={code}>{`${code} - ${description}`}</li>
                            );
                          })}
                        </ul>
                      )}
                  </div>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Details;
