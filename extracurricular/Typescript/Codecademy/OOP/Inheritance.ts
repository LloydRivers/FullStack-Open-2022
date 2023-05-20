/*

Inheritance is a fundamental concept in OOP that allows a class (derived class or subclass) to inherit properties and methods from another class (base class or superclass). The derived class can extend the functionality of the base class by adding its own properties and methods or overriding the inherited ones. This promotes code reuse, reduces redundancy, and establishes a hierarchical relationship between classes. To implement inheritance in TypeScript, you can use the extends keyword to define the base class that the derived class extends.
*/

class Animal {
  protected name: string; // Protected property accessible within the class and its subclasses

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  private breed: string; // Private property specific to the Dog class

  constructor(name: string, breed: string) {
    super(name); // Call the base class constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} (a ${this.breed} dog) is barking!`);
  }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.move(10); // Output: Buddy moved 10 meters.
myDog.bark(); // Output: Buddy (a Labrador dog) is barking!

/*
In this example, we have a base class Animal and a derived class Dog that inherits from Animal:

The Animal class has a protected property name and a move method. The move method displays a message indicating the distance the animal moved.

The Dog class extends Animal and introduces a private property breed specific to the Dog class. It also has a bark method to display a message indicating the dog's name, breed, and that it is barking.

The Dog class calls the super keyword within its constructor to invoke the base class constructor and pass the name parameter.

We create an instance of the Dog class, myDog, with a name "Buddy" and a breed "Labrador". We can call both the inherited method move from the Animal class and the bark method specific to the Dog class on the myDog instance.

This example demonstrates how inheritance allows the Dog class to inherit properties and methods from the Animal base class, and also add its own specific behavior. By extending the base class, the derived class benefits from code reuse and can specialize its functionality according to its specific needs.
*/
