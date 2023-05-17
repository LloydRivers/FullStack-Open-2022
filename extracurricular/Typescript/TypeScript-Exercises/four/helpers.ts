import { Person, Admin, User } from "./types";

// Example code comment
// 'person is User' is our type predicate in this example. A predicate takes the form 'parameterName is Type',
// where 'parameterName' must be the name of a parameter from the current function signature.
// Any time 'isUser' is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible.

// Type predicate to check if a person is an Admin
export function isAdmin(person: Person | Admin): person is Admin {
  return (person as Admin).role !== undefined;
}

// Type predicate to check if a person is a User
export function isUser(person: Person | User): person is User {
  return (person as User).occupation !== undefined;
}
