import React from "react";
import "./SideInfo.css";

const SideInfo = () => {
  return (
    <div className="containerTwo">
      <div className="paragragh">
        <div className="GetInTouch">Get In Touch</div>
        <div className="subText">
          Address: West 7th street,Los Angeles, 90017
        </div>
      </div>
      <div className="paragragh">
        <div className="heading">
          <i class="fas fa-phone-alt contentIcon"></i>
          Phone
        </div>
        <div className="subText">+1310 881 4458</div>
      </div>
      <div className="paragragh">
        <div className="heading">
          <i class="far fa-envelope contentIcon"></i>Email
        </div>
        <div className="subText">Info@Confidentcapitalbanc.Com,</div>
        <div className="subText">Support@Confidentcapitalbanc.Com</div>
      </div>
    </div>
  );
};
export default SideInfo;
