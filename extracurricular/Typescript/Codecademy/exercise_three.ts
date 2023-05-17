// Fill in the code to correctly declare and use a generic type alias.

// Define a type alias named Stack that takes a generic type parameter O.
type Stack<O> = {
  // Declare the 'top' property, which represents the top element of the stack.
  top: O; // generic type

  // Declare the 'list' property, which represents an array of elements in the stack.
  list: O[]; // array of generic types

  // Declare the 'count' property, which represents the number of elements in the stack.
  count: number;
};

// Create a variable named 'laundry' of type Stack<string>.
let laundry: Stack<string> = {
  // Assign the 'top' property of the 'laundry' variable with the value 'pants'.
  top: "pants",

  // Assign the 'list' property of the 'laundry' variable with an array of strings.
  list: ["shirt", "pants"],

  // Assign the 'count' property of the 'laundry' variable with the value 2.
  count: 2,
};

/*
In this code snippet, we define a generic type alias Stack that represents a stack data structure. The Stack type takes a generic type parameter O which represents the type of elements in the stack. The Stack type has three properties: top, list, and count. We create a variable named laundry of type Stack<string> to represent a stack of strings. The laundry variable is initialized with values for its properties (top, list, and count).
*/
