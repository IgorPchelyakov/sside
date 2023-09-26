import NewsController from "../../controllers/newsController.js"
import { Router } from 'express'
import { checkAuth } from "../../middleware/checkAuth.js"

const router = Router()

router.get('/bilgorod-dnistrovsky/news', NewsController.getAllBilgorodDnistrovskyNews)
router.get('/bilgorod-dnistrovsky/with-national-news', NewsController.getAllBilgorodDnistrovskyWithNationalNews)
router.get('/bilgorod-dnistrovsky/news/:param', NewsController.getBilgorodDnistrovskyNewsByIdOrUrl)
router.get('/bilgorod-dnistrovsky/news/news-today/:date', NewsController.getAllBilgorodDnistrovskyNewsByDate)
router.put('/bilgorod-dnistrovsky/news/edit/:id', checkAuth, NewsController.updateBilgorodDnistrovskyNews)
router.post('/bilgorod-dnistrovsky/news/delete/:id', checkAuth, NewsController.deleteBilgorodDnistrovskyNews)

router.get('/chornomorsk/news', NewsController.getAllChornomorskNews)
router.get('/chornomorsk/with-national-news', NewsController.getAllChornomorskWithNationalNews)
router.get('/chornomorsk/news/:param', NewsController.getChornomorskNewsByIdOrUrl)
router.get('/chornomorsk/news/news-today/:date', NewsController.getAllChornomorskNewsByDate)
router.put('/chornomorsk/news/edit/:id', checkAuth, NewsController.updateChornomorskNews)
router.post('/chornomorsk/news/delete/:id', checkAuth, NewsController.deleteChornomorskNews)

router.get('/izmail/news', NewsController.getAllIzmailNews)
router.get('/izmail/with-national-news', NewsController.getAllIzmailWithNationalNews)
router.get('/izmail/news/:param', NewsController.getIzmailNewsByIdOrUrl)
router.get('/izmail/news/news-today/:date', NewsController.getAllIzmailNewsByDate)
router.put('/izmail/news/edit/:id', checkAuth, NewsController.updateIzmailNews)
router.post('/izmail/news/delete/:id', checkAuth, NewsController.deleteIzmailNews)

router.get('/kiliya/news', NewsController.getAllKiliyaNews)
router.get('/kiliya/with-national-news', NewsController.getAllKiliyaWithNationalNews)
router.get('/kiliya/news/:param', NewsController.getKiliyaNewsByIdOrUrl)
router.get('/kiliya/news/news-today/:date', NewsController.getAllKiliyaNewsByDate)
router.put('/kiliya/news/edit/:id', checkAuth, NewsController.updateKiliyaNews)
router.post('/kiliya/news/delete/:id', checkAuth, NewsController.deleteKiliyaNews)

router.get('/odesa/news', NewsController.getAllOdesaNews)
router.get('/odesa/with-national-news', NewsController.getAllOdesaWithNationalNews)
router.get('/odesa/news/:param', NewsController.getOdesaNewsByIdOrUrl)
router.get('/odesa/news/news-today/:date', NewsController.getAllOdesaNewsByDate)
router.put('/odesa/news/edit/:id', checkAuth, NewsController.updateOdesaNews)
router.post('/odesa/news/delete/:id', checkAuth, NewsController.deleteOdesaNews)

router.get('/podilsk/news', NewsController.getAllPodilskNews)
router.get('/podilsk/with-national-news', NewsController.getAllPodilskWithNationalNews)
router.get('/podilsk/news/:param', NewsController.getPodilskNewsByIdOrUrl)
router.get('/podilsk/news/news-today/:date', NewsController.getAllPodilskNewsByDate)
router.put('/podilsk/news/edit/:id', checkAuth, NewsController.updatePodilskNews)
router.post('/podilsk/news/delete/:id', checkAuth, NewsController.deletePodilskNews)

router.get('/youzhne/news', NewsController.getAllYouzhneNews)
router.get('/youzhne/with-national-news', NewsController.getAllYouzhneWithNationalNews)
router.get('/youzhne/news/:param', NewsController.getYouzhneNewsByIdOrUrl)
router.get('/youzhne/news/news-today/:date', NewsController.getAllYouzhneNewsByDate)
router.put('/youzhne/news/edit/:id', checkAuth, NewsController.updateYouzhneNews)
router.post('/youzhne/news/delete/:id', checkAuth, NewsController.deleteYouzhneNews)

export default router