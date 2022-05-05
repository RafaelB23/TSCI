import { createContext, useState, useContext, useEffect } from 'react'
import { createOrderRequest, deleteOrderRequest, getOrderRequest, getOrdersRequest, updateOrderRequest } from '../api/orders'

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
        } catch (error) {
            console.log('No se obtuvieron datos')
        }

    }

    const createOrder = async (order) => {
        const res = await createOrderRequest(order)
        setOrders([...orders, res.data])
    }

    const getOrder = async (orderId) => {
        const res = await getOrderRequest(orderId)
        return res.data
    }

    const updateOrder = async (orderId, order) => {
        const res = await updateOrderRequest(orderId, order)
        setOrders(orders.map((order) => (order._id === orderId ? res.data : order)))
    }

    const deleteOrder = async (orderId) => {
        await deleteOrderRequest(orderId)
        setOrders(orders.filter((order) => order._id !== orderId))
    }

    useEffect(() => {
        getOrders()
    }, [])

    return <ordersContext.Provider value={{
        orders,
        getOrders,
        createOrder,
        getOrder,
        updateOrder,
        deleteOrder
    }}>
        {children}
    </ordersContext.Provider>
}