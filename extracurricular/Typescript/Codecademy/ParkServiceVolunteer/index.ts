import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  WolfPointVolunteers,
  WolfPointActivity,
} from "./types";

import { raccoonMeadowsVolunteers } from "./raccoon-meadows-log";

import { wolfPointVolunteers } from "./wolf-point-log";

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

const combineVolunteers = (
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) => {
  return volunteers.map((volunteer) => {
    let id = volunteer.id;
    if (typeof id === "string") {
      id = parseInt(id, 10);
    }
    return {
      id: id,
      name: volunteer.name,
      activities: volunteer.activities,
    };
  });
};
const isVerified = (verified: string | boolean) => {
  if (typeof verified === "string") {
    return verified === "Yes";
  }
  return verified;
};
const getHours = (activity: CombinedActivity) => {
  if ("hours" in activity) {
    return activity.hours;
  } else {
    return activity.time;
  }
};
function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      if (isVerified(activity.verified)) {
        hours = hours += getHours(activity);
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}
const byHours = (a, b) => {
  return b.hours - a.hours;
};

let combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);

let result = calculateHours(combinedVolunteers);
console.log(result.sort(byHours));