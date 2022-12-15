import React, { useState } from "react";
import { createAnecdote } from "../../features/anecdotes/anecdoteSlice";
import { createNotification } from "../../features/anecdotes/notificationSlice";
import { useDispatch } from "react-redux";

const NewAnecdote = () => {
  const dispatch = useDispatch();
  const [new_anecdote, setNewAnecdote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createAnecdote(new_anecdote));

    setNewAnecdote("");
    dispatch(createNotification(`New anecdote added: ${new_anecdote}`, 5));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="new_anecdote">post a new anecdote</label>
        <input
          type="text"
          id="new_anecdote"
          value={new_anecdote}
          onChange={(e) => setNewAnecdote(e.target.value)}
        />
      </div>
      <button>create a new anecdote</button>
    </form>
  );
};

export default NewAnecdote;
