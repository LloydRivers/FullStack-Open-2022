/* Steps:

1. **Understanding the game:** The first thing we need to do is understand the concept of these lottery betting games. The problem statement mentions games like "5 out of 90" and "7 out of 35." These refer to the rules of the game, where players need to choose a certain number of unique numbers from a given range. For example, "5 out of 90" means players need to choose 5 unique numbers between 1 and 90.

2. **Validating the text message:** The next step is to validate the text message received from the user. The message should contain exactly N unique numbers between 1 and M (inclusive), separated by commas or spaces. Any other character would make the bet invalid. We'll need to write code to check if the text message follows these rules.

3. **Returning the result:** If the bet is valid, we should return the chosen numbers as a list, sorted in increasing order. If the bet is invalid, we should return an appropriate indicator like "None," "null," or "nil" based on the programming language you're using.

Based on this breakdown, let's focus on step 2 first. We'll start by writing code to validate the text message and ensure it contains the correct format and range of numbers. Does that make sense so far?
*/
const validateBet = (game, text) => {
  const [n, m] = game;
  const numbers = text.split(/[ ,;]+/);
  if (numbers.length !== n) {
    return null;
  }
  const numbersArr = numbers.map(Number);
  if (numbersArr.some((num) => isNaN(num) || num < 1 || num > m)) {
    return null;
  }
  const numbersSet = new Set(numbersArr);
  if (numbersSet.size !== n) {
    return null;
  }
  return numbersArr.sort((a, b) => a - b);
};

console.log(validateBet([5, 90], "1 2 3 4 5")); // Expected: [1, 2, 3, 4, 5]
console.log(validateBet([5, 90], "5 , 3, 1   4,2")); // Expected: [1, 2, 3, 4, 5]
console.log(validateBet([5, 90], "1, 2, 3; 4, 5")); // Expected: null << not working
console.log(validateBet([5, 90], "1, 2, 3, 4")); // Expected: null
console.log(validateBet([5, 90], "1, 2, 3, 4, 95")); // Expected: null
console.log(validateBet([5, 90], "")); // Expected: null
console.log(validateBet([5, 90], "1, 2, 3 4 5 6")); // Expected: null
console.log(validateBet([5, 90], "0 1 2 3 4")); // Expected: null
console.log(validateBet([5, 90], "1 1 1 1 1")); // Expected: null
console.log(validateBet([5, 90], "1 2 3 4 5 5")); // Expected: null
console.log(validateBet([5, 90], "I 2 3 4 5")); // Expected: null
console.log(validateBet([5, 90], "1, 2, 3; 4, 5")); // Expected: null
console.log(validateBet([4, 90], "1 1 1 2 5 45")); // Expected: null
console.log(validateBet([6, 41], "5,22,18,65,32,19,27")); // Expected: null
