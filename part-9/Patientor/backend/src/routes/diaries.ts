import express from "express";
import diaryService from "../services/diaryService";

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    res.send(diaryService.getNonSensitiveEntries());
  } catch ({ message }) {
    res.status(400).send({
      status: `error`,
      message: message,
    });
  }
});

router.get("/:id", (_req, res) => {
  try {
    const id = Number(_req.params.id);
    const diary = diaryService.findById(id);
    res.send(diary);
  } catch ({ message }) {
    res.status(400).send({
      status: `error`,
      message: message,
    });
  }
});

router.post("/", (_req, res) => {
  console.log(_req.body);
  try {
    const { date, weather, visibility, comment } = _req.body;
    const newDiaryEntry = diaryService.addDiary({
      date,
      weather,
      visibility,
      comment,
    });
    res.json(newDiaryEntry);
  } catch ({ message }) {
    res.status(400).send({
      status: `error`,
      message: message,
    });
  }
});

export default router;
