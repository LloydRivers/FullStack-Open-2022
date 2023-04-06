import CoursePart from "../../types";
import Part from "../Part/Part";

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <div>
      {courseParts.map((part) => (
        <div style={{ marginBottom: "1rem" }} key={part.name}>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <Part part={part} />
        </div>
      ))}
    </div>
  );
};

export default Content;
