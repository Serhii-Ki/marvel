import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App.tsx";
import Auth from "../pages/auth/Auth.tsx";
import SignIn from "../pages/signIn/SignIn.tsx";
import SignUp from "../pages/signUp/SignUp.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import AuthLayout from "../layouts/authLayout/AuthLayout.tsx";
import MainLayout from "../layouts/mainLayout/MainLayout.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth",
            element: <Auth />,
          },
          {
            path: "/signin",
            element: <SignIn />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "/bankingonline",
        element: <MainLayout />,
        children: [{}],
      },
      {
        index: true,
        loader: () => redirect("/auth"),
      },
    ],
  },
]);
