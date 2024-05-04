import { Router } from "express";
import PoltavaDeleteNewsController from "../../controllers/regionNews/Poltava/PoltavaDeleteNewsController.js";
import PoltavaGetAllNewsController from "../../controllers/regionNews/Poltava/PoltavaGetAllNewsController.js";
import PoltavaGetAllNewsWithNNController from "../../controllers/regionNews/Poltava/PoltavaGetAllNewsWithNNController.js";
import PoltavaGetNewsByDateController from "../../controllers/regionNews/Poltava/PoltavaGetNewsByDateController.js";
import PoltavaGetNewsByIdOrUrlController from "../../controllers/regionNews/Poltava/PoltavaGetNewsByIdOrUrlController.js";
import PoltavaSearchNewsController from "../../controllers/regionNews/Poltava/PoltavaSearchNewsController.js";
import PoltavaUpdateNewsController from "../../controllers/regionNews/Poltava/PoltavaUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/hadiach/news", PoltavaGetAllNewsController.getAllHadiachNews);
router.get(
  "/horishni-plavni/news",
  PoltavaGetAllNewsController.getAllHorishniPlavniNews
);
router.get(
  "/kremenchuk/news",
  PoltavaGetAllNewsController.getAllKremenchukNews
);
router.get("/lubny/news", PoltavaGetAllNewsController.getAllLubnyNews);
router.get("/myrhorod/news", PoltavaGetAllNewsController.getAllMyrhorodNews);
router.get("/poltava/news", PoltavaGetAllNewsController.getAllPoltavaNews);

// Get All News With NN
router.get(
  "/hadiach/with-nn",
  PoltavaGetAllNewsWithNNController.getAllHadiachNewsWithNN
);
router.get(
  "/horishni-plavni/with-nn",
  PoltavaGetAllNewsWithNNController.getAllHorishniPlavniNewsWithNN
);
router.get(
  "/kremenchuk/with-nn",
  PoltavaGetAllNewsWithNNController.getAllKremenchukNewsWithNN
);
router.get(
  "/lubny/with-nn",
  PoltavaGetAllNewsWithNNController.getAllLubnyNewsWithNN
);
router.get(
  "/myrhorod/with-nn",
  PoltavaGetAllNewsWithNNController.getAllMyrhorodNewsWithNN
);
router.get(
  "/poltava/with-nn",
  PoltavaGetAllNewsWithNNController.getAllPoltavaNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/hadiach/news/:param",
  PoltavaGetNewsByIdOrUrlController.getHadiachNewsByIdOrUrl
);
router.get(
  "/horishni-plavni/news/:param",
  PoltavaGetNewsByIdOrUrlController.getHorishniPlavniNewsByIdOrUrl
);
router.get(
  "/kremenchuk/news/:param",
  PoltavaGetNewsByIdOrUrlController.getKremenchukNewsByIdOrUrl
);
router.get(
  "/lubny/news/:param",
  PoltavaGetNewsByIdOrUrlController.getLubnyNewsByIdOrUrl
);
router.get(
  "/myrhorod/news/:param",
  PoltavaGetNewsByIdOrUrlController.getMyrhorodNewsByIdOrUrl
);
router.get(
  "/poltava/news/:param",
  PoltavaGetNewsByIdOrUrlController.getPoltavaNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/hadiach/news-today/:date",
  PoltavaGetNewsByDateController.getHadiachNewsByDate
);
router.get(
  "/horishni-plavni/news-today/:date",
  PoltavaGetNewsByDateController.getHorishniPlavniNewsByDate
);
router.get(
  "/kremenchuk/news-today/:date",
  PoltavaGetNewsByDateController.getKremenchukNewsByDate
);
router.get(
  "/lubny/news-today/:date",
  PoltavaGetNewsByDateController.getLubnyNewsByDate
);
router.get(
  "/myrhorod/news-today/:date",
  PoltavaGetNewsByDateController.getMyrhorodNewsByDate
);
router.get(
  "/poltava/news-today/:date",
  PoltavaGetNewsByDateController.getPoltavaNewsByDate
);

// Update News
router.put(
  "/hadiach/news/edit/:id",
  checkAuth,
  PoltavaUpdateNewsController.updateHadiachNews
);
router.put(
  "/horishni-plavni/news/edit/:id",
  checkAuth,
  PoltavaUpdateNewsController.updateHorishniPlavniNews
);
router.put(
  "/kremenchuk/news/edit/:id",
  checkAuth,
  PoltavaUpdateNewsController.updateKremenchukNews
);
router.put(
  "/lubny/news/edit/:id",
  checkAuth,
  PoltavaUpdateNewsController.updateLubnyNews
);
router.put(
  "/myrhorod/news/edit/:id",
  checkAuth,
  PoltavaUpdateNewsController.updateMyrhorodNews
);
router.put(
  "/poltava/news/edit/:id",
  checkAuth,
  PoltavaUpdateNewsController.updatePoltavaNews
);

// Delete News
router.post(
  "/hadiach/news/delete/:id",
  checkAuth,
  PoltavaDeleteNewsController.deleteHadiachNews
);
router.post(
  "/horishni-plavni/news/delete/:id",
  checkAuth,
  PoltavaDeleteNewsController.deleteHorishniPlavniNews
);
router.post(
  "/kremenchuk/news/delete/:id",
  checkAuth,
  PoltavaDeleteNewsController.deleteKremenchukNews
);
router.post(
  "/lubny/news/delete/:id",
  checkAuth,
  PoltavaDeleteNewsController.deleteLubnyNews
);
router.post(
  "/myrhorod/news/delete/:id",
  checkAuth,
  PoltavaDeleteNewsController.deleteMyrhorodNews
);
router.post(
  "/poltava/news/delete/:id",
  checkAuth,
  PoltavaDeleteNewsController.deletePoltavaNews
);

// Search News
router.get("/hadiach/search", PoltavaSearchNewsController.searchHadiachNews);
router.get(
  "/horishni-plavni/search",
  PoltavaSearchNewsController.searchHorishniPlavniNews
);
router.get(
  "/kremenchuk/search",
  PoltavaSearchNewsController.searchKremenchukNews
);
router.get("/lubny/search", PoltavaSearchNewsController.searchLubnyNews);
router.get("/myrhorod/search", PoltavaSearchNewsController.searchMyrhorodNews);
router.get("/poltava/search", PoltavaSearchNewsController.searchPoltavaNews);

export default router;
