import React from "react";
import FooterImage1 from "../../Asset/fImage-1.JPG";
import FooterImage2 from "../../Asset/fImage-2.JPG";
import FooterImage3 from "../../Asset/fImage-3.JPG";
import FooterImage4 from "../../Asset/fImage-4.JPG";

export default function MoreSection() {
  return (
    <div className="w-full mt-16">
      <div className="flex justify-between items-end w-full">
        <h4 className="text-black text-lg font-medium">More by Eren ✦ </h4>
        <a href="/" className="text-sm text-pinky">
          View profile
        </a>
      </div>
      <div className="mt-4 grid gap-8 desktop:grid-cols-4 cardMd:grid-cols-2 grid-cols-1 w-full">
        <img src={FooterImage1} alt="footer-mage-1" />
        <img src={FooterImage2} alt="footer-mage-2" />
        <img src={FooterImage3} alt="footer-mage-3" />
        <img src={FooterImage4} alt="footer-mage-4" />
      </div>
    </div>
  );
}
