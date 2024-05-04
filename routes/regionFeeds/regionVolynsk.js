import { Router } from "express";
import VolynskDeleteNewsController from "../../controllers/regionNews/Volynsk/VolynskDeleteNewsController.js";
import VolynskGetAllNewsController from "../../controllers/regionNews/Volynsk/VolynskGetAllNewsController.js";
import VolynskGetAllNewsWithNNController from "../../controllers/regionNews/Volynsk/VolynskGetAllNewsWithNNController.js";
import VolynskGetNewsByDateController from "../../controllers/regionNews/Volynsk/VolynskGetNewsByDateController.js";
import VolynskGetNewsByIdOrUrlController from "../../controllers/regionNews/Volynsk/VolynskGetNewsByIdOrUrlController.js";
import VolynskSearchNewsController from "../../controllers/regionNews/Volynsk/VolynskSearchNewsController.js";
import VolynskUpdateNewsController from "../../controllers/regionNews/Volynsk/VolynskUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/kovel/news", VolynskGetAllNewsController.getAllKovelNews);
router.get("/lutsk/news", VolynskGetAllNewsController.getAllLutskNews);
router.get(
  "/novovolynsk/news",
  VolynskGetAllNewsController.getAllNovovolynskNews
);
router.get(
  "/volodymyr-volynskiy/news",
  VolynskGetAllNewsController.getAllVolodymyrVolynskyiNews
);

// Get All News With NN
router.get(
  "/kovel/with-nn",
  VolynskGetAllNewsWithNNController.getAllKovelNewsWithNN
);
router.get(
  "/lutsk/with-nn",
  VolynskGetAllNewsWithNNController.getAllLutskNewsWithNN
);
router.get(
  "/novovolynsk/with-nn",
  VolynskGetAllNewsWithNNController.getAllNovovolynskNewsWithNN
);
router.get(
  "/volodymyr-volynskiy/with-nn",
  VolynskGetAllNewsWithNNController.getAllVolodymyrVolynskyiNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/kovel/news/:param",
  VolynskGetNewsByIdOrUrlController.getKovelNewsByIdOrUrl
);
router.get(
  "/lutsk/news/:param",
  VolynskGetNewsByIdOrUrlController.getLutskNewsByIdOrUrl
);
router.get(
  "/novovolynsk/news/:param",
  VolynskGetNewsByIdOrUrlController.getNovovolynskNewsByIdOrUrl
);
router.get(
  "/volodymyr-volynskiy/news/:param",
  VolynskGetNewsByIdOrUrlController.getVolodymyrVolynskyiNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/kovel/news-today/:date",
  VolynskGetNewsByDateController.getKovelNewsByDate
);
router.get(
  "/lutsk/news-today/:date",
  VolynskGetNewsByDateController.getLutskNewsByDate
);
router.get(
  "/novovolynsk/news-today/:date",
  VolynskGetNewsByDateController.getNovovolynskNewsByDate
);
router.get(
  "/volodymyr-volynskiy/news-today/:date",
  VolynskGetNewsByDateController.getVolodymyrVolynskyiNewsByDate
);

// Update News
router.put(
  "/kovel/news/edit/:id",
  checkAuth,
  VolynskUpdateNewsController.updateKovelNews
);
router.put(
  "/lutsk/news/edit/:id",
  checkAuth,
  VolynskUpdateNewsController.updateLutskNews
);
router.put(
  "/novovolynsk/news/edit/:id",
  checkAuth,
  VolynskUpdateNewsController.updateNovovolynskNews
);
router.put(
  "/volodymyr-volynskiy/news/edit/:id",
  checkAuth,
  VolynskUpdateNewsController.updateVolodymyrVolynskyiNews
);

// Delete News
router.post(
  "/kovel/news/delete/:id",
  checkAuth,
  VolynskDeleteNewsController.deleteKovelNews
);
router.post(
  "/lutsk/news/delete/:id",
  checkAuth,
  VolynskDeleteNewsController.deleteLutskNews
);
router.post(
  "/novovolynsk/news/delete/:id",
  checkAuth,
  VolynskDeleteNewsController.deleteNovovolynskNews
);
router.post(
  "/volodymyr-volynskiy/news/delete/:id",
  checkAuth,
  VolynskDeleteNewsController.deleteVolodymyrVolynskyiNews
);

// Search News
router.get("/kovel/search", VolynskSearchNewsController.searchKovelNews);
router.get("/lutsk/search", VolynskSearchNewsController.searchLutskNews);
router.get(
  "/novovolynsk/search",
  VolynskSearchNewsController.searchNovovolynskNews
);
router.get(
  "/volodymyr-volynskiy/search",
  VolynskSearchNewsController.searchVolodymyrVolynskyiNews
);

export default router;
