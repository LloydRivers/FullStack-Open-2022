import { parseArguments } from "./exerciseCalculatorCMD";

interface Result {
  number_of_days: number;
  training_days: number;
  target: number;
  average: number;
  success: boolean;
  rating: number;
  rating_description: string;
}

export const calculateExercises = (
  daily_exercises: number[],
  target: number
): Result => {
  const number_of_days = daily_exercises.length;
  const training_days = daily_exercises.filter((day) => day > 0).length;
  const average =
    daily_exercises.reduce((total, current) => total + current, 0) /
    daily_exercises.length;
  const success = average >= target;
  const rating = success ? 3 : average >= target / 2 ? 2 : 1;
  const rating_description =
    rating === 3
      ? "You are doing great!"
      : rating === 2
      ? "Not too bad but could be better"
      : "You should try harder";

  return {
    number_of_days,
    training_days,
    target,
    average,
    success,
    rating,
    rating_description,
  };
};

try {
  const { daily_exercises, target } = parseArguments(process.argv);
  const {
    number_of_days,
    training_days,
    target: targetValue,
    average,
    success,
    rating,
    rating_description,
  } = calculateExercises(daily_exercises, target);

  console.log(
    `Number of days: ${number_of_days}
Training days: ${training_days}
Target: ${targetValue}
Average: ${average}
Success: ${success}
Rating: ${rating}
Rating description: ${rating_description}`
  );
} catch (error: unknown) {
  if (error instanceof Error) {
    // THIS IS WHERE THE LOGD ARE COMING FROM
    console.log("Error:", error.message);
  }
}
