import { Router } from "express";
import TernopilDeleteNewsController from "../../controllers/regionNews/Ternopil/TernopilDeleteNewsController.js";
import TernopilGetAllNewsController from "../../controllers/regionNews/Ternopil/TernopilGetAllNewsController.js";
import TernopilGetAllNewsWithNNController from "../../controllers/regionNews/Ternopil/TernopilGetAllNewsWithNNController.js";
import TernopilGetNewsByDateController from "../../controllers/regionNews/Ternopil/TernopilGetNewsByDateController.js";
import TernopilGetNewsByIdOrUrlController from "../../controllers/regionNews/Ternopil/TernopilGetNewsByIdOrUrlController.js";
import TernopilSearchNewsController from "../../controllers/regionNews/Ternopil/TernopilSearchNewsController.js";
import TernopilUpdateNewsController from "../../controllers/regionNews/Ternopil/TernopilUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/chortkiv/news", TernopilGetAllNewsController.getAllChortkivNews);
router.get("/kremenets/news", TernopilGetAllNewsController.getAllKrementsNews);
router.get("/ternopil/news", TernopilGetAllNewsController.getAllTernopilNews);

// Get All News With NN
router.get(
  "/chortkiv/with-nn",
  TernopilGetAllNewsWithNNController.getAllChortkivNewsWithNN
);
router.get(
  "/kremenets/with-nn",
  TernopilGetAllNewsWithNNController.getAllKrementsNewsWithNN
);
router.get(
  "/ternopil/with-nn",
  TernopilGetAllNewsWithNNController.getAllTernopilNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/chortkiv/news/:param",
  TernopilGetNewsByIdOrUrlController.getChortkivNewsByIdOrUrl
);
router.get(
  "/kremenets/news/:param",
  TernopilGetNewsByIdOrUrlController.getKrementsNewsByIdOrUrl
);
router.get(
  "/ternopil/news/:param",
  TernopilGetNewsByIdOrUrlController.getTernopilNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/chortkiv/news-today/:date",
  TernopilGetNewsByDateController.getChortkivNewsByDate
);
router.get(
  "/kremenets/news-today/:date",
  TernopilGetNewsByDateController.getKrementsNewsByDate
);
router.get(
  "/ternopil/news-today/:date",
  TernopilGetNewsByDateController.getTernopilNewsByDate
);

// Update News
router.put(
  "/chortkiv/news/edit/:id",
  checkAuth,
  TernopilUpdateNewsController.updateChortkivNews
);
router.put(
  "/kremenets/news/edit/:id",
  checkAuth,
  TernopilUpdateNewsController.updateKrementsNews
);
router.put(
  "/ternopil/news/edit/:id",
  checkAuth,
  TernopilUpdateNewsController.updateTernopilNews
);

// Delete News
router.post(
  "/chortkiv/news/delete/:id",
  checkAuth,
  TernopilDeleteNewsController.deleteChortkivNews
);
router.post(
  "/kremenets/news/delete/:id",
  checkAuth,
  TernopilDeleteNewsController.deleteKrementsNews
);
router.post(
  "/ternopil/news/delete/:id",
  checkAuth,
  TernopilDeleteNewsController.deleteTernopilNews
);

// Search News
router.get("/chortkiv/search", TernopilSearchNewsController.searchChortkivNews);
router.get(
  "/kremenets/search",
  TernopilSearchNewsController.searchKrementsNews
);
router.get("/ternopil/search", TernopilSearchNewsController.searchTernopilNews);

export default router;
