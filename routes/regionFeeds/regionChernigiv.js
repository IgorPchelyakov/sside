import { Router } from "express";
import ChernihivDeleteNewsController from "../../controllers/regionNews/Chernihiv/ChernihivDeleteNewsController.js";
import ChernihivGetAllNewsController from "../../controllers/regionNews/Chernihiv/ChernihivGetAllNewsController.js";
import ChernihivGetAllNewsWithNNController from "../../controllers/regionNews/Chernihiv/ChernihivGetAllNewsWithNNController.js";
import ChernihivGetNewsByDateController from "../../controllers/regionNews/Chernihiv/ChernihivGetNewsByDateController.js";
import ChernihivGetNewsByIdOrUrlController from "../../controllers/regionNews/Chernihiv/ChernihivGetNewsByIdOrUrlController.js";
import ChernihivSearchNewsController from "../../controllers/regionNews/Chernihiv/ChernihivSearchNewsController.js";
import ChernihivUpdateNewsController from "../../controllers/regionNews/Chernihiv/ChernihivUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/bahmach/news", ChernihivGetAllNewsController.getAllBakhmachNews);
router.get(
  "/chernihiv/news",
  ChernihivGetAllNewsController.getAllChernihivNews
);
router.get("/nizhin/news", ChernihivGetAllNewsController.getAllNizhynNews);
router.get("/pryluki/news", ChernihivGetAllNewsController.getAllPrylukyNews);

// Get All News With NN
router.get(
  "/bahmach/with-nn",
  ChernihivGetAllNewsWithNNController.getAllBakhmachNewsWithNN
);
router.get(
  "/chernihiv/with-nn",
  ChernihivGetAllNewsWithNNController.getAllChernihivNewsWithNN
);
router.get(
  "/nizhin/with-nn",
  ChernihivGetAllNewsWithNNController.getAllNizhynNewsWithNN
);
router.get(
  "/pryluki/with-nn",
  ChernihivGetAllNewsWithNNController.getAllPrylukyNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/bahmach/news/:param",
  ChernihivGetNewsByIdOrUrlController.getBakhmachNewsByIdOrUrl
);
router.get(
  "/chernihiv/news/:param",
  ChernihivGetNewsByIdOrUrlController.getChernihivNewsByIdOrUrl
);
router.get(
  "/nizhin/news/:param",
  ChernihivGetNewsByIdOrUrlController.getNizhynNewsByIdOrUrl
);
router.get(
  "/pryluki/news/:param",
  ChernihivGetNewsByIdOrUrlController.getPrylukyNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/bahmach/news-today/:date",
  ChernihivGetNewsByDateController.getBakhmachNewsByDate
);
router.get(
  "/chernihiv/news-today/:date",
  ChernihivGetNewsByDateController.getChernihivNewsByDate
);

router.get(
  "/nizhin/news-today/:date",
  ChernihivGetNewsByDateController.getNizhynNewsByDate
);
router.get(
  "/pryluki/news-today/:date",
  ChernihivGetNewsByDateController.getPrylukyNewsByDate
);

// Update News
router.put(
  "/bahmach/news/edit/:id",
  checkAuth,
  ChernihivUpdateNewsController.updateBakhmachNews
);
router.put(
  "/chernihiv/news/edit/:id",
  checkAuth,
  ChernihivUpdateNewsController.updateChernihivNews
);
router.put(
  "/nizhin/news/edit/:id",
  checkAuth,
  ChernihivUpdateNewsController.updateNizhynNews
);
router.put(
  "/pryluki/news/edit/:id",
  checkAuth,
  ChernihivUpdateNewsController.updatePrylukyNews
);

// Delete News
router.post(
  "/bahmach/news/delete/:id",
  checkAuth,
  ChernihivDeleteNewsController.deleteBakhmachNews
);
router.post(
  "/chernihiv/news/delete/:id",
  checkAuth,
  ChernihivDeleteNewsController.deleteChernihivNews
);
router.post(
  "/nizhin/news/delete/:id",
  checkAuth,
  ChernihivDeleteNewsController.deleteNizhynNews
);
router.post(
  "/pryluki/news/delete/:id",
  checkAuth,
  ChernihivDeleteNewsController.deletePrylukyNews
);

// Search News
router.get("/bahmach/search", ChernihivSearchNewsController.searchBakhmachNews);
router.get(
  "/chernihiv/search",
  ChernihivSearchNewsController.searchChernihivNews
);
router.get("/nizhin/search", ChernihivSearchNewsController.searchNizhynNews);
router.get("/pryluki/search", ChernihivSearchNewsController.searchPrylukyNews);

export default router;
