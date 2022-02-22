import React from "react";
import Profile from "./Profile";
import Carousel from "./Carousel";
import Description from "./Description";
import UserSection from "./UserSection";
import MoreSection from "./MoreSection";
import ThreeBtn from "./ThreeBtn";

export default function Body() {
  return (
    <div className="wrapper">
      <div className="customMd:py-16 customMd:px-40 py-8 px-4 w-full">
        <div className="flex flex-col justify-center items-center m-auto w-full">
          <Profile />
          <Carousel />
          <Description />
          <UserSection />
          <MoreSection />
        </div>
      </div>
    </div>
  );
}
