/*
Exercise 1: Convert Union Type to Object Type
Given a union type Color with the values 'red' | 'green' | 'blue', create an object type ColorMap where each color is a key and the associated value is the string representation of the color.

*/

type Color = "red" | "green" | "blue";

type ColorMap = {
  [key in Color]: string;
};
