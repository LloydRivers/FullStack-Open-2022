import { data } from "./data";
import { Information } from "./types";

/*
Your task:
Provide the type or interface for the given data structure.
Write a function that takes an array of objects of this type as input and prints out the person's information (name, age, hobbies).

Data Structure:
{
  id: string,
  data: {
    name: string,
    age: number,
    hobbies: string[]
  }
}
*/

const print = (data: Information[]) => {
  return data.forEach((info: Information) =>
    console.log(`
  Hello ${info.data.name}, you are ${info.data.age} and you like ${info.data.hobbies}
  `)
  );
};

print(data);
