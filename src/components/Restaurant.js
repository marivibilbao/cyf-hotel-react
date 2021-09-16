import React from "react";
import Order from "./Order";

const Restaurant = () => {
  // const pizzas = 0;

  return (
    <div>
      <h3 className="d-flex justify-content-center">Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
