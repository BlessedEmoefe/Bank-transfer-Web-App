import React, { Component } from "react";
import Header from "./Header";
import FirstMessage from "./FirstMessage";
import Footer from "./Footer";

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
        <Footer />
      </div>
    );
  }
}

export default Signup;
