import React from "react";
import { Link, useNavigate } from "react-router-dom";
import power from "../../assets/icons/power.svg";
import notification from "../../assets/icons/notification.svg";

import styles from "./header.module.css";
import { useAppDispatch } from "../../store/store.ts";
import { authThunks } from "../../store/authSlice.ts";

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(authThunks.logOut({ navigate }));
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to={"/bankingonline"}>
          <img
            src="https://seeklogo.com/images/D/dbs-bank-logo-8241F42CBA-seeklogo.com.png"
            alt="logo"
            className={styles.logo}
          />
        </Link>
        <div className={styles.iconsWrap}>
          <img
            src={notification}
            alt={"notification"}
            className={styles.icons}
          />
          <img
            src={power}
            alt={"exit"}
            className={styles.icons}
            onClick={logOut}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
