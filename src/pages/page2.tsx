import { Link } from "react-router-dom";

export function Page2() {
  return (
    <section>
      <h1>This is page 2</h1>
      <Link to={`/`}>Go home</Link>
    </section>
  );
}
