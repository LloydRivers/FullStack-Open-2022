import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import ApolloClient, InMemoryCache, and gql from the @apollo/client library
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
} from "@apollo/client";

// Create a new instance of ApolloClient with a URI and cache
const client = new ApolloClient({
  // URI of GraphQL server
  uri: "http://localhost:4000",

  // In-memory cache for query results
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  /* <React.StrictMode> is a development mode only feature that performs additional checks and warnings in your application to help you identify potential issues, such as deprecated features, unsafe lifecycle methods, and potential bugs. */
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
