import React, { Component } from "react";
import image from "./MyImage.JPG"

class ProfilePhoto extends Component {
  render() {
    return (
      <>
        <img className="my-profile" src={image}  alt="my-profile" />
      </>
    );
  }
}

export default ProfilePhoto;
