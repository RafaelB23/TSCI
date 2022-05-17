import React from "react";
import { useNavigate } from "react-router-dom";
import { useMachines } from "../context/machinesContext";

export function Machines() {
  //const { drivers, getDriver } = useDrivers();
  const { machines, getMachine } = useMachines();
  const navigate = useNavigate();
  const handleMachine = () => {
    navigate("/maquina");
  };
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
              <th scope="col">id</th>
              <th className="text-end" scope="col">No° de maquina</th>
              <th className="text-end" scope="col">Area</th>
            </tr>
          </thead>
          <tbody>  
            {machines
              .map((machine) => (
                <tr
                  key={machine._id}
                  role="button"
                  onClick={async () => {
                    await getMachine(machine._id)
                    navigate('/usuario/' + machine._id)
                  }}
                >
                  <td>{machine._id}</td>
                  <td className="text-end">{machine.noMachine}</td>
                  <td className="text-end">{machine.area}</td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleMachine}
        >
          Registrar Nueva Maquina
        </button>
      </div>
    </div>
  );
}
