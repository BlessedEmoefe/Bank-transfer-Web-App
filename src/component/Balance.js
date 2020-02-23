import React, { Component } from "react";
import "../styles/Balance.css";

class Balance extends Component {
  state = {};
  render() {
    return (
      <div className="balance">
        <div className="balanceHeading">
          <div className="topic">Balance Info</div>
        </div>
        <div className="balanceBody">
          <div className="balanceBoxContainers">
            <div className="balancetoptext">Account Number</div>
            <div className="balancebottomtext">yes</div>
          </div>
          <div className="balanceBoxContainers">
            <div className="balancetoptext">Total Deposited</div>
            <div className="balancebottomtext">yes</div>
          </div>
          <div className="balanceBoxContainers">
            <div className="balancetoptext">Total Transfer</div>
            <div className="balancebottomtext">yes</div>
          </div>
          <div className="balanceBoxContainers">
            <div className="balancetoptext">Overdraft</div>
            <div className="balancebottomtext">yes</div>
          </div>
          <div className="balanceBoxContainers">
            <div className="balancetoptext">Amount</div>
            <div className="balancebottomtext">yes</div>
          </div>
          <div className="balanceBoxContainers">
            <div className="balancetoptext">Total Debited</div>
            <div className="balancebottomtext">yes</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Balance;
