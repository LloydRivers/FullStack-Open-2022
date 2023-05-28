/*
In this example, we have a generic type ExtractReturnType<T> that uses infer within a conditional type. It checks if T extends the type () => infer R, which represents a function type with a return type captured as R.

The ExtractReturnType type extracts the return type of a function if it matches the specified function type pattern. If the condition is satisfied, it captures the inferred return type R. Otherwise, it returns never.

We then define two functions, getString and getNumber, which have explicit return types of string and number respectively.

Using ExtractReturnType, we declare two variables, result1 and result2, with explicitly annotated types based on the return types of the corresponding functions. The inferred types for result1 and result2 will be string and number respectively, thanks to infer.

Finally, we log the values of result1 and result2 to the console, verifying that the correct types were inferred.

This simplified example showcases how infer can be used to capture and utilize inferred types within conditional type expressions. It allows us to extract specific type information, such as return types in this case, based on certain conditions.
*/
type ExtractReturnType<T> = T extends () => infer R ? R : never;

function getString(): string {
  return "Hello, World!";
}

function getNumber(): number {
  return 42;
}

const result1: ExtractReturnType<typeof getString> = "Hello"; // Type inference: string
const result2: ExtractReturnType<typeof getNumber> = 42; // Type inference: number

console.log(result1); // Output: 'Hello'
console.log(result2); // Output: 42
