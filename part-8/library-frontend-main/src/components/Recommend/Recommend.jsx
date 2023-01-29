import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { USER, ALL_BOOKS } from "../../queries";
import "../css/books.css";

const Recommend = (props) => {
  const user = useQuery(USER);
  const books = useQuery(ALL_BOOKS);
  const { data: allTheBooks } = books;
  const { data: userData, loading, error } = user;
  const favouriteGenre = userData?.me?.favouriteGenre;

  const filteredBooks = allTheBooks?.allBooks.filter((book) => {
    return book.genres.includes(favouriteGenre);
  });
  if (!props.show) {
    return null;
  } else if (loading) {
    return <div>loading...</div>;
  } else if (error) {
    return <div>{`Error: ${error}`}</div>;
  }
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
          {filteredBooks.length > 0
            ? filteredBooks.map((a) => (
                <tr key={a.title}>
                  <td>{a.title}</td>
                  <td>{a.author.name}</td>
                  <td>{a.published}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Recommend;
