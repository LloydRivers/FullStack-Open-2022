/*
Memoization Approach: In this approach, we use an object memo as a memoization table to store previously computed Fibonacci numbers. Before making a recursive call, we check if the Fibonacci number for the given index n is already computed and stored in the memo. If found, we return it directly. Otherwise, we compute it recursively, store it in the memo, and return it.
*/

// Using an object as a memoization table
const memo = {};

const fibonacciMemo = (n) => {
  if (n <= 1) {
    return n;
  }

  // Check if Fibonacci number is already computed and stored in memo
  if (memo[n]) {
    return memo[n];
  }

  // Compute Fibonacci number recursively
  const fibNum = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);

  // Store the computed Fibonacci number in memo
  memo[n] = fibNum;

  return fibNum;
};

// Example usage:
console.log(fibonacciMemo(10));
