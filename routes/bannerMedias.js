import bannerMediaController from '../controllers/bannerMediaController.js'
import { Router } from 'express'
import { checkAuth } from '../middleware/checkAuth.js'

const router = Router()

router.get('/banner-medias', bannerMediaController.getAllBannerMedias)
router.get('/banner-media/:id', bannerMediaController.getBannerMediaById)
router.post('/add-banner-media', checkAuth, bannerMediaController.addBannerMedia)
router.put('/update-banner-media/:id', checkAuth, bannerMediaController.updateBannerMedia)
router.post('/delete-banner-media/:id', checkAuth, bannerMediaController.deleteBannerMedia)

export default router