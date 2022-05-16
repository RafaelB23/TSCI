import User from '../models/User.js'

export const createUser = async(req, res) => {
    try {
        const userExist = await User.findOne({mail: req.body.mail})
    if(!userExist){
        const newUser = new User(req.body)
        newUser.save()
        res.json(newUser)
    }else{
        throw new Error("El correo ya esta registrado")
    }
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getUsers = async(req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getUser = async(req, res) => {
    try {
        const user = await User.findById(req.param.id)
        if(!user) throw new Error("No se encontro al usuario")
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateUser = async(req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log('Perfil actualizado')
        res.json(updatedUser)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteUser = async(req, res) => {
    try {
        const userRemoved = await User.findByIdAndDelete(req.params.id)
        if (!userRemoved) return res.sendStatus(404)
        if (userRemoved.profile_img.public_id) {
            await deleteImage(driverRemoved.profile_img.public_id)
        }
        res.json({message: "Perfil eliminado"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}