import express from 'express'
import UserController from '../controllers/userController.js'
import { checkAuth } from '../middleware/checkAuth.js'

const router = express.Router()

router.get('/users', checkAuth, UserController.getAllUsers)
router.get('/users/:id', checkAuth, UserController.getUserById)
router.get('/user/me', checkAuth, UserController.checkMe)
router.post('/user/login', UserController.login)
router.post('/users/add', checkAuth, UserController.createUser)
router.put('/users/edit/:id', checkAuth, UserController.updateUser)
router.post('/users/delete/:id', checkAuth, UserController.deleteUser)

export default router