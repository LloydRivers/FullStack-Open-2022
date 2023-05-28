// Define a type representing a form input
type FormInput = {
  name?: string;
  email?: string;
  password?: string;
};

// Require all properties of the FormInput type
const requiredInput: Required<FormInput> = {
  name: "John Doe",
  email: "john@example.com",
  password: "password123",
};
/*
The Required<T> utility type is used to create a new type where all properties of T become required.

In the code snippet, we define a FormInput type representing optional properties like name, email, and password.

We then use Required<FormInput> to create a requiredInput object where all properties of FormInput are now required.

This ensures that the requiredInput object includes values for all properties, removing the optionality.

This is useful when you want to enforce the presence of certain properties in an object.
*/
