import { Link } from "react-router-dom";

export function Home() {
  return (
    <main role="main">
      <h1>Homepage</h1>
      <nav>
        <ul role="nav">
          <li>
            <Link to={`/page1`}>Page 1</Link>
          </li>
          <li>
            <Link to={`/page2`}>Page 2</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
