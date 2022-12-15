import { createSlice } from "@reduxjs/toolkit";
import { getAll, createNew, update } from "../../services/anecdotes";

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote: (state, { payload }) => {
      let id = payload;
      const anecdote = state.find((a) => a.id === id);
      anecdote.votes += 1;
    },
    appendAnecdote: (state, { payload }) => {
      state.push(payload);
    },
    setAnecdotes(state, { payload }) {
      return payload;
    },
  },
});

export const { vote, appendAnecdote, setAnecdotes } = anecdotesSlice.actions;

export const selectState = (state) => state.anecdotes;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = await update(anecdote);
    dispatch(vote(votedAnecdote));
  };
};

export default anecdotesSlice.reducer;
