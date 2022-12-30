import React from "react";
import ENGINEER11 from "../assets/images/ENGINEER11.png";

const FrontHome = () => {
  return (
    <div>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="front_background pt-lg-5 pt-md-3 pt-2 pb-lg-5 pb-md-3 pb-3">
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-12">
                    <h1 className="pt-lg-5 pb-lg-5 pb-md-3 pb-2 pt-md-3 pt-2">
                      Architects Co
                    </h1>
                    <p className="pb-lg-5 pb-md-3 pb-3">
                      Accumsan in nisl nisi scelerisque. Sapien nec sagittis
                      aliquam malesuada bibendum arcu vitae. Maecenas ultricies
                      mi eget mauris pharetra et ultrices neque.
                    </p>
                    <button
                      type="button"
                      className="read_button pt-2 pb-2 ps-4 pe-4 rounded-2"
                    >
                      Read More
                    </button>
                  </div>
                  <div className="col-lg-7 col-12">
                    <div className="d-lg-flex justify-content-end">
                      <img
                        src={ENGINEER11}
                        className="img-fluid pt-lg-0 pt-3 pb-3"
                        alt=""
                      ></img>
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

export default FrontHome;
