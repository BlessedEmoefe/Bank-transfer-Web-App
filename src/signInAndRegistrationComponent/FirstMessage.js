import React from "react";
import "./FirstMessage.css";

const FirstMessage = ({ Text, handleSubText }) => {
  return (
    <div className="firstMessage">
      <div className="firstMessageText">{Text}</div>

      <div className="firstMessageLineOne"></div>
      <div className="firstMessageLineTwo"></div>
      <div>{handleSubText}</div>
    </div>
  );
};
export default FirstMessage;
