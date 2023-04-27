// Importing required modules
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema");

// Creating mock data for GraphQL schema
const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

// Starting the Apollo server
async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }), // Creating executable schema from typeDefs
      mocks, // Adding mock data to schema
    }),
  });
  const { url } = await startStandaloneServer(server); // Starting standalone server
  console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `); // Logging the URL where the server is running
}

startApolloServer(); // Calling startApolloServer function to start the server
