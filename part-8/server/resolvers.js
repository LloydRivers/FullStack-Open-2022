/* In GraphQL, a resolver is a function that resolves a field in a query or mutation. It is responsible for returning the data for that field, by fetching it from a data source such as a database or an external API. Resolvers are defined on the server and are associated with a specific field in the schema. When a client makes a request to the server, the resolver is called to retrieve the data for the requested field and return it to the client. */

require("dotenv").config();

// jwt
const jwt = require("jsonwebtoken");

// Models
const Book = require("./models/Book");
const Author = require("./models/Author");
const User = require("./models/User");

const resolvers = {
  Query: {
    bookCount: async () => await Book.collection.countDocuments(),
    authorCount: async () => await Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      const { author, genre } = args;

      if (author && genre) {
        const books = await Book.find
          .populate("author")
          .where("author.name")
          .equals(author)
          .where("genres")
          .in(genre);
        return books;
      } else if (author) {
        const books = await Book.find
          .populate("author")
          .where("author.name")
          .equals(author);
        return books;
      } else if (genre) {
        console.log("coming from the frontend", genre);
        const books = await Book.find({ genres: { $in: genre } }).populate(
          "author"
        );
        console.log("books from the backend", books);
        return books;
      } else {
        const books = await Book.find({}).populate("author");
        return books;
      }
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
      console.log("args", args);
      const { currentUser } = context;
      if (!currentUser) {
        throw new AuthenticationError("not authenticated");
      }
      const authorExists = await Author.findOne({ name: author });
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
      const { currentUser } = context;
      if (!currentUser) {
        throw new AuthenticationError("not authenticated");
      }
      const author = await Author.findOne({ name: args.name });

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
      const user = await User.findOne({ username: args.username });
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
