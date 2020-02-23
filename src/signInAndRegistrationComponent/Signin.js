import React, { Component } from "react";
import "./Signin.css";
import Header from "./Header";
import Footer from "./Footer";
import FirstMessage from "./FirstMessage";
import Content from "./Content";

class Signin extends Component {
  state = {};
  render() {
    return (
      <div className="Signin">
        <Header />
        <FirstMessage Text="PLEASE LOGIN HERE" />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Signin;
