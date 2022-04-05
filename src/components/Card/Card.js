import React from "react";

import "./Card.css";
const Card = (props) => {
  const { user, text, rating } = props.review;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <img
          src={user.image}
          style={{ width: "100px", height: "100px" }}
          className="userImg  img-fluid card-img-top"
          alt="..."
        />
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
