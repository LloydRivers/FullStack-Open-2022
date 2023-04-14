const { gql } = require("apollo-server");

// Define the GraphQL schema using SDL (Schema Definition Language)
const typeDefs = gql`
  type User {
    username: String!
    friends: [Person!]!
    id: ID!
  }

  type Token {
    value: String!
  }

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
    me: User
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

  type Mutation {
    createUser(username: String!): User
    login(username: String!, password: String!): Token
    addAsFriend(name: String!): User
  }

  enum YesNo {
    YES
    NO
  }
`;

module.exports = typeDefs;
