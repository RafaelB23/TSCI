import {Router} from 'express'
import { getMachines, getMachine, createMachine, updateMachine, deleteMachine } from '../controllers/machines.controllers.js'

const router = Router()

router.get('/machines', getMachines)
router.get('/machines/:id', getMachine)
router.post('/machines', createMachine)
router.get('/machines/:id', updateMachine)
router.get('/machines/:id', deleteMachine)

export default router