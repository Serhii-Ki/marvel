import {createBrowserRouter, redirect} from "react-router-dom";
import App from "../App.tsx";
import Auth from "../pages/auth/Auth.tsx";
import SignIn from "../pages/signIn/SignIn.tsx";
import SignUp from "../pages/signUp/SignUp.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/auth',
        element: <Auth/>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        index: true,
        loader: () => redirect('/auth')
      }
    ]
  }
])