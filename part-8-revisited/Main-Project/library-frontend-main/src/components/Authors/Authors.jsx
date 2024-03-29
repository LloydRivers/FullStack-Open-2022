import useForm from "utils/Custom_Hooks/UseForm";

import { useQuery, useMutation } from "@apollo/client";
import { ALL_AUTHORS, UPDATE_AUTHOR_BIRTHYEAR } from "Queries/queries";

const Authors = ({ show }) => {
  // Get all the Authors
  const result = useQuery(ALL_AUTHORS);

  // Update the birth year of an author
  const [editAuthor] = useMutation(UPDATE_AUTHOR_BIRTHYEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  const { values, handleChange, handleSubmit } = useForm(editAuthor, {
    name: "",
    setBornTo: "",
  });

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
          {/* Loop over and render the names */}
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

        <h2>Please select an Author</h2>
        <form onSubmit={handleSubmit}>
          <div>
            Name
            <select value={values.name} name="name" onChange={handleChange}>
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
              required
              type="number"
              name="setBornTo"
              value={values.setBornTo}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Update author</button>
        </form>
      </div>
    </div>
  );
};

export default Authors;
