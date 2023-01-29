import { calculateExercises } from "./exerciseCalculator";
interface Result {
  number_of_days: number;
  training_days: number;
  target: number;
  average: number;
  success: boolean;
  rating: number;
  rating_description: string;
}

const parseArguments = (args: Array<string>): Result => {
  console.log("args: ", args);
  if (args.length < 4) throw new Error("Not enough arguments");

  if (!isNaN(Number(args[2]))) {
    const target = Number(args[2]);
    console.log("target: ", target);
    const daily_exercises = args.slice(3).map((arg) => Number(arg));
    console.log("daily_exercises: ", daily_exercises);
    return calculateExercises(daily_exercises, target);
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

parseArguments(process.argv);
