// Import React and ReactDOM libraries, App component, and reportWebVitals function
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import ApolloClient, InMemoryCache, and gql from the @apollo/client library
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Create a new instance of ApolloClient with a URI and cache
const client = new ApolloClient({
  // URI of GraphQL server
  uri: "http://localhost:4000",

  // In-memory cache for query results
  cache: new InMemoryCache(),
});

// Define a GraphQL query using the gql template literal tag
const query = gql`
  query {
    allPersons {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`;

// Send the query to the GraphQL server using the client.query method
client.query({ query }).then((response) => {
  // Log the response data to the console
  console.log(response.data);
});

// Create a root React element and render the App component inside it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure the performance of the app using the reportWebVitals function
reportWebVitals();

/*
In this code, we're using the Apollo Client library to make a query to a GraphQL server.
ApolloClient is the main class for creating a GraphQL client, InMemoryCache is a caching mechanism for storing query results in memory, and gql is a template literal tag for defining GraphQL queries.

The `ApolloClient` constructor takes an object with two properties: `uri` specifies the URL of the GraphQL server to query, and `cache` specifies a new instance of the `InMemoryCache` class to use as the cache.

The `InMemoryCache` class is a cache implementation that stores query results in memory. It can be used to cache data from GraphQL queries so that they can be retrieved faster in subsequent requests. 

The `gql` template literal tag allows you to define GraphQL queries using a syntax similar to GraphQL's syntax.

We're making a query to the GraphQL server using `client.query({ query })`, passing the `query` object we defined with `gql` as an argument.

Once the query is complete, we're logging the response data to the console.

Finally, we're rendering the `App` component inside a React root element using `ReactDOM.createRoot` and `root.render`.
*/
