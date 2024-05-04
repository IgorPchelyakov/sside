import { Router } from "express";
import KirovogradDeleteNewsController from "../../controllers/regionNews/Kirovograd/KirovogradDeleteNewsController.js";
import KirovogradGetAllNewsController from "../../controllers/regionNews/Kirovograd/KirovogradGetAllNewsController.js";
import KirovogradGetAllNewsWithNNController from "../../controllers/regionNews/Kirovograd/KirovogradGetAllNewsWithNNController.js";
import KirovogradGetNewsByDateController from "../../controllers/regionNews/Kirovograd/KirovogradGetNewsByDateController.js";
import KirovogradGetNewsByIdOrUrlController from "../../controllers/regionNews/Kirovograd/KirovogradGetNewsByIdOrUrlController.js";
import KirovogradSearchNewsController from "../../controllers/regionNews/Kirovograd/KirovogradSearchNewsController.js";
import KirovogradUpdateNewsController from "../../controllers/regionNews/Kirovograd/KirovogradUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get(
  "/kropyvnytskiy/news",
  KirovogradGetAllNewsController.getAllKropyvnytskyiNews
);
router.get(
  "/olexandriya/news",
  KirovogradGetAllNewsController.getAllOleksandriyaNews
);
router.get(
  "/svitlovodsk/news",
  KirovogradGetAllNewsController.getAllSvitlovodskNews
);
router.get(
  "/znamyanka/news",
  KirovogradGetAllNewsController.getAllZnamiankaNews
);

// Get All News With NN
router.get(
  "/kropyvnytskiy/with-nn",
  KirovogradGetAllNewsWithNNController.getAllKropyvnytskyiNewsWithNN
);
router.get(
  "/olexandriya/with-nn",
  KirovogradGetAllNewsWithNNController.getAllOleksandriyaNewsWithNN
);
router.get(
  "/svitlovodsk/with-nn",
  KirovogradGetAllNewsWithNNController.getAllSvitlovodskNewsWithNN
);
router.get(
  "/znamyanka/with-nn",
  KirovogradGetAllNewsWithNNController.getAllZnamiankaNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/kropyvnytskiy/news/:param",
  KirovogradGetNewsByIdOrUrlController.getKropyvnytskyiNewsByIdOrUrl
);
router.get(
  "/olexandriya/news/:param",
  KirovogradGetNewsByIdOrUrlController.getOleksandriyaNewsByIdOrUrl
);
router.get(
  "/svitlovodsk/news/:param",
  KirovogradGetNewsByIdOrUrlController.getSvitlovodskNewsByIdOrUrl
);
router.get(
  "/znamyanka/news/:param",
  KirovogradGetNewsByIdOrUrlController.getZnamiankaNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/kropyvnytskiy/news-today/:date",
  KirovogradGetNewsByDateController.getKropyvnytskyiNewsByDate
);
router.get(
  "/olexandriya/news-today/:date",
  KirovogradGetNewsByDateController.getOleksandriyaNewsByDate
);
router.get(
  "/svitlovodsk/news-today/:date",
  KirovogradGetNewsByDateController.getSvitlovodskNewsByDate
);
router.get(
  "/znamyanka/news-today/:date",
  KirovogradGetNewsByDateController.getZnamiankaNewsByDate
);

// Update News
router.put(
  "/kropyvnytskiy/news/edit/:id",
  checkAuth,
  KirovogradUpdateNewsController.updateKropyvnytskyiNews
);
router.put(
  "/olexandriya/news/edit/:id",
  checkAuth,
  KirovogradUpdateNewsController.updateOleksandriyaNews
);
router.put(
  "/svitlovodsk/news/edit/:id",
  checkAuth,
  KirovogradUpdateNewsController.updateSvitlovodskNews
);
router.put(
  "/znamyanka/news/edit/:id",
  checkAuth,
  KirovogradUpdateNewsController.updateZnamiankaNews
);

// Delete News
router.post(
  "/kropyvnytskiy/news/delete/:id",
  checkAuth,
  KirovogradDeleteNewsController.deleteKropyvnytskyiNews
);
router.post(
  "/olexandriya/news/delete/:id",
  checkAuth,
  KirovogradDeleteNewsController.deleteOleksandriyaNews
);
router.post(
  "/svitlovodsk/news/delete/:id",
  checkAuth,
  KirovogradDeleteNewsController.deleteSvitlovodskNews
);
router.post(
  "/znamyanka/news/delete/:id",
  checkAuth,
  KirovogradDeleteNewsController.deleteZnamiankaNews
);

// Search News
router.get(
  "/kropyvnytskiy/search",
  KirovogradSearchNewsController.searchKropyvnytskyiNews
);
router.get(
  "/olexandriya/search",
  KirovogradSearchNewsController.searchOleksandriyaNews
);
router.get(
  "/svitlovodsk/search",
  KirovogradSearchNewsController.searchSvitlovodskNews
);
router.get(
  "/znamyanka/search",
  KirovogradSearchNewsController.searchZnamiankaNews
);

export default router;
