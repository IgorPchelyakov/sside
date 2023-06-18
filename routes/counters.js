import { Router } from 'express'
import CountersController from '../controllers/countersController.js'

const router = Router()

router.get('/count/:params', CountersController.countAllNews)

export default router