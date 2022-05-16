import {Router} from 'express'
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/user.controllers.js'

const router = Router()

router.post('/users', createUser)
router.get('/users/:id', getUser)
router.get('/users', getUsers)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router