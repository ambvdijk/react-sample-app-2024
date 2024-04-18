import React from "react";

export function Home() {
  return (
    <main role="main">
      <h1>Homepage</h1>
      <nav>
        <ul role="nav">
          <li>
            <a href={`/page1`}>Page 1</a>
          </li>
          <li>
            <a href={`/page2`}>Page 2</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
