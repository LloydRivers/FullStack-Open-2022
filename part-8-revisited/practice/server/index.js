// Import packages
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// Create a new ApolloServer instance with the defined schema and resolvers

(async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`Server ready at ${url}`);
  } catch (error) {
    console.error(`Error starting server: ${error}`);
  }
})();
