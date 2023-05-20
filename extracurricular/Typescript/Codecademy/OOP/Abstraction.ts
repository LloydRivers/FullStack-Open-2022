/*

Abstraction is a concept that focuses on defining the essential features and behavior of an object while hiding the unnecessary details. It allows you to create abstract classes or interfaces that provide a blueprint for derived classes. Abstract classes cannot be instantiated directly but can be inherited by other classes. They serve as a foundation for creating more specific classes and enforce the implementation of certain methods or properties. Interfaces, on the other hand, define a contract that classes must adhere to, specifying the required methods or properties. Abstraction helps in building modular and maintainable code by providing a clear separation between the interface and the implementation.
*/

abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void; // Abstract method, no implementation in the base class
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks!`); // Implementation of the abstract method
  }
}

class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} meows!`); // Implementation of the abstract method
  }
}

// Abstraction in action
const dog: Animal = new Dog("Buddy");
const cat: Animal = new Cat("Whiskers");

dog.makeSound(); // Output: Buddy barks!
cat.makeSound(); // Output: Whiskers meows!

/*
In this example, we have an abstract class Animal that demonstrates abstraction:

The Animal class has a protected name property and an abstract method makeSound(). The abstract method has no implementation in the base class; it only provides a declaration.

The Dog and Cat classes extend the Animal class and provide their own implementations of the makeSound method.

We create instances of Dog and Cat and assign them to variables of type Animal. We can then call the makeSound method on these instances.

Abstraction allows us to define a common interface (makeSound method) in the abstract base class Animal without providing an implementation. Subclasses (Dog and Cat) are responsible for implementing this abstract method according to their specific behavior.

By using abstraction, we create a blueprint or contract for derived classes to follow. It allows us to focus on the essential characteristics and behavior of objects (in this case, animals) while hiding the implementation details specific to each subclass. This promotes modularity, code reusability, and a clearer separation between the interface and implementation.
*/
