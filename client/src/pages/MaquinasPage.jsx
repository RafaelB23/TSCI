import React from 'react'
import { useNavigate } from "react-router-dom";
//import {  } from "../context/";
    

export function Machines(){
    //const { drivers, getDriver } = useDrivers();
    const navigate = useNavigate()
    const handleMachine=(()=>{
        navigate("/maquina");
      }) 
return (
    <div className="container">
      <div className="mt-4">
        <h1 className="text-center">Maquinas</h1>
      </div>
      <div
        className="overflow-auto border border-ligth mt-4 p-3"
        style={{ height: "50vh" }}
      >
        <table className="table table-ligth table-hover fs-6">
          <thead>
            <tr>
              <th scope='col'>id</th>
              <th scope="col">Codigo</th>
              <th scope="col">Costo</th>
              <th scope='col'>Costo Mano de Obra</th>
              <th scope="col">Tiempo por Pieza</th>
            </tr>
          </thead>
           {/*<tbody>  
            {drivers
              .map((user) => (
                <tr
                  key={user._id}
                  role="button"
                  onClick={async () => {
                    await getDriver(user._id)
                    navigate('/usuario/' + user._id)
                  }}
                >
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td className="text-break">{user.mail}</td>
                  <td className="text-end">{user.employment}</td>
                </tr>
              ))
              .reverse()}
          </tbody>*/}
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <button class="btn btn-primary" type="button" onClick={handleMachine}>
        Registrar Nueva Maquina
        </button>
      </div>
    </div>
        
);
}
