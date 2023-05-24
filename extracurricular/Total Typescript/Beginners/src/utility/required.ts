/*
Required<Type>:

Constructs a type with all properties of the provided Type set to required.

It ensures that all properties of a type are mandatory, even if they were originally optional.
*/

interface Config {
  url?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

type RequiredConfig = Required<Config>;

// Usage:
const requiredConfig: RequiredConfig = {
  url: "https://example.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
};
