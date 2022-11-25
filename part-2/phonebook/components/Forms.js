import React from "react";

const Form = (props) => {
  const { handleSubmit, newName, setNewName, newNumber, setNewNumber } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input
            id="number"
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
          />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
