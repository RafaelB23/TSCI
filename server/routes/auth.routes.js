import {Router} from 'express'
import User from '../models/User.js'
// import { getDrivers, createDriver, updateDriver, deleteDriver, getDriver} from '../controllers/drivers.controllers.js'

const router = Router()

router.post('/', async(req, res) => {
    try {
        const auth = await User.findOne({mail: req.body.mail})
        if(!auth) throw new Error("Este correo no se encuentra registrado")
        const pass = auth.password
        if(pass === req.body.password){
            res.send(auth)
            // return true, auth
        }else{
            throw new Error("Contraseña incorrecta")
        }
        // res.send(auth)
    } catch (error) {
        res.json({message: error.message})
        return false
    }
})
router.get('/', async(req, res) => {
    try {
        const user = await User.find({})
        res.json(user)
        return user
    } catch (error) {
        res.json({message: error.message})        
    }
})
// router.get('/drivers/:id', getDriver)
// router.post('/drivers', createDriver)
// router.put('/drivers/:id', updateDriver)
// router.delete('/drivers/:id', deleteDriver)

export default router