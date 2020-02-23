import React from "react";
import "../styles/ContentHeader.css";

const ContentHeader = ({ Text }) => {
  return (
    <div className="contentHeader">
      <p className="text">{Text}</p>
    </div>
  );
};
export default ContentHeader;
