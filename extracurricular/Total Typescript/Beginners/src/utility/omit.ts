/*
Omit<Type, Keys>:

Constructs a type by excluding the specified properties Keys from the provided Type.

It allows you to create a new type by omitting specific properties from an existing type.
*/

interface Car {
  make: string;
  model: string;
  year: number;
  color: string;
}

type CarSummary = Omit<Car, "color">;

const carSummary: CarSummary = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};
