// Define a type representing a user
type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
};

// Create a partial user object with optional properties
const partialUser: Partial<User> = {
  name: "John Doe",
  age: 25,
};
/*
The Partial<T> utility type is used to create a new type where all properties of T become optional.

In the code snippet, we define a User type representing a user object with properties like id, name, email, and an optional property age.

We then use Partial<User> to create a partialUser object with optional properties. Here, name and age are specified, while other properties remain optional.

This allows us to conveniently create or update objects where not all properties are required, providing flexibility in defining and using objects.
*/
