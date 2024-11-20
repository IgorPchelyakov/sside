import { Router } from "express";
import NewsController from "../controllers/newsController.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Router();

router.get("/news", NewsController.getAllNews);
router.get("/homepage-news", NewsController.getAllNewsForHomepage);
router.get("/news/:param", NewsController.getNewsByIdOrURL);
router.get("/news/news-today/:date", NewsController.getAllNewsByDate);
router.post("/news/add", checkAuth, NewsController.addNews);
router.put("/news/edit/:id", checkAuth, NewsController.updateNews);
router.post("/news/delete/:id", checkAuth, NewsController.deleteNews);
router.get("/newsattr", NewsController.getAllNewsIncludeAttr);
router.get("/news-post", NewsController.getAllNewsWithLimitForPost);
router.get("/main-page", NewsController.getNationalOrCityNews);
// router.get("/get-news/:url", NewsController.getNewsByUrlNationalOrCityNews);
router.get("/get-news", NewsController.getNewsByUrlNationalOrCityNews);
router.get("/get-news-with-pg", NewsController.getNewsWithPagination);

export default router;
