import React from "react";
import ADV11 from "../assets/images/Tractorfactory.jpg";

const EngineerAdv = () => {
  return (
    <div>
        {/* <div className="eng_adv_img d-none d-lg-block">
          <img src={ADV11} alt="my-image" className="img-fluid"></img>
        </div> */}
        <div className="card_numbers d-flex flex-md-row flex-wrap justify-content-center">
      <div className="rect_box">
                    <div className="custom_ent_circles">
                        <h1 className="text-white d-flex align-items-center h-100 justify-content-center">01</h1>
                    </div>
                    <p className="pt-5 pb-3">Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Magna fermentum iaculis eu non diam phasellus vestibulum. Et tortor consequat id porta nibh venenatis cras sed.</p>
                    <a className="cards_links pt-3">More</a>
      </div>
      <div className="rect_box">
                    <div className="custom_ent_circles">
                        <h1 className="text-white d-flex align-items-center h-100 justify-content-center">02</h1>
                    </div>
                    <p className="pt-5 pb-3">Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Magna fermentum iaculis eu non diam phasellus vestibulum. Et tortor consequat id porta nibh venenatis cras sed.</p>
                    <a className="cards_links pt-3">More</a>
      </div>
      <div className="rect_box">
                    <div className="custom_ent_circles">
                        <h1 className="text-white d-flex align-items-center h-100 justify-content-center">03</h1>
                    </div>
                    <p className="pt-5 pb-3">Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Magna fermentum iaculis eu non diam phasellus vestibulum. Et tortor consequat id porta nibh venenatis cras sed.</p>
                    <a className="cards_links pt-3">More</a>
      </div>
    </div>
    </div>
  );
};

export default EngineerAdv;
