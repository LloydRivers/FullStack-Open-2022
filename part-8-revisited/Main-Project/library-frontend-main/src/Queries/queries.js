import { gql } from "@apollo/client";
export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
      bookCount
      id
    }
  }
`;

export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author
      published
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(
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
      author
      published
      genres
    }
  }
`;

/* Here is the query UPDATE_AUTHOR_BIRTHYEAR 


It is expecting two variables: name and setBornTo.

in the mutation we have this 
const updatedAuthor = { ...author, born: args.setBornTo };

we call the function using the custom hook
 const { values, handleChange, handleSubmit } = useForm(editAuthor, {
    name: "",
    born: "",
  });

  I am wondering if we need to use the same name for the variables in the mutation and the custom hook.
*/
export const UPDATE_AUTHOR_BIRTHYEAR = gql`
  mutation editAuthor($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
    }
  }
`;
