import {Router} from 'express'
import { getSucursal, getSucursales, createSucursal, updateSucursal, deleteSucursal } from '../controllers/sucursal.controlles.js'

const router = Router()

router.get('/sucursales', getSucursales)
router.get('/sucursales/:id', getSucursal)
router.post('/sucursales', createSucursal)
router.put('/sucursales/:id', updateSucursal)
router.delete('/sucursales/:id', deleteSucursal)

export default router