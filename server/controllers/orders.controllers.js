import Order from '../models/Order.js'
import {uplaodImage} from '../libs/cloudinary.js'

export const getOrders = async (req, res) => {
    try {
        const order = await Order.find()
        res.send(order)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const createOrder = async (req, res) => {
    /**
    {
        "owner":"Miguel Medina",
        "description":{
            "specs":"Tornillos de titanio 1/2 pulgada, cabeza plana",
            "no_pieces":150
        },
        "date": ""
    }
    **/
    try {
        const { owner, description } = req.body
        if(req.files.image){
            const result = await uplaodImage(req.files.image.tempFilePath)
            console.log(result)
        }
        const newOrder = new Order({ owner, description })
        await newOrder.save()
        return res.json(newOrder)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: error.message})
    }
}
export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.send(updatedOrder)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const deleteOrder = async (req, res) => {
    try {
        const orderRemoved = await Order.findByIdAndDelete(req.params.id)
        if (!orderRemoved) return res.sendStatus(404)
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        if(!order) return res.sendStatus(404)
        return res.json(order)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}