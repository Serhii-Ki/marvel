import { RotatingLines } from "react-loader-spinner";

import styles from "./spinnerLoader.module.css";
function SpinnerLoader() {
  return (
    <div className={styles.spinner}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default SpinnerLoader;
