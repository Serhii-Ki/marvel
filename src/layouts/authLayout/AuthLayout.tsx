import { Outlet } from "react-router-dom";

import styles from "./authLayout.module.css";

function AuthLayout() {
  return (
    <div className={styles.authLayoutWrapper}>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
