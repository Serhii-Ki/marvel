import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App.tsx";
import CharactersPage from "../pages/charactersPage/CharactersPage.tsx";
import ComicsPage from "../pages/comicsPage/ComicsPage.tsx";
import ErrorPage from "../pages/errorPage/ErrorPage.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/characters" replace />,
      },
      {
        path: '/characters',
        element: <CharactersPage/>
      },
      {
        path: '/comics',
        element: <ComicsPage/>
      }
    ]
  }
])