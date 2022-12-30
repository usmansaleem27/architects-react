import React from "react";
import ADV11 from "../assets/images/Tractorfactory.jpg";
import Rectbox from "../share/Rectbox";

const EngineerAdv = () => {
  return (
    <div>
        {/* <div className="eng_adv_img d-none d-lg-block">
          <img src={ADV11} alt="my-image" className="img-fluid"></img>
        </div> */}
        <div className="card_numbers d-flex flex-md-row flex-wrap justify-content-center">
      <Rectbox countB="01"/>
      <Rectbox countB="02"/>
      <Rectbox countB="03"/>
    </div>
    </div>
  );
};

export default EngineerAdv;
