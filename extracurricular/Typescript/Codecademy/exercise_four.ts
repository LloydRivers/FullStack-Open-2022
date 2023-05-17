// Fill in the code to annotate the property types for the petProfile object.

enum DogBreed {
  BullDog = "Bull Dog",
  Poodle = "Poodle",
  Beagle = "Beagle",
}

enum Gender {
  Male = "MALE",
  Female = "FEMALE",
}

let petProfile: {
  breed: DogBreed;
  age: number;
  gender: Gender;
};

petProfile = { breed: DogBreed.Poodle, age: 3, gender: Gender.Female };
