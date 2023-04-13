import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_AUTHORS, UPDATE_AUTHOR_BIRTHYEAR } from "../queries";

const Authors = ({ show }) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");

  const result = useQuery(ALL_AUTHORS);

  const [updateAuthor] = useMutation(UPDATE_AUTHOR_BIRTHYEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  const submit = async (event) => {
    event.preventDefault();

    await updateAuthor({ variables: { name, setBornTo: Number(born) } });

    setName("");
    setBorn("");
  };

  if (!show) {
    return null;
  }

  if (result.loading) {
    return <div>Loading...</div>;
  }

  const authors = result.data.allAuthors;

  return (
    <div>
      <h2>Authors</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Born</th>
            <th>Books</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((a) => (
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
        <form onSubmit={submit}>
          <div>
            Name
            <select
              value={name}
              onChange={({ target }) => setName(target.value)}
            >
              {authors.map((a) => (
                <option key={a.name} value={a.name}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            Born
            <input
              value={born}
              onChange={({ target }) => setBorn(target.value)}
            />
          </div>
          <button type="submit">Update author</button>
        </form>
      </div>
    </div>
  );
};

export default Authors;
