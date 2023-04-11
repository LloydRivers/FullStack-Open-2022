import { useState } from "react";
import { useQuery } from "@apollo/client";

import { FIND_PERSON } from "../../Queries/queries";

// Define a component that renders a person's details
const Person = ({ person, onClose }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <div>
        {person.address.street} {person.address.city}
      </div>
      <div>{person.phone}</div>
      <button onClick={onClose}>close</button>
    </div>
  );
};

// Define a component that renders a list of persons
const Persons = ({ persons }) => {
  // Define a state variable for the name to search
  const [nameToSearch, setNameToSearch] = useState(null);

  // Call the FIND_PERSON query with the given variables
  const result = useQuery(FIND_PERSON, {
    variables: { nameToSearch },
    // Only call the query if there's a name to search for
    skip: !nameToSearch,
  });

  // If there's a name to search for and the query has returned data,
  // render the Person component with the data
  if (nameToSearch && result.data) {
    return (
      <Person
        person={result.data.findPerson}
        onClose={() => setNameToSearch(null)}
      />
    );
  }

  // Otherwise, render a list of persons with a button to show their address
  return (
    <div>
      <h2>Persons</h2>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.phone}
          <button onClick={() => setNameToSearch(person.name)}>
            show address
          </button>
        </div>
      ))}
    </div>
  );
};

// Export the Persons component
export default Persons;
