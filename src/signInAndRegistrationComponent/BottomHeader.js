import React from "react";
// import styles from "./BottomHeader.module.css";
import "./BottomHeader.css";

const BottomHeader = () => {
  return (
    <div className="bottomHeader">
      <div className="left">
        <div className="nav navig">
          PERSONAL <i class="far fa-arrow-alt-circle-up navbarIcon"></i>
        </div>
        <div className="nav">
          BUSINESS <i class="far fa-arrow-alt-circle-up navbarIcon"></i>
        </div>
        <div className="nav">
          CORPRATE<i class="far fa-arrow-alt-circle-up navbarIcon"></i>
        </div>
        <div className="nav">
          WHO WE ARE <i class="far fa-arrow-alt-circle-up navbarIcon"></i>
        </div>
        <div className="nav">
          CONTACT <i class="far fa-arrow-alt-circle-up navbarIcon"></i>
        </div>
        <div className="nav navig">
          INTERNET BANKING <i class="far fa-arrow-alt-circle-up navbarIcon"></i>
        </div>
      </div>
      <div className="right">
        <i class="fab fa-linkedin-in socialIcon"></i>
        <i class="fab fa-facebook-f socialIcon"></i>
        <i class="fab fa-twitter socialIcon"></i>
        <i class="fab fa-youtube socialIcon"></i>
        <i class="fab fa-behance socialIcon"></i>
      </div>
    </div>
  );
};
export default BottomHeader;
