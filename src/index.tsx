import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { createRoot } from "react-dom/client";

function Application() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Application />);
