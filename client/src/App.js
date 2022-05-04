import { HomePage, NewOrderPage, OrderPage, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'
import { OrderProvider } from './context/ordersContext'
import { NavBar } from './componets'

function App() {
  return (
    <OrderProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/order' element={<NewOrderPage />} />
        <Route path='/order/:id' element={<OrderPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </OrderProvider>
  )
}

export default App    