import React, { Component } from "react";
import "../styles/Content.css";
import Balance from "./Balance";
import ContentHeader from "./ContentHeader";
import Footer from "./Footer";
import DashBoardInfo from "./DashBoardInfo";
import Transfer from "./Transfer";
import ViewProfile from "./ViewProfile";
import ViewTransfer from "./ViewTransfer";

class Content extends Component {
  handleNavigationClick = () => {};
  render() {
    return (
      <div className="content">
        <div className="contentItems">
          <ContentHeader Text={this.props.Text} />
          <DashBoardInfo />
          <div className="contextSection">
            {this.props.handleToggleDisplay()}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Content;
