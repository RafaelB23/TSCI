import { createContext, useState, useContext, useEffect } from 'react'
import { getOrdersRequest } from '../api/orders'

export const ordersContext = createContext()

export const useOrders = () => {
    const context = useContext(ordersContext)
    return context
}

export const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        try {
            const res = await getOrdersRequest()
            setOrders(res.data)
            console.log(res.data)
        } catch (error) {
            console.log('No se obtuvieron datos')
        }

    }

    useEffect(() => {
        getOrders()
    }, [])

    return <ordersContext.Provider value={{
        orders,
        getOrders
    }}>
        {children}
    </ordersContext.Provider>
}