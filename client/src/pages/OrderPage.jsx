import React from "react";
import { FormUpdateOrder } from "../componets";
import { useOrders } from "../context/ordersContext.js";

export function OrderPage() {
  const { order } = useOrders();
  console.log(order);

  return (
    <div>
      <h1 className="text-center mt-4">Orden</h1>
      <p className="text-center">{order._id}</p>
      <FormUpdateOrder value={order} />
    </div>
  );
}
