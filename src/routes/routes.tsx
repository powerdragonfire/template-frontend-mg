import type { RouteObject } from "react-router";
import { ErrorPage } from "./ErrorPage";
import { Home } from "../screens/Home";
import About from "src/screens/About";
import { Chat } from "src/screens/Chat";

export const routes: RouteObject[] = [
  {
    path: "/",
    errorElement: <ErrorPage error={undefined} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
    ],
  },
  // add more root-level routes here if needed
];
