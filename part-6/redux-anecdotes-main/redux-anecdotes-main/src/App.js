import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { List, NewAnecdote, Notification, Filter } from "./components";
import { initializeAnecdotes } from "./features/anecdotes/anecdoteSlice";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <List />
      <NewAnecdote />
    </>
  );
};

export default App;
