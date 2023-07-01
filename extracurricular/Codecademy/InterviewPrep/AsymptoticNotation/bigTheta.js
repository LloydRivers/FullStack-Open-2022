// Function that takes an integer input N
const countIterations = (N) => {
  let count = 0; // Initialize count variable to 0

  // Loop while N is not equal to 1
  while (N !== 1) {
    count++; // Increment count
    N = N / 2; // Divide N by 2
  }

  return count; // Return the count
};

// Example usage
const input = 16;
const iterations = countIterations(input);
console.log(iterations); // Output: 4

/*
  Explanation:
  In this program, we have a loop that continues as long as N is not equal to 1. 
  In each iteration, we increment the count variable by 1 and divide N by 2.
  
  Let's see how many iterations the loop will perform based on the value of N:
  
  N        Number of Iterations
  16            0
  8             1
  4             2
  2             3
  1             4
  
  As we can see, for any input N, the loop will iterate log2(N) times. However, in asymptotic notation, we drop the constants and focus on the overall growth rate, so we would represent the runtime of this program as Θ(log N).
  */
