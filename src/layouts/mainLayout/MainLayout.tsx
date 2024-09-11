import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header.tsx";

import styles from "./mainLayout.module.css";

function MainLayout() {
  return (
    <div className={styles.wrapper}>
      <div>
        <Header />
      </div>
      <div className={styles.mainSection}>
        <Outlet />
      </div>
      <div></div>
    </div>
  );
}

export default MainLayout;
