interface Result {
  number_of_days: number;
  training_days: number;
  target: number;
  average: number;
  success: boolean;
  rating: number;
  rating_description: string;
}

const daily_exercises = [3, 0, 2, 4.5, 0, 3, 1];

export const calculateExercises = (
  daily_exercises: Array<number>,
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
  const {
    number_of_days,
    training_days,
    target,
    average,
    success,
    rating,
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
