import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [order, setOrder] = useState(0);
  const orderOne = () => setOrder(order + 1);

  return (
    <li className="m-3 d-flex justify-content-center">
      {orderType} : {order} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
