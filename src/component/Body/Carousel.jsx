import React from "react";
import CoverPhoto1 from "../../Asset/carsoul-1.JPG";
import CoverPhoto2 from "../../Asset/carsoul-2.JPG";
import CoverPhoto3 from "../../Asset/carsoul-3.JPG";
import CoverPhoto4 from "../../Asset/carsoul-4.JPG";
import CoverPhoto5 from "../../Asset/carsoul-5.JPG";

export default function Carousel() {
  return (
    <div className="flex flex-col mt-10 w-full">
      <img src={CoverPhoto1} alt="slide-1" className="w-full" />
      <div className="flex flex-row justify-center items-center w-full pt-10 pb-0 px-4 wrapperMd:space-x-6 space-x-3">
        <img src={CoverPhoto1} alt="slide-1" className="w-16 h-12 outline outline-offset-2 outline-pink-500 rounded" />
        <img src={CoverPhoto2} alt="slide-2" className="w-16 h-12" />
        <img src={CoverPhoto3} alt="slide-3" className="w-16 h-12" />
        <img src={CoverPhoto4} alt="slide-4" className="w-16 h-12" />
        <img src={CoverPhoto5} alt="slide-5" className="wrapperMd:block hidden w-16 h-12" />
      </div>
    </div>
  );
}
