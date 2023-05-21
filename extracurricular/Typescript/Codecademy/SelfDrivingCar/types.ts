export interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

export interface AutonomousCarProps {
  isRunning: boolean;
  steeringControl: Steering;
}

export interface Events {
  [event: string]: boolean;
}

export interface Control {
  execute: (command: string) => void;
}
export interface Steering extends Control {
  turn: (direction: string) => void;
}
