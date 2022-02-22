import React from "react";
import { FaComment, FaShare } from "react-icons/fa";

const ThreeBtn = () => {
  return (
    <div className="space-x-2 flex customMd:flex-col flex-row justify-center items-center">
      <button className="wrapper-tab-btn">
        <FaShare className="h-4 w-4" />
      </button>
      <button className="wrapper-tab-btn">
        <FaComment className="h-4 w-4" />
      </button>
      <button className="wrapper-tab-btn">
        <span className="material-icons text-lg">info</span>
      </button>
    </div>
  );
};

export default ThreeBtn;
