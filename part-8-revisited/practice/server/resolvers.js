// Import the data
let { persons } = require("./data");

// Import packages
const { GraphQLError } = require("graphql");
const { v4: uuidv4 } = require("uuid");

// Define the resolver functions for the schema
const resolvers = {
  Query: {
    // Return the number of persons in the "persons" array
    personCount: () => persons.length,
    // Return all the persons in the "persons" array
    allPersons: (root, args) => {
      if (!args.phone) {
        return persons;
      }
      const byPhone = (person) =>
        args.phone === "YES" ? person.phone : !person.phone;
      return persons.filter(byPhone);
    },
    // Return the person with the specified name (or null if not found)
    findPerson: (root, args) => persons.find((p) => p.name === args.name),
  },
  Person: {
    address: ({ street, city }) => {
      return {
        street,
        city,
      };
    },
  },
  Mutation: {
    createPerson: (root, args) => {
      if (persons.find((p) => p.name === args.name)) {
        throw new GraphQLError("Name must be unique", {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: args.name,
          },
        });
      }
      let person = { ...args, id: uuidv4() };
      persons = persons.concat(person);
      return person;
    },

    editNumber: (root, args) => {
      const person = persons.find((p) => p.name === args.name);
      if (!person) {
        return null;
      }

      const updatedPerson = { ...person, phone: args.phone };
      persons = persons.map((p) => (p.name === args.name ? updatedPerson : p));
      return updatedPerson;
    },
  },
};

module.exports = resolvers;
