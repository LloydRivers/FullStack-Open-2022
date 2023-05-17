/*
Exercise 1: Generics
Create a generic function called printArray that takes an array as an argument and prints each element on a new line.
*/

const fillArray = <T>(value: T, elements: number): T[] => {
  return Array(elements).fill(value);
};

const printArray = <T>(arr: T[]): void => {
  arr.forEach((ele) => console.log(ele));
};

printArray(fillArray("food", 3));
printArray(fillArray(true, 3));
