import { Person } from "./types";
/*
Your task:
Provide the type or interface for the given data structure.
Write a function that takes an object of this type as input and prints out the person's information.

Data Structure:
{
  name: string,
  age: number,
  isActive: boolean
}

*/

const person: Person = {
  name: "John",
  age: 30,
  isActive: true,
};

function printPerson(person: Person) {
  console.log(person);
}

printPerson(person);
