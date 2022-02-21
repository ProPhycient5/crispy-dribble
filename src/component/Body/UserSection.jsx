import React from "react";
import ProfilePic from "../../Asset/profile-pic.JPG";

export default function UserSection() {
  return (
    <div className="footerGrid:mt-16 mt-8 space-y-2 flex flex-col justify-center items-center text-center w-full text-sm text-gray-900">
      <div className="flex flex-row items-center w-full">
        <span className="w-full border border-gray-200"></span>
        <img
          src={ProfilePic}
          className="h-20 w-24 cursor-pointer mx-3"
          alt="profile-pic"
        />
         <span className="w-full border border-gray-200"></span>
      </div>
      <a href="/" className="text-black text-lg font-medium">Eren ✦ </a>
      <span>Let's create something amazing together ✦</span>
      <button className="main-btn">
        <span className="material-icons text-sm mr-1">email</span>
        Hire me
      </button>
    </div>
  );
}
