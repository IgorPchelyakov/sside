import { Router } from "express";
import RivneDeleteNewsController from "../../controllers/regionNews/Rivne/RivneDeleteNewsController.js";
import RivneGetAllNewsController from "../../controllers/regionNews/Rivne/RivneGetAllNewsController.js";
import RivneGetAllNewsWithNNController from "../../controllers/regionNews/Rivne/RivneGetAllNewsWithNNController.js";
import RivneGetNewsByDateController from "../../controllers/regionNews/Rivne/RivneGetNewsByDateController.js";
import RivneGetNewsByIdOrUrlController from "../../controllers/regionNews/Rivne/RivneGetNewsByIdOrUrlController.js";
import RivneSearchNewsController from "../../controllers/regionNews/Rivne/RivneSearchNewsController.js";
import RivneUpdateNewsController from "../../controllers/regionNews/Rivne/RivneUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/dubno/news", RivneGetAllNewsController.getAllDubnoNews);
router.get("/kostopil/news", RivneGetAllNewsController.getAllKostopilNews);
router.get("/rivne/news", RivneGetAllNewsController.getAllRivneNews);
router.get("/sarny/news", RivneGetAllNewsController.getAllSarnyNews);
router.get("/varash/news", RivneGetAllNewsController.getAllVarashNews);
router.get("/zdolbuniv/news", RivneGetAllNewsController.getAllZdolbunivNews);

// Get All News With NN
router.get(
  "/dubno/with-nn",
  RivneGetAllNewsWithNNController.getAllDubnoNewsWithNN
);
router.get(
  "/kostopil/with-nn",
  RivneGetAllNewsWithNNController.getAllKostopilNewsWithNN
);
router.get(
  "/rivne/with-nn",
  RivneGetAllNewsWithNNController.getAllRivneNewsWithNN
);
router.get(
  "/sarny/with-nn",
  RivneGetAllNewsWithNNController.getAllSarnyNewsWithNN
);
router.get(
  "/varash/with-nn",
  RivneGetAllNewsWithNNController.getAllVarashNewsWithNN
);
router.get(
  "/zdolbuniv/with-nn",
  RivneGetAllNewsWithNNController.getAllZdolbunivNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/dubno/news/:param",
  RivneGetNewsByIdOrUrlController.getDubnoNewsByIdOrUrl
);
router.get(
  "/kostopil/news/:param",
  RivneGetNewsByIdOrUrlController.getKostopilNewsByIdOrUrl
);
router.get(
  "/rivne/news/:param",
  RivneGetNewsByIdOrUrlController.getRivneNewsByIdOrUrl
);
router.get(
  "/sarny/news/:param",
  RivneGetNewsByIdOrUrlController.getSarnyNewsByIdOrUrl
);
router.get(
  "/varash/news/:param",
  RivneGetNewsByIdOrUrlController.getVarashNewsByIdOrUrl
);
router.get(
  "/zdolbuniv/news/:param",
  RivneGetNewsByIdOrUrlController.getZdolbunivNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/dubno/news-today/:date",
  RivneGetNewsByDateController.getDubnoNewsByDate
);
router.get(
  "/kostopil/news-today/:date",
  RivneGetNewsByDateController.getKostopilNewsByDate
);
router.get(
  "/rivne/news-today/:date",
  RivneGetNewsByDateController.getRivneNewsByDate
);
router.get(
  "/sarny/news-today/:date",
  RivneGetNewsByDateController.getSarnyNewsByDate
);
router.get(
  "/varash/news-today/:date",
  RivneGetNewsByDateController.getVarashNewsByDate
);
router.get(
  "/zdolbuniv/news-today/:date",
  RivneGetNewsByDateController.getZdolbunivNewsByDate
);

// Update News
router.put(
  "/dubno/news/edit/:id",
  checkAuth,
  RivneUpdateNewsController.updateDubnoNews
);
router.put(
  "/kostopil/news/edit/:id",
  checkAuth,
  RivneUpdateNewsController.updateKostopilNews
);
router.put(
  "/rivne/news/edit/:id",
  checkAuth,
  RivneUpdateNewsController.updateRivneNews
);
router.put(
  "/sarny/news/edit/:id",
  checkAuth,
  RivneUpdateNewsController.updateSarnyNews
);
router.put(
  "/varash/news/edit/:id",
  checkAuth,
  RivneUpdateNewsController.updateVarashNews
);
router.put(
  "/zdolbuniv/news/edit/:id",
  checkAuth,
  RivneUpdateNewsController.updateZdolbunivNews
);

// Delete News
router.post(
  "/dubno/news/delete/:id",
  checkAuth,
  RivneDeleteNewsController.deleteDubnoNews
);
router.post(
  "/kostopil/news/delete/:id",
  checkAuth,
  RivneDeleteNewsController.deleteKostopilNews
);
router.post(
  "/rivne/news/delete/:id",
  checkAuth,
  RivneDeleteNewsController.deleteRivneNews
);
router.post(
  "/sarny/news/delete/:id",
  checkAuth,
  RivneDeleteNewsController.deleteSarnyNews
);
router.post(
  "/varash/news/delete/:id",
  checkAuth,
  RivneDeleteNewsController.deleteVarashNews
);
router.post(
  "/zdolbuniv/news/delete/:id",
  checkAuth,
  RivneDeleteNewsController.deleteZdolbunivNews
);

// Search News
router.get("/dubno/search", RivneSearchNewsController.searchDubnoNews);
router.get("/kostopil/search", RivneSearchNewsController.searchKostopilNews);
router.get("/rivne/search", RivneSearchNewsController.searchRivneNews);
router.get("/sarny/search", RivneSearchNewsController.searchSarnyNews);
router.get("/varash/search", RivneSearchNewsController.searchVarashNews);
router.get("/zdolbuniv/search", RivneSearchNewsController.searchZdolbunivNews);

export default router;
