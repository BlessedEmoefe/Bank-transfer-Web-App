import React, { Component } from "react";
import "../styles/Input.css";

class Input extends Component {
  state = {};
  render() {
    const { placeholder, type, value } = this.props;
    return <input className="input" placeholder={placeholder} type={type} />;
  }
}

export default Input;
