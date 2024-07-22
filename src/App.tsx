import {Outlet} from "react-router-dom";
import Header from "./components/header/Header.tsx";

import styles from './App.module.css'


function App() {
  return (
      <div className={styles['app-wrapper']}>
        <Header/>
        <Outlet/>
      </div>
  )
}

export default App
