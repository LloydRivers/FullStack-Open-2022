import { daily_exercises } from "./data";
import { Result, RatingDescription } from "./types";
import {
  filterNonTrainingDays,
  sum,
  getRandomRatingDescription,
} from "./utils";

export const calculateExercises = (
  daily_exercises: number[],
  target: number
): Result => {
  const number_of_days = daily_exercises.length;

  // Use the filterNonTrainingDays function to filter out non-training days (days with no exercises)
  const training_days = filterNonTrainingDays(daily_exercises).length;

  // Use the sum function to calculate the sum of all exercises
  const sum_of_exercises = sum(daily_exercises);

  // Calculate the average of all exercises
  const average = sum_of_exercises / number_of_days;

  const success = average >= target;

  // Use a ternary operator to calculate the rating based on the success and the target
  const rating = success ? 3 : average >= target / 2 ? 2 : 1;

  const rating_description: RatingDescription = {
    1: [
      "You should try harder",
      "You can still improve",
      "You need to work harder to reach your target",
    ],
    2: [
      "Not too bad but could be better",
      "You are making good progress but there is room for improvement",
      "You are on track but need to push yourself more",
    ],
    3: [
      "You are doing great!",
      "You are smashing it!",
      "Amazing work, keep it up!",
    ],
  };

  // Get a random rating description from the array based on the rating
  const rating_description_random = getRandomRatingDescription(
    rating,
    rating_description
  );
  return {
    number_of_days,
    training_days,
    target,
    average,
    success,
    rating,
    // THIS IS AN ARRAY OF STRINGS
    rating_description: rating_description_random,
  };
};

try {
  const {
    number_of_days,
    training_days,
    target,
    average,
    success,
    rating,
    // THIS IS AN ARRAY OF STRINGS
    rating_description,
  } = calculateExercises(daily_exercises, 2);
  console.log(
    `Number of days: ${number_of_days}
Training days: ${training_days}
Target: ${target}
Average: ${average}
Success: ${success}
Rating: ${rating}
Rating description: ${rating_description}`
  );
} catch (error: unknown) {
  throw new Error("Something went wrong, error message: " + error);
}
