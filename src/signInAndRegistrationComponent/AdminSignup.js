import React, { Component } from "react";
import "./AdminSignup.css";
import Header from "./Header";
import FirstMessage from "./FirstMessage";
import Footer from "./Footer";
import Input from "./Input";
import Button from "./Button";
import SideInfo from "./SideInfo";

class AdminSignup extends Component {
  state = {};
  render() {
    return (
      <div className="AdminSignup">
        <Header />
        <FirstMessage Text="ADMINISTRATOR PORTA" />
        <div className="Content">
          <div className="containerOne">
            <Input placeholder="Enter ID Number" type="text" />
            <Input placeholder="Password" type="text" />
            <Button buttonText="SIGN IN" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminSignup;
