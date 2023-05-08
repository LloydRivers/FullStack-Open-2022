export const parseArguments = (
  args: string[]
): { height: number; weight: number } => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  const height = Number(args[2]);
  const weight = Number(args[3]);

  if (isNaN(height) || isNaN(weight))
    throw new Error("Invalid arguments: height and weight must be numbers");

  return { height, weight };
};
