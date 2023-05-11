import { Header, Content, Total } from "./components";
import { courseParts } from "./data";
export default function Home() {
  const courseName = "Half Stack application development";

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
}
