import NewsController from '../controllers/newsController.js'
import { checkAuth } from '../middleware/checkAuth.js'
import { Router } from 'express'

const router = Router()

router.get('/news', NewsController.getAllNews)
router.get('/news/:param', NewsController.getNewsByIdOrURL)
router.get('/news/news-today/:date', NewsController.getAllNewsByDate)
router.post('/news/add', checkAuth, NewsController.addNews)
router.put('/news/edit/:id', checkAuth, NewsController.updateNews)
router.post('/news/delete/:id', checkAuth, NewsController.deleteNews)


export default router