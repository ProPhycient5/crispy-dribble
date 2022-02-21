import React from "react";
import CoverPhoto from "../../Asset/konark.jpg";
import CoverPhoto2 from "../../Asset/barie.jpg";
import Profile from "./Profile";

export default function Body() {
  return (
    <div className="wrapper">
      {/* <img src={CoverPhoto} alt="konarka" />
      <img src={CoverPhoto2} alt="barie" /> */}
      <div className="customMd:py-16 customMd:px-40 py-8 px-4 w-full">
        <div className="flex flex-col justify-center items-center m-auto w-full">
          <Profile />
          <div className="carousel"></div>
          <div className="description"></div>
          <div className="user-part"></div>
          <div className="footer-image"></div>
          <div className="footer-btn"></div>
        </div>
      </div>
    </div>
  );
}
