import { Router } from "express";
import ARKreamDeleteNewsController from "../../controllers/regionNews/ARKream/ARKreamDeleteNewsController.js";
import ARKreamGetAllNewsController from "../../controllers/regionNews/ARKream/ARKreamGetAllNewsController.js";
import ARKreamGetAllNewsWithNNController from "../../controllers/regionNews/ARKream/ARKreamGetAllNewsWithNNController.js";
import ARKreamGetNewsByDateController from "../../controllers/regionNews/ARKream/ARKreamGetNewsByDateController.js";
import ARKreamGetNewsByIdOrUrlController from "../../controllers/regionNews/ARKream/ARKreamGetNewsByIdOrUrlController.js";
import ARKreamSearchNewsController from "../../controllers/regionNews/ARKream/ARKreamSearchNewsController.js";
import ARKreamUpdateNewsController from "../../controllers/regionNews/ARKream/ARKreamUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/alushta/news", ARKreamGetAllNewsController.getAllAlushtaNews);
router.get("/armyansk/news", ARKreamGetAllNewsController.getAllArmyanskNews);
router.get(
  "/bahchisaray/news",
  ARKreamGetAllNewsController.getAllBachchisarayNews
);
router.get("/dzhankoy/news", ARKreamGetAllNewsController.getAllDzhankoyNews);
router.get("/feodosiya/news", ARKreamGetAllNewsController.getAllFeodosiaNews);
router.get("/kerch/news", ARKreamGetAllNewsController.getAllKerchNews);
router.get(
  "/krasnoperekopsk/news",
  ARKreamGetAllNewsController.getAllKrasnoperekopskNews
);
router.get("/saky/news", ARKreamGetAllNewsController.getAllSakyNews);
router.get(
  "/simferopol/news",
  ARKreamGetAllNewsController.getAllSimferopolNews
);
router.get("/yalta/news", ARKreamGetAllNewsController.getAllYaltaNews);
router.get(
  "/yevpatoria/news",
  ARKreamGetAllNewsController.getAllYevpatoriaNews
);

// Get All News With NN
router.get(
  "/alushta/with-nn",
  ARKreamGetAllNewsWithNNController.getAllAlushtaNewsWithNN
);
router.get(
  "/armyansk/with-nn",
  ARKreamGetAllNewsWithNNController.getAllArmyanskNewsWithNN
);
router.get(
  "/bahchisaray/with-nn",
  ARKreamGetAllNewsWithNNController.getAllBachchisarayNewsWithNN
);
router.get(
  "/dzhankoy/with-nn",
  ARKreamGetAllNewsWithNNController.getAllDzhankoyNewsWithNN
);
router.get(
  "/feodosiya/with-nn",
  ARKreamGetAllNewsWithNNController.getAllFeodosiaNewsWithNN
);
router.get(
  "/kerch/with-nn",
  ARKreamGetAllNewsWithNNController.getAllKerchNewsWithNN
);
router.get(
  "/krasnoperekopsk/with-nn",
  ARKreamGetAllNewsWithNNController.getAllKrasnoperekopskNewsWithNN
);
router.get(
  "/saky/with-nn",
  ARKreamGetAllNewsWithNNController.getAllSakyNewsWithNN
);
router.get(
  "/simferopol/with-nn",
  ARKreamGetAllNewsWithNNController.getAllSimferopolNewsWithNN
);
router.get(
  "/yalta/with-nn",
  ARKreamGetAllNewsWithNNController.getAllYaltaNewsWithNN
);
router.get(
  "/yevpatoria/with-nn",
  ARKreamGetAllNewsWithNNController.getAllYevpatoriaNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/alushta/news/:param",
  ARKreamGetNewsByIdOrUrlController.getAlushtaNewsByIdOrUrl
);
router.get(
  "/armyansk/news/:param",
  ARKreamGetNewsByIdOrUrlController.getArmyanskNewsByIdOrUrl
);
router.get(
  "/bahchisaray/news/:param",
  ARKreamGetNewsByIdOrUrlController.getBachchisarayNewsByIdOrUrl
);
router.get(
  "/dzhankoy/news/:param",
  ARKreamGetNewsByIdOrUrlController.getDzhankoyNewsByIdOrUrl
);
router.get(
  "/feodosiya/news/:param",
  ARKreamGetNewsByIdOrUrlController.getFeodosiaNewsByIdOrUrl
);
router.get(
  "/kerch/news/:param",
  ARKreamGetNewsByIdOrUrlController.getKerchNewsByIdOrUrl
);
router.get(
  "/krasnoperekopsk/news/:param",
  ARKreamGetNewsByIdOrUrlController.getKrasnoperekopskNewsByIdOrUrl
);
router.get(
  "/saky/news/:param",
  ARKreamGetNewsByIdOrUrlController.getSakyNewsByIdOrUrl
);
router.get(
  "/simferopol/news/:param",
  ARKreamGetNewsByIdOrUrlController.getSimferopolNewsByIdOrUrl
);
router.get(
  "/yalta/news/:param",
  ARKreamGetNewsByIdOrUrlController.getYaltaNewsByIdOrUrl
);
router.get(
  "/yevpatoria/news/:param",
  ARKreamGetNewsByIdOrUrlController.getYevpatoriaNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/alushta/news-today/:date",
  ARKreamGetNewsByDateController.getAlushtaNewsByDate
);
router.get(
  "/armyansk/news-today/:date",
  ARKreamGetNewsByDateController.getArmyanskNewsByDate
);
router.get(
  "/bahchisaray/news-today/:date",
  ARKreamGetNewsByDateController.getBachchisarayNewsByDate
);
router.get(
  "/dzhankoy/news-today/:date",
  ARKreamGetNewsByDateController.getDzhankoyNewsByDate
);
router.get(
  "/feodosiya/news-today/:date",
  ARKreamGetNewsByDateController.getFeodosiaNewsByDate
);
router.get(
  "/kerch/news-today/:date",
  ARKreamGetNewsByDateController.getKerchNewsByDate
);
router.get(
  "/krasnoperekopsk/news-today/:date",
  ARKreamGetNewsByDateController.getKrasnoperekopskNewsByDate
);
router.get(
  "/saky/news-today/:date",
  ARKreamGetNewsByDateController.getSakyNewsByDate
);
router.get(
  "/simferopol/news-today/:date",
  ARKreamGetNewsByDateController.getSimferopolNewsByDate
);
router.get(
  "/yalta/news-today/:date",
  ARKreamGetNewsByDateController.getYaltaNewsByDate
);
router.get(
  "/yevpatoria/news-today/:date",
  ARKreamGetNewsByDateController.getYevpatoriaNewsByDate
);

// Update News
router.put(
  "/alushta/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateAlushtaNews
);
router.put(
  "/armyansk/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateArmyanskNews
);
router.put(
  "/bahchisaray/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateBachchisarayNews
);
router.put(
  "/dzhankoy/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateDzhankoyNews
);
router.put(
  "/feodosiya/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateFeodosiaNews
);
router.put(
  "/kerch/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateKerchNews
);
router.put(
  "/krasnoperekopsk/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateKrasnoperekopskNews
);
router.put(
  "/saky/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateSakyNews
);
router.put(
  "/simferopol/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateSimferopolNews
);
router.put(
  "/yalta/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateYaltaNews
);
router.put(
  "/yevpatoria/news/edit/:id",
  checkAuth,
  ARKreamUpdateNewsController.updateYevpatoriaNews
);

// Delete News
router.post(
  "/alushta/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteAlushtaNews
);
router.post(
  "/armyansk/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteArmyanskNews
);
router.post(
  "/bahchisaray/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteBachchisarayNews
);
router.post(
  "/dzhankoy/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteDzhankoyNews
);
router.post(
  "/feodosiya/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteFeodosiaNews
);
router.post(
  "/kerch/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteKerchNews
);
router.post(
  "/krasnoperekopsk/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteKrasnoperekopskNews
);
router.post(
  "/saky/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteSakyNews
);
router.post(
  "/simferopol/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteSimferopolNews
);
router.post(
  "/yalta/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteYaltaNews
);
router.post(
  "/yevpatoria/news/delete/:id",
  checkAuth,
  ARKreamDeleteNewsController.deleteYevpatoriaNews
);

// Search News
router.get("/alushta/search", ARKreamSearchNewsController.searchAlushtaNews);
router.get("/armyansk/search", ARKreamSearchNewsController.searchArmyanskNews);
router.get(
  "/bahchisaray/search",
  ARKreamSearchNewsController.searchBachchisarayNews
);
router.get("/dzhankoy/search", ARKreamSearchNewsController.searchDzhankoyNews);
router.get("/feodosiya/search", ARKreamSearchNewsController.searchFeodosiaNews);
router.get("/kerch/search", ARKreamSearchNewsController.searchKerchNews);
router.get(
  "/krasnoperekopsk/search",
  ARKreamSearchNewsController.searchKrasnoperekopskNews
);
router.get("/saky/search", ARKreamSearchNewsController.searchSakyNews);
router.get(
  "/simferopol/search",
  ARKreamSearchNewsController.searchSimferopolNews
);
router.get("/yalta/search", ARKreamSearchNewsController.searchYaltaNews);
router.get(
  "/yevpatoria/search",
  ARKreamSearchNewsController.searchYevpatoriaNews
);

export default router;
