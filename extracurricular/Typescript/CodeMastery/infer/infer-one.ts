/*
In this example, we have a generic type ExtractArrayElementType<T> that uses infer within a conditional type. It checks if T extends Array<infer U>, which represents an array type with an element type captured as U.

The ExtractArrayElementType type extracts the element type of an array if it matches the specified array type pattern. If the condition is satisfied, it captures the inferred element type U. Otherwise, it returns never.

We then define a type MyArray as an array of numbers, i.e., Array<number>.

Using ExtractArrayElementType, we declare a type ArrayElementType and assign it the inferred element type of MyArray. In this case, the inferred type will be number, as MyArray is an array of numbers.

We then create an instance of MyArray called myArray and assign it an array of numbers.

Next, we declare a variable firstElement with the type ArrayElementType and assign it the value of the first element of myArray. The inferred type of firstElement will be number since MyArray is an array of numbers.

Finally, we log the value of firstElement to the console, verifying that it correctly inferred the type and outputs the first element of the array.

This simple example demonstrates how infer can be used to extract and infer the element type of an array, enabling us to capture and utilize the type information in our TypeScript code.
*/

type ExtractArrayElementType<T> = T extends Array<infer U> ? U : never;

type MyArray = Array<number>;

type ArrayElementType = ExtractArrayElementType<MyArray>; // Inferred type: number

const myArray: MyArray = [1, 2, 3, 4, 5];
const firstElement: ArrayElementType = myArray[0]; // Inferred type: number

console.log(firstElement); // Output: 1
