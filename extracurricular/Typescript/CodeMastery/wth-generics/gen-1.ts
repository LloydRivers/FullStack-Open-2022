// A simple generic function that takes an array of values and returns the first element
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const numbers = [1, 2, 3, 4, 5];
// inferred type: number
const firstNumber = getFirstElement(numbers);

const names = ["John", "Jane", "Alice"];
// inferred type: string
const firstName = getFirstElement(names);

// Output: 1
console.log(firstNumber);

// Output: "John"
console.log(firstName);

/*
In this example, T is a generic type parameter that represents the type of elements in the array. The function getFirstElement can work with arrays of different types (number[], string[], etc.) thanks to the generic type parameter. The inferred types of firstNumber and firstName correspond to the type of the elements in the respective arrays.
*/
