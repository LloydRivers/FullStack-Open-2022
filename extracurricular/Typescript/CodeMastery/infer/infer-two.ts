/*
In TypeScript, the infer keyword is used within conditional types to infer or deduce the type of a generic parameter based on the provided input. It allows TypeScript to automatically determine the type based on the structure of the input.

Let's start with a simple example. Imagine we have a function called getLength that takes an array as an argument and returns the length of the array:
*/

function getLength<T>(array: T[]): number {
  return array.length;
}

/*
Now, we want to create a utility type that infers the type of the array elements. We'll call it ElementType. Here's how it looks:
*/

type ElementType<T> = T extends (infer U)[] ? U : never;

/*
To understand this, let's use an analogy. Imagine you have a box that can contain different types of objects. We want to know the type of the objects inside the box. We can use the infer keyword to deduce the type of the objects.

Now, let's apply this utility type to our getLength function. We'll create an array of numbers and an array of strings:
*/

const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "cherry"];

// To infer the element type of each array, we can use the ElementType utility type:

type NumbersElementType = ElementType<typeof numbers>; // Inferred type: number
type StringsElementType = ElementType<typeof strings>; // Inferred type: string

/*
In this case, NumbersElementType will be inferred as number because the numbers array contains numbers, and StringsElementType will be inferred as string because the strings array contains strings.

You can then use these inferred types in other parts of your code. For example, you can create functions or variables that are specific to the inferred element types.
*/
