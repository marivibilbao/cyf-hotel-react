//Lesson 1:
import React from "react";

const Cards = props => {
  return (
    <div className="container d-flex m-3 justify-content-center">
      <div className="card p-2">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-paragraph">{props.content}</p>
          <a href={props.url} target="_blank" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
