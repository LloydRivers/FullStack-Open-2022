import { useState, useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { ALL_BOOKS } from "../../queries";
import "../css/books.css";

const Books = (props) => {
  // The genre state is used to collect the name of genre via the button click.
  const [genre, setGenre] = useState(null);

  // The filteredBooks state is used to filter the books based on the genre.
  const [filteredBooks, setFilteredBooks] = useState([]);

  // The allTheBooks state is used to store all the books from the database.
  const [allTheBooks, setAllTheBooks] = useState([]);

  const { loading, error, data } = useQuery(ALL_BOOKS);

  // useLazyQuery is used to send a request to the server to get the books based on the genre.
  const [getBooks, specificBooks] = useLazyQuery(ALL_BOOKS, {
    variables: { genre },
    onCompleted: (data) => {
      setFilteredBooks(data.allBooks);
    },
  });

  const filterByGenre = (genre) => {
    setGenre(genre);
    if (!genre) {
      // If we don't have a genre, send a request to the server to get all the books.
      specificBooks({ variables: { genre: null } });
    } else {
      // If we do have a genre, use the allTheBooks state to filter the books.
      setFilteredBooks(
        allTheBooks.filter((book) => book.genres.includes(genre))
      );
    }
  };
  useEffect(() => {
    if (data) {
      setAllTheBooks(data?.allBooks);
      setFilteredBooks(data?.allBooks);
    }
    // If we have the data from the database, then we set the allTheBooks and filteredBooks state to the data.
    // We do this because we want to filter the books based on the genre.
  }, [data]);

  // The below code gives an array of strings of all the genres
  const genres = data?.allBooks.reduce((acc, book) => {
    book.genres.forEach((genre) => {
      if (!acc.includes(genre)) {
        acc.push(genre);
      }
    });
    return acc;
  }, []);

  if (!props.show) {
    return null;
  } else if (loading) {
    return <div>loading...</div>;
  } else if (error) {
    return <div>{`Error: ${error}`}</div>;
  }

  if (allTheBooks.length > 0) {
    return (
      <div>
        <h2>books</h2>

        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>author</th>
              <th>published</th>
            </tr>
            {filteredBooks?.map((a) => (
              <tr key={a.title}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button
            onClick={() => {
              setGenre(null);
              filterByGenre();
            }}
          >
            All books
          </button>
          {genres?.map((genre) => {
            return (
              <button
                key={genre}
                onClick={() => {
                  // await setGenre(genre);
                  filterByGenre(genre);
                }}
              >
                {genre}
              </button>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2> No books found</h2>
      </div>
    );
  }
};

export default Books;
