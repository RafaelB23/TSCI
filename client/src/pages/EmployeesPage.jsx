import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navDetector } from "../components/navConfiguration";
import { useDrivers } from "../context/driversContext";
import { useOrders } from "../context/ordersContext";
export function Emplpyees() {
  const { drivers, getDriver } = useDrivers();
  const { user } = useOrders();
  useEffect(()=>{
    navDetector("operadores", true)
    if(user.length === 0){
      navigate("/login")
   }

   navDetector("ordenes")

   const path = document.location.pathname;
   const navUl = document.getElementById("navUl");
   const navForm = document.getElementById("navForm");

   if (path !== "/signup" || path !== "/login"  || path !== "/" ) {
     navUl.style.visibility = "visible";
     navForm.style.visibility = "visible";
   }
 })

  const navigate = useNavigate();

  const handleNewEmpl = () => {
    navigate("/operador");
  };

  return (
    <div className="container">
      <div className="mt-4">
        <h1 className="text-center">Operadores</h1>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleNewEmpl}
        >
          Registrar Nuevo Operador
        </button>
      </div>
      <div
        className="overflow-auto border border-ligth mt-4 p-3 m-auto"
        style={{ height: "50vh" }}
      >
        <table className="table table-ligth table-hover fs-6">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Puesto</th>
              <th scope="col">Rol</th>
            </tr>
          </thead>
          <tbody>
            {drivers
              .map((user) => (
                <tr
                  key={user._id}
                  role="button"
                  onClick={async () => {
                    await getDriver(user._id);
                    // navigate("/usuario/" + user._id);
                  }}
                >
                  {console.log(user)}
                  <td>{user._id}</td>
                  <td>{user.name.first_name + " " + user.name.last_name}</td>
                  <td className="text-break">{user.mail}</td>
                  <td className="text-start">{user.employment}</td>
                  <td>{user.rol}</td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
