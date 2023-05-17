/*
Exercise: Create a generic function called getLength that takes an array as input and returns the length of the array.
*/

const getLength = <T>(arr: T[]): number => {
  return arr.length;
};
console.log(getLength([1, 2, 3, 4, 5]));
console.log(getLength([1, 2, 3, 4, 5, 6]));
