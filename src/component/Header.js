import React, { Component } from "react";
import "../styles/header.css";
import Logo from "../asset/logo.png";
import ProfileAndProfleImage from "./ProfileAndProfileImage";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="leftSection">
          <div className="logoContainer">
            <img src={Logo} className="logo" alt="" />
            <p className="logoText">Pure Guaranty</p>
          </div>
          <div className="Menu-icon">
            <i class="fas fa-bars"></i>
          </div>
        </div>
        <div className="rightSection">
          <i class="fas fa-qrcode"></i>
          <ProfileAndProfleImage
            ProfileClassName="headerProfile-logout"
            height="100%"
            width="20%"
            color="white"
          />
        </div>
      </div>
    );
  }
}
export default Header;
