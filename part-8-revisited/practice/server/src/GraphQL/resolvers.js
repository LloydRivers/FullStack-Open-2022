// Import Models
const Person = require("../Database/models/person");
const User = require("../Database/models/user");

// Import helpers
const { handleMutationError } = require("./helpers");
const { isFriend } = require("./isFriend");

// Import Auth
const { authenticate } = require("./auth");

// Import db helpers
const { getPersonByName } = require("./getPersonByName");

// Define the resolver functions for the schema
const resolvers = {
  Query: {
    // This line defines the resolver function for the 'personCount' query, which returns the total number of documents in the 'Person' collection.
    personCount: async () => Person.collection.countDocuments(),
    // This line defines the resolver function for the 'allPersons' query, which returns all documents in the 'Person' collection.
    allPersons: async (root, args) => {
      if (!args.phone) {
        return Person.find({});
      }
      // This line defines the resolver function for the 'findPerson' query, which searches for a document in the 'Person' collection with the given name.
      return Person.find({ phone: { $exists: args.phone === "YES" } });
    },
    me: (root, args, context) => {
      return context.currentUser;
    },
  },
  Person: {
    // This line defines the resolver function for the 'address' field of the 'Person' type. It takes the 'root' object as its argument, which contains the data for the current 'Person' object being resolved. It returns an object with the 'street' and 'city' fields of the 'Person' object.
    address: (root) => {
      return {
        street: root.street,
        city: root.city,
      };
    },
  },
  Mutation: {
    addPerson: async (root, args, { currentUser }) => {
      const person = new Person({ ...args });

      if (!currentUser) {
        handleMutationError(args, null, "not authenticated");
      }

      try {
        await person.save();
        currentUser.friends = currentUser.friends.concat(person);
        await currentUser.save();
      } catch (error) {
        handleMutationError(args, error, "Saving person failed");
      }

      return person;
    },

    editNumber: async (root, args) => {
      // This line is duplicated
      const person = await getPersonByName(args.name);
      person.phone = args.phone;

      try {
        await person.save();
      } catch (error) {
        handleMutationError(args, error, "Saving number failed");
      }

      return person;
    },
    createUser: async (root, args) => {
      console.log(args);
      const user = new User({ username: args.username });
      console.log(user);
      try {
        await user.save();
      } catch (error) {
        handleMutationError(args, error, "Creating the user failed");
      }

      return user;
    },
    addAsFriend: async (root, args, { currentUser }) => {
      // If there is no current user, throw an error
      if (!currentUser) {
        handleMutationError(args, null, "wrong credentials");
      }

      // Find the person to add as a friend by name
      const person = await getPersonByName(args.name);

      // If the person is not already a friend, add them to the current user's friend list
      if (!isFriend(currentUser, person)) {
        currentUser.friends = currentUser.friends.concat(person);
      }

      // Save the updated current user object to the database
      await currentUser.save();

      // Return the updated current user object
      return currentUser;
    },

    /*
    
When a user logs in by sending a login mutation with their username and password, the following steps happen:

The Apollo Server receives the login mutation and invokes the login resolver function.

The login resolver function calls the authenticate function with the username and password provided by the user.

The authenticate function looks up the user with the specified username in the database using User.findOne().

If the user is not found or the password is incorrect, the authenticate function throws an error with an appropriate message.

If the user is found and the password is correct, the authenticate function generates a JSON Web Token (JWT) using jwt.sign(), with the user's ID as the payload.

The authenticate function returns the JWT to the login resolver function.

The login resolver function returns an object containing the JWT to the user, with the value property containing the token string.

The user can then include this token in the Authorization header of their subsequent GraphQL requests to authenticate themselves and access protected resources.
    */
    login: async (root, args) => {
      try {
        const token = await authenticate(args.username, args.password);
        return { value: token };
      } catch (error) {
        handleMutationError(args, error, "wrong credentials");
      }
    },
  },
};

// Export the resolvers object.
module.exports = resolvers;
