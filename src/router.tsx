import { createBrowserRouter } from "react-router-dom";
import { Home, Page1, Page2 } from "./pages";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
]);
