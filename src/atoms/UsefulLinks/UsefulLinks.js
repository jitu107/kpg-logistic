import React from "react";
import { Link } from "react-router-dom";

import "./UsefulLinks.scss";

const UsefulLinks = (props) => {
  return (
    <div className="a-useful-links text-center col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-test="">
      <h4 className="text-uppercase font-weight-bold ">Useful Links</h4>
      <nav className="navList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/aboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/contactUs">Contact Us</Link>
        </li>
      </nav>
    </div>
  );
};

export default UsefulLinks;
