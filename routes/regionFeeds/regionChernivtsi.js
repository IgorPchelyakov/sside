import { Router } from "express";
import ChernivtsiDeleteNewsController from "../../controllers/regionNews/Chernivtsi/ChernivtsiDeleteNewsController.js";
import ChernivtsiGetAllNewsController from "../../controllers/regionNews/Chernivtsi/ChernivtsiGetAllNewsController.js";
import ChernivtsiGetAllNewsWithNNController from "../../controllers/regionNews/Chernivtsi/ChernivtsiGetAllNewsWithNNController.js";
import ChernivtsiGetNewsByDateController from "../../controllers/regionNews/Chernivtsi/ChernivtsiGetNewsByDateController.js";
import ChernivtsiGetNewsByIdOrUrlController from "../../controllers/regionNews/Chernivtsi/ChernivtsiGetNewsByIdOrUrlController.js";
import ChernivtsiSearchNewsController from "../../controllers/regionNews/Chernivtsi/ChernivtsiSearchNewsController.js";
import ChernivtsiUpdateNewsController from "../../controllers/regionNews/Chernivtsi/ChernivtsiUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get(
  "/chernivtsi/news",
  ChernivtsiGetAllNewsController.getAllChernivtsiNews
);

// Get All News With NN
router.get(
  "/chernivtsi/with-nn",
  ChernivtsiGetAllNewsWithNNController.getAllChernivtsiNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/chernivtsi/news/:param",
  ChernivtsiGetNewsByIdOrUrlController.getChernivtsiNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/chernivtsi/news-today/:date",
  ChernivtsiGetNewsByDateController.getChernivtsiNewsByDate
);

// Update News
router.put(
  "/chernivtsi/news/edit/:id",
  checkAuth,
  ChernivtsiUpdateNewsController.updateChernivtsiNews
);

// Delete News
router.post(
  "/chernivtsi/news/delete/:id",
  checkAuth,
  ChernivtsiDeleteNewsController.deleteChernivtsiNews
);

// Search News
router.get(
  "/chernivtsi/search",
  ChernivtsiSearchNewsController.searchChernivtsiNews
);

export default router;
