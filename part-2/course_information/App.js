import Course from "./components/Course";
import { courses } from "./data/courses";
const App = () => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
