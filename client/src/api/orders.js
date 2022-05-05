import axios from 'axios'

export const getOrdersRequest = async () => await axios.get('/orders')

export const createOrderRequest = async (order) => await axios.post('/orders', order)

export const getOrderRequest = async (orderId) => await axios.get('/orders/' + orderId)

export const updateOrderRequest = async (orderId, newFields) => await axios.put('/orders/' + orderId, newFields)

export const deleteOrderRequest = async (orderId) => await axios.delete('/orders/' + orderId)