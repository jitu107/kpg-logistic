import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/KPG.png";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="o-header" data-test="">
      <div className="logo">
        <img src={logo} alt="KPG Logistic Logo" />
      </div>
      <nav className="navList">
        <li>
          <Link to="/">Home</Link>{" "}
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

export default Header;
