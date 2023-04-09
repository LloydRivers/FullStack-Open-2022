// Import data
let { authors } = require("./data");

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
  return authors.find((author) => author.name === name);
};

module.exports = { filterBooks, getArrayLength, findAuthorByName };
