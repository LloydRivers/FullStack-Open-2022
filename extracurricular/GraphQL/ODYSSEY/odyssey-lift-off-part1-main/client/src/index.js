import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// ApolloClient is the class that represents Apollo Client itself. We create a new client instance like so:
const client = new ApolloClient({
  // We need to provide a couple of options to the constructor. The first is the uri option, which we use to specify the location of our GraphQL server. Our server is running locally at localhost:4000, so the uri option looks like this:
  uri: "http://localhost:4000",
  /*
  Second, every instance of ApolloClient uses an in-memory cache. This enables it to store and reuse query results so it doesn't have to make as many network requests. This makes our app's user experience feel much snappier.
  We provide an InMemoryCache instance in the cache option, like so:
  */
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
