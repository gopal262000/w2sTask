import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import HomeLayout from "./layouts/HomeLayout";
import Products from "./components/Products";
import SnackBarShelfProvider from "./providers/SnackbarProvider";
import ToastShelf from "./components/ToastShelf";
import CurrentUserProvider from "./providers/CurrentUserProvider";
import PageNotFound from "./components/PageNotFound";

function App() {

  const router = createBrowserRouter([
    {
      element: <CurrentUserProvider />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/",
          element: <Navigate to="/login" />, // Redirect the home page to /login
        },
        {
          path: "/u",
          element: <HomeLayout />,
          children: [{ path: "products", element: <Products /> }],
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return (
    <SnackBarShelfProvider>
      <RouterProvider router={router} />
      <ToastShelf />
    </SnackBarShelfProvider>
  );
}

export default App;
