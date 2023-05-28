/*
Union types allow you to combine multiple types into one, while intersection types allow you to create a type that has all the properties of multiple types.

Here's an example to illustrate both union and intersection types:
*/

// Define two types: Person and Employee
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  position: string;
};

// Union type: Person or Employee
type PersonOrEmployee = Person | Employee;

// Intersection type: Person and Employee
type PersonAndEmployee = Person & Employee;

// Usage examples
const person: PersonOrEmployee = { name: "John Doe", age: 30 };
const employee: PersonOrEmployee = {
  company: "ACME Corp",
  position: "Developer",
};

const personAndEmployee: PersonAndEmployee = {
  name: "John Doe",
  age: 30,
  company: "ACME Corp",
  position: "Developer",
};

/*
In the code snippet above, we have defined two types, Person and Employee, representing different objects. We then use union (|) and intersection (&) operators to create new types.

Union Type: PersonOrEmployee

The PersonOrEmployee type represents a value that can be either a Person or an Employee.
This allows us to have a variable (person and employee) that can hold either a Person object or an Employee object.
Intersection Type: PersonAndEmployee

The PersonAndEmployee type represents a value that must have all the properties of both Person and Employee.
This allows us to create a variable (personAndEmployee) that can hold an object that has both the properties of a Person and an Employee.
By using union and intersection types, you can create flexible and precise type definitions to accommodate different scenarios in your code.
*/
