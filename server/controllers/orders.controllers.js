import Order from '../models/Order.js'

export const getOrders = async (req, res) => {
    const order = await Order.find()
    res.send(order)
}
export const createOrder = async (req, res) => {
    /**
    {
        "owner":"Miguel Medina",
        "description":{
            "specs":"Tornillos de titanio 1/2 pulgada, cabeza plana",
            "no_pieces":150
        }
    }
    **/
    const { owner, description } = req.body

    const newOrder = new Order({ owner, description })
    console.log(req.body)
    await newOrder.save()

    return res.json(newOrder)
}
export const updateOrder = async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.send(req.body)
}
export const deleteOrder = async (req, res) => {
    const orderRemoved = await Order.findByIdAndDelete(req.params.id)

    if (!orderRemoved) return res.sendStatus(404)

    return res.sendStatus(204)
}
export const getOrder = async (req, res) => {
    const order = await Order.findById(req.params.id)
    if(!order) return res.sendStatus(404)
    return res.json(order)
}