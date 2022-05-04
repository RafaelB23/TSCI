import axios from 'axios'

export const getOrdersRequest = async () => await axios.get('/orders')

export const createOrderRequest = async (order) => await axios.post('/orders', order)