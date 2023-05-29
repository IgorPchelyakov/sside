import MediaController from '../controllers/mediaController.js'
import { checkAuth } from '../middleware/checkAuth.js'
import { Router } from 'express'

const router = Router()

router.get('/media', MediaController.getAllMedias)
router.get('/media/:id', MediaController.getMediaById)
router.post('/media/add', checkAuth, MediaController.addMedia)
router.put('/media/edit/:id', checkAuth, MediaController.updateMedia)
router.post('/media/delete/:id', checkAuth, MediaController.deleteMedia)

export default router