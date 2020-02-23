import React from "react";
import styles from "./TopHeader.module.css";
import newLogo from "../asset/newLogo.png";
import "../fontawesome-free-5.10.0-web/css/all.css";

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.logo}>
        <img src={newLogo} height="100%" width="100%" />
      </div>
      <div className={styles.headerInfoContainer}>
        <div className={styles.headerInfo}>
          <i
            class="far fa-clock"
            style={{ fontSize: "30px", color: "blue" }}
          ></i>

          <div className={styles.text}>
            <div className={styles.topText}>Opening Time</div>
            <div className={styles.bottomText}>Mon-Sat: 9.00-18.00</div>
          </div>
        </div>

        <div className={styles.headerInfo}>
          <i
            class="far fa-envelope"
            style={{ fontSize: "30px", color: "blue" }}
          ></i>

          <div className={styles.text}>
            <div className={styles.topText}>Email Address</div>
            <div className={styles.bottomText}>info@pureguaranty.com</div>
          </div>
        </div>

        <div className={styles.headerInfo}>
          <i
            class="fas fa-phone-alt"
            style={{ fontSize: "30px", color: "blue" }}
          ></i>

          <div className={styles.text}>
            <div className={styles.topText}>Phone</div>
            <div className={styles.bottomText}>+1 917 4809 074</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
