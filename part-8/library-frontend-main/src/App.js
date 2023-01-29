import { useState } from "react";

import {
  useQuery,
  useMutation,
  useSubscription,
  useApolloClient,
} from "@apollo/client";

// Import components
import {
  Authors,
  Books,
  NewBook,
  LoginForm,
  Notify,
  Recommend,
} from "./components";

import { ALL_AUTHORS, ALL_BOOKS, CREATE_BOOK, EDIT_AUTHOR } from "./queries";

const App = () => {
  const [page, setPage] = useState("authors");
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const result = useQuery(ALL_AUTHORS);
  const client = useApolloClient();
  console.log("error", errorMessage);
  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  };

  if (result.loading) {
    return <div>loading...</div>;
  }

  if (!token) {
    return (
      <div>
        {errorMessage ? <Notify message={errorMessage} /> : null}
        <h2>Login</h2>
        <LoginForm
          setToken={setToken}
          setError={setErrorMessage}
          message={errorMessage}
        />
      </div>
    );
  }

  return (
    <div>
      {errorMessage ? <Notify message={errorMessage} /> : null}

      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
        <button onClick={() => setPage("recommend")}>recommend</button>
        <button onClick={logout}>logout</button>
      </div>

      <Authors show={page === "authors"} />
      <Books show={page === "books"} />
      <Recommend show={page === "recommend"} />
      <NewBook show={page === "add"} token={token} setError={setErrorMessage} />
    </div>
  );
};

export default App;
