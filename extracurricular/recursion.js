// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in

const sumRange = (num) => {
  if (num < 1) {
    return 0;
  } else {
    return num + sumRange(num - 1);
  }
};

console.log(sumRange(5));

// Callstack
/*
First Frame = 5.
4
3
2
1
0
*/
