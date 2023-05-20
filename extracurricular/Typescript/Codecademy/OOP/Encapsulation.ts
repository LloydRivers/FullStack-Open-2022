/*

Encapsulation is the principle of bundling data and methods that operate on that data into a single unit, typically referred to as a class. It hides the internal implementation details and exposes only the necessary information through a public interface. Encapsulation promotes information hiding and data integrity by preventing direct access to internal data from outside the class. This allows for better control over the state of objects and facilitates maintenance and changes to the internal implementation without affecting other parts of the code. In TypeScript, you can achieve encapsulation by using access modifiers such as public, private, and protected to control the visibility and accessibility of class members.
*/

class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  public celebrateBirthday() {
    this.age++;
    console.log(`Happy birthday! ${this.name} is now ${this.age} years old.`);
  }
}

const person = new Person("Alice", 25);
console.log(person.getInfo()); // Output: Name: Alice, Age: 25
person.celebrateBirthday(); // Output: Happy birthday! Alice is now 26 years old.

/*
In this example, we have a Person class that demonstrates encapsulation:

The name and age properties are marked as private, meaning they can only be accessed within the class itself.

The constructor initializes the private properties name and age.

The getInfo method is marked as public, allowing it to be accessed from outside the class. It returns a string representation of the person's name and age.

The celebrateBirthday method is also marked as public. It increments the age by one and logs a birthday message.

By encapsulating the name and age properties as private, we restrict direct access to them from outside the class. Instead, we provide public methods (getInfo and celebrateBirthday) to interact with and manipulate the private data.

This allows us to control how the private properties are accessed and modified, ensuring data integrity and encapsulating the internal state of the Person object. Other parts of the code can use the public methods to interact with the object, while the implementation details are hidden and protected within the class.
*/
