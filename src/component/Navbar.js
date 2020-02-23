import React, { Component } from "react";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div
          className="navigation"
          title="home"
          onClick={this.props.handleChangeState}
        >
          <i class="fas fa-chart-pie icon"></i>
          <p className="navText">Home</p>
        </div>
        <div
          className="navigation"
          title="balance"
          onClick={this.props.handleChangeState}
        >
          <i class="fas fa-check-square icon"></i>
          <p className="navText">Balance Info</p>
        </div>
        <div
          className="navigation"
          title="transfer"
          onClick={this.props.handleChangeState}
        >
          <i class="fas fa-exchange-alt icon"></i>
          <p className="navText">Transfer Funds</p>
        </div>
        <div
          className="navigation"
          title="viewprofile"
          onClick={this.props.handleChangeState}
        >
          <i class="fas fa-user icon"></i>
          <p className="navText">View Profile</p>
        </div>
        <div
          className="navigation"
          title="viewtransfer"
          onClick={this.props.handleChangeState}
        >
          <i class="fas fa-eye icon"></i>
          <p className="navText">View Transfer</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
