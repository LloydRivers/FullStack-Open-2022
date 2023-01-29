import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Initialize ApolloClient
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
/* Our client is ready to use, but how do we make it available to the components in our React app? 
That's where ApolloProvider component comes in! */

ReactDOM.render(
  /* 
  The ApolloProvider component uses React's Context API to make a configured Apollo Client instance available throughout a React component tree. To use it, we wrap our app's top-level components in the ApolloProvider component and pass it our client instance as a prop:

  Now all of our pages, containers, and components can access the client via friendly React Hooks thanks to the context API.
  */
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
