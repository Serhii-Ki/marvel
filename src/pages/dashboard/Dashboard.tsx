import React from "react";
import wallet from "../../assets/icons/wallet.svg";
import withdraw from "../../assets/icons/moneyWithdraw.svg";
import qr from "../../assets/icons/qrCode.svg";
import scan from "../../assets/icons/scanCode.svg";

import styles from "./dashboard.module.css";

function Dashboard(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topPanel}>
        <div className={styles.topIcons}>
          <div className={styles.item}>
            <img src={wallet} alt="wallet" className={styles.icons} />
            <span>wallet</span>
          </div>
          <div className={styles.item}>
            <img src={withdraw} alt="withdraw" className={styles.icons} />
            <span>withdrawal</span>
          </div>
          <div className={styles.item}>
            <img src={qr} alt="qr" className={styles.icons} />
            <span>qr code</span>
          </div>
          <div className={styles.item}>
            <img src={scan} alt="scan" className={styles.icons} />
            <span>scan code</span>
          </div>
        </div>
        <div className={styles.balance}>
          <p>Balance in the wallet</p>
          <p className={styles.bold}>$ 400</p>
        </div>
      </div>
      <div className={styles.mainPanel}></div>
      <div className={styles.slider}></div>
    </div>
  );
}

export default Dashboard;
