import React from "react";

export default function Header() {
  return (
      <div className="flex flex-row justify-between items-center h-16 w-full border border-white px-14">
        <div className="flex flex-row justify-center items-center">
          <div className="header-tab">
            <span>dribble</span>
          </div>
          <div className="header-tab">
            <span>Inspiration</span>
          </div>
          <div className="header-tab">
            <span>Find Work</span>
          </div>
          <div className="header-tab">
            <span>Go Pro</span>
          </div>
          <div className="header-tab">
            <span>Marketplace</span>
          </div>
          <div className="header-tab">
            <span>Hire Designers</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center text-base font-inter">
          <div className="header-tab">
            <span>Sign in / Sign up</span>
          </div>
          <div className="header-tab">
            <button class="btn btn-secondary btn-sm normal-case">Start a free project</button>
          </div>
        </div>
      </div>
  );
}
