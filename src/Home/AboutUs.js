import React from "react";
import ENGINEER22 from "../assets/images/ENGINEER22.PNG";

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-lg-5 pt-lg-5 mt-md-3 pt-md-3 mt-3 pt-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-lg-flex justify-content-end">
                <img src={ENGINEER22} alt="" className="img-fluid"></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <div className="about_content pe-lg-5 me-lg-5">
              <h1 className="pt-lg-5 pt-md-3 pt-3 pb-lg-4 pb-md-3 pb-3">About Us</h1>
              <p className="pb-3">
                About Us Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>
              <p className="pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <button
                type="button"
                className="read_button mt-3 pt-2 pb-2 ps-4 pe-4 rounded-2 mb-3"
              >
                Book a Call
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
