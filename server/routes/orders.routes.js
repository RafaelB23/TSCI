import {Router} from 'express'
import { 
    getOrders, 
    createOrder, 
    updateOrder, 
    deleteOrder, 
    getOrder,
    getTmpFiles,
    getTmpFile, 
    postTmpFiles,
    updateTmpFiles,
    deleteTmpFiles
} from '../controllers/orders.controllers.js'

const router = Router()

router.get('/orders', getOrders)
router.get('/orders/:id', getOrder)
router.post('/orders', createOrder)
router.put('/orders/:id', updateOrder)
router.delete('/orders/:id', deleteOrder)


router.get('/tmp', getTmpFiles)
router.get('/tmp/:id', getTmpFile)
router.post('/tmp', postTmpFiles)
router.put('/tmp/:id', updateTmpFiles)
router.delete('/tmp/:id', deleteTmpFiles)

export default router