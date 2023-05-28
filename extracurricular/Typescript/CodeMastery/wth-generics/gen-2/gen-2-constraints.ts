/*
Generic constraints in TypeScript allow you to restrict the types that can be used as arguments for a generic type parameter. By using the extends keyword followed by a type constraint, you can enforce that the generic type parameter must be a subtype of a particular type or satisfy specific conditions.

Here's an example to demonstrate generic constraints:
*/

// A generic function that takes an object and returns a value based on a key
export {};
import { getValue } from "./getValue";

const person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

// Get the value of the "name" key from the "person" object
const name = getValue(person, "name"); // inferred type: string

// Get the value of the "age" key from the "person" object
const age = getValue(person, "age"); // inferred type: number

// Get the value of the "email" key from the "person" object
const email = getValue(person, "email"); // inferred type: string

console.log(name); // Output: "John"
console.log(age); // Output: 30
console.log(email); // Output: "john@example.com"

/*
In this example, the generic type parameter T is constrained to object, indicating that the argument obj must be an object. The generic type parameter K is constrained to keyof T, ensuring that the argument key can only be a valid key of the object T.

By applying these constraints, TypeScript guarantees that the getValue function can only be used with objects and valid keys of those objects. This enhances type safety and prevents potential runtime errors.

Generic constraints provide additional control over the types used with generics, allowing you to specify requirements and enforce type compatibility within your code.
*/
