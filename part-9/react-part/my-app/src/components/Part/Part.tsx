import CoursePart from "../../types";
import { assertNever } from "../../utils";
const Part = ({ part }: { part: CoursePart }) => {
  switch (part.type) {
    case "normal":
      return (
        <div>
          <i>{part.description}</i>
        </div>
      );
    case "groupProject":
      return (
        <div>
          <i>Project exercises {part.groupProjectCount}</i>
        </div>
      );
    case "submission":
      return (
        <div>
          <i>{part.description}</i>
          <br />
          <i>submit to {part.description}</i>
        </div>
      );
    case "special":
      return (
        <div>
          <i>{part.description}</i>
          <br />
          <i>
            required skills:{" "}
            {part.requirements.map((requirement) => requirement + ", ")}
          </i>
        </div>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
