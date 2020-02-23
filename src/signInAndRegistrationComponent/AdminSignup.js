import React, { Component } from "react";
import "./AdminSignup.css";
import Header from "./Header";
import FirstMessage from "./FirstMessage";
import Footer from "./Footer";

class AdminSignup extends Component {
  state = {};
  render() {
    return (
      <div className="AdminSignup">
        <Header />
        <FirstMessage Text="ADMINISTRATOR PORTA" />
        <Footer />
      </div>
    );
  }
}

export default AdminSignup;
