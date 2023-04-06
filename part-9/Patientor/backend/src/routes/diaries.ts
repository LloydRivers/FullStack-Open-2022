import express from "express";
import diaryService from "../services/diaryService";
import { toNewDiaryEntry } from "../utils/utils";

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
  try {
    const newDiaryEntry = toNewDiaryEntry(_req.body);
    const addedEntry = diaryService.addDiary(newDiaryEntry);
    res.json(addedEntry);
  } catch ({ message }) {
    res.status(400).send({
      status: `error`,
      message: message,
    });
  }
});

export default router;
