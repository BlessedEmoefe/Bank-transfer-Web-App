import React from "react";
import "../styles/DashBoardInfo.css";

const DashBoardInfo = () => {
  return (
    <div className="dashBoardInfo">
      <div className="InfoBoxForDetails">
        <p className="info">Info</p>
        <p className="infoQuestions">
          FullName:<p className="details">yesssessssssssssss</p>
        </p>
        <p className="infoQuestions">
          Account Number:<p className="details">yessssssesssssssss</p>
        </p>
        <p className="infoQuestions">
          Phone:<p className="details">yessssssesssssssss</p>
        </p>
        <p className="infoQuestions">
          Email:<p className="details">yesssssessssssssss</p>
        </p>
      </div>
      <div className="InfoBoxes">
        <p className="text1">Current Balance</p>
        <div className="text2" style={{ color: "green" }}>
          <div style={{ display: "flex" }}>
            <i class="far fa-arrow-alt-circle-up icons"></i>
            <i class="fas fa-dollar-sign"></i>
          </div>

          <p>Numbers</p>
        </div>
        <p className="text3">22% From Last 24 Hours</p>
      </div>

      <div className="InfoBoxes">
        <p className="text1">Available Balance</p>
        <div className="text2" style={{ color: "rgb(118,122,249)" }}>
          <div style={{ display: "flex" }}>
            <i class="far fa-arrow-alt-circle-up icons"></i>
            <i class="fas fa-dollar-sign"></i>
          </div>

          <p>Numbers</p>
        </div>
        <p className="text3">42% Orders in Last 10 months</p>
      </div>
      <div className="InfoBoxes">
        <p className="text1">Total Amount Transfer</p>
        <div className="text2" style={{ color: "red" }}>
          <div style={{ display: "flex" }}>
            <i class="far fa-arrow-alt-circle-up icons"></i>
            <i class="fas fa-dollar-sign"></i>
          </div>

          <p>Numbers</p>
        </div>
        <p className="text3">35% From Last 1 Month</p>
      </div>
    </div>
  );
};
export default DashBoardInfo;
