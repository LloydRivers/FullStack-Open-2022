// Import data
let { authors, books } = require("./data");

// Import utils
const { filterBooks, getArrayLength, findAuthorByName } = require("./utils");

// Import required packages
const { GraphQLError } = require("graphql");
const { v4: uuidv4 } = require("uuid");

// Define resolvers object
const resolvers = {
  // Resolver for Query type
  Query: {
    // Returns the length of the books array
    bookCount: () => getArrayLength(books),

    // Returns the length of the authors array
    authorCount: () => getArrayLength(authors),

    // Returns all the books in the books array
    allBooks: (root, args) => {
      const { author, genre } = args;
      const filteredBooks = filterBooks(books, author, genre);

      return filteredBooks;
    },

    // Returns all the authors in the authors array, along with their book count
    allAuthors: () => {
      return authors.map((author) => ({
        name: author.name,
        bookCount: books.filter((book) => book.author === author.name).length,
      }));
    },
  },

  // Resolver for Author type
  Author: {
    // Returns the number of books written by the author
    bookCount: (author) =>
      books.reduce(
        (count, book) => (book.author === author.name ? count + 1 : count),
        0
      ),
  },
  // Resolver for Book type
  Book: {
    // Returns the author object for the given book
    author: (root) => {
      const author = findAuthorByName(root.author);
      return author ? author.name : null;
    },
  },
  Mutation: {
    addBook: (root, args) => {
      // Find the author
      let author = findAuthorByName(args.author);
      // If author is not found (returns undefined), create a new author object
      if (!author) {
        author = {
          name: args.author,
          id: uuidv4(),
          bookCount: 0,
        };
        // Push the new author to the authors array
        authors.push(author);
      }

      // Create a new book object and add it to the books array
      let book = {
        title: args.title,
        published: args.published,
        author: args.author,
        id: uuidv4(),
        genres: args.genres,
      };
      books.push(book);

      // Create a new object with the updated author's book count
      const updatedAuthor = {
        ...author, // Spread the existing author's properties
        bookCount: author.bookCount + 1, // Add 1 to the book count
      };

      // Update the authors array with the updated author object
      authors = authors.map((a) =>
        a.id === updatedAuthor.id ? updatedAuthor : a
      );

      // Return the newly created book object
      return book;
    },

    editAuthor: (root, args) => {
      let author = findAuthorByName(args.name);

      if (!author) {
        return null;
      }

      const updatedAuthor = { ...author, born: args.setBornTo };

      authors = authors.map((author) =>
        author.name === args.name ? updatedAuthor : author
      );
      return updatedAuthor;
    },
  },
};

// Export resolvers object
module.exports = resolvers;
