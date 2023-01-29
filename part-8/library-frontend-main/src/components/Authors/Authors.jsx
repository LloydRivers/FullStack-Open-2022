import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { ALL_AUTHORS, EDIT_AUTHOR } from "../../queries";

const Authors = (props) => {
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [born, setBorn] = useState("");
  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    onError: (error) => {
      console.log(error.graphQLErrors);
    },
    refetchQueries: [{ query: ALL_AUTHORS }],
  });
  // Functions
  function handleSelectChange(event) {
    console.log(event.target.value);
    setSelectedAuthor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      editAuthor({
        variables: { name: selectedAuthor, setBornTo: Number(born) },
      });
    } catch ({ graphQLErrors, networkError, message }) {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
    }
    setSelectedAuthor("");
    setBorn("");
  }
  const authors = useQuery(ALL_AUTHORS);
  const { loading, error, data } = authors;

  if (!props.show) {
    return null;
  } else if (loading) {
    return <div>loading...</div>;
  } else if (error) {
    return <div>{`Error: ${error}`}</div>;
  }

  if (data.allAuthors.length > 0) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>authors</th>
              <th>born</th>
              <th>books</th>
            </tr>
            {data.allAuthors.map((a) => (
              <tr key={a.name}>
                <td>{a.name}</td>
                <td>{a.born}</td>
                <td>{a.bookCount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h2>Set birth year</h2>
          <form onSubmit={handleSubmit}>
            <div>
              name
              <select onChange={handleSelectChange}>
                <option value="">Choose option</option>
                {data.allAuthors.map((author) => (
                  <option key={author.name} value={author.name}>
                    {author.name}
                  </option>
                ))}
              </select>
              <div>
                born
                <input
                  onChange={(e) => setBorn(e.target.value)}
                  type="number"
                />
                <button type="submit">update author</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>No authors found</h2>
      </div>
    );
  }
};

export default Authors;
