import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navDetector } from "../components/navConfiguration";
import { useDrivers } from "../context/driversContext";

export function Emplpyees() {
  const { drivers, getDriver } = useDrivers();

  useEffect(()=>{
    navDetector("operadores", true)
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
                  <td>{user._id}</td>
                  <td>{user.name.first_name + " " + user.name.last_name}</td>
                  <td className="text-break">{user.mail}</td>
                  <td className="text-start">{user.employment}</td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
