import styles from "./App.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./store/store.ts";
import { appActions, selectApp } from "./store/appSlice.ts";
import { useSelector } from "react-redux";
import SpinnerLoader from "./components/spinnerLoader/SpinnerLoader.tsx";

function App() {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const dispatch = useAppDispatch();
  const { isInitialized } = useSelector(selectApp);

  useEffect(() => {
    if (jwt) {
      navigate("/bankingonline/dashboard");
    } else {
      navigate("/auth");
    }
    dispatch(appActions.setIsInitialized({ isInitialized: true }));
  }, [jwt, navigate]);

  if (!isInitialized) {
    return <SpinnerLoader />;
  }
  return (
    <div className={styles["app-wrapper"]}>
      <Outlet />
    </div>
  );
}

export default App;
