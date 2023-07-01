/*
In this updated code, we calculate the length by subtracting 1 from the limit and then dividing it by integer. By using Math.floor(), we ensure that any decimal part is discarded. Adding 1 ensures that the limit itself is included if it is a multiple.
*/

const findMultiples = (integer, limit) => {
  /*
  Eplanation:
  1. Create a variable called length and assign it to the result of dividing limit by integer.
  Test case: console.log(findMultiples(5, 7)); // [5]
  Length after flooring looks like this 1.4 -> 1

  2. Create an array of length length (which is 1 in this test case) and fill it with undefined values.
  
  3. Use Array.from() to create an array of integers from 1 to length.
  Array.from({ length: 1 }, (_, index) => index + 1); // [1]

  4. Multiply each integer by integer to get the multiples.
  Array.from({ length: 1 }, (_, index) => (index + 1) * integer); // [5]

  */
  const length = Math.floor(limit / integer);
  return Array.from({ length }, (_, index) => (index + 1) * integer);
};

console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]
console.log(findMultiples(1, 2)); // [1, 2]
console.log(findMultiples(5, 7)); // [5]
console.log(findMultiples(4, 27)); // [4, 8, 12, 16, 20, 24]
console.log(findMultiples(11, 54)); // [11, 22, 33, 44]
