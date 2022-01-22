import React from "react";
import CarouselSection from "../../molecules/CarouselSection/CarouselSection";
import FindUsInMap from "../../molecules/FindUsInMap/FindUsInMap";
import "./MainBody.scss";

const MainBody = (props) => {
  return (
    <div className="o-main-body" data-test="">
      <CarouselSection />
      <FindUsInMap/>
    </div>
  );
};

export default MainBody;
