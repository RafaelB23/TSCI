import React from 'react'
import { useNavigate } from "react-router-dom";
//import {  } from "../context/";
export function Plantas(){
    //const { drivers, getDriver } = useDrivers();
    const navigate = useNavigate()
    const handleSite=(()=>{
        navigate("/registroplanta");
      }) 
return (
    <div className="container">
      <div className="mt-4">
        <h1 className="text-center">Plantas</h1>
      </div>
      <div
        className="overflow-auto border border-ligth mt-4 p-3"
        style={{ height: "50vh" }}
      >
        <table className="table table-ligth table-hover fs-6">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Direccion</th>
              <th scope='col'>Cp</th>
              <th scope="col">Telefono</th>
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
        <button className="btn btn-primary" type="button" onClick={handleSite}>
        Registrar Nueva Planta
        </button>
      </div>
    </div>
        
);
}