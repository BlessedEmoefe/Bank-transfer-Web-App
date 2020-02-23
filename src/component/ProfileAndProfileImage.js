import React, { Component } from "react";
import "../styles/ProfileAndProfileImage.css";
import ProfileImage from "../asset/profile.PNG";

class ProfileAndProfileImage extends Component {
  state = {
    toggle: false
  };

  toggleLogout = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    let { height, width, ProfileClassName } = this.props;
    return (
      <div className={ProfileClassName}>
        <img
          src={ProfileImage}
          className="profileImage"
          style={{ height: height, width: width }}
        />
        <div
          className="ProfileNameAndDropdown"
          onClick={this.toggleLogout}
          style={{ color: this.props.color }}
        >
          <p className="profileName">Patrick Williams</p>
          <i class="fas fa-sort-down"></i>
        </div>
        {this.state.toggle ? <div className="logout">Logout</div> : null}
      </div>
    );
  }
}

export default ProfileAndProfileImage;
