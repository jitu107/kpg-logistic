import React from "react";
import SmallCard from "../../atoms/SmallCard/SmallCard";
import { servicesData } from "../../mockData";
import style from "./Services.module.scss";

const Services = (props) => {
  const renderCards = servicesData.map((data, index) => {
    return (
      <div key={index} className={style['servicesCards']}>
        <SmallCard
        {...data}
          width="18rem"

        />
      </div>
    );
  });
  return (
    <div className={style["m-services"]} data-test="">
      <h4>Our Major Services</h4>
      <div className={style["render-card"]}>{renderCards}</div>
    </div>
  );
};

export default Services;
