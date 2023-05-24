interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */

/*
By explicitly specifying the type for variables, you enable TypeScript to catch potential errors closer to the point of declaration, allowing for more accurate and early feedback.
*/
export const defaultUser: User = {
  id: 1,
  firstName: "Jimmy",
  lastName: "Riddle",
  isAdmin: false,
};

/**
 * Function to get the user ID.
 * @param user The user object of type User.
 * @returns The ID of the user.
 */
export const getUserId = (user: User) => {
  return user.id;
};
