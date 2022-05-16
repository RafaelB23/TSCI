import React from "react";
import { 
  HomePage, OrdersPage, NewOrderPage, OrderPage, 
  NotFound, SignUp, Login,NewEmployee, Emplpyees,NewMachine,
  NewSite, Plantas,Machines, NewBill, Inventory, NewPiece
} from './pages'
import { Route, Routes } from 'react-router-dom'
import { OrderProvider } from './context/ordersContext'
import { DriverProvider } from './context/driversContext'
import { NavBar, Footer } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='vh-100'>
      <OrderProvider> 
        <DriverProvider>
            <NavBar/>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/ordenes' element={<OrdersPage />} />
                <Route path='/orden' element={<NewOrderPage />} />
                <Route path='/orden/:id' element={<OrderPage />} />
                <Route path='/operador' element={<NewEmployee/>} /> 
                <Route path='/operadores' element={<Emplpyees/>} /> 
                <Route path='/registroplanta' element={<NewSite/>} />
                <Route path='/plantas' element={<Plantas/>} />
                <Route path='/maquina' element={<NewMachine/>} />
                <Route path='/maquinas' element={<Machines/>} />
                <Route path='/facturas' element={<NewBill/>} />
                <Route path='/inventario' element={<Inventory/>} />
                <Route path='/articulo' element={<NewPiece/>} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              <Toaster/>
              <Footer/></DriverProvider>
      </OrderProvider>
    </div>
    
  )
}

export default App    