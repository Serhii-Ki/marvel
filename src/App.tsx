import {useEffect} from "react";
import useRequest from "./services/useRequest.ts";
import Header from "./components/header/Header.tsx";

import styles from './App.module.css'
import CharactersPage from "./pages/charactersPage/CharactersPage.tsx";


function App() {
  const request = useRequest();

  useEffect(() => {
    request.getCharacter(1011334)
     .then(data => console.log(data))
  },[])

  return (
      <div className={styles['app-wrapper']}>
        <Header/>
        <CharactersPage/>
      </div>
  )
}

export default App
