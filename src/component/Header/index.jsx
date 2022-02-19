import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-16 w-full border-b border-gray-200 px-2">
      {/* show when screen size decrease to 919px */}
      <div className="customMd:hidden header-tablet">
        <div className="header-tab">
          <span class="material-icons">menu</span>
        </div>
        <div className="header-tab px-2">
          <span className="dribble-text">dribbble</span>
        </div>
        <div className="header-tab px-2 hover:text-gray-500">
          <span className="cursor-pointer">Sign in</span>
        </div>
      </div>

      {/* show when screen size is more than 919px */}
      <div className="customMd:header-container hidden">
        <div className="header-tab px-2">
          <span className="dribble-text">dribbble</span>
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

      <div className="customMd:header-container hidden">
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
