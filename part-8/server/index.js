// Sockets
const { WebSocketServer } = require("ws");
const { useServer } = require("graphql-ws/lib/use/ws");

// Import Apollo packages
const { ApolloServer } = require("@apollo/server");
const { createContext } = require("./src/GraphQL/createContext");
const { connectToDatabase } = require("./src/Database/connection/connect");

// typeDefs and resolvers
const typeDefs = require("./src/GraphQL/typeDefs");
const resolvers = require("./src/GraphQL/resolvers");

// Handle subscriptions
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const cors = require("cors");
const http = require("http");
const { insertData } = require("./src/Database/Seed/seed");

async function startServer() {
  try {
    // Connect to Database
    await connectToDatabase();
    // await insertData();

    const app = express();
    const httpServer = http.createServer(app);

    const wsServer = new WebSocketServer({
      server: httpServer,
      path: "/",
    });

    const schema = makeExecutableSchema({ typeDefs, resolvers });
    const serverCleanup = useServer({ schema }, wsServer);

    const server = new ApolloServer({
      schema,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await serverCleanup.dispose();
              },
            };
          },
        },
      ],
    });

    await server.start();

    app.use(
      "/",
      cors(),
      express.json(),
      expressMiddleware(server, {
        context: async ({ req, connection }) =>
          await createContext({ req, connection }),
      })
    );
    const PORT = 4000;
    httpServer.listen(PORT, () =>
      // This log does run
      console.log(`Server is now running on http://localhost:${PORT}`)
    );

    console.log(`🚀 Server ready at ${PORT}`);
  } catch (error) {
    console.log(error);
  }
}

startServer();
