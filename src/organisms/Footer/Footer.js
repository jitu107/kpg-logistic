import React from "react";
import Addressdetails from "../../atoms/Addressdetails/Addressdetails";
import UsefulLinks from "../../atoms/UsefulLinks/UsefulLinks";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <div className="o-footer bg-dark container-fluid" data-test="">
      <h2 className="text-center">KPG Logistic</h2>
      <h6 className="text-center slogun">
        Seeking an Association of Supply Chain Services Provider
      </h6>
      <div className="row my-4">
        <Addressdetails />
        <UsefulLinks />
      </div>
    </div>
  );
};

export default Footer;
