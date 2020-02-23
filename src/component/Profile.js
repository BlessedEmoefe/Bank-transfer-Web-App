import React, { Component } from "react";
import "../styles/Profile.css";
import ProfileAndProfileImage from "./ProfileAndProfileImage";
import Navbar from "./Navbar";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="ProfileContainer">
        <div className="profile">
          <ProfileAndProfileImage
            ProfileClassName="profile-class-name"
            height="60%"
            width="50%"
            color="rgb(29,30,58)"
          />
        </div>
        <Navbar handleChangeState={this.props.handleChangeState} />
      </div>
    );
  }
}

export default Profile;
