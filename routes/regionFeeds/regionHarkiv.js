import { Router } from "express";
import HarkivDeleteNewsController from "../../controllers/regionNews/Harkiv/HarkivDeleteNewsController.js";
import HarkivGetAllNewsController from "../../controllers/regionNews/Harkiv/HarkivGetAllNewsController.js";
import HarkivGetAllNewsWithNNController from "../../controllers/regionNews/Harkiv/HarkivGetAllNewsWithNNController.js";
import HarkivGetNewsByDateController from "../../controllers/regionNews/Harkiv/HarkivGetNewsByDateController.js";
import HarkivGetNewsByIdOrUrlController from "../../controllers/regionNews/Harkiv/HarkivGetNewsByIdOrUrlController.js";
import HarkivSearchNewsController from "../../controllers/regionNews/Harkiv/HarkivSearchNewsController.js";
import HarkivUpdateNewsController from "../../controllers/regionNews/Harkiv/HarkivUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/balaklia/news", HarkivGetAllNewsController.getAllBalakliiaNews);
router.get("/chuguyiv/news", HarkivGetAllNewsController.getAllChuguivNews);
router.get("/dergachi/news", HarkivGetAllNewsController.getAllDerhachiNews);
router.get("/harkiv/news", HarkivGetAllNewsController.getAllHarkivNews);
router.get("/izum/news", HarkivGetAllNewsController.getAllIziumNews);
router.get("/krasnograd/news", HarkivGetAllNewsController.getAllKrasnohradNews);
router.get("/kupyansk/news", HarkivGetAllNewsController.getAllKupianskNews);
router.get("/lozova/news", HarkivGetAllNewsController.getAllLozovaNews);
router.get("/lubotin/news", HarkivGetAllNewsController.getAllLubotynNews);
router.get("/merefa/news", HarkivGetAllNewsController.getAllMerefaNews);
router.get(
  "/pervomayskiy/news",
  HarkivGetAllNewsController.getAllPervomaiskyiNews
);
router.get("/vovchansk/news", HarkivGetAllNewsController.getAllVovchanskNews);

// Get All News With NN
router.get(
  "/balaklia/with-nn",
  HarkivGetAllNewsWithNNController.getAllBalakliiaNewsWithNN
);
router.get(
  "/chuguyiv/with-nn",
  HarkivGetAllNewsWithNNController.getAllChuguivNewsWithNN
);
router.get(
  "/dergachi/with-nn",
  HarkivGetAllNewsWithNNController.getAllDerhachiNewsWithNN
);
router.get(
  "/harkiv/with-nn",
  HarkivGetAllNewsWithNNController.getAllHarkivNewsWithNN
);
router.get(
  "/izum/with-nn",
  HarkivGetAllNewsWithNNController.getAllIziumNewsWithNN
);
router.get(
  "/krasnograd/with-nn",
  HarkivGetAllNewsWithNNController.getAllKrasnohradNewsWithNN
);
router.get(
  "/kupyansk/with-nn",
  HarkivGetAllNewsWithNNController.getAllKupianskNewsWithNN
);
router.get(
  "/lozova/with-nn",
  HarkivGetAllNewsWithNNController.getAllLozovaNewsWithNN
);
router.get(
  "/lubotin/with-nn",
  HarkivGetAllNewsWithNNController.getAllLubotynNewsWithNN
);
router.get(
  "/merefa/with-nn",
  HarkivGetAllNewsWithNNController.getAllMerefaNewsWithNN
);
router.get(
  "/pervomayskiy/with-nn",
  HarkivGetAllNewsWithNNController.getAllPervomaiskyiNewsWithNN
);
router.get(
  "/vovchansk/with-nn",
  HarkivGetAllNewsWithNNController.getAllVovchanskNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/balaklia/news/:param",
  HarkivGetNewsByIdOrUrlController.getBalakliiaNewsByIdOrUrl
);
router.get(
  "/chuguyiv/news/:param",
  HarkivGetNewsByIdOrUrlController.getChuguivNewsByIdOrUrl
);
router.get(
  "/dergachi/news/:param",
  HarkivGetNewsByIdOrUrlController.getDerhachiNewsByIdOrUrl
);
router.get(
  "/harkiv/news/:param",
  HarkivGetNewsByIdOrUrlController.getHarkivNewsByIdOrUrl
);
router.get(
  "/izum/news/:param",
  HarkivGetNewsByIdOrUrlController.getIziumNewsByIdOrUrl
);
router.get(
  "/krasnograd/news/:param",
  HarkivGetNewsByIdOrUrlController.getKrasnohradNewsByIdOrUrl
);
router.get(
  "/kupyansk/news/:param",
  HarkivGetNewsByIdOrUrlController.getKupianskNewsByIdOrUrl
);
router.get(
  "/lozova/news/:param",
  HarkivGetNewsByIdOrUrlController.getLozovaNewsByIdOrUrl
);
router.get(
  "/lubotin/news/:param",
  HarkivGetNewsByIdOrUrlController.getLubotynNewsByIdOrUrl
);
router.get(
  "/merefa/news/:param",
  HarkivGetNewsByIdOrUrlController.getMerefaNewsByIdOrUrl
);
router.get(
  "/pervomayskiy/news/:param",
  HarkivGetNewsByIdOrUrlController.getPervomaiskyiNewsByIdOrUrl
);
router.get(
  "/vovchansk/news/:param",
  HarkivGetNewsByIdOrUrlController.getVovchanskNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/balaklia/news-today/:date",
  HarkivGetNewsByDateController.getBalakliiaNewsByDate
);
router.get(
  "/chuguyiv/news-today/:date",
  HarkivGetNewsByDateController.getChuguivNewsByDate
);
router.get(
  "/dergachi/news-today/:date",
  HarkivGetNewsByDateController.getDerhachiNewsByDate
);
router.get(
  "/harkiv/news-today/:date",
  HarkivGetNewsByDateController.getHarkivNewsByDate
);
router.get(
  "/izum/news-today/:date",
  HarkivGetNewsByDateController.getIziumNewsByDate
);
router.get(
  "/krasnograd/news-today/:date",
  HarkivGetNewsByDateController.getKrasnohradNewsByDate
);
router.get(
  "/kupyansk/news-today/:date",
  HarkivGetNewsByDateController.getKupianskNewsByDate
);
router.get(
  "/lozova/news-today/:date",
  HarkivGetNewsByDateController.getLozovaNewsByDate
);
router.get(
  "/lubotin/news-today/:date",
  HarkivGetNewsByDateController.getLubotynNewsByDate
);
router.get(
  "/merefa/news-today/:date",
  HarkivGetNewsByDateController.getMerefaNewsByDate
);
router.get(
  "/pervomayskiy/news-today/:date",
  HarkivGetNewsByDateController.getPervomaiskyiNewsByDate
);
router.get(
  "/vovchansk/news-today/:date",
  HarkivGetNewsByDateController.getVovchanskNewsByDate
);

// Update News
router.put(
  "/balaklia/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateBalakliiaNews
);
router.put(
  "/chuguyiv/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateChuguivNews
);
router.put(
  "/dergachi/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateDerhachiNews
);
router.put(
  "/harkiv/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateHarkivNews
);
router.put(
  "/izum/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateIziumNews
);
router.put(
  "/krasnograd/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateKrasnohradNews
);
router.put(
  "/kupyansk/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateKupianskNews
);
router.put(
  "/lozova/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateLozovaNews
);
router.put(
  "/lubotin/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateLubotynNews
);
router.put(
  "/merefa/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateMerefaNews
);
router.put(
  "/pervomayskiy/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updatePervomaiskyiNews
);
router.put(
  "/vovchansk/news/edit/:id",
  checkAuth,
  HarkivUpdateNewsController.updateVovchanskNews
);

// Delete News
router.post(
  "/balaklia/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteBalakliiaNews
);
router.post(
  "/chuguyiv/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteChuguivNews
);
router.post(
  "/dergachi/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteDerhachiNews
);
router.post(
  "/harkiv/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteHarkivNews
);
router.post(
  "/izum/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteIziumNews
);
router.post(
  "/krasnograd/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteKrasnohradNews
);
router.post(
  "/kupyansk/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteKupianskNews
);
router.post(
  "/lozova/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteLozovaNews
);
router.post(
  "/lubotin/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteLubotynNews
);
router.post(
  "/merefa/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteMerefaNews
);
router.post(
  "/pervomayskiy/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deletePervomaiskyiNews
);
router.post(
  "/vovchansk/news/delete/:id",
  checkAuth,
  HarkivDeleteNewsController.deleteVovchanskNews
);

// Search News
router.get("/balaklia/search", HarkivSearchNewsController.searchBalakliiaNews);
router.get("/chuguyiv/search", HarkivSearchNewsController.searchChuguivNews);
router.get("/dergachi/search", HarkivSearchNewsController.searchDerhachiNews);
router.get("/harkiv/search", HarkivSearchNewsController.searchHarkivNews);
router.get("/izum/search", HarkivSearchNewsController.searchIziumNews);
router.get(
  "/krasnograd/search",
  HarkivSearchNewsController.searchKrasnohradNews
);
router.get("/kupyansk/search", HarkivSearchNewsController.searchKupianskNews);
router.get("/lozova/search", HarkivSearchNewsController.searchLozovaNews);
router.get("/lubotin/search", HarkivSearchNewsController.searchLubotynNews);
router.get("/merefa/search", HarkivSearchNewsController.searchMerefaNews);
router.get(
  "/pervomayskiy/search",
  HarkivSearchNewsController.searchPervomaiskyiNews
);
router.get("/vovchansk/search", HarkivSearchNewsController.searchVovchanskNews);

export default router;
