import React from "react";
import "../styles/ViewTransfer.css";

const ViewTransfer = () => {
  return (
    <div className="viewTransfer">
      <div className="transferHeading">
        <div className="topic">Transfer Details</div>
      </div>
      <div className="boxForViewTransfer">
        <div className="firstBox">
          <div className="top">Date</div>
          <div className="bottom"></div>
        </div>
        <div className="firstBox">
          <div className="top">Name</div>
          <div className="bottom"></div>
        </div>
        <div className="firstBox">
          <div className="top">Amount</div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
};
export default ViewTransfer;
