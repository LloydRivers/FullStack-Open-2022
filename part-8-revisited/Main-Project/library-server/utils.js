// Import data
let { authors } = require("./data");

// Import required packages
const { v4: uuidv4 } = require("uuid");

const filterBooks = (books, author, genre) => {
  if (!author && !genre) {
    return books;
  }

  return books.filter((book) => {
    if (author && genre) {
      return book.author === author && book.genres.includes(genre);
    } else if (author) {
      return book.author === author;
    } else {
      return book.genres.includes(genre);
    }
  });
};

const getArrayLength = (array) => {
  return array.length;
};

const findAuthorByName = (name) => {
  let author = authors.find((author) => author.name === name);

  if (!author) {
    author = {
      name,
      id: uuidv4(),
      bookCount: 0,
    };

    authors.push(author);
  }

  return author;
};

module.exports = { filterBooks, getArrayLength, findAuthorByName };
