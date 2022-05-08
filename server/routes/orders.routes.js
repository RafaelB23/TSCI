import {Router} from 'express'
import { getOrders, createOrder, updateOrder, deleteOrder, getOrder} from '../controllers/orders.controllers.js'

const router = Router()

router.get('/orders', getOrders)
router.get('/orders/:id', getOrder)
router.post('/orders', createOrder)
router.put('/orders/:id', updateOrder)
router.delete('/orders/:id', deleteOrder)

export default router