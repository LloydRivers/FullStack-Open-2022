import { configureStore } from "@reduxjs/toolkit";
import anecdotesReducer from "../features/anecdotes/anecdoteSlice";
import notificationSlice from "../features/anecdotes/notificationSlice";
import filterSlice from "../features/anecdotes/filterSlice";
export default configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    notification: notificationSlice,
    filter: filterSlice,
  },
});
