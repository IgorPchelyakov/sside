import { Router } from "express";
import ZhytomyrDeleteNewsController from "../../controllers/regionNews/Zhytomyr/ZhytomyrDeleteNewsController.js";
import ZhytomyrGetAllNewsController from "../../controllers/regionNews/Zhytomyr/ZhytomyrGetAllNewsController.js";
import ZhytomyrGetAllNewsWithNNController from "../../controllers/regionNews/Zhytomyr/ZhytomyrGetAllNewsWithNNController.js";
import ZhytomyrGetNewsByDateController from "../../controllers/regionNews/Zhytomyr/ZhytomyrGetNewsByDateController.js";
import ZhytomyrGetNewsByIdOrUrlController from "../../controllers/regionNews/Zhytomyr/ZhytomyrGetNewsByIdOrUrlController.js";
import ZhytomyrSearchNewsController from "../../controllers/regionNews/Zhytomyr/ZhytomyrSearchNewsController.js";
import ZhytomyrUpdateNewsController from "../../controllers/regionNews/Zhytomyr/ZhytomyrUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/berdychiv/news", ZhytomyrGetAllNewsController.getAllBerdychivNews);
router.get("/korosten/news", ZhytomyrGetAllNewsController.getAllKorostenNews);
router.get(
  "/korostyshiv/news",
  ZhytomyrGetAllNewsController.getAllKorostyshivNews
);
router.get("/malyn/news", ZhytomyrGetAllNewsController.getAllMalynNews);
router.get(
  "/novohrad-volynskiy/news",
  ZhytomyrGetAllNewsController.getAllNovohradVolynskyiNews
);
router.get("/zhytomyr/news", ZhytomyrGetAllNewsController.getAllZhytomyrNews);

// Get All News With NN
router.get(
  "/berdychiv/with-nn",
  ZhytomyrGetAllNewsWithNNController.getAllBerdychivNewsWithNN
);
router.get(
  "/korosten/with-nn",
  ZhytomyrGetAllNewsWithNNController.getAllKorostenNewsWithNN
);
router.get(
  "/korostyshiv/with-nn",
  ZhytomyrGetAllNewsWithNNController.getAllKorostyshivNewsWithNN
);
router.get(
  "/malyn/with-nn",
  ZhytomyrGetAllNewsWithNNController.getAllMalynNewsWithNN
);
router.get(
  "/novohrad-volynskiy/with-nn",
  ZhytomyrGetAllNewsWithNNController.getAllNovohradVolynskyiNewsWithNN
);
router.get(
  "/zhytomyr/with-nn",
  ZhytomyrGetAllNewsWithNNController.getAllZhytomyrNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/berdychiv/news/:param",
  ZhytomyrGetNewsByIdOrUrlController.getBerdychivNewsByIdOrUrl
);
router.get(
  "/korosten/news/:param",
  ZhytomyrGetNewsByIdOrUrlController.getKorostenNewsByIdOrUrl
);
router.get(
  "/korostyshiv/news/:param",
  ZhytomyrGetNewsByIdOrUrlController.getKorostyshivNewsByIdOrUrl
);
router.get(
  "/malyn/news/:param",
  ZhytomyrGetNewsByIdOrUrlController.getMalynNewsByIdOrUrl
);
router.get(
  "/novohrad-volynskiy/news/:param",
  ZhytomyrGetNewsByIdOrUrlController.getNovohradVolynskyiNewsByIdOrUrl
);
router.get(
  "/zhytomyr/news/:param",
  ZhytomyrGetNewsByIdOrUrlController.getZhytomyrNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/berdychiv/news-today/:date",
  ZhytomyrGetNewsByDateController.getBerdychivNewsByDate
);
router.get(
  "/korosten/news-today/:date",
  ZhytomyrGetNewsByDateController.getKorostenNewsByDate
);
router.get(
  "/korostyshiv/news-today/:date",
  ZhytomyrGetNewsByDateController.getKorostyshivNewsByDate
);
router.get(
  "/malyn/news-today/:date",
  ZhytomyrGetNewsByDateController.getMalynNewsByDate
);
router.get(
  "/novohrad-volynskiy/news-today/:date",
  ZhytomyrGetNewsByDateController.getNovohradVolynskyiNewsByDate
);
router.get(
  "/zhytomyr/news-today/:date",
  ZhytomyrGetNewsByDateController.getZhytomyrNewsByDate
);

// Update News
router.put(
  "/berdychiv/news/edit/:id",
  checkAuth,
  ZhytomyrUpdateNewsController.updateBerdychivNews
);
router.put(
  "/korosten/news/edit/:id",
  checkAuth,
  ZhytomyrUpdateNewsController.updateKorostenNews
);
router.put(
  "/korostyshiv/news/edit/:id",
  checkAuth,
  ZhytomyrUpdateNewsController.updateKorostyshivNews
);
router.put(
  "/malyn/news/edit/:id",
  checkAuth,
  ZhytomyrUpdateNewsController.updateMalynNews
);
router.put(
  "/novohrad-volynskiy/news/edit/:id",
  checkAuth,
  ZhytomyrUpdateNewsController.updateNovohradVolynskyiNews
);
router.put(
  "/zhytomyr/news/edit/:id",
  checkAuth,
  ZhytomyrUpdateNewsController.updateZhytomyrNews
);

// Delete News
router.post(
  "/berdychiv/news/delete/:id",
  checkAuth,
  ZhytomyrDeleteNewsController.deleteBerdychivNews
);
router.post(
  "/korosten/news/delete/:id",
  checkAuth,
  ZhytomyrDeleteNewsController.deleteKorostenNews
);
router.post(
  "/korostyshiv/news/delete/:id",
  checkAuth,
  ZhytomyrDeleteNewsController.deleteKorostyshivNews
);
router.post(
  "/malyn/news/delete/:id",
  checkAuth,
  ZhytomyrDeleteNewsController.deleteMalynNews
);
router.post(
  "/novohrad-volynskiy/news/delete/:id",
  checkAuth,
  ZhytomyrDeleteNewsController.deleteNovohradVolynskyiNews
);
router.post(
  "/zhytomyr/news/delete/:id",
  checkAuth,
  ZhytomyrDeleteNewsController.deleteZhytomyrNews
);

// Search News
router.get(
  "/berdychiv/search",
  ZhytomyrSearchNewsController.searchBerdychivNews
);
router.get("/korosten/search", ZhytomyrSearchNewsController.searchKorostenNews);
router.get(
  "/korostyshiv/search",
  ZhytomyrSearchNewsController.searchKorostyshivNews
);
router.get("/malyn/search", ZhytomyrSearchNewsController.searchMalynNews);
router.get(
  "/novohrad-volynskiy/search",
  ZhytomyrSearchNewsController.searchNovohradVolynskyiNews
);
router.get("/zhytomyr/search", ZhytomyrSearchNewsController.searchZhytomyrNews);

export default router;
