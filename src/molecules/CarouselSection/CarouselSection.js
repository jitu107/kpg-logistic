import React from "react";
import { Carousel } from "react-responsive-carousel";
import firstImage from "../../assets/img-1.png";
import secondImage from "../../assets/img-2.jpg";
import thirdImgage from "../../assets/vision.jpg";
import "./CarouselSection.scss";

const CarouselSection = (props) => {
  return (
    <div className="m-carousel-section" data-test="">
      <Carousel
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        interval={1500}
      >
        <div>
          <img
            className="img-carosel-size"
            src={firstImage}
            alt="First slide"
          />
          <div className="carousel-caption text-size">
            <h3> 25 years of our service </h3>
            <h4>
              East India base one of the most growing Integrated Surface
              Transport Organization with about 3 decades of Service to the
              Nation, with PAN India network
            </h4>
          </div>
        </div>
        <div>
          <img
            className="img-carosel-size"
            src={secondImage}
            alt="First slide"
          />
          <div className="carousel-caption text-size">
            <div>
              <h4>
                Large Clientele across the country, which includes Govt. and
                Public Sectors, Private Sectors, MNCs and Traders, Distributors,
                Dealers & many others
              </h4>
            </div>
          </div>
        </div>
        <div>
          <img
            className="img-carosel-size"
            src={thirdImgage}
            alt="First slide"
          />
          <div className="carousel-caption text-size">
            <h4 className="h3-responsive">
              Large Clientele across the country, which includes Govt. and
              Public Sectors, Private Sectors, MNCs and Traders, Distributors,
              Dealers & many others
            </h4>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
