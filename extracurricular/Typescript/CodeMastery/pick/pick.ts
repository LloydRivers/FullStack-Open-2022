// Define a type representing a car
type Car = {
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

// Select specific properties from the Car type
type CarSummary = Pick<Car, "brand" | "model" | "year">;

// Create a car summary object
const carSummary: CarSummary = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

/*
The Pick<T, K> utility type is used to create a new type that includes only the selected properties from T.

In the code snippet, we define a Car type representing a car object with properties like brand, model, year, color, and price.

We then use Pick<Car, 'brand' | 'model' | 'year'> to create a CarSummary type that only includes the brand, model, and year properties from Car.

Finally, we create a carSummary object using the CarSummary type, specifying values for the selected properties.
This allows us to extract a subset of properties from an object and create a more concise representation when needed.
*/
