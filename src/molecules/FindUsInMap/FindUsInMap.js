import React from "react";
import "./FindUsInMap.scss";

const FindUsInMap = (props) => {
  return (
    <div className="m-find-us-in-map " data-test="">
      <div className="map-margin text-size">
        <h4 className="text-capatalized font-weight-bold text-center">Find Us in Maps</h4>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.8821814292185!2d88.37260782919523!3d22.61373009907261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d886fcfd2c9%3A0x3702e77be1ee6c62!2s103%2C%20Cossipore%20Rd%2C%20Indira%20Nagar%20Block%203%2C%20Cossipore%2C%20Kolkata%2C%20West%20Bengal%20700002!5e0!3m2!1sen!2sin!4v1571068341734!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FindUsInMap;
