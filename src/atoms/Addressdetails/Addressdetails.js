import React from "react";
import "./Addressdetails.scss";

const Addressdetails = (props) => {
  return (
    <div className="a-addressdetails text-center  col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-test="">
      
        <h4 className="text-uppercase font-weight-bold ">Contact</h4>
        <p>
          <i className="fas fa-home mr-3"></i> #103 Cossipore Road
        </p>
        <p>
          <i className="fas fa-home mr-3"></i> Kolkata -700002
        </p>
        <p>
          <i className="fas fa-envelope mr-3"></i>kaushik@kpglogistic.com
        </p>
        <p>
          <i className="fas fa-phone mr-3"></i> +91 9804044499
        </p>
        <p>
          <i className="fas fa-print mr-3"></i> +91 9831072608
        </p>
      </div>
  );
};

export default Addressdetails;
