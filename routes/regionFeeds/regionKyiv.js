import NewsController from "../../controllers/newsController.js"
import { Router } from 'express'
import { checkAuth } from "../../middleware/checkAuth.js"

const router = Router()

router.get('/berezan/news', NewsController.getAllBerezanNews)
router.get('/berezan/news/:id', NewsController.getBerezanNewsById)
router.put('/berezan/news/edit/:id', checkAuth, NewsController.updateBerezanNews)
router.post('/berezan/news/delete/:id', checkAuth, NewsController.deleteBerezanNews)

router.get('/bilacerkva/news', NewsController.getAllBilacerkvaNews)
router.get('/bilacerkva/news/:id', NewsController.getBilacerkvaNewsById)
router.put('/bilacerkva/news/edit/:id', checkAuth, NewsController.updateBilacerkvaNews)
router.post('/bilacerkva/news/delete/:id', checkAuth, NewsController.deleteBilacerkvaNews)

router.get('/boryspil/news', NewsController.getAllBoryspilNews)
router.get('/boryspil/news/:id', NewsController.getBoryspilNewsById)
router.put('/boryspil/news/edit/:id', checkAuth, NewsController.updateBoryspilNews)
router.post('/boryspil/news/delete/:id', checkAuth, NewsController.deleteBoryspilNews)

router.get('/boyarka/news', NewsController.getAllBoyarkaNews)
router.get('/boyarka/news/:id', NewsController.getBoyarkaNewsById)
router.put('/boyarka/news/edit/:id', checkAuth, NewsController.updateBoyarkaNews)
router.post('/boyarka/news/delete/:id', checkAuth, NewsController.deleteBoyarkaNews)

router.get('/brovary/news', NewsController.getAllBrovaryNews)
router.get('/brovary/news/:id', NewsController.getBrovaryNewsById)
router.put('/brovary/news/edit/:id', checkAuth, NewsController.updateBrovaryNews)
router.post('/brovary/news/delete/:id', checkAuth, NewsController.deleteBrovaryNews)

router.get('/bucha/news', NewsController.getAllBuchaNews)
router.get('/bucha/news/:id', NewsController.getBuchaNewsById)
router.put('/bucha/news/edit/:id', checkAuth, NewsController.updateBuchaNews)
router.post('/bucha/news/delete/:id', checkAuth, NewsController.deleteBuchaNews)

router.get('/fastiv/news', NewsController.getAllFastivNews)
router.get('/fastiv/news/:id', NewsController.getFastivNewsById)
router.put('/fastiv/news/edit/:id', checkAuth, NewsController.updateFastivNews)
router.post('/fastiv/news/delete/:id', checkAuth, NewsController.deleteFastivNews)

router.get('/irpin/news', NewsController.getAllIrpinNews)
router.get('/irpin/news/:id', NewsController.getIrpinNewsById)
router.put('/irpin/news/edit/:id', checkAuth, NewsController.updateIrpinNews)
router.post('/irpin/news/delete/:id', checkAuth, NewsController.deleteIrpinNews)

router.get('/kyiv/news', NewsController.getAllKyivNews)
router.get('/kyiv/news/:id', NewsController.getKyivNewsById)
router.put('/kyiv/news/edit/:id', checkAuth, NewsController.updateKyivNews)
router.post('/kyiv/news/delete/:id', checkAuth, NewsController.deleteKyivNews)

router.get('/obukhiv/news', NewsController.getAllObukhivNews)
router.get('/obukhiv/news/:id', NewsController.getObukhivNewsById)
router.put('/obukhiv/news/edit/:id', checkAuth, NewsController.updateObukhivNews)
router.post('/obukhiv/news/delete/:id', checkAuth, NewsController.deleteObukhivNews)

router.get('/pereyaslav/news', NewsController.getAllPereyaslavNews)
router.get('/pereyaslav/news/:id', NewsController.getPereyaslavNewsById)
router.put('/pereyaslav/news/edit/:id', checkAuth, NewsController.updatePereyaslavNews)
router.post('/pereyaslav/news/delete/:id', checkAuth, NewsController.deletePereyaslavNews)

router.get('/skvyra/news', NewsController.getAllSkvyraNews)
router.get('/skvyra/news/:id', NewsController.getSkvyraNewsById)
router.put('/skvyra/news/edit/:id', checkAuth, NewsController.updateSkvyraNews)
router.post('/skvyra/news/delete/:id', checkAuth, NewsController.deleteSkvyraNews)

router.get('/slavutych/news', NewsController.getAllSlavutychNews)
router.get('/slavutych/news/:id', NewsController.getSlavutychNewsById)
router.put('/slavutych/news/edit/:id', checkAuth, NewsController.updateSlavutychNews)
router.post('/slavutych/news/delete/:id', checkAuth, NewsController.deleteSlavutychNews)

router.get('/vasylkiv/news', NewsController.getAllVasylkivNews)
router.get('/vasylkiv/news/:id', NewsController.getVasylkivNewsById)
router.put('/vasylkiv/news/edit/:id', checkAuth, NewsController.updateVasylkivNews)
router.post('/vasylkiv/news/delete/:id', checkAuth, NewsController.deleteVasylkivNews)

router.get('/vyshhorod/news', NewsController.getAllVyshhorodNews)
router.get('/vyshhorod/news/:id', NewsController.getVyshhorodNewsById)
router.put('/vyshhorod/news/edit/:id', checkAuth, NewsController.updateVyshhorodNews)
router.post('/vyshhorod/news/delete/:id', checkAuth, NewsController.deleteVyshhorodNews)

router.get('/vyshneve/news', NewsController.getAllVyshneveNews)
router.get('/vyshneve/news/:id', NewsController.getVyshneveNewsById)
router.put('/vyshneve/news/edit/:id', checkAuth, NewsController.updateVyshneveNews)
router.post('/vyshneve/news/delete/:id', checkAuth, NewsController.deleteVyshneveNews)

router.get('/yagotyn/news', NewsController.getAllYagotynNews)
router.get('/yagotyn/news/:id', NewsController.getYagotynNewsById)
router.put('/yagotyn/news/edit/:id', checkAuth, NewsController.updateYagotynNews)
router.post('/yagotyn/news/delete/:id', checkAuth, NewsController.deleteYagotynNews)

export default router