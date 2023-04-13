const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

/*
  you can remove the placeholder query once your first own has been implemented 
*/

(async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      cors: {
        origin: "*", // allow requests from all domains
        credentials: true, // allow sending cookies
      },
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`Server ready at ${url}`);
  } catch (error) {
    console.error(`Error starting server: ${error}`);
  }
})();
