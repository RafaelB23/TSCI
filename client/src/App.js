import { HomePage, OrderPage, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'
import { OrderProvider } from './context/ordersContext'

function App() {
  return (
    <OrderProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </OrderProvider>
  )
}

export default App    