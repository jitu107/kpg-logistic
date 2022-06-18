import React from "react";
import "./SmallCard.scss";

const SmallCard = (props) => {
  const { title, description, linkToOpen, imgUrl, width } = props;
  return (
    <div className="a-small-card" data-test="">
      <div className="card" style={{ width: width }}>
        {imgUrl && (
          <img className="card-img-top" src={imgUrl} alt="Card image cap" />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          {linkToOpen && (
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
