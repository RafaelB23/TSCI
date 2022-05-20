import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navDetector } from "../components/navConfiguration";
import StatusOrder from '../components/statusOrder'
import { useOrders } from "../context/ordersContext";
//import {  } from "../context/";
export function Inventory() {
  const { orders, getOrder /* , user */ } = useOrders();
  useEffect(() => {
    navDetector("inventario");
  });

  const navigate = useNavigate();
  const handlePart = () => {
    navigate("/articulo");
  };
  return (
    <div className="container">
      <div className="mt-4">
        <h1 className="text-center h2d">Sucursal: Av. Ejemplo</h1>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mt-2" type="button" onClick={handlePart}>
          Registrar Articulo
        </button>
      </div>
      <div
        className="overflow-auto border border-ligth mt-4 p-3"
        style={{ height: "50vh" }}
      >
        <table className="table table-ligth table-hover fs-6">
          <thead>
            <tr>
              <th className="text-start text-nowrap" scope="col">Estado del pedido</th>
              <th className="text-end text-nowrap" scope="col">Cliente</th>
              <th className="text-end text-nowrap" scope="col">Descripcion</th>
              <th className="text-end text-nowrap" scope="col">No. Piezas</th>
              <th className="text-end" scope="col">id</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .map((order) => {
                if(order.status === "1"){
                  return (
                    <tr
                  key={order._id}
                  role="button"
                  onClick={async () => {                    
                    await getOrder(order._id)
                    navigate('/orden/' + order._id)
                  }}
                >
                  <td className="text-start"> <StatusOrder value={order.status}/> </td>
                  <td className="text-end">{order.owner}</td>
                  <td className="text-break text-end">{order.description.specs}</td>
                  <td className="text-end">{order.description.no_pieces}</td>
                  <td className="text-end">{order._id}</td>
                </tr>
                  )
                } return null
              })
              .reverse()}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
