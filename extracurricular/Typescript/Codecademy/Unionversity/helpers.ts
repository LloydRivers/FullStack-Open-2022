// Import: types
import { Course, StudyGroup } from "./types";

// Import data:
import enrolledEvents from "./enrolledEvents";
export const enroll = (event: Course | StudyGroup) => {
  enrolledEvents.push(event);

  return enrolledEvents;
};
