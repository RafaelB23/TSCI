import axios from 'axios'

export const getOrdersRequest = async () => await axios.get('/orders')