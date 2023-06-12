import NewsController from "../../controllers/newsController.js"
import { Router } from 'express'

const router = Router()

router.get('/bilgorod-dnistrovsky/news', NewsController.getAllBilgorodDnistrovskyNews)
router.get('/bilgorod-dnistrovsky/news/:id', NewsController.getBilgorodDnistrovskyNewsById)
router.get('/chornomorsk/news', NewsController.getAllChornomorskNews)
router.get('/chornomorsk/news/:id', NewsController.getChornomorskNewsById)
router.get('/izmail/news', NewsController.getAllIzmailNews)
router.get('/izmail/news/:id', NewsController.getIzmailNewsById)
router.get('/kiliya/news', NewsController.getAllKiliyaNews)
router.get('/kiliya/news/:id', NewsController.getKiliyaNewsById)
router.get('/odesa/news', NewsController.getAllOdesaNews)
router.get('/odesa/news/:id', NewsController.getOdesaNewsById)
router.get('/podilsk/news', NewsController.getAllPodilskNews)
router.get('/podilsk/news/:id', NewsController.getPodilskNewsById)
router.get('/youzhne/news', NewsController.getAllYouzhneNews)
router.get('/youzhne/news/:id', NewsController.getYouzhneNewsById)

export default router