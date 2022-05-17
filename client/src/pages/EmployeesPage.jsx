import React from 'react'
import { useNavigate } from "react-router-dom";
import { useOrders } from '../context/ordersContext';
// import { useDrivers } from "../context/driversContext";
export function Emplpyees(){
    // const {Driver} = useOrders()
    // Driver.getDriver()
    // const { drivers, getDriver } = useDrivers();
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
              <th scope="col">Puesto</th>
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
        <button className="btn btn-primary" type="button" onClick={handleNewEmpl}>
        Registrar Nuevo Operador
        </button>
      </div>
    </div>
        
);
}