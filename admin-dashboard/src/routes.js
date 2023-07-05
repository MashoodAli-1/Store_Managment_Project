import Admin from "./Pages/Admin";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import Appbar from "./components/Appbar";

// const token = Cookies.get("token");

export default createBrowserRouter([
  {
    // element: <SignIn />,
    children: [
      {
        path: "/home",
        element: <Admin />,
      },
      {
        path: "/",
        element: (
          <>
            <Appbar />
            <SignIn />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <Appbar />
            <SignIn />
          </>
        ),
      },
      {
        path: "/register",
        element: (
          <>
            <Appbar />
            <SignUp />
          </>
        ),
      },
    ],
  },
]);
