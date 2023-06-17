/*
Text info for BigInt copied from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
*/

const getNumberOfWays = (steps, maxJumpLength, memo = {}) => {
  /*  
  Convert steps to BigInt: BigInt values represent numeric values which are too large to be represented by the number primitive.
  */
  const stepsBigInt = BigInt(steps);

  /*
  A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.
  */
  if (stepsBigInt === 0n) {
    // base case: no steps to take, return BigInt 1
    return 1n;
  }

  if (memo[stepsBigInt]) {
    // return memoized result if available
    return memo[stepsBigInt];
  }
  // initialize combinations as BigInt
  let combinations = 0n;

  for (let i = 1n; i <= BigInt(maxJumpLength); i++) {
    if (i > stepsBigInt) {
      // exceeded target step, break out of loop
      break;
    }
    if (i === stepsBigInt) {
      // found a valid combination, use explicit BigInt addition
      combinations = combinations + 1n;
    }
    if (i < stepsBigInt) {
      combinations =
        combinations +
        // recursive call, convert stepsBigInt to number
        getNumberOfWays(Number(stepsBigInt - i), maxJumpLength, memo);
    }
  }
  // store result in memo
  memo[stepsBigInt] = combinations;

  return combinations;
};
