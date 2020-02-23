import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  state = {};
  render() {
    const { Label, placeholder, question, type } = this.props;
    return (
      <div className="inputComponent">
        {question ? <label className="question">{question}</label> : null}
        {Label ? <label className="myLabel">{Label}:</label> : null}
        <input className="myInput" placeholder={placeholder} type={type} />
      </div>
    );
  }
}

export default Input;
