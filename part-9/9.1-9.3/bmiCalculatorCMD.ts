import { calculateBmi } from "./bmiCalculator";

export const parseArgument = (args: Array<string>): String => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return calculateBmi(Number(args[2]), Number(args[3]));
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

console.log(parseArgument(process.argv));
