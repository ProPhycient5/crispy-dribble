import React from "react";
import CoverPhoto from "../../Asset/sample_foto.jpg";

export default function Body() {
  return (
    <div className="wrapper">
      <img src={CoverPhoto} alt="paris photo" />
    </div>
  );
}
