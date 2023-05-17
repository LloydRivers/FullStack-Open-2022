/*
Write a generic function called reverseArray that takes an array as input and returns a new array with the elements in reverse order. The input array can contain elements of any type. The returned array should have the same element type as the input array.
*/

const reverseArray = <T>(arr: T[]): T[] => {
  return arr.reverse();
};

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["1", "2", "3", "4"]));
