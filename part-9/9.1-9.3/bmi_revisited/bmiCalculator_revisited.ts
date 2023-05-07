// Define an interface for the BMI categories
interface BmiCategory {
  // `range` is a tuple of two numbers representing the range of BMIs for a category
  range: [number, number];
  // `category` is the string name of the BMI category
  category: string;
}

// Define an array of BMI categories
const categories: BmiCategory[] = [
  { range: [0, 15], category: "Very severely underweight" },
  { range: [15, 16], category: "Severely underweight" },
  { range: [16, 18.5], category: "Underweight" },
  { range: [18.5, 25], category: "Normal (healthy weight)" },
  { range: [25, 30], category: "Overweight" },
  { range: [30, 35], category: "Obese Class I (Moderately obese)" },
  { range: [35, 40], category: "Obese Class II (Severely obese)" },
  { range: [40, Infinity], category: "Obese Class III (Very severely obese)" },
];

// Define a function to calculate BMI based on height and weight
export const calculateBmi = (height: number, weight: number): string => {
  /*  Calculate the BMI based on the input height and weight.
        The height is given in centimeters, so it needs to be converted to meters.
        Remember we are calling the function with the following arguemnts: height = 180, weight = 74
        Therefore the calculation is: 74 / (180 / 100) ** 2
        The result is 22.84
    */
  const bmi = weight / (height / 100) ** 2;

  /* Find the BMI category that the calculated BMI falls under. 
        The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
        
        We loop through the above array of objects, and for each object we check if the calculated BMI is greater than or equal to the first number in the range and less than the second number in the range. If it is, we return the category name. If not, we continue to the next object in the array. If no object is found, we throw an error.
    */
  const category = categories.find(
    (c) => bmi >= c.range[0] && bmi < c.range[1]
  );

  // If a category is found, return its name
  if (category) {
    return category.category;
    // If no category is found, throw an error
  } else {
    throw new Error("Something went wrong");
  }
};

// Call the calculateBmi function with height = 180 cm and weight = 74 kg.
// If the function returns a string, convert it to uppercase using the toUpperCase() method.
// If the function returns undefined (i.e. an error occurs), log the string "Error calculating BMI" instead using the nullish coalescing operator (??).
// console.log(calculateBmi(180, 74)?.toUpperCase() ?? "Error calculating BMI");
console.log(calculateBmi(180, -74)); // This will throw an error

/* FYI 
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

souce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
*/
