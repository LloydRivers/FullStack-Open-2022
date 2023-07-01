/*
Dynamic Programming (Bottom-up) Approach: In this approach, we calculate Fibonacci numbers iteratively from the bottom up. We start with the base cases (Fibonacci(0) and Fibonacci(1)), store them in an array fibArray, and then calculate subsequent Fibonacci numbers by summing the previous two numbers. Finally, we return the Fibonacci number at index n from the array.

Both approaches are more efficient than the naive recursive approach since they avoid redundant computations. The Memoization approach stores computed Fibonacci numbers in a memoization table, while the Dynamic Programming approach calculates Fibonacci numbers iteratively from the bottom up.

The Dynamic Programming approach is more efficient than the Memoization approach since it avoids the overhead of recursive calls and the need to store all the Fibonacci numbers in the memoization table. However, the Memoization approach is more intuitive and easier to implement than the Dynamic Programming approach.
*/

const fibonacciDP = (n) => {
  if (n <= 1) {
    return n;
  }

  // Create an array to store Fibonacci numbers iteratively
  const fibArray = [0, 1];

  // Calculate Fibonacci numbers bottom-up
  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray[n];
};

// Example usage:
console.log(fibonacciDP(10));
