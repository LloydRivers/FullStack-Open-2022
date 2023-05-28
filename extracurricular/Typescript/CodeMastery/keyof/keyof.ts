/*
The keyof operator is another powerful tool in TypeScript that allows you to derive a type consisting of the keys of a given object or interface. It provides a way to access the keys as string literal types, which can be used for various purposes.

Here's an example to demonstrate the usage of keyof:
*/

interface Person {
  name: string;
  age: number;
  email: string;
}
// PersonKeys is "name" | "age" | "email"
type PersonKeys = keyof Person;

function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

const person: Person = {
  name: "John Doe",
  age: 25,
  email: "johndoe@example.com",
};
// Type checks, "name" is a valid key
const personName = getProperty(person, "name");

// Error, "address" is not a valid key
// const address = getProperty(person, "address");
