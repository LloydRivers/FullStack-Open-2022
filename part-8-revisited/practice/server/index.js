// Import Apollo packages
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { connectToDatabase } = require("./src/Database/connection/db");

// Import types and schema
const typeDefs = require("./src/GraphQL/typeDefs");
const resolvers = require("./src/GraphQL/resolvers");

// Import JWT
const jwt = require("jsonwebtoken");

// Import Model
const User = require("./src/Database/models/user");

/*
createContext is a helper function that takes req and res as parameters, and checks whether the authorization header is present and starts with "Bearer ". If it does, it decodes the JWT token and returns an object containing the current user.
*/
async function createContext({ req, res }) {
  const auth = req ? req.headers.authorization : null;
  if (auth && auth.startsWith("Bearer ")) {
    const decodedToken = jwt.verify(auth.substring(7), process.env.JWT_SECRET);
    const currentUser = await User.findById(decodedToken.id).populate(
      "friends"
    );
    return { currentUser };
  }
}
/*
startServer: This is a helper function that starts the Apollo server by doing the following:

First, it connects to the database using the connectToDatabase function (on line 4).

Then, it creates a new instance of ApolloServer with the defined schema and resolvers, and passes createContext as the context function (on line 18).

Finally, it starts the server using the startStandaloneServer function and listens on port 4000. The URL of the server is logged to the console.
*/
async function startServer() {
  try {
    // Connect to Database
    await connectToDatabase();

    // Create a new ApolloServer instance with the defined schema and resolvers
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      cors: {
        // allow requests from all domains
        origin: "*",
        // allow sending cookies
        credentials: true,
      },
      context: createContext,
    });

    // Start the server
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`Server ready at ${url}`);
  } catch (error) {
    console.error(`Error starting server: ${error}`);
  }
}

startServer();
