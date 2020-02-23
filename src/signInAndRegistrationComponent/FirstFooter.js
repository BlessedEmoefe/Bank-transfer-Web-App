import React from "react";
import "./FirstFooter.css";

const FirstFooter = () => {
  return (
    <div className="firstFooter">
      <div className="firstfootertext">
        <span className="textone">
          We Care For <span className="texttwo">Our Customers Always, </span>Our
          Customers Are Our Focus
        </span>

        <button className="FooterButton">
          <i class="fas fa-location-arrow arrowIcon"></i> Contact us
        </button>
      </div>
    </div>
  );
};
export default FirstFooter;
