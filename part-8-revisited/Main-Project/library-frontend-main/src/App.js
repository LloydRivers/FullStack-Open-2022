import React, { useState } from "react";

import { Authors, Books, NewBook } from "./components";

function App() {
  const [page, setPage] = useState("authors");

  // Create state for holding the error.
  const [errorMessage, setErrorMessage] = useState(null);

  // Create a function that displays the error and removes it after 10 seconds.
  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={() => setPage("authors")}>
          authors
        </button>
        <button type="button" onClick={() => setPage("books")}>
          books
        </button>
        <button type="button" onClick={() => setPage("add")}>
          add book
        </button>
      </div>

      <Authors show={page === "authors"} />

      <Books show={page === "books"} />

      <NewBook setError={notify} show={page === "add"} />
    </div>
  );
}

export default App;
