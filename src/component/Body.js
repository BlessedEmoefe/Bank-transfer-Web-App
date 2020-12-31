import React, { Component } from "react";
import "../styles/Body.css";
import Profile from "./Profile";
import Content from "./Content";
import Balance from "./Balance";
import Transfer from "./Transfer";
import ViewProfile from "./ViewProfile";
import ViewTransfer from "./ViewTransfer";
import Home from "./Home";

class Body extends Component {
  state = {
    title: null
  };
  handleChangeState = e => {
    this.setState({ title: e.target.title });
  };

  handleToggleDisplay = () => {
    if (this.state.title === "home") return <Home />;
    else if (this.state.title === "balance") return <Balance />;
    else if (this.state.title === "transfer") return <Transfer />;
    else if (this.state.title === "viewprofile") return <ViewProfile />;
    else if (this.state.title === "viewtransfer") return <ViewTransfer />;
    else return <Balance />;
  };

  handleToggleHeaderText = () => {
    if (this.state.title === "home") return "Home";
    else if (this.state.title === "balance") return "Balance";
    else if (this.state.title === "transfer") return "Transfer";
    else if (this.state.title === "viewprofile") return "ViewProfile";
    else if (this.state.title === "viewtransfer") return "ViewTransfer";
    else return "Balance";
  };
  render() {
    return (
      <div className="body">
        <Profile handleChangeState={this.handleChangeState} />

        <Content
          handleChangeState={this.handleChangeState}
          handleToggleDisplay={this.handleToggleDisplay}
          Text={this.handleToggleHeaderText()}
        />
      </div>
    );
  }
}

export default Body;
