/*
Interfaces and Classes
The interface keyword in TypeScript is especially good for adding types to a class. Since interface is constrained to typed objects and using class is a way to program with objects, interface and class are a great match.

TypeScript gives us the ability to apply a type to an object/class with the implements keyword, like this:
*/

// Define the Robot interface with a single method called identify
interface Robot {
  identify: (id: number) => void;
}

// Create a class called OneSeries that implements the Robot interface
class OneSeries implements Robot {
  // Implement the identify method from the Robot interface
  identify(id: number) {
    // Print a message with the provided id, formatted to two decimal places
    console.log(`beep! I'm ${id.toFixed(2)}.`);
  }

  // Define an additional method called answerQuestion
  answerQuestion() {
    // Print a fixed response
    console.log("42!");
  }
}
/*
Please note that TypeScript uses the interface keyword to define contracts for objects. In this case, the Robot interface specifies that any object implementing it must have a method called identify that takes a number as an argument and returns void (no return value).

The OneSeries class implements the Robot interface, which means it must provide an implementation for the identify method. Additionally, it has an extra method called answerQuestion that is not part of the Robot interface.
*/
