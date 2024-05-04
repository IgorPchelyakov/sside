import { Router } from "express";
import LvivDeleteNewsController from "../../controllers/regionNews/Lviv/LvivDeleteNewsController.js";
import LvivGetAllNewsController from "../../controllers/regionNews/Lviv/LvivGetAllNewsController.js";
import LvivGetAllNewsWithNNController from "../../controllers/regionNews/Lviv/LvivGetAllNewsWithNNController.js";
import LvivGetNewsByDateController from "../../controllers/regionNews/Lviv/LvivGetNewsByDateController.js";
import LvivGetNewsByIdOrUrlController from "../../controllers/regionNews/Lviv/LvivGetNewsByIdOrUrlController.js";
import LvivSearchNewsController from "../../controllers/regionNews/Lviv/LvivSearchNewsController.js";
import LvivUpdateNewsController from "../../controllers/regionNews/Lviv/LvivUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/boryslav/news", LvivGetAllNewsController.getAllBoryslavNews);
router.get("/brody/news", LvivGetAllNewsController.getAllBrodyNews);
router.get(
  "/chervonograd/news",
  LvivGetAllNewsController.getAllChervonogradNews
);
router.get("/drohobych/news", LvivGetAllNewsController.getAllDragobychNews);
router.get("/lviv/news", LvivGetAllNewsController.getAllLvivNews);
router.get(
  "/novoyavorivsk/news",
  LvivGetAllNewsController.getAllNovoiavorivskNews
);
router.get(
  "/noviy-rozdil/news",
  LvivGetAllNewsController.getAllNovyiRozdilNews
);
router.get("/sambir/news", LvivGetAllNewsController.getAllSambirNews);
router.get("/sokal/news", LvivGetAllNewsController.getAllSokalNews);
router.get("/stebnyk/news", LvivGetAllNewsController.getAllStebnykNews);
router.get("/striy/news", LvivGetAllNewsController.getAllStryiNews);
router.get("/truskavets/news", LvivGetAllNewsController.getAllTruskavetsNews);
router.get("/zolochiv/news", LvivGetAllNewsController.getAllZolochivNews);

// Get All News With NN
router.get(
  "/boryslav/with-nn",
  LvivGetAllNewsWithNNController.getAllBoryslavNewsWithNN
);
router.get(
  "/brody/with-nn",
  LvivGetAllNewsWithNNController.getAllBrodyNewsWithNN
);
router.get(
  "/chervonograd/with-nn",
  LvivGetAllNewsWithNNController.getAllChervonogradNewsWithNN
);
router.get(
  "/drohobych/with-nn",
  LvivGetAllNewsWithNNController.getAllDragobychNewsWithNN
);
router.get(
  "/lviv/with-nn",
  LvivGetAllNewsWithNNController.getAllLvivNewsWithNN
);
router.get(
  "/novoyavorivsk/with-nn",
  LvivGetAllNewsWithNNController.getAllNovoiavorivskNewsWithNN
);
router.get(
  "/noviy-rozdil/with-nn",
  LvivGetAllNewsWithNNController.getAllNovyiRozdilNewsWithNN
);
router.get(
  "/sambir/with-nn",
  LvivGetAllNewsWithNNController.getAllSambirNewsWithNN
);
router.get(
  "/sokal/with-nn",
  LvivGetAllNewsWithNNController.getAllSokalNewsWithNN
);
router.get(
  "/stebnyk/with-nn",
  LvivGetAllNewsWithNNController.getAllStebnykNewsWithNN
);
router.get(
  "/striy/with-nn",
  LvivGetAllNewsWithNNController.getAllStryiNewsWithNN
);
router.get(
  "/truskavets/with-nn",
  LvivGetAllNewsWithNNController.getAllTruskavetsNewsWithNN
);
router.get(
  "/zolochiv/with-nn",
  LvivGetAllNewsWithNNController.getAllZolochivNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/boryslav/news/:param",
  LvivGetNewsByIdOrUrlController.getBoryslavNewsByIdOrUrl
);
router.get(
  "/brody/news/:param",
  LvivGetNewsByIdOrUrlController.getBrodyNewsByIdOrUrl
);
router.get(
  "/chervonograd/news/:param",
  LvivGetNewsByIdOrUrlController.getChervonogradNewsByIdOrUrl
);
router.get(
  "/drohobych/news/:param",
  LvivGetNewsByIdOrUrlController.getDragobychNewsByIdOrUrl
);
router.get(
  "/lviv/news/:param",
  LvivGetNewsByIdOrUrlController.getLvivNewsByIdOrUrl
);
router.get(
  "/novoyavorivsk/news/:param",
  LvivGetNewsByIdOrUrlController.getNovoiavorivskNewsByIdOrUrl
);
router.get(
  "/noviy-rozdil/news/:param",
  LvivGetNewsByIdOrUrlController.getNovyiRozdilNewsByIdOrUrl
);
router.get(
  "/sambir/news/:param",
  LvivGetNewsByIdOrUrlController.getSambirNewsByIdOrUrl
);
router.get(
  "/sokal/news/:param",
  LvivGetNewsByIdOrUrlController.getSokalNewsByIdOrUrl
);
router.get(
  "/stebnyk/news/:param",
  LvivGetNewsByIdOrUrlController.getStebnykNewsByIdOrUrl
);
router.get(
  "/striy/news/:param",
  LvivGetNewsByIdOrUrlController.getStryiNewsByIdOrUrl
);
router.get(
  "/truskavets/news/:param",
  LvivGetNewsByIdOrUrlController.getTruskavetsNewsByIdOrUrl
);
router.get(
  "/zolochiv/news/:param",
  LvivGetNewsByIdOrUrlController.getZolochivNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/boryslav/news-today/:date",
  LvivGetNewsByDateController.getBoryslavNewsByDate
);
router.get(
  "/brody/news-today/:date",
  LvivGetNewsByDateController.getBrodyNewsByDate
);
router.get(
  "/chervonograd/news-today/:date",
  LvivGetNewsByDateController.getChervonogradNewsByDate
);
router.get(
  "/drohobych/news-today/:date",
  LvivGetNewsByDateController.getDragobychNewsByDate
);
router.get(
  "/lviv/news-today/:date",
  LvivGetNewsByDateController.getLvivNewsByDate
);
router.get(
  "/novoyavorivsk/news-today/:date",
  LvivGetNewsByDateController.getNovoiavorivskNewsByDate
);
router.get(
  "/noviy-rozdil/news-today/:date",
  LvivGetNewsByDateController.getNovyiRozdilNewsByDate
);
router.get(
  "/sambir/news-today/:date",
  LvivGetNewsByDateController.getSambirNewsByDate
);
router.get(
  "/sokal/news-today/:date",
  LvivGetNewsByDateController.getSokalNewsByDate
);
router.get(
  "/stebnyk/news-today/:date",
  LvivGetNewsByDateController.getStebnykNewsByDate
);
router.get(
  "/striy/news-today/:date",
  LvivGetNewsByDateController.getStryiNewsByDate
);
router.get(
  "/truskavets/news-today/:date",
  LvivGetNewsByDateController.getTruskavetsNewsByDate
);
router.get(
  "/zolochiv/news-today/:date",
  LvivGetNewsByDateController.getZolochivNewsByDate
);

// Update News
router.put(
  "/boryslav/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateBoryslavNews
);
router.put(
  "/brody/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateBrodyNews
);
router.put(
  "/chervonograd/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateChervonogradNews
);
router.put(
  "/drohobych/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateDragobychNews
);
router.put(
  "/lviv/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateLvivNews
);
router.put(
  "/novoyavorivsk/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateNovoiavorivskNews
);
router.put(
  "/noviy-rozdil/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateNovyiRozdilNews
);
router.put(
  "/sambir/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateSambirNews
);
router.put(
  "/sokal/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateSokalNews
);
router.put(
  "/stebnyk/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateStebnykNews
);
router.put(
  "/striy/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateStryiNews
);
router.put(
  "/truskavets/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateTruskavetsNews
);
router.put(
  "/zolochiv/news/edit/:id",
  checkAuth,
  LvivUpdateNewsController.updateZolochivNews
);

// Delete News
router.post(
  "/boryslav/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteBoryslavNews
);
router.post(
  "/brody/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteBrodyNews
);
router.post(
  "/chervonograd/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteChervonogradNews
);
router.post(
  "/drohobych/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteDragobychNews
);
router.post(
  "/lviv/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteLvivNews
);
router.post(
  "/novoyavorivsk/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteNovoiavorivskNews
);
router.post(
  "/noviy-rozdil/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteNovyiRozdilNews
);
router.post(
  "/sambir/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteSambirNews
);
router.post(
  "/sokal/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteSokalNews
);
router.post(
  "/stebnyk/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteStebnykNews
);
router.post(
  "/striy/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteStryiNews
);
router.post(
  "/truskavets/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteTruskavetsNews
);
router.post(
  "/zolochiv/news/delete/:id",
  checkAuth,
  LvivDeleteNewsController.deleteZolochivNews
);

// Search News
router.get("/boryslav/search", LvivSearchNewsController.searchBoryslavNews);
router.get("/brody/search", LvivSearchNewsController.searchBrodyNews);
router.get(
  "/chervonograd/search",
  LvivSearchNewsController.searchChervonogradNews
);
router.get("/drohobych/search", LvivSearchNewsController.searchDragobychNews);
router.get("/lviv/search", LvivSearchNewsController.searchLvivNews);
router.get(
  "/novoyavorivsk/search",
  LvivSearchNewsController.searchNovoiavorivskNews
);
router.get(
  "/noviy-rozdil/search",
  LvivSearchNewsController.searchNovyiRozdilNews
);
router.get("/sambir/search", LvivSearchNewsController.searchSambirNews);
router.get("/sokal/search", LvivSearchNewsController.searchSokalNews);
router.get("/stebnyk/search", LvivSearchNewsController.searchStebnykNews);
router.get("/striy/search", LvivSearchNewsController.searchStryiNews);
router.get("/truskavets/search", LvivSearchNewsController.searchTruskavetsNews);
router.get("/zolochiv/search", LvivSearchNewsController.searchZolochivNews);

export default router;
