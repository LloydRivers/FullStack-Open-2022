/*
The infer keyword in TypeScript is used within conditional types to infer or extract a type from another type. It is typically used in the context of the extends keyword to capture and assign a type to a type parameter.

Here's an example to illustrate the usage of the infer keyword:
*/

type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type MyFunction = () => string;

type ReturnTypeOfMyFunction = ExtractReturnType<MyFunction>; // Resolves to string

/*
In this example, we have a conditional type ExtractReturnType<T> that takes a generic type parameter T. The condition T extends (...args: any[]) => infer R checks if T is a function type. If the condition is true, the infer R part captures the return type of the function into the type parameter R. If the condition is false, it resolves to never.

So, when we use ExtractReturnType<MyFunction>, since MyFunction is a function type that returns string, the conditional type infers the return type as string.

The infer keyword is powerful in combination with conditional types as it allows you to extract and assign types within type definitions, enabling more advanced type manipulations and inference in TypeScript.
*/
