/*

Polymorphism is the ability of objects to take on different forms or behaviors based on the context in which they are used. It allows you to treat objects of different classes that share a common base class or interface in a uniform manner. Polymorphism enables code flexibility and extensibility. In TypeScript, you can achieve polymorphism by using inheritance and interfaces. By defining a common interface or base class, you can create an array or collection of objects that can be accessed and manipulated uniformly, even though they have different specific implementations.
*/

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("The dog barks!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("The cat meows!");
  }
}

// Polymorphism in action
const animal1: Animal = new Animal("Animal");
const animal2: Animal = new Dog("Buddy");
const animal3: Animal = new Cat("Whiskers");

animal1.makeSound(); // Output: The animal makes a sound.
animal2.makeSound(); // Output: The dog barks!
animal3.makeSound(); // Output: The cat meows!

/*
In this example, we have a base class Animal and two derived classes, Dog and Cat, which inherit from Animal:

The Animal class has a name property and a makeSound method that displays a generic message indicating that the animal makes a sound.

The Dog class extends Animal and overrides the makeSound method with a specific message that the dog barks.

The Cat class also extends Animal and overrides the makeSound method with a specific message that the cat meows.

We then create three instances: animal1 of type Animal, animal2 of type Dog, and animal3 of type Cat. Even though all three instances are of type Animal, they can exhibit different behavior when the makeSound method is called.

This is an example of polymorphism, where objects of different classes that share a common base class can be treated uniformly through their base class reference. The appropriate implementation of the overridden makeSound method is called based on the actual type of the object at runtime. This allows for flexibility and extensibility in handling objects of different types while treating them as instances of a common base class.
*/
