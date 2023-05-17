/*
Write a generic identity function called identity that takes an argument of type T and returns the same value of type T.
*/

// Your code here
const identity = <T>(arg: T): T => {
  return arg;
};
// Example usage
const result = identity<string>("Hello, TypeScript!");
console.log(result);
// Output: Hello, TypeScript!
