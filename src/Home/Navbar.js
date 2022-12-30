import React from "react";
import { BsList } from "react-icons/bs";
const Nabar = () => {
  return (
    <>
      <nav className="navbar bg-white pb-lg-2">
        <div className="container-fluid">
          <a className="navbar-brand ps-lg-3 ps-md-2 ps-0 pb-2 pt-lg-2" href="#">
            Architects
          </a>
          <div>
            <i
              className="topbar_list"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <BsList />
            </i>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Architects
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="offcanvas_links">
                <a href="">Home</a>
                <a href="">About</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nabar;
