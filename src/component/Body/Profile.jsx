import React from "react";
import ProfilePic from "../../Asset/profile-pic.JPG";

export default function Profile() {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row justify-center items-center">
        <img
          src={ProfilePic}
          className="h-12 w-12 cursor-pointer"
          alt="profile-pic"
        />
        <div className="flex flex-col items-center">
          <span className="text-black font-inter font-bold text-base">
            Onboarding #Exploration
          </span>
          <div className="flex flex-row space-x-1">
            <span>Eren ✦</span>
            <span>•</span>
            <span>Follow</span>
            <span>•</span>
            <span>Hire Me</span>
          </div>
        </div>
      </div>
      <div className="button-section"></div>
    </div>
  );
}
