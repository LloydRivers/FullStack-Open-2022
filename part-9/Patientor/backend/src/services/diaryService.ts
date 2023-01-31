import diaryData from "../../data/diaries";

import {
  DiaryEntry,
  NonSensitiveDiaryEntry,
  NewDiaryEntry,
} from "../../types/Diaries/types";

const diaries: Array<DiaryEntry> = diaryData;

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById = (id: number): DiaryEntry => {
  /* It depends. if you throw an exception, the caller has to catch it. If you return undefined, the caller needs an if. So in many situations it is a matter of taste. Naturally there are cases where exception is better (it eg allows you to describe the reason) */
  const foundEntry = diaries.find((entry) => entry.id === id);
  if (!foundEntry) {
    throw new Error("Entry not found");
  }
  return foundEntry;
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  try {
    const newDiaryEntry: DiaryEntry = {
      id: Math.max(...diaries.map((diary) => diary.id)) + 1,
      ...entry,
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
  } catch ({ message }) {
    throw new Error(`Error: ${message}`);
  }
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById,
  addEntry,
};
