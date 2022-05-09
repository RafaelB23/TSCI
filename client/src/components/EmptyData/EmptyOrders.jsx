import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyOrders() {
    return (
        <div className="App-header mt-4">
            <div className="text-center h1">HomePage</div>
            <div className="d-flex justify-content-center">
                <Link to={"/orden"} className="btn btn-primary mt-2">
                    Crear nueva orden
                </Link>
            </div>
            <div className="container">
                <div
                    className="overflow-auto border border-ligth p-3 d-flex aling-items-center mt-4"
                    style={{ height: "50vh" }}
                >
                    <h3 className="m-auto text-center ">No hay ordenes</h3>
                </div>
            </div>
        </div>
    )
}
