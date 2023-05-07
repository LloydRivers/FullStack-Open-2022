import { RatingDescription } from "../types";

export const sum = (arr: number[]): number => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

export const filterNonTrainingDays = (arr: number[]): number[] => {
  return arr.filter((day) => day > 0);
};

export const getRandomRatingDescription = (
  rating: number,
  rating_description: RatingDescription
): string => {
  // Access the array of descriptions corresponding to the given rating from the RatingDescription object.
  const descriptions = rating_description[rating];
  // Calculate a random index within the range of valid indices of the descriptions array.
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  // Return the random description at the calculated index.
  return descriptions[randomIndex];
};
