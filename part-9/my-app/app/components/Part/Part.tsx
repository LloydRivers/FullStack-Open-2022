import React from "react";
import { CoursePart } from "../../types";
import { assertNever } from "../../utils";

interface PartProps {
  part: CoursePart;
}

const Part = ({ part }: PartProps) => {
  switch (part.kind) {
    case "basic":
      return (
        <>
          <br />
          <div>
            <p>
              <strong>
                {part.name} {part.exerciseCount}
              </strong>
            </p>
            <p>
              <em>{part.description}</em>
            </p>
          </div>
        </>
      );
    case "group":
      return (
        <>
          <br />
          <div>
            <p>
              <strong>
                {part.name} {part.exerciseCount}
              </strong>
            </p>
            <p>group project count: {part.groupProjectCount}</p>
          </div>
        </>
      );
    case "background":
      return (
        <>
          <br />
          <div>
            <p>
              <strong>
                {part.name} {part.exerciseCount}
              </strong>
            </p>
            <p>
              <em>{part.description}</em>
            </p>
            <p>background material: {part.backgroundMaterial}</p>
          </div>
        </>
      );
    case "special":
      return (
        <>
          <br />
          <div>
            <p>
              <strong>
                {part.name} {part.exerciseCount}
              </strong>
            </p>
            <p>
              <em>{part.description}</em>
            </p>
            <p>
              required skills:
              {part.requirements.join(", ")}
            </p>
          </div>
        </>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
