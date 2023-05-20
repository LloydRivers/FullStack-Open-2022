/*
Index signatures in TypeScript allow you to define object types where the property names are not known in advance but can be determined dynamically at runtime. This is particularly useful when working with external data sources or APIs where the exact property names may vary.

To define an index signature, you use square brackets [] with a type annotation to indicate the type of the property values. Here's an example:
*/
interface MyObject {
  [key: string]: number;
}
/*
In this example, we define an interface called MyObject with an index signature. The index signature [key: string]: number indicates that the object can have properties with any string key, and the property values must be of type number.

With this index signature, you can create objects with dynamic property names, as long as the property values are numbers:
*/
const obj: MyObject = {
  apples: 5,
  oranges: 8,
  bananas: 3,
};
/*
In this case, the object obj can have properties like "apples", "oranges", "bananas", or any other string key that maps to a number value.

You can also use index signatures with other types, such as string or boolean, depending on the expected property value types.

Index signatures provide flexibility when dealing with objects where the property names are not known in advance. They allow you to define object types that can accommodate a wide range of property names, providing a more generic and adaptable approach to typing external data sources or APIs.
*/
