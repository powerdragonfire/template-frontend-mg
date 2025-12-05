import { createBrowserRouter, RouterProvider } from "react-router";
import "./app.css";
import { routes } from "./routes/routes";

const router = createBrowserRouter(routes);
export const App = () => {
  return (
    <div className="app">
      {/* Add your global navigation/header here if needed */}
      <RouterProvider router={router} />
    </div>
  );
};
