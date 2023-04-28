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

import {
  ALL_AUTHORS,
  ALL_BOOKS,
  CREATE_BOOK,
  EDIT_AUTHOR,
  BOOK_ADDED,
} from "./queries";

/**
 * This function updates a cache object by modifying its 'allBooks' property.
 *
 * @param {object} cache - The cache object to update.
 * @param {object} query - The query object to use when updating the cache.
 * @param {object} bookAdded - The book object to add to the cache.
 *
 * @returns {Promise} - A promise that resolves to the updated cache object.
 */
export const updateCache = async (cache, query, bookAdded) => {
  // This function removes duplicates from an array of objects based on the 'name' property.
  const uniqByName = (a) => {
    let seen = new Set();
    return a.filter((item) => {
      let k = item.name;
      return seen.has(k) ? false : seen.add(k);
    });
  };

  // This block of code updates the cache object's 'allBooks' property by concatenating
  // the current value with the new bookAdded object and then removing duplicates.
  cache.updateQuery(query, ({ allBooks }) => {
    return {
      allBooks: uniqByName(allBooks?.concat(bookAdded)),
    };
  });
};

const App = () => {
  const client = useApolloClient();

  useSubscription(BOOK_ADDED, {
    onData: async ({ data }) => {
      alert(
        `New book added: ${data.data.bookAdded.title} by ${data.data.bookAdded.author.name}`
      );
      console.log("The data object:", data);
      await updateCache(
        client.cache,
        { query: ALL_BOOKS },
        data.data.bookAdded
      );
    },
  });

  const [page, setPage] = useState("authors");
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const result = useQuery(ALL_AUTHORS);

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
      <NewBook
        show={page === "add"}
        token={token}
        setError={setErrorMessage}
        setPage={setPage}
      />
    </div>
  );
};

export default App;
