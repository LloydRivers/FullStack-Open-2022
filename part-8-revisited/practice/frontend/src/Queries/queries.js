/* 
Import gql: gql is a function that allows you to write GraphQL queries using a template literal syntax, which helps with syntax highlighting, linting, and error checking.

Import useQuery: useQuery is a React hook that you can use to fetch data using a GraphQL query. It takes a GraphQL query as an argument and returns an object containing the data, loading state, and error message.
*/
import { gql } from "@apollo/client";

export const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      id
    }
  }
`;

/* 
 Define the GraphQL query
 Here, we are defining a query called FIND_PERSON using gql template literal syntax.
 The query takes in a variable called $nameToSearch of type String! and returns a Person object.
 The query is structured to call the findPerson query in the typeDefs with the nameToSearch parameter.
*/
export const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`;

export const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $street: String!
    $city: String!
    $phone: String
  ) {
    addPerson(name: $name, street: $street, city: $city, phone: $phone) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`;

export const EDIT_NUMBER = gql`
  mutation editNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone) {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`;
