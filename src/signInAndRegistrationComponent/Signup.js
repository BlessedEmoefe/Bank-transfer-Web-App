import React, { Component } from "react";
import Header from "./Header";
import FirstMessage from "./FirstMessage";
import Footer from "./Footer";
import Input from "./Input";
import Button from "./Button";
import SideInfo from "./SideInfo";

class Signup extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <FirstMessage
          Text="ONLINE ENROLLMENT"
          handleSubText="NB: Please make sure you have an account with us before you continue this process."
        />
        <div className="Content">
          <div className="containerOne">
            <Input
              placeholder="Enter your Account Name"
              Label="Account Name"
              type="text"
            />
            <Input
              placeholder="Enter Account Username"
              Label="Username"
              type="text"
            />
            <Input placeholder="Enter Password" Label="Password" type="text" />
            <Input
              placeholder="Confirm Password"
              Label="Confirm Password"
              type="text"
            />
            <Input
              placeholder="Enter Access Code"
              Label="Access Code"
              type="text"
            />
            <Button buttonText="ENROLL" />
          </div>
          <SideInfo />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;
