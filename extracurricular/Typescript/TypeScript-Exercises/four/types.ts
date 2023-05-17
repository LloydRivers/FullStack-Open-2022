export interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

export interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;
