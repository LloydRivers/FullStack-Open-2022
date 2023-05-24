const coerceAmount = (amount: number | { amount: number }) => {
  // Check if amount is already a number
  if (typeof amount === "number") {
    return amount;
  }
  // Check if amount is an object with 'amount' property
  else if (typeof amount === "object" && "amount" in amount) {
    // Destructure the 'amount' property from the object
    const { amount: objectAmount } = amount;
    // Return the extracted 'amount' value
    return objectAmount;
  }
};

it("Should return the amount when passed an object", () => {
  // Test case: When an object with 'amount' property is passed
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  // Test case: When a number is passed
  expect(coerceAmount(20)).toEqual(20);
});
