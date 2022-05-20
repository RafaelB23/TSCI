import Sucursal from '../models/Sucursal.js'

export const getSucursales = async (req, res) => {
    try {
        const sucursales = await Sucursal.find({})
        return res.json(sucursales)
    } catch (error) {
        return res.send(error.message)
    }
}

export const getSucursal = async (req, res) => {
    try {
        const sucursal = await Sucursal.findById(req.params.id)
        if(!sucursal) throw new Error("No se logro encontrar el usuario")
        return res.json(sucursal)
    } catch (error) {
        return res.send(error.message)
    }
}

export const createSucursal = async (req, res) => {
    try {
        const sucursalExist = await Sucursal.findOne(req.body)
        if(sucursalExist) throw new Error("Esta sucursal ya esta registrada")
        const sucursalData = req.body
        const newSucursal = new Sucursal(sucursalData)
        await newSucursal.save()
        return res.json(newSucursal)
    } catch (error) {
        return res.send(error.message)
    }
}

export const updateSucursal = async (req, res) => {
    try {
        const updateSucursal = await Sucursal.findByIdAndUpdate(
            req.params.id, req.body, { new: true}
        )
        return res.send(updateSucursal)
    } catch (error) {
        return res.send(error.message)
    }
}

export const deleteSucursal = async (req, res) => {
    try {
        const deleteSucursal = await Sucursal.findByIdAndDelete(req.params.id)
        return res.send("La sucursal se elimino exitosamente")
    } catch (error) {
        return res.send(error.message)
    }
}