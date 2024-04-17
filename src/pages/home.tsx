import React, { Fragment } from "react";

export function Home() {
  return (
    <Fragment>
      <h1>Homepage</h1>
      <nav>
        <ul>
          <li>
            <a href={`/page1`}>Page 1</a>
          </li>
          <li>
            <a href={`/page2`}>Page 2</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
