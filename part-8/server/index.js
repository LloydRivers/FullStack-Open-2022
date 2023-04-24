// Import Apollo packages
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { createContext } = require("./src/GraphQL/createContext");
const { connectToDatabase } = require("./src/Database/connection/connect");
const { insertData } = require("./src/Database/Seed/seed");

// typeDefs and resolvers
const typeDefs = require("./src/GraphQL/typeDefs");
const resolvers = require("./src/GraphQL/resolvers");

console.log("createContext", createContext);

async function startServer() {
  try {
    // Connect to Database
    await connectToDatabase();

    // If you uncomment the next line, it will rebuild the database
    // await insertData();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      cors: {
        origin: "*",
        credentials: true,
      },
    });

    // Start the server
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      context: async ({ req }) => await createContext({ req }),
    });

    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.log(error);
  }
}

startServer();
