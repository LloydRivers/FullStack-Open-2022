const mongoose = require("mongoose");

const validate_the_number = [
  {
    validator: (number) => {
      if (number.length < 8) {
        return false;
      } else if (
        (number[2] === "-" || number[3] === "-") &&
        number.length > 8
      ) {
        return true;
      }
      return false;
    },
    message: (props) => `${props.value} is not a valid phone number!`,
  },
  {
    validator: (value) => {
      return /^\d{2,3}-\d+$/.test(value);
    },
    message: (props) => `${props.value} is not a valid phone number!`,
  },
];

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  number: {
    type: String,
    required: true,
    validate: validate_the_number,
  },
});
personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
