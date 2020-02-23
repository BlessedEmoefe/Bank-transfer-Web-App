import React from "react";
import "../styles/ViewProfile.css";

const ViewProfile = () => {
  return (
    <div className="viewprofile">
      <div className="ViewHeading">
        <div className="topic">View Details</div>
      </div>
      <div className="ViewBody">
        <div className="ViewBoxContainers">
          <div className="viewtoptext">LastName</div>
          <div className="viewbottomtext">yes</div>
        </div>
        <div className="ViewBoxContainers">
          <div className="viewtoptext">FirstName</div>
          <div className="viewbottomtext">yes</div>
        </div>
        <div className="ViewBoxContainers">
          <div className="viewtoptext">Gender</div>
          <div className="viewbottomtext">yes</div>
        </div>
        <div className="ViewBoxContainers">
          <div className="viewtoptext">Address</div>
          <div className="viewbottomtext">yes</div>
        </div>
        <div className="ViewBoxContainers">
          <div className="viewtoptext">Telephone</div>
          <div className="viewbottomtext">yes</div>
        </div>
        <div className="ViewBoxContainers">
          <div className="viewtoptext">Email</div>
          <div className="viewbottomtext">yes</div>
        </div>
        <div className="ViewBoxContainers">
          <div className="viewtoptext">Account Number</div>
          <div className="viewbottomtext">yes</div>
        </div>
      </div>
    </div>
  );
};
export default ViewProfile;
