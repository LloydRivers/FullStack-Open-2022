import React from "react";
import personServices from "../services/persons";
const Listing = (props) => {
  const { persons, filteredArray, setReRender, setErrorMessage, setIsError } =
    props;

  const handleDelete = async (id) => {
    console.log("render");

    const found = persons.find((p) => p.id === id);
    if (
      window.confirm(
        `Delete ${persons.find((person) => person.id === id).name}?`
      )
    ) {
      try {
        await personServices.deletePerson(id);

        setReRender(true);
      } catch (error) {
        console.warn(error);
        setIsError(true);
        setErrorMessage(`${found.name} was already deleted from server`);
        setTimeout(() => {
          setErrorMessage(null);
          setIsError(false);
        }, 5000);
        setReRender(true);
      }
    } else {
      return;
    }
  };
  return (
    <>
      {persons.length > 0 ? (
        <div>
          <h2>Numbers</h2>
          <ul>
            {filteredArray.map((person) => (
              <div key={person.id}>
                <li>
                  {person.name} {person.number}
                </li>
                <button onClick={() => handleDelete(person.id)}>delete</button>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
};

export default Listing;
