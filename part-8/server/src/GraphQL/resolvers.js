/* In GraphQL, a resolver is a function that resolves a field in a query or mutation. It is responsible for returning the data for that field, by fetching it from a data source such as a database or an external API. Resolvers are defined on the server and are associated with a specific field in the schema. When a client makes a request to the server, the resolver is called to retrieve the data for the requested field and return it to the client. */

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
        console.log("foundAuthor", foundAuthor);

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
        console.log("args.genre", args.genre);
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
      console.log(
        "Come back and check this later when we are debugging: authorExists",
        authorExists
      );
      /* If the author does not exist, create and save the author to the database */
      console.log(authorExists);
      if (!authorExists) {
        const newAuthor = new Author({ name: author });
        try {
          await newAuthor.save();
          if (newAuthor) {
            const book = new Book({
              title,
              published,
              author: newAuthor._id,
              genres,
            });
            await book.save();
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
          await book.save();
          return book;
        } catch ({ message }) {
          throw new UserInputError(message, {
            invalidArgs: args,
          });
        }
      }
    },

    editAuthor: async (root, args, context) => {
      console.log("args", args);
      console.log("context", context);
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
      console.log("user", user);
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
};

module.exports = resolvers;
