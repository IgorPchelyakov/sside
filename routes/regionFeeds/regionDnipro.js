import { Router } from "express";
import DniproDeleteNewsController from "../../controllers/regionNews/Dnipro/DniproDeleteNewsController.js";
import DniproGetAllNewsController from "../../controllers/regionNews/Dnipro/DniproGetAllNewsController.js";
import DniproGetAllNewsWithNNController from "../../controllers/regionNews/Dnipro/DniproGetAllNewsWithNNController.js";
import DniproGetNewsByDateController from "../../controllers/regionNews/Dnipro/DniproGetNewsByDateController.js";
import DniproGetNewsByIdOrUrlController from "../../controllers/regionNews/Dnipro/DniproGetNewsByIdOrUrlController.js";
import DniproSearchNewsController from "../../controllers/regionNews/Dnipro/DniproSearchNewsController.js";
import DniproUpdateNewsController from "../../controllers/regionNews/Dnipro/DniproUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();
// GetAllNews
router.get("/dnipro/news", DniproGetAllNewsController.getAllDniproNews);
router.get("/kamianske/news", DniproGetAllNewsController.getAllKamianskeNews);
router.get("/kryvyi-rih/news", DniproGetAllNewsController.getAllKryvyiRihNews);
router.get("/marganets/news", DniproGetAllNewsController.getAllMarganetsNews);
router.get("/nikopol/news", DniproGetAllNewsController.getAllNikopolNews);
router.get(
  "/novomoskovsk/news",
  DniproGetAllNewsController.getAllNovomoskovskNews
);
router.get("/pavlograd/news", DniproGetAllNewsController.getAllPavlogradNews);
router.get(
  "/pershotravensk/news",
  DniproGetAllNewsController.getAllPershotravenskNews
);
router.get("/pokrov/news", DniproGetAllNewsController.getAllPokrovNews);
router.get("/pyatihatky/news", DniproGetAllNewsController.getAllPyatihatkyNews);
router.get(
  "/sinelnikovo/news",
  DniproGetAllNewsController.getAllSinelnikovoNews
);
router.get("/ternivka/news", DniproGetAllNewsController.getAllTernivkaNews);
router.get("/vilnohorsk/news", DniproGetAllNewsController.getAllVilnohorskNews);
router.get(
  "/zhovti-vody/news",
  DniproGetAllNewsController.getAllZhovtiVodyNews
);

// Get All News With NN
router.get(
  "/dnipro/with-nn",
  DniproGetAllNewsWithNNController.getAllDniproNewsWithNN
);
router.get(
  "/kamianske/with-nn",
  DniproGetAllNewsWithNNController.getAllKamianskeNewsWithNN
);
router.get(
  "/kryvyi-rih/with-nn",
  DniproGetAllNewsWithNNController.getAllKryvyiRihNewsWithNN
);
router.get(
  "/marganets/with-nn",
  DniproGetAllNewsWithNNController.getAllMarganetsNewsWithNN
);
router.get(
  "/nikopol/with-nn",
  DniproGetAllNewsWithNNController.getAllNikopolNewsWithNN
);
router.get(
  "/novomoskovsk/with-nn",
  DniproGetAllNewsWithNNController.getAllNovomoskovskNewsWithNN
);
router.get(
  "/pavlograd/with-nn",
  DniproGetAllNewsWithNNController.getAllPavlogradNewsWithNN
);
router.get(
  "/pershotravensk/with-nn",
  DniproGetAllNewsWithNNController.getAllPershotravenskNewsWithNN
);
router.get(
  "/pokrov/with-nn",
  DniproGetAllNewsWithNNController.getAllPokrovNewsWithNN
);
router.get(
  "/pyatihatky/with-nn",
  DniproGetAllNewsWithNNController.getAllPyatihatkyNewsWithNN
);
router.get(
  "/sinelnikovo/with-nn",
  DniproGetAllNewsWithNNController.getAllSinelnikovoNewsWithNN
);
router.get(
  "/ternivka/with-nn",
  DniproGetAllNewsWithNNController.getAllTernivkaNewsWithNN
);
router.get(
  "/vilnohorsk/with-nn",
  DniproGetAllNewsWithNNController.getAllVilnohorskNewsWithNN
);
router.get(
  "/zhovti-vody/with-nn",
  DniproGetAllNewsWithNNController.getAllZhovtiVodyNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/dnipro/news/:param",
  DniproGetNewsByIdOrUrlController.getDniproNewsByIdOrUrl
);
router.get(
  "/kamianske/news/:param",
  DniproGetNewsByIdOrUrlController.getKamianskeNewsByIdOrUrl
);
router.get(
  "/kryvyi-rih/news/:param",
  DniproGetNewsByIdOrUrlController.getKryvyiRihNewsByIdOrUrl
);
router.get(
  "/marganets/news/:param",
  DniproGetNewsByIdOrUrlController.getMarganetsNewsByIdOrUrl
);
router.get(
  "/nikopol/news/:param",
  DniproGetNewsByIdOrUrlController.getNikopolNewsByIdOrUrl
);
router.get(
  "/novomoskovsk/news/:param",
  DniproGetNewsByIdOrUrlController.getNovomoskovskNewsByIdOrUrl
);
router.get(
  "/pavlograd/news/:param",
  DniproGetNewsByIdOrUrlController.getPavlogradNewsByIdOrUrl
);
router.get(
  "/pershotravensk/news/:param",
  DniproGetNewsByIdOrUrlController.getPershotravenskNewsByIdOrUrl
);
router.get(
  "/pokrov/news/:param",
  DniproGetNewsByIdOrUrlController.getPokrovNewsByIdOrUrl
);
router.get(
  "/pyatihatky/news/:param",
  DniproGetNewsByIdOrUrlController.getPyatihatkyNewsByIdOrUrl
);
router.get(
  "/sinelnikovo/news/:param",
  DniproGetNewsByIdOrUrlController.getSinelnikovoNewsByIdOrUrl
);
router.get(
  "/ternivka/news/:param",
  DniproGetNewsByIdOrUrlController.getTernivkaNewsByIdOrUrl
);
router.get(
  "/vilnohorsk/news/:param",
  DniproGetNewsByIdOrUrlController.getVilnohorskNewsByIdOrUrl
);
router.get(
  "/zhovti-vody/news/:param",
  DniproGetNewsByIdOrUrlController.getZhovtiVodyNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/dnipro/news-today/:date",
  DniproGetNewsByDateController.getDniproNewsByDate
);
router.get(
  "/kamianske/news-today/:date",
  DniproGetNewsByDateController.getKamianskeNewsByDate
);
router.get(
  "/kryvyi-rih/news-today/:date",
  DniproGetNewsByDateController.getKryvyiRihNewsByDate
);
router.get(
  "/marganets/news-today/:date",
  DniproGetNewsByDateController.getMarganetsNewsByDate
);
router.get(
  "/nikopol/news-today/:date",
  DniproGetNewsByDateController.getNikopolNewsByDate
);
router.get(
  "/novomoskovsk/news-today/:date",
  DniproGetNewsByDateController.getNovomoskovskNewsByDate
);
router.get(
  "/pavlograd/news-today/:date",
  DniproGetNewsByDateController.getPavlogradNewsByDate
);
router.get(
  "/pershotravensk/news-today/:date",
  DniproGetNewsByDateController.getPershotravenskNewsByDate
);
router.get(
  "/pokrov/news-today/:date",
  DniproGetNewsByDateController.getPokrovNewsByDate
);
router.get(
  "/pyatihatky/news-today/:date",
  DniproGetNewsByDateController.getPyatihatkyNewsByDate
);
router.get(
  "/sinelnikovo/news-today/:date",
  DniproGetNewsByDateController.getSinelnikovoNewsByDate
);
router.get(
  "/ternivka/news-today/:date",
  DniproGetNewsByDateController.getTernivkaNewsByDate
);
router.get(
  "/vilnohorsk/news-today/:date",
  DniproGetNewsByDateController.getVilnohorskNewsByDate
);
router.get(
  "/zhovti-vody/news-today/:date",
  DniproGetNewsByDateController.getZhovtiVodyNewsByDate
);

// Update News
router.put(
  "/dnipro/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateDniproNews
);
router.put(
  "/kamianske/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateKamianskeNews
);
router.put(
  "/kryvyi-rih/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateKryvyiRihNews
);
router.put(
  "/marganets/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateMarganetsNews
);
router.put(
  "/nikopol/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateNikopolNews
);
router.put(
  "/novomoskovsk/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateNovomoskovskNews
);
router.put(
  "/pavlograd/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updatePavlogradNews
);
router.put(
  "/pershotravensk/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updatePershotravenskNews
);
router.put(
  "/pokrov/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updatePokrovNews
);
router.put(
  "/pyatihatky/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updatePyatihatkyNews
);
router.put(
  "/sinelnikovo/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateSinelnikovoNews
);
router.put(
  "/ternivka/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateTernivkaNews
);
router.put(
  "/vilnohorsk/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateVilnohorskNews
);
router.put(
  "/zhovti-vody/news/edit/:id",
  checkAuth,
  DniproUpdateNewsController.updateZhovtiVodyNews
);

// Delete News
router.post(
  "/dnipro/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteDniproNews
);
router.post(
  "/kamianske/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteKamianskeNews
);
router.post(
  "/kryvyi-rih/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteKryvyiRihNews
);
router.post(
  "/marganets/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteMarganetsNews
);
router.post(
  "/nikopol/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteNikopolNews
);
router.post(
  "/novomoskovsk/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteNovomoskovskNews
);
router.post(
  "/pavlograd/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deletePavlogradNews
);
router.post(
  "/pershotravensk/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deletePershotravenskNews
);
router.post(
  "/pokrov/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deletePokrovNews
);
router.post(
  "/pyatihatky/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deletePyatihatkyNews
);
router.post(
  "/sinelnikovo/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteSinelnikovoNews
);
router.post(
  "/ternivka/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteTernivkaNews
);
router.post(
  "/vilnohorsk/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteVilnohorskNews
);
router.post(
  "/zhovti-vody/news/delete/:id",
  checkAuth,
  DniproDeleteNewsController.deleteZhovtiVodyNews
);

// Search News
router.get("/dnipro/search", DniproSearchNewsController.searchDniproNews);
router.get("/kamianske/search", DniproSearchNewsController.searchKamianskeNews);
router.get(
  "/kryvyi-rih/search",
  DniproSearchNewsController.searchKryvyiRihNews
);
router.get("/marganets/search", DniproSearchNewsController.searchMarganetsNews);
router.get("/nikopol/search", DniproSearchNewsController.searchNikopolNews);
router.get(
  "/novomoskovsk/search",
  DniproSearchNewsController.searchNovomoskovskNews
);
router.get("/pavlograd/search", DniproSearchNewsController.searchPavlogradNews);
router.get(
  "/pershotravensk/search",
  DniproSearchNewsController.searchPershotravenskNews
);
router.get("/pokrov/search", DniproSearchNewsController.searchPokrovNews);
router.get(
  "/pyatihatky/search",
  DniproSearchNewsController.searchPyatihatkyNews
);
router.get(
  "/sinelnikovo/search",
  DniproSearchNewsController.searchSinelnikovoNews
);
router.get("/ternivka/search", DniproSearchNewsController.searchTernivkaNews);
router.get(
  "/vilnohorsk/search",
  DniproSearchNewsController.searchVilnohorskNews
);
router.get(
  "/zhovti-vody/search",
  DniproSearchNewsController.searchZhovtiVodyNews
);

export default router;
