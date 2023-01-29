require("dotenv").config();

// Express
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// jwt
const jwt = require("jsonwebtoken");
// Body Parser and http
const bodyParser = require("body-parser");
const http = require("http");

// Apollo Server
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");

// typeDefs
const typeDefs = require("./schema");

// Resolvers
const resolvers = require("./resolvers");

// Mongo
const mongoose = require("mongoose");

const User = require("./models/User");

const url = process.env.MONGO_ENDPOINT;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

/*

 *
 * English:
 * It might make more sense to associate a book with its author by storing the author's id in the context of the book instead of the author's name
 * However, for simplicity, we will store the author's name in connection with the book
 *
 * Spanish:
 * Podría tener más sentido asociar un libro con su autor almacenando la id del autor en el contexto del libro en lugar del nombre del autor
 * Sin embargo, por simplicidad, almacenaremos el nombre del autor en conección con el libro
 */

/*
The first parameter, typeDefs, contains the GraphQL schema.
The second parameter is an object, which contains the resolvers of the server. These are the code, which defines how GraphQL queries are responded to. */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLowerCase().startsWith("bearer ")) {
      const decodedToken = jwt.verify(
        auth.substring(7),
        process.env.JWT_SECRET
      );
      const currentUser = await User.findById(decodedToken.id);
      // .populate('friends')
      return { currentUser };
    }
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
