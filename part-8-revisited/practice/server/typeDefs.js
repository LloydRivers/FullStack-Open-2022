const { gql } = require("apollo-server");

// Define the GraphQL schema using SDL (Schema Definition Language)
const typeDefs = gql`
  type Address {
    street: String!
    city: String!
  }

  type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }

  type Query {
    personCount: Int!
    findPerson(name: String!): Person
    allPersons(phone: YesNo): [Person!]!
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person

    editNumber(name: String!, phone: String!): Person
  }

  enum YesNo {
    YES
    NO
  }
`;

module.exports = typeDefs;
