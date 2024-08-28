import styles from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles["app-wrapper"]}>
      <Outlet />
    </div>
  );
}

export default App;
