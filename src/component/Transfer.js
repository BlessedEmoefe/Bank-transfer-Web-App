import React from "react";
import "../styles/Transfer.css";
import Input from "./Input";

const Transfer = () => {
  return (
    <div className="transfer">
      <div className="TransferHeading">
        <div className="Transfertopic">Funds Transfer </div>
      </div>
      <div className="TransferBody">
        <form className="form">
          <div className="TransferField">
            <label>Receiver's Bank Name</label>
            <Input placeholder="Enter Receiver's Bank Name" type="text" />
          </div>
          <div className="TransferField">
            <label>Receiver's Name</label>
            <Input placeholder="Enter Receivers Name" type="text" />
          </div>
          <div className="TransferField">
            <label>Receiver's Account Number</label>
            <Input
              placeholder="Enter Receiver's Account Number"
              type="number"
            />
          </div>
          <div className="TransferField">
            <label>SWIFT/ABA Routing Number</label>
            <Input placeholder="Enter SWIFT/ABA Routing Number" type="number" />
          </div>
          <div className="TransferField">
            <label>Amount to Transfer</label>
            <Input placeholder="Enter Amount to Transfer" type="number" />
          </div>
          <div className="TransferField">
            <label>Fund Transfer Option</label>
            <Input placeholder="Enter " type="text" />
          </div>
          <div className="TransferField">
            <label>Select Country</label>
            <select></select>
          </div>
          <div className="TransferField">
            <label>Transfer Description</label>
            <textarea rows={6} cols={58} placeholder="transfer" type="text" />
          </div>
          <div className="TransferField">
            <input className="submit" type="submit" value="Transfer" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Transfer;
