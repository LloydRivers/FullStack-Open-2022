/*
Your task is to implement a function called updateUser that takes an existing user object and a partial user object as arguments. The function should merge the partial user object into the existing user object and return the updated user.
*/

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

function updateUser(existingUser: User, updates: Partial<User>): User {
  return { ...existingUser, ...updates };
}

// Usage example:
const existingUser: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 30,
};

const updates: Partial<User> = {
  name: "Jane Smith",
  age: 32,
};

const updatedUser = updateUser(existingUser, updates);
console.log(updatedUser);
