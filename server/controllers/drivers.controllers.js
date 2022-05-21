import Driver from '../models/Driver.js'
import {deleteImage, uplaodImage} from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getDrivers = async (req, res) => {
    try {
        const driver = await Driver.find({})
        res.json(driver)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const createDriver = async (req, res) => {
    const driver_data = {
        "name": {
            "first_name":"Nombre2",
            "last_name":"Apellido"
        },
        "phone_number":"0123456789",
        "mail":"mail@empresa.com",
        "rol":"Admin",
        "rfc":"asfg123456789",
        "address":{
            "street": "calle 1234",
            "cp": 12345,
            "city": "Monterrey",
            "state": "Nuevo Leon"
        },
        "hiring_date":"2017-12-09",
        "employment":"Maquinista",
        "salary_hour":105.30,
        "profile_img":""
    }
    try {
        const driverExist = await Driver.findOne({mail: req.body.mail})
        if(!driverExist){
            const { name, phone_number, mail, rfc, rol, address, hiring_date, employment, salary_hour } = req.body
            let profile_img
            if(req.files?.profile_img){
                const result = await uplaodImage(req.files.profile_img.tempFilePath)
                await fs.remove(req.files.profile_img.tempFilePath)
                profile_img = {
                    url: result.secure_url,
                    public_id: result.public_id
                }
            }
            const newDriver = new Driver({ name, phone_number, mail, rol,rfc, address, hiring_date, employment, salary_hour, profile_img })
            await newDriver.save()
            return res.json(newDriver)
        }else{
            throw new Error("El correo ya esta registrado")
        }
    } catch (error) {
        return res.send(error.message)
    }
}
export const updateDriver = async (req, res) => {
    try {
        const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log('Perfil actualizado')
        return res.send(updatedDriver)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const deleteDriver = async (req, res) => {
    try {
        const driverRemoved = await Driver.findByIdAndDelete(req.params.id)
        if (!driverRemoved) return res.sendStatus(404)
        if (driverRemoved.profile_img.public_id) {
            await deleteImage(driverRemoved.profile_img.public_id)
        }
        console.log('Perfil eliminado')
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getDriver = async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id)
        if(!driver) return res.sendStatus(404)
        return res.json(driver)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}