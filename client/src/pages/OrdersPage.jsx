import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useOrders } from "../context/ordersContext";
import { useNavigate } from "react-router-dom";
import EmptyOrders from "../components/EmptyData/EmptyOrders";

export function OrdersPage() {
  const { orders, getOrder, user } = useOrders();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(user);  

    const path = document.location.pathname;
    const navUl = document.getElementById("navUl");
    const navForm = document.getElementById("navForm");

    if (path !== "/signup" || path !== "/login"  || path !== "/" ) {
      navUl.style.visibility = "visible";
      navForm.style.visibility = "visible";
    }
  })
  

  if (orders.length === 0)
    return (
      <EmptyOrders/>
    );

  return (
    <div className="container">
      <div className="mt-4">
        <h1 className="text-center">Orders Page</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={"/orden"} className="btn btn-primary mt-2">
          Crear nueva orden
        </Link>
      </div>
      <div
        className="overflow-auto border border-ligth mt-4 p-3"
        style={{ height: "50vh" }}
      >
        <table className="table table-ligth table-hover fs-6">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Cliente</th>
              <th scope="col">Descripcion</th>
              <th scope="col">No. Piezas</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .map((order) => (
                <tr
                  key={order._id}
                  role="button"
                  onClick={async () => {
                    await getOrder(order._id)
                    navigate('/orden/' + order._id)
                  }}
                >
                  <td>{order._id}</td>
                  <td>{order.owner}</td>
                  <td className="text-break">{order.description.specs}</td>
                  <td className="text-end">{order.description.no_pieces}</td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
}