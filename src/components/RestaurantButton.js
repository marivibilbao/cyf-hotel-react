import React from "react";

const RestaurantButton = ({ orderOne }) => {
  return (
    <button className="btn btn-primary ml-2" onClick={orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
