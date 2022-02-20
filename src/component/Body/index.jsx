import React from "react";
import CoverPhoto from "../../Asset/konark.jpg";
import CoverPhoto2 from "../../Asset/barie.jpg";

export default function Body() {
  return (
    <div className="wrapper">
      <img src={CoverPhoto} alt="konarka" />
      <img src={CoverPhoto2} alt="barie" />
      {/* <div className="customMd:py-16 customMd:px-28 py-8 px-4 w-full">
        <div className="flex justify-center items-center m-auto w-full">
           <div className="profile-part"></div>
           <div className="carousel"></div>
           <div className="description"></div>
           <div className="user-part"></div>
           <div className="footer-image"></div>
           <div className="footer-btn"></div>
        </div>
      </div> */}
    </div>
  );
}
