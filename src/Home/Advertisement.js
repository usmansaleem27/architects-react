import React from "react";
import ADVCARD from '../assets/images/ADVCARDS.jpg'

const Advertisement = () => {
  return (
    <div>
      <div className="container-fluid g-0">
        <div className="adv_cont">
          <div className="row g-0">
            <div className="col-12">
              <div className="container g-0">
                <div className="row g-0">
                  <div className="col-12">
                    <div className="text-center">
                      <h1 className="our_way ps-2 pe-2">Our Way</h1>
                      <p className="fs-5 text-white">
                        Our team is committed to making a positive impact for
                        our clients,<br></br> their users, and our community.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="container g-0">
                      <div className="row g-0">
                        <div className="col-lg-3 col-md-4 col-12">
                          <div className="pt-lg-5 pt-md-3 pt-3 ps-2 pe-2">
                            <h1 className="text-white our_way pb-3 ">2019</h1>
                            <div className="cards_custom_circles"></div>
                            <p className="text-white text-justify pt-lg-5 pt-md-3 pt-3 pb-3">
                              Podcasting operational change management inside of
                              workflows to establish a framework. Taking
                              seamless key performance indicators offline to
                              maximise the long tail
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12">
                          <div className="pt-lg-5 pt-md-3 pt-3 ps-2 pe-2">
                            <h1 className="text-white our_way pb-3 ">2020</h1>
                            <div className="cards_custom_circles"></div>
                            <p className="text-white text-justify pt-lg-5 pt-md-3 pt-3 pb-3">
                              Podcasting operational change management inside of
                              workflows to establish a framework. Taking
                              seamless key performance indicators offline to
                              maximise the long tail
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12">
                          <div className="pt-lg-5 pt-md-3 pt-3 ps-2 pe-2">
                            <h1 className="text-white our_way pb-3 ">2021</h1>
                            <div className="cards_custom_circles"></div>
                            <p className="text-white text-justify pt-lg-5 pt-md-3 pt-3 pb-3">
                              Podcasting operational change management inside of
                              workflows to establish a framework. Taking
                              seamless key performance indicators offline to
                              maximise the long tail
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12">
                          <div className="pt-lg-5 pt-md-3 pt-3 ps-2 pe-2">
                            <h1 className="text-white our_way pb-3 ">2022</h1>
                            <div className="cards_custom_circles"></div>
                            <p className="text-white text-justify pt-lg-5 pt-md-3 pt-3 pb-3">
                              Podcasting operational change management inside of
                              workflows to establish a framework. Taking
                              seamless key performance indicators offline to
                              maximise the long tail
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="vision_view">
                      <div className="row g-0">
                        <div className="col-lg-6 col-12">
                          <div className="vision_card rounded-4 ps-lg-3 pe-lg-3 ps-2 pe-2 pt-3 pb-3 mt-lg-5 mt-md-3 mt-3 ms-2 me-2">
                            <div>
                              <h1 className="vision_text_h ps-3 pe-3 pt-3 pb-3">
                                Your vision plus our expertise
                              </h1>
                              <p className="ps-3 pe-3 pt-3 pb-3">
                                Egestas purus viverra accumsan in nisl nisi.
                                Enim nec dui nunc mattis enim ut. Consequat
                                interdum varius sit amet mattis vulputate enim
                                nulla. Fusce ut placerat orci nulla pellentesque
                                dignissim enim sit amet.
                              </p>
                              <button
                                type="button"
                                className="read_button pt-2 pb-2 ps-4 pe-4 ms-3 mb-3 rounded-2"
                              >
                                Contact Us
                              </button>
                            </div>
                          </div>
                          </div>
                          <div className="col-lg-6 col-12">
                            <div className="vision_img d-none d-lg-block">
                              <img src={ ADVCARD} className="rounded-4"></img>
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
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
