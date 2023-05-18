// Import: types
import { Course, StudyGroup, SearchEventsOptions } from "./types";

// Import data:
import courses from "./courses";
import studyGroups from "./studyGroups";

const searchEvents = (options: SearchEventsOptions) => {
  const events: (Course | StudyGroup)[] =
    options.query === "courses" ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return event.id === options.query;
    }
    if (typeof options.query === "string") {
      return event.keywords.includes(options.query);
    }
  });
};

let enrolledEvents: (Course | StudyGroup)[] = [];
const enroll = (event: Course | StudyGroup) => {
  enrolledEvents.push(event);

  return enrolledEvents;
};

const searchResults = searchEvents({
  query: "art",
  eventType: "courses",
});

const enrolled = enroll(searchResults[0]);

console.log(enrolled);
console.log(searchResults);
