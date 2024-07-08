import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import CharactersPage from "../pages/charactersPage/CharactersPage.tsx";
import ComicsPage from "../pages/comicsPage/ComicsPage.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
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