import React, { Component } from "react";
import "./Signin.css";
import Header from "./Header";
import Footer from "./Footer";
import FirstMessage from "./FirstMessage";
import SideInfo from "./SideInfo";
import Input from "./Input";
import { Link } from "react-router-dom";
import Button from "./Button";

class Signin extends Component {
  state = {};
  render() {
    return (
      <div className="Signin">
        <Header />
        <FirstMessage Text="PLEASE LOGIN HERE" />
        {/* this is the Content section */}
        <div className="Content">
          <div className="containerOne">
            <Input
              placeholder="Enter Security Answer"
              question="Security Questions: What's your favorite color"
              type="text"
            />
            <Input placeholder="Enter Account Username" Label="" type="text" />
            <Input placeholder="Enter Password" Label="" type="number" />
            <Input placeholder="Enter Access Code" Label="" type="text" />
            <Button buttonText="SIGN IN" />
            <div>
              Don't have an account?
              <Link to="/signup">Create Online Account</Link>
            </div>
          </div>
          <SideInfo />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signin;
