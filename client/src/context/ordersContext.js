import { createContext, useState, useContext, useEffect } from 'react'
import { createOrderRequest, getOrderRequest, getOrdersRequest } from '../api/orders'

export const ordersContext = createContext()

export const useOrders = () => {
    const context = useContext(ordersContext)
    return context
}

export const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState([])

    const getOrders = async () => {
        try {
            const res = await getOrdersRequest()
            setOrders(res.data)
        } catch (error) {
            console.log('No se obtuvieron datos')
        }

    }

    const createOrder = async (order) => {
        // console.log({orderContext: order})
        const res = await createOrderRequest(order)
        setOrders([...orders, res.data])
    }

    const getOrder = async (orderId) => {
        console.log(orderId)
        const res = await getOrderRequest(orderId)
        setOrder(res.data)
    }

    useEffect(() => {
        getOrders()
    }, [])

    return <ordersContext.Provider value={{
        orders,
        order,
        getOrders,
        createOrder,
        getOrder
    }}>
        {children}
    </ordersContext.Provider>
}