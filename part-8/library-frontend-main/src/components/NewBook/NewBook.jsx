import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ALL_BOOKS, ALL_AUTHORS, CREATE_BOOK } from "../../queries";

const NewBook = (props) => {
  const { token, setError } = props;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([]);

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }],
  });

  if (!props.show) {
    return null;
  }

  const submit = async (event) => {
    event.preventDefault();

    try {
      await createBook({
        variables: { title, author, published: Number(published), genres },
      });
    } catch ({ graphQLErrors, networkError, message }) {
      if (graphQLErrors) {
        setError(graphQLErrors[0].message);
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }

      if (networkError) {
        setError(
          "Network error. Please check your internet connection and try again."
        );
        console.log(`[Network error]: ${networkError}`);
      }

      console.log(`[Message]: ${message}`);
    }

    setTimeout(() => {
      setError(null);
    }, 5000);

    setTitle("");
    setPublished("");
    setAuthor("");
    setGenres([]);
    setGenre("");
  };

  const addGenre = () => {
    const lowerCaseGenre = genre.toLowerCase();
    setGenres(genres.concat(lowerCaseGenre));
    setGenre("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          published
          <input
            type="number"
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type="button">
            add genre
          </button>
        </div>
        <div>genres: {genres.join(" ")}</div>
        <button type="submit">create book</button>
      </form>
    </div>
  );
};

export default NewBook;
