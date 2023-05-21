import { AutonomousCar, AutonomousCarProps, Events, Steering } from "./types";
import { getObstacleEvents } from "./computer-vision";

class Car implements AutonomousCar {
  isRunning;
  steeringControl;
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }
  respond(events: Events) {
    if (!this.isRunning) {
      return console.log("the car is off.");
    }
    Object.keys(events).forEach((eventKey) => {
      if (events[eventKey]) {
        return;
      }
      if (eventKey === "ObstacleLeft") {
        this.steeringControl.turn("right");
      }
      if (eventKey === "ObstacleRight") {
        this.steeringControl.turn("left");
      }
    });
  }
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }
  turn(direction: string) {
    this.execute(`Turn ${direction}`);
  }
}

const steering = new SteeringControl();
const autonomousCar = new Car({
  isRunning: true,
  steeringControl: steering,
});
autonomousCar.respond(getObstacleEvents());
