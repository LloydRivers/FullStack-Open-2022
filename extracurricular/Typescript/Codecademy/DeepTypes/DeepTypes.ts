/*
This code demonstrates how to work with deep object types, where properties can have nested structures. The OneSeries class is an example of using nested properties and methods to accommodate more complex features in your objects.
*/
// Define the Robot interface with the identify method
interface Robot {
  identify: (id: number) => void;
}

// Define the OneSeries class implementing the Robot interface
class OneSeries implements Robot {
  about: { general: { id: number; name: string } };

  constructor(props: { general: { id: number; name: string } }) {
    this.about = props;
  }

  // Implement the identify method from the Robot interface
  identify(id: number) {
    console.log(`beep! I'm ${id}`);
  }

  getRobotId() {
    return `ID: ${this.about.general.id}`;
  }
}
