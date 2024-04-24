import { Link } from "react-router-dom";

export function Page1() {
  return (
    <section>
      <h1>This is page 1</h1>
      <Link to={`/`}>Go home</Link>
    </section>
  );
}
