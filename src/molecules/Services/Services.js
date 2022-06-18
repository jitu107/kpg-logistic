import React from "react";
import SmallCard from "../../atoms/SmallCard/SmallCard";
import { servicesData } from "../../mockData";
import style from "./Services.module.scss";

const Services = (props) => {
  const renderCards = servicesData.map((data, index) => {
    return (
      <div id={index} className={style['servicesCards']}>
        <SmallCard
          width="18rem"
          title={data.title}
          description={data.description}
        />
      </div>
    );
  });
  return (
    <div className={style["m-services"]} data-test="">
      {renderCards}
    </div>
  );
};

export default Services;
