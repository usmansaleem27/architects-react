import React from "react";
import Top from "../assets/images/Manual_img_b.jpg";
import Right from "../assets/images/Benfits_eng.jpg";

const Benefits = () => {
  return (
    <div>
      <div className="container-fluid g-0">
        <div className="benifits_background mt-lg-5 mt-3">
          <div className="row g-0">
            <div className="col-12">
              <div className="container g-0">
                <div className="row g-0">
                  <div className="col-lg-6 col-12">
                    <div className="benifits_top pt-2">
                      <div className="d-flex justify-content-end">
                        <img
                          src={Top}
                          className="img-fluid mt-lg-5 mt-md-3 mt-3 mb-3"
                        ></img>
                      </div>
                    </div>
                    <div>
                      <div className="p-3">
                        <h1 className="our_way pt-5 pb-5">
                          Benefits of working with us
                        </h1>
                        <p className="fs-5 text-white">
                          Benefits of working with us Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                    <div className="benifits_top">
                      <div className="d-flex justify-content-end">
                        <img
                          src={Top}
                          className="img-fluid mt-lg-5 mt-md-3 mt-3 mb-5"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12"> 
                    <div className="benefits_right pt-5 mt-lg-5  d-none d-lg-block">
                        <div className="ps-3 pe-3 pt-5 d-flex justify-content-center">
                            <img src={Top} className="img-fluid"></img>
                        </div>
                    </div>
                    <div className="benifits_card mt-lg-0 mt-md-4 mt-3 ms-lg-5 me-lg-5 ms-md-3 me-md-3 ms-2 me-2 p-lg-5 p-md-4 p-3">
                        <div className="">
                            <p className="text-black-50">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a className="cards_links pt-3">Learn More</a>

                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
