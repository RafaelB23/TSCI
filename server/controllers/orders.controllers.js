import Order from '../models/Order.js'

export const getOrders= async (req, res) => {
    const order = await Order.find()
    res.send(order)
}
export const createOrder= async (req, res) => {
    const {owner, description} = req.body

    const newOrder = new Order({owner, description})

    await newOrder.save()

    return res.json(newOrder)
}
export const updateOrder= (req, res) => res.send('Orden actualizada')
export const deleteOrder= (req, res) => res.send('Orden eliminada')
export const getOrder = (req, res) => res.send('Orden especifica')