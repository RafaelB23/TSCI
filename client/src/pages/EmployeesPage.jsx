import React from 'react'
import { useNavigate } from "react-router-dom";
//import { useDrivers } from "../context/driversContext";
export function Emplpyees(){
    //const { drivers, getDriver } = useDrivers();
    const navigate = useNavigate()
    const handleNewEmpl=(()=>{
        navigate("/operador");
      })
return (
    <div className="container">
      <div className="mt-4">
        <h1 className="text-center">Usuarios</h1>
      </div>
      <div
        className="overflow-auto border border-ligth mt-4 p-3"
        style={{ height: "50vh" }}
      >
        <table className="table table-ligth table-hover fs-6">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope='col'>Email</th>
              <th scope="col">Nivel</th>
              <th scope="col">Puesto</th>
              <th scope="col">Area</th>
            </tr>
          </thead>
          <tbody>  
            
                <tr
                >
                  <td>056</td>
                  <td>Christopher</td>
                  <td >chsg@example.com</td>
                  <td>Administrador</td>
                  <td className="text-break">Tornalero</td>
                  <td className="text-end">Maquina 4</td>
                </tr>
              
              
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <button class="btn btn-primary" type="button" onClick={handleNewEmpl}>
        Registrar Nuevo Operador
        </button>
      </div>
    </div>
        
);
}