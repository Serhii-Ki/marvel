import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import useRequest from "./services/useRequest.ts";
import Header from "./components/header/Header.tsx";

import styles from './App.module.css'


function App() {
  const request = useRequest();

  useEffect(() => {
    request.getCharacter(1011334)
     .then(data => console.log(data))
  },[])

  return (
      <div className={styles['app-wrapper']}>
        <Header/>
        <Outlet/>
      </div>
  )
}

export default App
