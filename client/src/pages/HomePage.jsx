import React from "react";
import { Link } from "react-router-dom";
import { useOrders } from "../context/ordersContext";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const { orders, getOrder } = useOrders();
  const navigate = useNavigate();

  if (orders.length === 0)
    return (
      <div className="App-header">
        <div>HomePage</div>
        <div
          className="overflow-auto border border-ligth p-3 d-flex aling-items-center w-50"
          style={{ height: "50vh" }}
        >
          <h3 className="m-auto text-center ">No hay ordenes</h3>
        </div>
      </div>
    );

  return (
    <div className="App-header">
      <div className="mt-4">
        <h1 className="text-center">HomePage</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={"/order"} className="btn btn-primary mt-2">
          Crear nueva orden
        </Link>
      </div>
      {/* <button className="btn btn-primary m-4" onClick={() => {console.log('press')}}>Agregar datos de prueba</button> */}
      <div
        className="overflow-auto border border-ligth m-4 p-3"
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
                    navigate('/order/' + order._id)
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
