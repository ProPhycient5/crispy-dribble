import React from "react";


export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center h-16 w-full border-b border-gray-200 px-2">
      <div className="flex flex-row justify-center items-center h-full">
        <div className="header-tab">
          <span className="cursor-pointer">dribble</span>
        </div>
        <div className="header-tab">
          <span className="cursor-pointer">Inspiration</span>
        </div>
        <div className="header-tab">
          <span className="cursor-pointer">Find Work</span>
        </div>
        <div className="header-tab">
          <span className="cursor-pointer">Go Pro</span>
        </div>
        <div className="header-tab">
          <span className="cursor-pointer">Marketplace</span>
        </div>
        <div className="header-tab">
          <span className="cursor-pointer">Hire Designers</span>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center h-full">
        <div className="pt-2">
          <i class="material-icons cursor-pointer text-gray-500">search</i>
        </div>
        <div className="header-tab px-2 hover:text-gray-500">
          <span className="cursor-pointer">Sign in / Sign up</span>
        </div>
        <div className="header-tab">
          <button class="main-btn">Start a free project</button>
        </div>
      </div>
    </div>
  );
}
