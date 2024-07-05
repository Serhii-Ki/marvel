import {useEffect} from "react";
import useRequest from "./services/useRequest.ts";
import Header from "./components/header/Header.tsx";

import styles from './App.module.css'
import RandomSection from "./components/randomSection/RandomSection.tsx";

function App() {
  const request = useRequest();

  useEffect(() => {
    request.getAllCharacters()
     .then(data => console.log(data))
  },[])

  return (
      <div className={styles['app-wrapper']}>
        <Header/>
        <RandomSection/>
      </div>
  )
}

export default App
