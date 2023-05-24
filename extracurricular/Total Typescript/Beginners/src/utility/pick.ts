/*
Pick<Type, Keys>:

Constructs a type by selecting the specified properties Keys from the provided Type.

It allows you to create a new type by picking only the desired properties from an existing type.
*/

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

type UserSummary = Pick<User, "id" | "name">;

// Usage:
const userSummary: UserSummary = {
  id: "1",
  name: "John",
};
