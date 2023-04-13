import React from "react";

import useForm from "utils/Custom_Hooks/UseForm";

import { useMutation } from "@apollo/client";
import { ADD_BOOK, ALL_AUTHORS, ALL_BOOKS } from "Queries/queries";

const NewBook = ({ show, setError }) => {
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: ALL_AUTHORS }, { query: ALL_BOOKS }],
    // I am tempted to make this a stand along function. I am not sure if it is worth it.
    onError: (error) => {
      console.log(error);

      const invalidArgs = error.graphQLErrors[0].extensions.invalidArgs;
      const invalidMessage = error.graphQLErrors[0].message;
      setError({
        invalidArgs,
        invalidMessage,
      });
    },
  });

  const { values, handleChange, handleSubmit, setValues } = useForm(addBook, {
    title: "",
    author: "",
    // why is the default value for published not 0?
    published: "",
    genre: "",
    genres: [],
  });

  if (!show) {
    return null;
  }

  const addGenre = () => {
    // get the current value of genre
    const genre = values.genre;
    // add the genre to the array of genres
    const updatedGenres = [...values.genres, genre];
    // update the values object with the new genres array
    setValues({ ...values, genres: updatedGenres, genre: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          title
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        <div>
          author
          <input
            type="text"
            name="author"
            value={values.author}
            onChange={handleChange}
          />
        </div>
        <div>
          published
          <input
            type="number"
            name="published"
            value={values.published}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="test"
            name="genre"
            value={values.genre}
            onChange={handleChange}
          />
          <button onClick={addGenre} type="button">
            add genre
          </button>
        </div>
        <div>
          {/* display the list of genres as a comma-separated string */}
          genres: {values.genres.join(", ")}
        </div>
        <button type="submit">create book</button>
      </form>
    </div>
  );
};

export default NewBook;
