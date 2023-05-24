/*
Readonly<Type>:

Constructs a type with all properties of the provided Type set to readonly.

It ensures that the properties of an object cannot be modified once assigned.
 */

interface Point {
  x: number;
  y: number;
}

type ReadonlyPoint = Readonly<Point>;

// Usage:
const point: ReadonlyPoint = {
  x: 10,
  y: 20,
};

// Error: Cannot assign to 'x' because it is a read-only property
// point.x = 5;
