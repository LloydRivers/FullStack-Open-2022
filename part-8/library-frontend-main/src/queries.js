import { gql } from "@apollo/client";

const authorDetails = gql`
  fragment authorDetails on Author {
    name
    born
  }
`;

const BOOK_ADDED = gql`
  subscription {
    bookAdded {
      title
      published
      author {
        name
      }
      genres
    }
  }
`;

const ALL_BOOKS = gql`
  query allBooks($author: String, $genre: String) {
    allBooks(author: $author, genre: $genre) {
      title
      author {
        ...authorDetails
      }
      published
      genres
    }
  }
  ${authorDetails}
`;

const ALL_AUTHORS = gql`
  query {
    allAuthors {
      ...authorDetails
      bookCount
    }
  }
  ${authorDetails}
`;

const CREATE_BOOK = gql`
  mutation createBook(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      published
      genres
    }
  }
`;

const EDIT_AUTHOR = gql`
  mutation editAuthor($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      ...authorDetails
    }
  }
  ${authorDetails}
`;

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`;

const USER = gql`
  query {
    me {
      username
      favouriteGenre
    }
  }
`;

export {
  ALL_BOOKS,
  ALL_AUTHORS,
  CREATE_BOOK,
  EDIT_AUTHOR,
  LOGIN,
  USER,
  BOOK_ADDED,
};
