import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import HomePage from "../assets/pages/Home/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element: <HomePage></HomePage>
        }
      ]
    },
  ]);