import { useState } from "react";
import { useQuery } from "@apollo/client";

// Import: Components
import { Persons, PersonForm, Notify } from "./Components";

//Import Query
import { ALL_PERSONS } from "./Queries/queries";

const App = () => {
  // Create state for holding the error.
  const [errorMessage, setErrorMessage] = useState(null);
  const result = useQuery(ALL_PERSONS, {
    pollInterval: 2000,
  });

  if (result.loading) {
    return <div>loading...</div>;
  }

  // Create a function that displays the error and removes it after 10 seconds.
  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  return (
    <>
      {/* Pass the error message down to Notify */}
      <Notify errorMessage={errorMessage} />
      <Persons persons={result.data?.allPersons} />
      {/* Pass the error message down to PersonForm */}
      <PersonForm setError={notify} />
    </>
  );
};

export default App;
