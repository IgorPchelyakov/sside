import { Router } from "express";
import SumyDeleteNewsController from "../../controllers/regionNews/Sumy/SumyDeleteNewsController.js";
import SumyGetAllNewsController from "../../controllers/regionNews/Sumy/SumyGetAllNewsController.js";
import SumyGetAllNewsWithNNController from "../../controllers/regionNews/Sumy/SumyGetAllNewsWithNNController.js";
import SumyGetNewsByDateController from "../../controllers/regionNews/Sumy/SumyGetNewsByDateController.js";
import SumyGetNewsByIdOrUrlController from "../../controllers/regionNews/Sumy/SumyGetNewsByIdOrUrlController.js";
import SumySearchNewsController from "../../controllers/regionNews/Sumy/SumySearchNewsController.js";
import SumyUpdateNewsController from "../../controllers/regionNews/Sumy/SumyUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/gluhiv/news", SumyGetAllNewsController.getAllGlukhivNews);
router.get("/konotop/news", SumyGetAllNewsController.getAllKonotopNews);
router.get("/krolevets/news", SumyGetAllNewsController.getAllKrolevetsNews);
router.get("/lebedyn/news", SumyGetAllNewsController.getAllLebedynNews);
router.get("/ohtyrka/news", SumyGetAllNewsController.getAllOhtyrkaNews);
router.get("/romny/news", SumyGetAllNewsController.getAllRomnyNews);
router.get("/shostka/news", SumyGetAllNewsController.getAllShostkaNews);
router.get("/sumy/news", SumyGetAllNewsController.getAllSumyNews);
router.get("/trostyanets/news", SumyGetAllNewsController.getAllTrostyanetsNews);

// Get All News With NN
router.get(
  "/gluhiv/with-nn",
  SumyGetAllNewsWithNNController.getAllGlukhivNewsWithNN
);
router.get(
  "/konotop/with-nn",
  SumyGetAllNewsWithNNController.getAllKonotopNewsWithNN
);
router.get(
  "/krolevets/with-nn",
  SumyGetAllNewsWithNNController.getAllKrolevetsNewsWithNN
);
router.get(
  "/lebedyn/with-nn",
  SumyGetAllNewsWithNNController.getAllLebedynNewsWithNN
);
router.get(
  "/ohtyrka/with-nn",
  SumyGetAllNewsWithNNController.getAllOhtyrkaNewsWithNN
);
router.get(
  "/romny/with-nn",
  SumyGetAllNewsWithNNController.getAllRomnyNewsWithNN
);
router.get(
  "/shostka/with-nn",
  SumyGetAllNewsWithNNController.getAllShostkaNewsWithNN
);
router.get(
  "/sumy/with-nn",
  SumyGetAllNewsWithNNController.getAllSumyNewsWithNN
);
router.get(
  "/trostyanets/with-nn",
  SumyGetAllNewsWithNNController.getAllTrostyanetsNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/gluhiv/news/:param",
  SumyGetNewsByIdOrUrlController.getGlukhivNewsByIdOrUrl
);
router.get(
  "/konotop/news/:param",
  SumyGetNewsByIdOrUrlController.getKonotopNewsByIdOrUrl
);
router.get(
  "/krolevets/news/:param",
  SumyGetNewsByIdOrUrlController.getKrolevetsNewsByIdOrUrl
);
router.get(
  "/lebedyn/news/:param",
  SumyGetNewsByIdOrUrlController.getLebedynNewsByIdOrUrl
);
router.get(
  "/ohtyrka/news/:param",
  SumyGetNewsByIdOrUrlController.getOhtyrkaNewsByIdOrUrl
);
router.get(
  "/romny/news/:param",
  SumyGetNewsByIdOrUrlController.getRomnyNewsByIdOrUrl
);
router.get(
  "/shostka/news/:param",
  SumyGetNewsByIdOrUrlController.getShostkaNewsByIdOrUrl
);
router.get(
  "/sumy/news/:param",
  SumyGetNewsByIdOrUrlController.getSumyNewsByIdOrUrl
);
router.get(
  "/trostyanets/news/:param",
  SumyGetNewsByIdOrUrlController.getTrostyanetsNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/gluhiv/news-today/:date",
  SumyGetNewsByDateController.getGlukhivNewsByDate
);
router.get(
  "/konotop/news-today/:date",
  SumyGetNewsByDateController.getKonotopNewsByDate
);
router.get(
  "/krolevets/news-today/:date",
  SumyGetNewsByDateController.getKrolevetsNewsByDate
);
router.get(
  "/lebedyn/news-today/:date",
  SumyGetNewsByDateController.getLebedynNewsByDate
);
router.get(
  "/ohtyrka/news-today/:date",
  SumyGetNewsByDateController.getOhtyrkaNewsByDate
);
router.get(
  "/romny/news-today/:date",
  SumyGetNewsByDateController.getRomnyNewsByDate
);
router.get(
  "/shostka/news-today/:date",
  SumyGetNewsByDateController.getShostkaNewsByDate
);
router.get(
  "/sumy/news-today/:date",
  SumyGetNewsByDateController.getSumyNewsByDate
);
router.get(
  "/trostyanets/news-today/:date",
  SumyGetNewsByDateController.getTrostyanetsNewsByDate
);

// Update News
router.put(
  "/gluhiv/news/edit/:id",
  checkAuth,
  SumyUpdateNewsController.updateGlukhivNews
);
router.put(
  "/konotop/news/edit/:id",
  checkAuth,
  SumyUpdateNewsController.updateKonotopNews
);
router.put(
  "/krolevets/news/edit/:id",
  checkAuth,
  SumyUpdateNewsController.updateKrolevetsNews
);
router.put(
  "/lebedyn/news/edit/:id",
  checkAuth,
  SumyUpdateNewsController.updateLebedynNews
);
router.put(
  "/ohtyrka/news/edit/:id",
  checkAuth,
  SumyUpdateNewsController.updateOhtyrkaNews
);
router.put(
  "/romny/news/edit/:id",
  checkAuth,
  SumyUpdateNewsController.updateRomnyNews
);
router.put(
  "/shostka/news/edit/:id",
  checkAuth,
  SumyUpdateNewsController.updateShostkaNews
);
router.put(
  "/sumy/news/edit/:id",
  checkAuth,
  SumyUpdateNewsController.updateSumyNews
);
router.put(
  "/trostyanets/news/edit/:id",
  checkAuth,
  SumyUpdateNewsController.updateTrostyanetsNews
);

// Delete News
router.post(
  "/gluhiv/news/delete/:id",
  checkAuth,
  SumyDeleteNewsController.deleteGlukhivNews
);
router.post(
  "/konotop/news/delete/:id",
  checkAuth,
  SumyDeleteNewsController.deleteKonotopNews
);
router.post(
  "/krolevets/news/delete/:id",
  checkAuth,
  SumyDeleteNewsController.deleteKrolevetsNews
);
router.post(
  "/lebedyn/news/delete/:id",
  checkAuth,
  SumyDeleteNewsController.deleteLebedynNews
);
router.post(
  "/ohtyrka/news/delete/:id",
  checkAuth,
  SumyDeleteNewsController.deleteOhtyrkaNews
);
router.post(
  "/romny/news/delete/:id",
  checkAuth,
  SumyDeleteNewsController.deleteRomnyNews
);
router.post(
  "/shostka/news/delete/:id",
  checkAuth,
  SumyDeleteNewsController.deleteShostkaNews
);
router.post(
  "/sumy/news/delete/:id",
  checkAuth,
  SumyDeleteNewsController.deleteSumyNews
);
router.post(
  "/trostyanets/news/delete/:id",
  checkAuth,
  SumyDeleteNewsController.deleteTrostyanetsNews
);

// Search News
router.get("/gluhiv/search", SumySearchNewsController.searchGlukhivNews);
router.get("/konotop/search", SumySearchNewsController.searchKonotopNews);
router.get("/krolevets/search", SumySearchNewsController.searchKrolevetsNews);
router.get("/lebedyn/search", SumySearchNewsController.searchLebedynNews);
router.get("/ohtyrka/search", SumySearchNewsController.searchOhtyrkaNews);
router.get("/romny/search", SumySearchNewsController.searchRomnyNews);
router.get("/shostka/search", SumySearchNewsController.searchShostkaNews);
router.get("/sumy/search", SumySearchNewsController.searchSumyNews);
router.get(
  "/trostyanets/search",
  SumySearchNewsController.searchTrostyanetsNews
);

export default router;
