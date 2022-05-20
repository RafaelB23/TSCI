import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navDetector } from "../components/navConfiguration";
import { useSucursales } from "../context/sucursalContext";
//import {  } from "../context/";
export function Plantas() {
  //const { drivers, getDriver } = useDrivers();

  const { sucursales, getSucursal } = useSucursales();

  useEffect(() => {
    navDetector("sucursales", true);
  });
  const navigate = useNavigate();
  const handleSite = () => {
    navigate("/sucursal");
  };
  return (
    <div className="container">
      <div className="mt-4">
        <h1 className="text-center">Sucursales</h1>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSite}
        >
          Registrar Nueva Sucursal
        </button>
      </div>
      <div
        className="overflow-auto border border-ligth mt-4 p-3"
        style={{ height: "50vh" }}
      >
        <table className="table table-ligth table-hover fs-6">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Direccion</th>
              {/* <th scope='col'>Cp</th> */}
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {sucursales
              .map((site) => (
                <tr
                  key={site._id}
                  role="button"
                  onClick={async () => {
                    await getSucursal(site._id);
                    navigate("/planta/" + site._id);
                  }}
                >
                  <td>{site.name}</td>
                  <td>{site.address.street}</td>
                  <td className="text-break">{site.phone_number}</td>
                  {/* <td className="text-end">{site.employment}</td> */}
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
