import { Router } from "express";
import OdesaDeleteNewsController from "../../controllers/regionNews/Odesa/OdesaDeleteNewsController.js";
import OdesaGetAllNewsController from "../../controllers/regionNews/Odesa/OdesaGetAllNewsController.js";
import OdesaGetAllNewsWithNNController from "../../controllers/regionNews/Odesa/OdesaGetAllNewsWithNNController.js";
import OdesaGetNewsByDate from "../../controllers/regionNews/Odesa/OdesaGetNewsByDate.js";
import OdesaGetNewsByIdOrUrl from "../../controllers/regionNews/Odesa/OdesaGetNewsByIdOrUrlController.js";
import OdesaUpdateNewsController from "../../controllers/regionNews/Odesa/OdesaUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// Get All News
router.get(
  "/bilgorod-dnistrovsky/news",
  OdesaGetAllNewsController.getAllBilgorodDnistrovskyNews
);
router.get(
  "/chornomorsk/news",
  OdesaGetAllNewsController.getAllChornomorskNews
);
router.get("/izmail/news", OdesaGetAllNewsController.getAllIzmailNews);
router.get("/kiliya/news", OdesaGetAllNewsController.getAllKiliyaNews);
router.get("/odesa/news", OdesaGetAllNewsController.getAllOdesaNews);
router.get("/podilsk/news", OdesaGetAllNewsController.getAllPodilskNews);
router.get("/teplodar/news", OdesaGetAllNewsController.getAllTeplodarNews);
router.get("/youzhne/news", OdesaGetAllNewsController.getAllYouzhneNews);

// Get All News With NN
router.get(
  "/bilgorod-dnistrovsky/with-nn",
  OdesaGetAllNewsWithNNController.getAllBilgorodDnistrovskyNewsWithNN
);
router.get(
  "/chornomorsk/with-nn",
  OdesaGetAllNewsWithNNController.getAllChornomorskNewsWithNN
);
router.get(
  "/izmail/with-nn",
  OdesaGetAllNewsWithNNController.getAllIzmailNewsWithNN
);
router.get(
  "/kiliya/with-nn",
  OdesaGetAllNewsWithNNController.getAllKiliyaNewsWithNN
);
router.get(
  "/odesa/with-nn",
  OdesaGetAllNewsWithNNController.getAllOdesaNewsWithNN
);
router.get(
  "/podilsk/with-nn",
  OdesaGetAllNewsWithNNController.getAllPodilskNewsWithNN
);
router.get(
  "/teplodar/with-nn",
  OdesaGetAllNewsWithNNController.getAllTeplodarNewsWithNN
);
router.get(
  "/youzhne/with-nn",
  OdesaGetAllNewsWithNNController.getAllYouzhneNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/bilgorod-dnistrovsky/news/:param",
  OdesaGetNewsByIdOrUrl.getBilgorodDnistrovskyNewsByIdOrUrl
);
router.get(
  "/chornomorsk/news/:param",
  OdesaGetNewsByIdOrUrl.getChornomorskNewsByIdOrUrl
);
router.get("/izmail/news/:param", OdesaGetNewsByIdOrUrl.getIzmailNewsByIdOrUrl);
router.get("/kiliya/news/:param", OdesaGetNewsByIdOrUrl.getKiliyaNewsByIdOrUrl);
router.get("/odesa/news/:param", OdesaGetNewsByIdOrUrl.getOdesaNewsByIdOrUrl);
router.get(
  "/podilsk/news/:param",
  OdesaGetNewsByIdOrUrl.getPodilskNewsByIdOrUrl
);
router.get(
  "/teplodar/news/:param",
  OdesaGetNewsByIdOrUrl.getTeplodarNewsByIdOrUrl
);
router.get(
  "/youzhne/news/:param",
  OdesaGetNewsByIdOrUrl.getYouzhneNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/bilgorod-dnistrovsky/news-today/:date",
  OdesaGetNewsByDate.getBilgorodDnistrovskyNewsByDate
);
router.get(
  "/chornomorsk/news-today/:date",
  OdesaGetNewsByDate.getChornomorskNewsByDate
);
router.get("/izmail/news-today/:date", OdesaGetNewsByDate.getIzmailNewsByDate);
router.get("/kiliya/news-today/:date", OdesaGetNewsByDate.getKiliyaNewsByDate);
router.get("/odesa/news-today/:date", OdesaGetNewsByDate.getOdesaNewsByDate);
router.get(
  "/podilsk/news-today/:date",
  OdesaGetNewsByDate.getPodilskNewsByDate
);
router.get(
  "/teplodar/news-today/:date",
  OdesaGetNewsByDate.getTeplodarNewsByDate
);
router.get(
  "/youzhne/news-today/:date",
  OdesaGetNewsByDate.getYouzhneNewsByDate
);

// Update News
router.put(
  "/bilgorod-dnistrovsky/news/edit/:id",
  checkAuth,
  OdesaUpdateNewsController.updateBilgorodDnistrovskyNews
);
router.put(
  "/chornomorsk/news/edit/:id",
  checkAuth,
  OdesaUpdateNewsController.updateChornomorskNews
);
router.put(
  "/izmail/news/edit/:id",
  checkAuth,
  OdesaUpdateNewsController.updateIzmailNews
);
router.put(
  "/kiliya/news/edit/:id",
  checkAuth,
  OdesaUpdateNewsController.updateKiliyaNews
);
router.put(
  "/odesa/news/edit/:id",
  checkAuth,
  OdesaUpdateNewsController.updateOdesaNews
);
router.put(
  "/podilsk/news/edit/:id",
  checkAuth,
  OdesaUpdateNewsController.updatePodilskNews
);
router.put(
  "/teplodar/news/edit/:id",
  checkAuth,
  OdesaUpdateNewsController.updateTeplodarNews
);
router.put(
  "/youzhne/news/edit/:id",
  checkAuth,
  OdesaUpdateNewsController.updateYouzhneNews
);

// Delete News
router.post(
  "/bilgorod-dnistrovsky/news/delete/:id",
  checkAuth,
  OdesaDeleteNewsController.deleteBilgorodDnistrovskyNews
);
router.post(
  "/chornomorsk/news/delete/:id",
  checkAuth,
  OdesaDeleteNewsController.deleteChornomorskNews
);
router.post(
  "/izmail/news/delete/:id",
  checkAuth,
  OdesaDeleteNewsController.deleteIzmailNews
);
router.post(
  "/kiliya/news/delete/:id",
  checkAuth,
  OdesaDeleteNewsController.deleteKiliyaNews
);
router.post(
  "/odesa/news/delete/:id",
  checkAuth,
  OdesaDeleteNewsController.deleteOdesaNews
);
router.post(
  "/podilsk/news/delete/:id",
  checkAuth,
  OdesaDeleteNewsController.deletePodilskNews
);
router.post(
  "/teplodar/news/delete/:id",
  checkAuth,
  OdesaDeleteNewsController.deleteTeplodarNews
);
router.post(
  "/youzhne/news/delete/:id",
  checkAuth,
  OdesaDeleteNewsController.deleteYouzhneNews
);

export default router;
