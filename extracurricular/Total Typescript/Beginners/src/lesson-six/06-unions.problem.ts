/*
I asked chatGPT about using enums and unions for this example. Here is the reply:

Both enums and unions can be used in this scenario, and the choice between them depends on the specific requirements and use case.

Enums are a good choice when you have a fixed set of discrete values that a property can take. They provide a convenient way to define and work with a predefined set of values. Enums are especially useful when you want to associate meaningful names with specific numeric or string values.

Unions, on the other hand, allow you to define a property that can accept multiple different types or values. With a union type, you can specify that a property can have one of several possible types or values.

In the example you provided, using a union type for the role property can be a valid approach. Here's an updated code using a union type:
*/

type Role = "admin" | "user" | "super-admin";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  // Union type using string literals
  role: Role;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // Assign a valid role value
  role: "user",
};

/*
In this case, the Role type is defined as a union of string literals "admin", "user", and "super-admin". The role property in the User interface can accept any of these three string values.

Using a union type provides flexibility in case you need to extend or modify the set of possible roles in the future.

Both enums and unions have their own advantages and can be used effectively depending on the specific requirements and design choices of your application. It's important to choose the approach that aligns best with your needs and promotes code clarity and maintainability.
*/
