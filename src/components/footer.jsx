import React from "react";

const Footer = () => (
  
  <footer id="footer" className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h1 className="text-uppercase">Sackhe</h1>
          <p>The path to zero waste</p>
          <p>
            At Sackhe, we're committed to fostering a cleaner, more sustainable
            future via our cutting-edge goods and all-inclusive services that
            are designed to meet important waste management needs in a range of
            industries.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#contact">Contact us</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            {/* <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
