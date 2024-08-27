
import styles from './App.module.css'
import {Outlet} from "react-router-dom";


function App() {
  return (
      <div className={styles['app-wrapper']}>
        <div>
          <Outlet/>
        </div>
      </div>
  )
}

export default App
