import express from 'express'
import UserController from '../controllers/userController.js'
import { checkAuth } from '../middleware/checkAuth.js'

const router = express.Router()

router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getUserById)
router.get('/user/me', checkAuth, UserController.checkMe)
router.post('/user/login', UserController.login)
router.post('/users', UserController.createUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

export default router