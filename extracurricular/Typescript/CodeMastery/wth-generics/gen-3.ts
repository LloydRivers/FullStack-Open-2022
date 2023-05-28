/*
In this example, the filterArray function takes an array of type T and a predicate function as arguments. The predicate function (item: T) => boolean defines a function that takes an item of type T and returns a boolean value indicating whether the item should be included in the filtered array.

We then demonstrate the usage of the filterArray function by filtering an array of numbers using the isEven predicate function. The resulting filteredNumbers array will contain only the even numbers from the original array.
*/

export function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];

// Predicate function to filter even numbers
const isEven = (num: number) => num % 2 === 0;

const filteredNumbers = filterArray(numbers, isEven);
console.log(filteredNumbers); // Output: [2, 4, 6]

/*
The syntax (item: T) => boolean represents a function type in TypeScript. Let's break it down:

(item: T) is the parameter list of the function. Here, item is the name of the parameter, and T is the type of the parameter. It's a generic type parameter that represents the type of items in the array.
=> indicates the function's return type. In this case, it's boolean, meaning the function returns a boolean value.

So, predicate: (item: T) => boolean is stating that the predicate argument of the filterArray function is expected to be a function that takes an argument of type T (representing the items in the array) and returns a boolean value.

This function type allows you to pass different predicates to the filterArray function, depending on the desired filtering logic for the array.
*/
