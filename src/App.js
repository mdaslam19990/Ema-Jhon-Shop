import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Invantory from "./components/Invantory/Invantory";
import About from "./components/About/About";
import { productsCartLoader } from "./Loaders/ProductsCartLoader";
import Login from "../src/components/Login/Login";
import SignUp from "../src/components/SignUp/SignUp";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "invantory",
          loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
          element: (
            <PrivateRoute>
              <Invantory></Invantory>
            </PrivateRoute>
          ),
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
