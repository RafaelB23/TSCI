import { HomePage, OrderPage, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'
import { OrderProvider } from './context/ordersContext'
import './App.css'

function App() {
  return (
    <OrderProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/newOrder' element={<OrderPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </OrderProvider>
  )
}

export default App    