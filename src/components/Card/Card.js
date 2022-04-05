import React from "react";

import "./Card.css";
const Card = (props) => {
  const { user, text, rating } = props.review;
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
