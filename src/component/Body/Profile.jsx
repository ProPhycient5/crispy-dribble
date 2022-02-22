import React from "react";
import ProfilePic from "../../Asset/profile-pic.JPG";
import ThreeBtn from "./ThreeBtn";

export default function Profile() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-center items-center">
          <div className="flex customMd:flex-row flex-col items-center customMd:space-x-2">
            <span className="text-black font-inter font-black text-base mb-2 customMd:hidden block">
              Onboarding #Exploration
            </span>
            <div className="flex flex-row items-center space-x-3 -ml-12">
              <img
                src={ProfilePic}
                className="h-14 w-14 cursor-pointer"
                alt="profile-pic"
              />
              <div>
                <span className="text-black font-inter font-black text-sm customMd:block hidden">
                  Onboarding #Exploration
                </span>
                <div className="flex customMd:flex-row flex-col customMd:space-x-1 space-x-0 fs-14px text-gray-800">
                  <span>Eren ✦</span>
                  <span className="customMd:block hidden">•</span>
                  <div className="space-x-1 customMd:my-0 my-2">
                    <span>Follow</span>
                    <span>•</span>
                    <span className="text-pinky">Hire Me</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="customMd:flex flex-row justify-center items-center space-x-2 hidden">
          <button className="main-btn text-black bg-gray-100 hover:bg-gray-200 border-none">
            Save
          </button>
          <button className="main-btn ">
            <span className="material-icons text-sm mr-1">favorite</span>
            Like
          </button>
        </div>
      </div>

      <div className="customMd:hidden flex justify-between items-center my-2 w-full">
        <div className="space-x-2 flex justify-center items-center">
          <button className="wrapper-tab-btn">
            <span className="material-icons text-lg">note_add</span>
          </button>
          <button className="wrapper-tab-btn">
            <span className="material-icons text-lg">favorite</span>
          </button>
        </div>
        <ThreeBtn />
      </div>
    </div>
  );
}
