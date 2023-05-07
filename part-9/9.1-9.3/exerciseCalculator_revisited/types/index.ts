export interface Result {
  number_of_days: number;
  training_days: number;
  target: number;
  average: number;
  success: boolean;
  rating: number;
  rating_description: string;
}

export interface RatingDescription {
  [key: number]: [string, string, string];
}
