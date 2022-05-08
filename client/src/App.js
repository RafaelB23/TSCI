import { HomePage, OrdersPage, NewOrderPage, OrderPage, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'
import { OrderProvider } from './context/ordersContext'
import { NavBar } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <OrderProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ordenes' element={<OrdersPage />} />
        <Route path='/orden' element={<NewOrderPage />} />
        <Route path='/orden/:id' element={<OrderPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster/>
    </OrderProvider>
  )
}

export default App    