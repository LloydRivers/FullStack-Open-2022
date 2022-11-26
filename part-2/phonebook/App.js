import { useState, useEffect } from "react";
import "./css/notification.css";
import Search from "./components/Search";
import Form from "./components/Forms";
import Listing from "./components/Listing";
import personServices from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const API = `http://localhost:3001/persons`;
  // Here I create two Arrays, one will be the main array which wont change and the other will be used for filtering.
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [reRender, setReRender] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [addedPersonsName, setAddedPersonsName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [filteredArray, setFilteredArray] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSearch = (event) => {
    // Here I grab the value of the input field and set it to the search state.
    setSearch(event.target.value);
    // Now I called the setFilteredArray and pass in the original unmodified array and use the filter method to filter out the results. The return value will end up back in the variable filteredArray. It is this variable that will be used to display the results.
    setFilteredArray(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setReRender(false);
    const getData = async () => {
      try {
        const { data } = await personServices.getAllPersons();
        setPersons(data);
        setFilteredArray(data);
      } catch (error) {
        setIsError(true);
        console.warn(error);
      }
    };
    getData();
  }, [reRender]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setAddedPersonsName("");
    }, 4000);
    const person = {
      name: newName,
      number: newNumber,
    };

    const isPresent = persons.find((p) => p.name === person.name);

    if (isPresent) {
      if (
        window.confirm(
          `${person.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        try {
          await personServices.updatePerson(isPresent.name, person);
          setReRender(true);
          setNewName("");
          setNewNumber("");
        } catch (error) {
          setErrorMessage(
            `Person '${person.name}' was already removed from server`
          );

          console.log(error);
        }
      } else {
        setNewName("");
        setNewNumber("");
      }
    } else {
      try {
        await personServices.createPerson(person);
        setAddedPersonsName(person.name);
        setNewName("");
        setNewNumber("");
        setIsAdded(true);
        setReRender(true);
      } catch (error) {
        console.log(error);
      }
    }

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {isError && <Notification message={errorMessage} />}

      {isAdded && (
        <p className="added">Added {addedPersonsName} to the phonebook</p>
      )}
      <Search search={search} handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <Listing
        setIsError={setIsError}
        setErrorMessage={setErrorMessage}
        setReRender={setReRender}
        persons={persons}
        filteredArray={filteredArray}
      />
    </div>
  );
};

export default App;
