import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function Application() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

const rootElement: HTMLElement = document.getElementById("root")!;

const root = ReactDOMClient.createRoot(rootElement);
root.render(<Application />);
