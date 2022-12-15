import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectState, voteAnecdote } from "features/anecdotes/anecdoteSlice";
import { createNotification } from "features/anecdotes/notificationSlice";

import { selectFilter } from "features/anecdotes/filterSlice";

const List = () => {
  const filter = useSelector(selectFilter);
  const anecdotes = useSelector(selectState);
  const dispatch = useDispatch();

  const filteredAnecdotes = anecdotes.filter((anecdote) => {
    if (filter === "") return anecdote;
    return anecdote.content.toLowerCase().includes(filter.toLowerCase());
  });

  const handleVote = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    dispatch(voteAnecdote(anecdote.id));
    dispatch(
      createNotification(
        `New vote added tod: ${anecdote.content.slice(0, 30)}...`,
        5
      )
    );
  };
  return (
    <div>
      {filteredAnecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => handleVote(anecdote.id)}
                style={{ marginLeft: "10px" }}
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default List;
