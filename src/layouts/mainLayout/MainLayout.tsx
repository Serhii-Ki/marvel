import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header.tsx";

import styles from "./mainLayout.module.css";
import { useAppDispatch } from "../../store/store.ts";
import { useEffect } from "react";
import { userThunks } from "../../store/userSlice.ts";
import { useSelector } from "react-redux";
import { selectApp } from "../../store/appSlice.ts";
import SpinnerLoader from "../../components/spinnerLoader/SpinnerLoader.tsx";

function MainLayout() {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(selectApp);

  useEffect(() => {
    dispatch(userThunks.getUser());
  }, []);
  return (
    <div className={styles.wrapper}>
      <div>
        <Header />
      </div>
      <div className={styles.mainSection}>
        {isLoading ? <SpinnerLoader /> : <Outlet />}
      </div>
      <div></div>
    </div>
  );
}

export default MainLayout;
