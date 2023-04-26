/* In GraphQL, a resolver is a function that resolves a field in a query or mutation. It is responsible for returning the data for that field, by fetching it from a data source such as a database or an external API. Resolvers are defined on the server and are associated with a specific field in the schema. When a client makes a request to the server, the resolver is called to retrieve the data for the requested field and return it to the client. */

const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

const { AuthenticationError, UserInputError } = require("apollo-server");

require("dotenv").config();

// jwt
const jwt = require("jsonwebtoken");

// Models
const Book = require("../Models/Book");
const Author = require("../Models/Author");
const User = require("../Models/User");

// Helper functions
const { find_One } = require("../Database/helpers/find_One");

const resolvers = {
  Query: {
    bookCount: async () => await Book.collection.countDocuments(),
    authorCount: async () => await Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      if (args.author) {
        const foundAuthor = await find_One(Author, "name", args.author);

        if (foundAuthor) {
          if (args.genre) {
            return await Book.find({
              author: foundAuthor.id,
              genres: { $in: [args.genre] },
            }).populate("author");
          }
          return await Book.find({ author: foundAuthor.id }).populate("author");
        }
        return null;
      }

      if (args.genre) {
        return Book.find({ genres: { $in: [args.genre] } }).populate("author");
      }

      return Book.find({}).populate("author");
    },
    allAuthors: async () => await Author.find({}),
    me: (root, args, context) => {
      return context.currentUser;
    },
  },
  // The response should include only books written by that author.
  // param author and param genre
  // Modify the query allBooks so that a user can give an optional parameter genre. The response should include only books of that genre.
  Author: {
    bookCount: async (root) => {
      const booksByAuthor = await Book.find({ author: root._id });
      return booksByAuthor.length;
    },
  },

  Mutation: {
    addBook: async (root, args, context) => {
      const { title, author, published, genres } = args;
      const { currentUser } = context;
      if (!currentUser) {
        throw new AuthenticationError("not authenticated");
      }

      const authorExists = await find_One(Author, "name", author);

      if (!authorExists) {
        const newAuthor = new Author({ name: author });
        try {
          const savedAuthor = await newAuthor.save();
          if (savedAuthor) {
            const book = new Book({
              title,
              published,
              author: savedAuthor._id,
              genres,
            });
            await book.save();
            // I think this line is where the bug is. When we pass the "book" it is the book right above this line which does not contain any author information.
            pubsub.publish("BOOK_ADDED", {
              bookAdded: { ...book.toObject(), author: authorExists },
            });

            return book;
          }
        } catch ({ message }) {
          throw new UserInputError(message, {
            invalidArgs: args,
          });
        }
      } else {
        const book = new Book({
          title,
          published,
          author: authorExists._id,
          genres,
        });
        try {
          // We save the new book to the database
          await book.save();
          // We publish the new book to the subscription
          pubsub.publish("BOOK_ADDED", {
            bookAdded: { ...book.toObject(), author: savedAuthor },
          });

          return book;
        } catch ({ message }) {
          throw new UserInputError(message, {
            invalidArgs: args,
          });
        }
      }
    },

    editAuthor: async (root, args, context) => {
      const { currentUser } = context;
      if (!currentUser) {
        throw new AuthenticationError("not authenticated");
      }
      const author = await find_One(Author, "name", args.name);

      if (!author) {
        return null;
      }
      const updatedAuthor = await Author.findOneAndUpdate(
        { name: args.name },
        { born: args.setBornTo },
        { new: true }
      );

      return updatedAuthor;
    },
    createUser: async (root, args) => {
      const user = new User({ ...args });
      try {
        await user.save();
      } catch ({ message }) {
        throw new UserInputError(message, {
          invalidArgs: args,
        });
      }
      return user;
    },
    login: async (root, args) => {
      const user = await find_One(User, "username", args.username);
      if (!user || args.password !== "secret") {
        throw new UserInputError("wrong credentials");
      }
      const userForToken = {
        username: user.username,
        id: user._id,
      };
      return { value: jwt.sign(userForToken, process.env.JWT_SECRET) };
    },
  },
  Subscription: {
    bookAdded: {
      subscribe: async () => await pubsub.asyncIterator(["BOOK_ADDED"]),
      resolve: (payload) => {
        console.log("We are in the resolve function");
        console.log("payload:", payload);
        console.log("Book added:", payload.bookAdded);
        return payload.bookAdded;
      },
    },
  },
};

module.exports = resolvers;
