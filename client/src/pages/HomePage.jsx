import React from 'react'
import { useOrders } from '../context/ordersContext'

export function HomePage() {

  const { orders } = useOrders()

  if (orders.length === 0) return (
    <div className='App-header'>
      <div>HomePage</div>
      <div className='overflow-auto border border-dark p-3 d-flex aling-items-center w-50' style={{ height: "50vh" }}>
        <h3 className='m-auto text-center '>No hay ordenes</h3>
      </div>
    </div>
  )

  return (
    <div className='App-header'>
      <div>HomePage</div>
      <button className='btn btn-primary'>Boton</button>
      <div className='overflow-auto border border-dark m-4 p-3' style={{ height: "50vh" }}>
        <table className='table table-hover fs-6'>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Cliente</th>
              <th scope="col">Descripcion</th>
              <th scope="col">No. Piezas</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.owner}</td>
                <td>{order.description.specs}</td>
                <td>{order.description.no_pieces}</td>
              </tr>
            ))}
            {/* <tr>
              <th scope='row'></th>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
