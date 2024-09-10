import React from "react";

import styles from "./dashboard.module.css";

function Dashboard(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topPanel}>
        <div className={styles.topIcons}></div>
        <div className={styles.balance}>
          <p>Balance in the wallet</p>
          <p>$400</p>
        </div>
      </div>
      <div className={styles.mainPanel}></div>
      <div className={styles.slider}></div>
    </div>
  );
}

export default Dashboard;
