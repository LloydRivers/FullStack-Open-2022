// Loop over an array of tuples and use destructuring to pass tuple elements as function arguments

// Data structure: Array of person tuples
let people: [string, number][] = [
  ["Alice", 25],
  ["Bob", 30],
  ["Charlie", 35],
];

// Function: greetPerson(name: string, age: number)
function greetPerson(name: string, age: number) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Loop over the people array and call greetPerson() for each person
for (let [name, age] of people) {
  greetPerson(name, age);
}

/*
  Explanation:
  - We have an array called `people` that contains person tuples.
  - Each person tuple has two elements: the first element is the name (string) and the second element is the age (number).
  - The `greetPerson()` function expects two arguments: `name` (string) and `age` (number).
  - Inside the loop, we use array destructuring `[name, age]` to assign the tuple elements to individual variables.
  - The variables `name` and `age` are then passed as arguments to the `greetPerson()` function.
  - Each iteration of the loop calls `greetPerson()` with the name and age of the current person tuple.
  
  Example:
  Let's consider an iteration of the loop to see how the function is called:
  
  - First iteration:
    - `person` is assigned the value `["Alice", 25]`.
    - Array destructuring `[name, age]` assigns the first element of the tuple to `name` ("Alice") and the second element to `age` (25).
    - The function call `greetPerson(name, age)` becomes `greetPerson("Alice", 25)`.
    - The function is called with the arguments "Alice" and 25.
  
  This process continues for each person tuple in the `people` array. The array destructuring allows us to access the individual elements of each tuple and pass them as separate arguments to the function.
  */
