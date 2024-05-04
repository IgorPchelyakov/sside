import { Router } from "express";
import KhersonDeleteNewsController from "../../controllers/regionNews/Kherson/KhersonDeleteNewsController.js";
import KhersonGetAllNewsController from "../../controllers/regionNews/Kherson/KhersonGetAllNewsController.js";
import KhersonGetAllNewsWithNNController from "../../controllers/regionNews/Kherson/KhersonGetAllNewsWithNNController.js";
import KhersonGetNewsByDateController from "../../controllers/regionNews/Kherson/KhersonGetNewsByDateController.js";
import KhersonGetNewsByIdOrUrlController from "../../controllers/regionNews/Kherson/KhersonGetNewsByIdOrUrlController.js";
import KhersonSearchNewsController from "../../controllers/regionNews/Kherson/KhersonSearchNewsController.js";
import KhersonUpdateNewsController from "../../controllers/regionNews/Kherson/KhersonUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/henichesk/news", KhersonGetAllNewsController.getAllGenicheskNews);
router.get("/kahovka/news", KhersonGetAllNewsController.getAllKakhovkaNews);
router.get("/kherson/news", KhersonGetAllNewsController.getAllKhersonNews);
router.get(
  "/nova-kakhovka/news",
  KhersonGetAllNewsController.getAllNovaKakhovkaNews
);
router.get("/oleshki/news", KhersonGetAllNewsController.getAllOleshkyNews);
router.get("/skadovsk/news", KhersonGetAllNewsController.getAllSkadovskNews);

// Get All News With NN
router.get(
  "/henichesk/with-nn",
  KhersonGetAllNewsWithNNController.getAllGenicheskNewsWithNN
);
router.get(
  "/kahovka/with-nn",
  KhersonGetAllNewsWithNNController.getAllKakhovkaNewsWithNN
);
router.get(
  "/kherson/with-nn",
  KhersonGetAllNewsWithNNController.getAllKhersonNewsWithNN
);
router.get(
  "/nova-kakhovka/with-nn",
  KhersonGetAllNewsWithNNController.getAllNovaKakhovkaNewsWithNN
);
router.get(
  "/oleshki/with-nn",
  KhersonGetAllNewsWithNNController.getAllOleshkyNewsWithNN
);
router.get(
  "/skadovsk/with-nn",
  KhersonGetAllNewsWithNNController.getAllSkadovskNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/henichesk/news/:param",
  KhersonGetNewsByIdOrUrlController.getGenicheskNewsByIdOrUrl
);
router.get(
  "/kahovka/news/:param",
  KhersonGetNewsByIdOrUrlController.getKakhovkaNewsByIdOrUrl
);
router.get(
  "/kherson/news/:param",
  KhersonGetNewsByIdOrUrlController.getKhersonNewsByIdOrUrl
);
router.get(
  "/nova-kakhovka/news/:param",
  KhersonGetNewsByIdOrUrlController.getNovaKakhovkaNewsByIdOrUrl
);
router.get(
  "/oleshki/news/:param",
  KhersonGetNewsByIdOrUrlController.getOleshkyNewsByIdOrUrl
);
router.get(
  "/skadovsk/news/:param",
  KhersonGetNewsByIdOrUrlController.getSkadovskNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/henichesk/news-today/:date",
  KhersonGetNewsByDateController.getGenicheskNewsByDate
);
router.get(
  "/kahovka/news-today/:date",
  KhersonGetNewsByDateController.getKakhovkaNewsByDate
);
router.get(
  "/kherson/news-today/:date",
  KhersonGetNewsByDateController.getKhersonNewsByDate
);
router.get(
  "/nova-kakhovka/news-today/:date",
  KhersonGetNewsByDateController.getNovaKakhovkaNewsByDate
);
router.get(
  "/oleshki/news-today/:date",
  KhersonGetNewsByDateController.getOleshkyNewsByDate
);
router.get(
  "/skadovsk/news-today/:date",
  KhersonGetNewsByDateController.getSkadovskNewsByDate
);

// Update News
router.put(
  "/henichesk/news/edit/:id",
  checkAuth,
  KhersonUpdateNewsController.updateGenicheskNews
);
router.put(
  "/kahovka/news/edit/:id",
  checkAuth,
  KhersonUpdateNewsController.updateKakhovkaNews
);
router.put(
  "/kherson/news/edit/:id",
  checkAuth,
  KhersonUpdateNewsController.updateKhersonNews
);
router.put(
  "/nova-kakhovka/news/edit/:id",
  checkAuth,
  KhersonUpdateNewsController.updateNovaKakhovkaNews
);
router.put(
  "/oleshki/news/edit/:id",
  checkAuth,
  KhersonUpdateNewsController.updateOleshkyNews
);
router.put(
  "/skadovsk/news/edit/:id",
  checkAuth,
  KhersonUpdateNewsController.updateSkadovskNews
);

// Delete News
router.post(
  "/henichesk/news/delete/:id",
  checkAuth,
  KhersonDeleteNewsController.deleteGenicheskNews
);
router.post(
  "/kahovka/news/delete/:id",
  checkAuth,
  KhersonDeleteNewsController.deleteKakhovkaNews
);
router.post(
  "/kherson/news/delete/:id",
  checkAuth,
  KhersonDeleteNewsController.deleteKhersonNews
);
router.post(
  "/nova-kakhovka/news/delete/:id",
  checkAuth,
  KhersonDeleteNewsController.deleteNovaKakhovkaNews
);
router.post(
  "/oleshki/news/delete/:id",
  checkAuth,
  KhersonDeleteNewsController.deleteOleshkyNews
);
router.post(
  "/skadovsk/news/delete/:id",
  checkAuth,
  KhersonDeleteNewsController.deleteSkadovskNews
);

// Search News
router.get(
  "/henichesk/search",
  KhersonSearchNewsController.searchGenicheskNews
);
router.get("/kahovka/search", KhersonSearchNewsController.searchKakhovkaNews);
router.get("/kherson/search", KhersonSearchNewsController.searchKhersonNews);
router.get(
  "/nova-kakhovka/search",
  KhersonSearchNewsController.searchNovaKakhovkaNews
);
router.get("/oleshki/search", KhersonSearchNewsController.searchOleshkyNews);
router.get("/skadovsk/search", KhersonSearchNewsController.searchSkadovskNews);

export default router;
