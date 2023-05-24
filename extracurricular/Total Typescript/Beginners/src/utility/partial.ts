/*
Partial<Type>:

Constructs a type with all properties of the provided Type set to optional.

It allows you to create a new type by making selected properties optional, which can be useful when working with forms or optional parameters.
*/

interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;

// Usage:
const partialUser: PartialUser = {
  name: "John",
};
