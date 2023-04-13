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

      return filteredBooks.map((book) => ({
        title: book.title,
        author: book.author,
        published: book.published,
      }));
    },

    // Returns all the authors in the authors array, along with their book count
    allAuthors: () => {
      return authors.map((author) => ({
        name: author.name,
        born: author.born,
        id: author.id,
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
      // Find the author, handle the logic for adding a new author if not found
      let author = findAuthorByName(args.author);

      // Check if book with same title and author already exists
      const bookExists = books.find(
        (b) => b.title === args.title && b.author === author.name
      );
      if (bookExists) {
        throw new GraphQLError("Book already exists for this author", {
          extensions: {
            code: "BOOK_ALREADY_EXISTS",
            invalidArgs: {
              title: args.title,
              author: args.author,
            },
          },
        });
      }

      // Create a new book object and add it to the books array
      let book = {
        title: args.title,
        published: args.published,
        author: author.name,
        id: uuidv4(),
        genres: args.genres,
      };
      books.push(book);

      // Update bookCount for author
      author.bookCount++;
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
