import { useState } from "react";
// I am going to leave some comments for people who are new to React and might be looking for some help.
const App = () => {
  // We have pasted in the array that they have given us.
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  // We are going to use the useState hook to create a state variable called selected.
  const [selected, setSelected] = useState(0);

  // All this does is create an array of zeros that is the same length as the anecdotes array.
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  // They asked us to create a copy called "points"
  const points = [...votes];
  const handleVote = () => {
    // We are going to increment the value of the selected index in the points array.
    points[selected] += 1;
    setVotes(points);
  };
  const handleNext = () => {
    // This is a function that will return a random number between 0 and the length of the anecdotes array.
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const mostVotes = () => {
    // This is a function that will return the index of the highest number in the votes array.
    const max = Math.max(...points);
    return points.indexOf(max);
  };
  // Below we create a few components that we will use to display the information.
  const Header = ({ text }) => {
    return <h1>{text}</h1>;
  };

  const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
  };

  return (
    <div>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleNext} text="next anecdote" />
      <Header text="Anecdote with most votes" />
      <p>{anecdotes[mostVotes()]}</p>
      <p>has {points[mostVotes()]} votes</p>
    </div>
  );
};

export default App;
