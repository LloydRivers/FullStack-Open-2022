/*
Define two interfaces, Shape and Color, with appropriate properties. Create a type ColoredShape that represents an intersection of Shape and Color. Create a function printColoredShape that takes a parameter of type ColoredShape and prints its properties.
*/

interface Shape {
  name: string;
  faces: number;
  edges: number;
  vertices: number;
}
interface Color {
  color: string;
}

type ColoredShape = Shape & Color;

const printColoredShape = (colorShape: ColoredShape) => {
  console.log(`
    The ${colorShape.name} has ${colorShape.faces} faces, ${colorShape.edges} edges, ${colorShape.vertices} vertices and is ${colorShape.color}
    `);
};
