import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App.tsx";
import Auth from "../pages/auth/Auth.tsx";
import SignIn from "../pages/signIn/SignIn.tsx";
import SignUp from "../pages/signUp/SignUp.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import AuthLayout from "../layouts/authLayout/AuthLayout.tsx";
import MainLayout from "../layouts/mainLayout/MainLayout.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import Wallet from "../pages/wallet/Wallet.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/auth" replace />,
      },
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
        children: [
          {
            path: "/bankingonline/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/bankingonline/wallet",
            element: <Wallet />,
          },
        ],
      },
    ],
  },
]);
