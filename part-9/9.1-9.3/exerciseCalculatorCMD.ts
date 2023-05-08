export const parseArguments = (args: string[]) => {
  if (args.length < 4) {
    throw new Error("Not enough arguments");
  }

  if (args.length > 10) {
    throw new Error("Too many arguments");
  }

  const target = Number(args[2]);

  if (isNaN(target)) {
    throw new Error("Target must be a number");
  }

  const daily_exercises = args.slice(3).map((arg) => {
    const exercise = Number(arg);

    if (isNaN(exercise)) {
      throw new Error("All exercises must be numbers");
    }

    return exercise;
  });

  return {
    target,
    daily_exercises,
  };
};
