export type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

export type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

export type SearchEventsOptions = {
  query: string | number;
  eventType: "courses" | "groups";
};
