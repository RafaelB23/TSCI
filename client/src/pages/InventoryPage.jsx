import React from 'react'
import { useNavigate } from "react-router-dom";
//import {  } from "../context/";
export function Inventory(){
    //const { drivers, getDriver } = useDrivers();
    const navigate = useNavigate()
    const handlePart=(()=>{
        navigate("/articulo");
      }) 
return (
    <div className="container">
      <div className="mt-4">
        <h1 className="text-center">Inventario</h1>
      </div>
      <div
        className="overflow-auto border border-ligth mt-4 p-3"
        style={{ height: "50vh" }}
      >
        <table className="table table-ligth table-hover fs-6">
          <thead> 
            <tr>
              <th scope="col">No. Pieza</th>
              <th scope="col">Articulo</th>
              <th scope='col'>Cantidad</th>
              <th scope="col">Nota</th>
              <th scope="col">Planta</th>
            </tr>
          </thead>
           <tbody>  
            
                <tr
                >
                  <td>013456</td>
                  <td>Tubo de Cobre</td>
                  <td className="text-break">200</td>
                  <td >Tubo de 3/4 pulgadas</td>
                  <td className="text-end">Centro</td>
                </tr>
              
              
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <button class="btn btn-primary" type="button" onClick={handlePart}>
        Registrar Articulo
        </button>
      </div>
    </div>
        
);
}