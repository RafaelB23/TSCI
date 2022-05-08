import Order from '../models/Order.js'
import {deleteImage, uplaodImage} from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getOrders = async (req, res) => {
    try {
        const order = await Order.find({})
        res.json(order)
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
        const { owner, description} = req.body
        let blueprints
        let created_at = Date()
        if(req.files?.blueprints){
            const result = await uplaodImage(req.files.blueprints.tempFilePath)
            await fs.remove(req.files.blueprints.tempFilePath)
            blueprints = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }
        const newOrder = new Order({ owner, description, blueprints, created_at})
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
        console.log('Actualizada')
        return res.send(updatedOrder)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const deleteOrder = async (req, res) => {
    try {
        const orderRemoved = await Order.findByIdAndDelete(req.params.id)
        if (!orderRemoved) return res.sendStatus(404)
        if (orderRemoved.blueprints.public_id) {
            await deleteImage(orderRemoved.blueprints.public_id)
        }
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