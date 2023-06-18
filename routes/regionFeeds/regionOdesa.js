import NewsController from "../../controllers/newsController.js"
import { Router } from 'express'
import { checkAuth } from "../../middleware/checkAuth.js"

const router = Router()

router.get('/bilgorod-dnistrovsky/news', NewsController.getAllBilgorodDnistrovskyNews)
router.get('/bilgorod-dnistrovsky/news/:id', NewsController.getBilgorodDnistrovskyNewsById)
router.put('/bilgorod-dnistrovsky/news/edit/:id', checkAuth, NewsController.updateBilgorodDnistrovskyNews)
router.post('/bilgorod-dnistrovsky/news/delete/:id', checkAuth, NewsController.deleteBilgorodDnistrovskyNews)

router.get('/chornomorsk/news', NewsController.getAllChornomorskNews)
router.get('/chornomorsk/news/:id', NewsController.getChornomorskNewsById)
router.put('/chornomorsk/news/edit/:id', checkAuth, NewsController.updateChornomorskNews)
router.post('/chornomorsk/news/delete/:id', checkAuth, NewsController.deleteChornomorskNews)

router.get('/izmail/news', NewsController.getAllIzmailNews)
router.get('/izmail/news/:id', NewsController.getIzmailNewsById)
router.put('/izmail/news/edit/:id', checkAuth, NewsController.updateIzmailNews)
router.post('/izmail/news/delete/:id', checkAuth, NewsController.deleteIzmailNews)

router.get('/kiliya/news', NewsController.getAllKiliyaNews)
router.get('/kiliya/news/:id', NewsController.getKiliyaNewsById)
router.put('/kiliya/news/edit/:id', checkAuth, NewsController.updateKiliyaNews)
router.post('/kiliya/news/delete/:id', checkAuth, NewsController.deleteKiliyaNews)

router.get('/odesa/news', NewsController.getAllOdesaNews)
router.get('/odesa/news/:id', NewsController.getOdesaNewsById)
router.put('/odesa/news/edit/:id', checkAuth, NewsController.updateOdesaNews)
router.post('/odesa/news/delete/:id', checkAuth, NewsController.deleteOdesaNews)

router.get('/podilsk/news', NewsController.getAllPodilskNews)
router.get('/podilsk/news/:id', NewsController.getPodilskNewsById)
router.put('/podilsk/news/edit/:id', checkAuth, NewsController.updatePodilskNews)
router.post('/podilsk/news/delete/:id', checkAuth, NewsController.deletePodilskNews)

router.get('/youzhne/news', NewsController.getAllYouzhneNews)
router.get('/youzhne/news/:id', NewsController.getYouzhneNewsById)
router.put('/youzhne/news/edit/:id', checkAuth, NewsController.updateYouzhneNews)
router.post('/youzhne/news/delete/:id', checkAuth, NewsController.deleteYouzhneNews)

export default router