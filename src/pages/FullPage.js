import React, { Component } from "react";
import "../styles/fullPage.css";
import Header from "../component/Header";
import Body from "../component/Body";

class FullPage extends Component {
  state = {};
  render() {
    return (
      <div className="fullPage">
        <Header />
        <Body />
      </div>
    );
  }
}

export default FullPage;
