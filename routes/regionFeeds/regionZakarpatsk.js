import { Router } from "express";
import ZakarpatskDeleteNewsController from "../../controllers/regionNews/Zakarpatsk/ZakarpatskDeleteNewsController.js";
import ZakarpatskGetAllNewsController from "../../controllers/regionNews/Zakarpatsk/ZakarpatskGetAllNewsController.js";
import ZakarpatskGetAllNewsWithNNController from "../../controllers/regionNews/Zakarpatsk/ZakarpatskGetAllNewsWithNNController.js";
import ZakarpatskGetNewsByDateController from "../../controllers/regionNews/Zakarpatsk/ZakarpatskGetNewsByDateController.js";
import ZakarpatskGetNewsByIdOrUrlController from "../../controllers/regionNews/Zakarpatsk/ZakarpatskGetNewsByIdOrUrlController.js";
import ZakarpatskSearchNewsController from "../../controllers/regionNews/Zakarpatsk/ZakarpatskSearchNewsController.js";
import ZakarpatskUpdateNewsController from "../../controllers/regionNews/Zakarpatsk/ZakarpatskUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/beregove/news", ZakarpatskGetAllNewsController.getAllBerehoveNews);
router.get("/hust/news", ZakarpatskGetAllNewsController.getAllKhustNews);
router.get(
  "/mukachevo/news",
  ZakarpatskGetAllNewsController.getAllMukachevoNews
);
router.get("/uzhhorod/news", ZakarpatskGetAllNewsController.getAllUzhhorodNews);
router.get(
  "/vinohradiv/news",
  ZakarpatskGetAllNewsController.getAllVynohradivNews
);

// Get All News With NN
router.get(
  "/beregove/with-nn",
  ZakarpatskGetAllNewsWithNNController.getAllBerehoveNewsWithNN
);
router.get(
  "/hust/with-nn",
  ZakarpatskGetAllNewsWithNNController.getAllKhustNewsWithNN
);
router.get(
  "/mukachevo/with-nn",
  ZakarpatskGetAllNewsWithNNController.getAllMukachevoNewsWithNN
);
router.get(
  "/uzhhorod/with-nn",
  ZakarpatskGetAllNewsWithNNController.getAllUzhhorodNewsWithNN
);
router.get(
  "/vinohradiv/with-nn",
  ZakarpatskGetAllNewsWithNNController.getAllVynohradivNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/beregove/news/:param",
  ZakarpatskGetNewsByIdOrUrlController.getBerehoveNewsByIdOrUrl
);
router.get(
  "/hust/news/:param",
  ZakarpatskGetNewsByIdOrUrlController.getKhustNewsByIdOrUrl
);
router.get(
  "/mukachevo/news/:param",
  ZakarpatskGetNewsByIdOrUrlController.getMukachevoNewsByIdOrUrl
);
router.get(
  "/uzhhorod/news/:param",
  ZakarpatskGetNewsByIdOrUrlController.getUzhhorodNewsByIdOrUrl
);
router.get(
  "/vinohradiv/news/:param",
  ZakarpatskGetNewsByIdOrUrlController.getVynohradivNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/beregove/news-today/:date",
  ZakarpatskGetNewsByDateController.getBerehoveNewsByDate
);
router.get(
  "/hust/news-today/:date",
  ZakarpatskGetNewsByDateController.getKhustNewsByDate
);
router.get(
  "/mukachevo/news-today/:date",
  ZakarpatskGetNewsByDateController.getMukachevoNewsByDate
);
router.get(
  "/uzhhorod/news-today/:date",
  ZakarpatskGetNewsByDateController.getUzhhorodNewsByDate
);
router.get(
  "/vinohradiv/news-today/:date",
  ZakarpatskGetNewsByDateController.getVynohradivNewsByDate
);

// Update News
router.put(
  "/beregove/news/edit/:id",
  checkAuth,
  ZakarpatskUpdateNewsController.updateBerehoveNews
);
router.put(
  "/hust/news/edit/:id",
  checkAuth,
  ZakarpatskUpdateNewsController.updateKhustNews
);
router.put(
  "/mukachevo/news/edit/:id",
  checkAuth,
  ZakarpatskUpdateNewsController.updateMukachevoNews
);
router.put(
  "/uzhhorod/news/edit/:id",
  checkAuth,
  ZakarpatskUpdateNewsController.updateUzhhorodNews
);
router.put(
  "/vinohradiv/news/edit/:id",
  checkAuth,
  ZakarpatskUpdateNewsController.updateVynohradivNews
);

// Delete News
router.post(
  "/beregove/news/delete/:id",
  checkAuth,
  ZakarpatskDeleteNewsController.deleteBerehoveNews
);
router.post(
  "/hust/news/delete/:id",
  checkAuth,
  ZakarpatskDeleteNewsController.deleteKhustNews
);
router.post(
  "/mukachevo/news/delete/:id",
  checkAuth,
  ZakarpatskDeleteNewsController.deleteMukachevoNews
);
router.post(
  "/uzhhorod/news/delete/:id",
  checkAuth,
  ZakarpatskDeleteNewsController.deleteUzhhorodNews
);
router.post(
  "/vinohradiv/news/delete/:id",
  checkAuth,
  ZakarpatskDeleteNewsController.deleteVynohradivNews
);

// Search News
router.get(
  "/beregove/search",
  ZakarpatskSearchNewsController.searchBerehoveNews
);
router.get("/hust/search", ZakarpatskSearchNewsController.searchKhustNews);
router.get(
  "/mukachevo/search",
  ZakarpatskSearchNewsController.searchMukachevoNews
);
router.get(
  "/uzhhorod/search",
  ZakarpatskSearchNewsController.searchUzhhorodNews
);
router.get(
  "/vinohradiv/search",
  ZakarpatskSearchNewsController.searchVynohradivNews
);

export default router;
