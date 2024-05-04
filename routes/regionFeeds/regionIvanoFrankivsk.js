import { Router } from "express";
import IvanoFrankivskDeleteNewsController from "../../controllers/regionNews/IvanoFrankivsk/IvanoFrankivskDeleteNewsController.js";
import IvanoFrankivskGetNewsController from "../../controllers/regionNews/IvanoFrankivsk/IvanoFrankivskGetAllNewsController.js";
import IvanoFrankivskGetNewsWithNNController from "../../controllers/regionNews/IvanoFrankivsk/IvanoFrankivskGetAllNewsWithNNController.js";
import IvanoFrankivskGetNewsByDateController from "../../controllers/regionNews/IvanoFrankivsk/IvanoFrankivskGetNewsByDateController.js";
import IvanoFrankivskGetNewsByIdOrUrlController from "../../controllers/regionNews/IvanoFrankivsk/IvanoFrankivskGetNewsByIdOrUrlController.js";
import IvanoFrankivskSearchNewsController from "../../controllers/regionNews/IvanoFrankivsk/IvanoFrankivskSearchNewsController.js";
import IvanoFrankivskUpdateNewsController from "../../controllers/regionNews/IvanoFrankivsk/IvanoFrankivskUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/dolyna/news", IvanoFrankivskGetNewsController.getAllDolynaNews);
router.get(
  "/ivano-frankivsk/news",
  IvanoFrankivskGetNewsController.getAllIvanoFrankivskNews
);
router.get("/kalush/news", IvanoFrankivskGetNewsController.getAllKalushNews);
router.get("/kolomya/news", IvanoFrankivskGetNewsController.getAllKolomyiaNews);
router.get(
  "/nadvirna/news",
  IvanoFrankivskGetNewsController.getAllNadvirnaNews
);

// Get All News With NN
router.get(
  "/dolyna/with-nn",
  IvanoFrankivskGetNewsWithNNController.getAllDolynaNewsWithNN
);
router.get(
  "/ivano-frankivsk/with-nn",
  IvanoFrankivskGetNewsWithNNController.getAllIvanoFrankivskNewsWithNN
);
router.get(
  "/kalush/with-nn",
  IvanoFrankivskGetNewsWithNNController.getAllKalushNewsWithNN
);
router.get(
  "/kolomya/with-nn",
  IvanoFrankivskGetNewsWithNNController.getAllKolomyiaNewsWithNN
);
router.get(
  "/nadvirna/with-nn",
  IvanoFrankivskGetNewsWithNNController.getAllNadvirnaNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/dolyna/news/:param",
  IvanoFrankivskGetNewsByIdOrUrlController.getDolynaNewsByIdOrUrl
);
router.get(
  "/ivano-frankivsk/news/:param",
  IvanoFrankivskGetNewsByIdOrUrlController.getIvanoFrankivskNewsByIdOrUrl
);
router.get(
  "/kalush/news/:param",
  IvanoFrankivskGetNewsByIdOrUrlController.getKalushNewsByIdOrUrl
);
router.get(
  "/kolomya/news/:param",
  IvanoFrankivskGetNewsByIdOrUrlController.getKolomyiaNewsByIdOrUrl
);
router.get(
  "/nadvirna/news/:param",
  IvanoFrankivskGetNewsByIdOrUrlController.getNadvirnaNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/dolyna/news-today/:date",
  IvanoFrankivskGetNewsByDateController.getDolynaNewsByDate
);
router.get(
  "/ivano-frankivsk/news-today/:date",
  IvanoFrankivskGetNewsByDateController.getIvanoFrankivskNewsByDate
);
router.get(
  "/kalush/news-today/:date",
  IvanoFrankivskGetNewsByDateController.getKalushNewsByDate
);
router.get(
  "/kolomya/news-today/:date",
  IvanoFrankivskGetNewsByDateController.getKolomyiaNewsByDate
);
router.get(
  "/nadvirna/news-today/:date",
  IvanoFrankivskGetNewsByDateController.getNadvirnaNewsByDate
);

// Update News
router.put(
  "/dolyna/news/edit/:id",
  checkAuth,
  IvanoFrankivskUpdateNewsController.updateDolynaNews
);
router.put(
  "/ivano-frankivsk/news/edit/:id",
  checkAuth,
  IvanoFrankivskUpdateNewsController.updateIvanoFrankivskNews
);
router.put(
  "/kalush/news/edit/:id",
  checkAuth,
  IvanoFrankivskUpdateNewsController.updateKalushNews
);
router.put(
  "/kolomya/news/edit/:id",
  checkAuth,
  IvanoFrankivskUpdateNewsController.updateKolomyiaNews
);
router.put(
  "/nadvirna/news/edit/:id",
  checkAuth,
  IvanoFrankivskUpdateNewsController.updateNadvirnaNews
);

// Delete News
router.post(
  "/dolyna/news/delete/:id",
  checkAuth,
  IvanoFrankivskDeleteNewsController.deleteDolynaNews
);
router.post(
  "/ivano-frankivsk/news/delete/:id",
  checkAuth,
  IvanoFrankivskDeleteNewsController.deleteIvanoFrankivskNews
);
router.post(
  "/kalush/news/delete/:id",
  checkAuth,
  IvanoFrankivskDeleteNewsController.deleteKalushNews
);
router.post(
  "/kolomya/news/delete/:id",
  checkAuth,
  IvanoFrankivskDeleteNewsController.deleteKolomyiaNews
);
router.post(
  "/nadvirna/news/delete/:id",
  checkAuth,
  IvanoFrankivskDeleteNewsController.deleteNadvirnaNews
);

// Search News
router.get(
  "/dolyna/search",
  IvanoFrankivskSearchNewsController.searchDolynaNews
);
router.get(
  "/ivano-frankivsk/search",
  IvanoFrankivskSearchNewsController.searchIvanoFrankivskNews
);
router.get(
  "/kalush/search",
  IvanoFrankivskSearchNewsController.searchKalushNews
);
router.get(
  "/kolomya/search",
  IvanoFrankivskSearchNewsController.searchKolomyiaNews
);
router.get(
  "/nadvirna/search",
  IvanoFrankivskSearchNewsController.searchNadvirnaNews
);

export default router;
