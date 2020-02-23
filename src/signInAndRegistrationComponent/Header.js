import React from "react";
import styles from "./Header.module.css";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const Header = () => {
  return (
    <div className={styles.header}>
      <TopHeader />
      <BottomHeader />
    </div>
  );
};
export default Header;
