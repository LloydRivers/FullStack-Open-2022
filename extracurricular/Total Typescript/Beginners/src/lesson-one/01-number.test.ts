import { addTwoNumbers } from "./01-number.problem";

// Test case: Should add the two numbers together
test("Should add the two numbers together", () => {
  // Test the addTwoNumbers function with input values 2 and 4
  // and expect the result to be 6
  expect(addTwoNumbers(2, 4)).toEqual(6);

  // Test the addTwoNumbers function with input values 10 and 10
  // and expect the result to be 20
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
