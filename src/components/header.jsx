import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="intro-background"></div>
        <div className="overlay"></div>
        <div className="intro-content">
          <div className="container">
            <div className="row">
              <div className="col-12 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};