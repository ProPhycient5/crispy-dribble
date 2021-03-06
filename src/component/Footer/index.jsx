import React from "react";
import DribbleLogo from "../../Asset/dribble_image.JPG";
import { GrDribbble } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import Lists from "./Lists";

export default function Footer() {
  return (
    <div className="footer w-full">
      <div className="desktop:px-16 footerGrid:px-14 px-8 w-full">
        <div className="footer-main">
          <div className="mr-8">
            <img
              src={DribbleLogo}
              className="h-8 cursor-pointer"
              alt="dribble"
            />
            <div className="my-5 max-w-176 text-gray-800">
              Dribbble is the world’s leading community for creatives to share,
              grow, and get hired.
            </div>
            <div className="flex flex-row">
              <GrDribbble className="w-4 h-4 cursor-pointer" />
              <BsTwitter className="w-4 h-4 ml-3 cursor-pointer" />
              <ImFacebook2 className="w-4 h-4 ml-3 cursor-pointer" />
              <FaInstagram className="w-5 h-5 ml-3 -mt-0.5 cursor-pointer" />
              <FaPinterest className="w-4 h-5 ml-3 -mt-0.5 cursor-pointer" />
            </div>
          </div>
          <Lists />
        </div>

        <div className="footer-lower">
          <div>© 2022 Dribbble. All rights reserved.</div>
          <div className="flex footerMd:flex-row flex-col justify-center">
            <div className="footerMd:block hidden">
              <span className="text-black font-medium">17,546,410</span>
              &nbsp;shots dribbbled
            </div>
            &nbsp;
            <img
              className="self-center"
              width="24px"
              height="24px"
              alt="Dribbble ball icon"
              src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg"
            />
          </div>
          <div className="footerMd:hidden block pt-2">
            <span className="text-black font-medium">17,546,410</span>
            &nbsp;shots dribbbled
          </div>
        </div>
      </div>
    </div>
  );
}
