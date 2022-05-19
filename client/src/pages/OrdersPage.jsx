import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useOrders } from "../context/ordersContext";
import { useNavigate } from "react-router-dom";
import EmptyOrders from "../components/EmptyData/EmptyOrders";
import StatusOrder from '../components/statusOrder'
import { navDetector } from "../components/navConfiguration";

export function OrdersPage() {
  const { orders, getOrder/* , user */ } = useOrders();
  const navigate = useNavigate();

  useEffect(()=>{

    // if(user.length === 0){
    //   navigate("/login")
    // }

    navDetector("ordenes")

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
        <h1 className="text-center">Listado de ordenes</h1>
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
                if(order.status !== "1"){
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

/* if(order.status === 0){
  <span className="badge rounded-pill bg-warning text-dark">Pendiente</span>
}else if(order.status === 1){
  <span className="badge rounded-pill bg-success">Lista</span>
}else{
  <span className="badge rounded-pill bg-danger">Cancelada</span>
} */