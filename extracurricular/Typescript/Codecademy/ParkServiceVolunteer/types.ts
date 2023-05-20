export type WolfPointVolunteers = {
  id: string;
  name: string;
  activities: WolfPointActivity[];
};

export type WolfPointActivity = {
  notes: string;
  time: number;
  verified: boolean;
};

export type RaccoonMeadowsVolunteers = {
  id: number;
  name: string;
  activities: RaccoonMeadowsActivity[];
};

export type RaccoonMeadowsActivity = {
  description: string;
  hours: number;
  verified: string;
};
