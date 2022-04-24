import {Router} from 'express'
import { getOrders, createOrder, updateOrder, deleteOrder, getOrder} from '../controllers/orders.controllers.js'

const router = Router()

router.get('/orders', getOrders)
router.post('/orders', createOrder)
router.put('/orders', updateOrder)
router.delete('/orders', deleteOrder)
router.post('/orders/:id', getOrder)

export default router