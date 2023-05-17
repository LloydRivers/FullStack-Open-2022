/*
Please provide type annotations for the variables theFamily, someFamily, aFamily, and anotherFamily in the code editor. Where appropriate, use the predefined type aliases Human, Dog, and the generic type Family<T>.
*/

type Human = { name: string; job: string };
type Dog = { name: string; tailWagSpeed: number };

type Family<T> = {
  parents: [T, T]; // The parents are an array of two elements of type T
  mate: T; // The mate is of type T
  children: T[]; // The children are an array of elements of type T
};

// Provide type annotations for the variables below:

let theFamily: Family<number> = {
  parents: [3, 4], // The parents are numbers
  mate: 9, // The mate is a number
  children: [5, 30, 121], // The children are numbers
};

let someFamily: Family<boolean> = {
  parents: [true, true], // The parents are booleans
  mate: false, // The mate is a boolean
  children: [false, false, true, true], // The children are booleans
};

let aFamily: Family<Human> = {
  parents: [
    { name: "Mom", job: "software engineer" },
    { name: "Dad", job: "coding engineer" },
  ], // The parents are objects of type Human
  mate: { name: "Matesky", job: "engineering coder" }, // The mate is an object of type Human
  children: [{ name: "Babesky", job: "none" }], // The children are objects of type Human
};

let anotherFamily: Family<Dog> = {
  parents: [
    { name: "Momo", tailWagSpeed: 3 },
    { name: "Dado", tailWagSpeed: 100 },
  ], // The parents are objects of type Dog
  mate: { name: "Cheems", tailWagSpeed: 7 }, // The mate is an object of type Dog
  children: [
    { name: "Puppin", tailWagSpeed: 0.001 },
    { name: "Puppenaut", tailWagSpeed: 0.0001 },
    { name: "Puppenator", tailWagSpeed: 0.01 },
  ], // The children are objects of type Dog
};
