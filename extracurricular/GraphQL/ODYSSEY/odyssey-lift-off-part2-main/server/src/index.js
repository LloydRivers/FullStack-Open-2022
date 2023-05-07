// Import necessary dependencies
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema"); // Import the schema definition
const resolvers = require("./resolvers"); // Import the resolver functions
const TrackAPI = require("./datasources/track-api"); // Import the TrackAPI data source

// Define an async function to start the Apollo Server
async function startApolloServer() {
  // Create a new Apollo Server instance with the schema and resolvers
  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the server and get the URL
  const { url } = await startStandaloneServer(server, {
    // Set up the context function to return the data sources
    context: async () => {
      const { cache } = server; // Get the cache from the server instance

      // Return the data sources object with the TrackAPI instance
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });

  // Log the URL where the server is running
  console.log(`
    🚀  Server is running
    📭  Query at ${url}
  `);
}

// Call the startApolloServer function to start the server
startApolloServer();
