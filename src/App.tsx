import {useEffect} from "react";
import useRequest from "./services/useRequest.ts";
import Header from "./components/header/Header.tsx";

import styles from './App.module.css'

function App() {
  const request = useRequest();

  useEffect(() => {
    request.getAllCharacters()
     .then(data => console.log(data))
  },[])

  return (
      <div className={styles['app-wrapper']}>
        <Header/>
      </div>
  )
}

export default App
