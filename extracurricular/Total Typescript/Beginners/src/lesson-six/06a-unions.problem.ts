enum Role {
  admin,
  user,
  // Enum values with hyphens need to be quoted
  "super-admin",
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  // Update the type to Role
  role: Role;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // Assign a valid Role enum value
  role: Role.user,
};
