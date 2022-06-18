import React from "react";
import { clientCardsdetails } from "../../mockData";
import "./ClientCard.scss";

const ClientCard = (props) => {
  const cardLists = clientCardsdetails.map((data, index) => {
    return (
      <a className="card"key={index} href={data.linkUrl} target="_blank">
        <div className="card-body">
          <h5 className="card-title text-center">{data.title}</h5>
          <img src={data.imgUrl} alt="" style={{ width: "16rem" }} />
        </div>
      </a>
    );
  });

  return (
    <div className="a-client-card" data-test="">
      {cardLists}
    </div>
  );
};

export default ClientCard;
