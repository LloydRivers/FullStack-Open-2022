// Import: types
import { Course, StudyGroup, SearchEventsOptions } from "./types";

// Import data:
import courses from "./courses";
import studyGroups from "./studyGroups";

// Import helpers:
import { enroll } from "./helpers";

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

const searchResults = searchEvents({
  query: "art",
  eventType: "courses",
});

const enrolled = enroll(searchResults[0]);

console.log(enrolled);
console.log(searchResults);
