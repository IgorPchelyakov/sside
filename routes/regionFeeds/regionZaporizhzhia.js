import { Router } from "express";
import ZaporizhzhiaDeleteNewsController from "../../controllers/regionNews/Zaporizhzhia/ZaporizhzhiaDeleteNewsController.js";
import ZaporizhzhiaGetAllNewsController from "../../controllers/regionNews/Zaporizhzhia/ZaporizhzhiaGetAllNewsController.js";
import ZaporizhzhiaGetAllNewsWithNNController from "../../controllers/regionNews/Zaporizhzhia/ZaporizhzhiaGetAllNewsWithNNController.js";
import ZaporizhzhiaGetNewsByDateController from "../../controllers/regionNews/Zaporizhzhia/ZaporizhzhiaGetNewsByDateController.js";
import ZaporizhzhiaGetNewsByIdOrUrlController from "../../controllers/regionNews/Zaporizhzhia/ZaporizhzhiaGetNewsByIdOrUrlController.js";
import ZaporizhzhiaSearchNewsController from "../../controllers/regionNews/Zaporizhzhia/ZaporizhzhiaSearchNewsController.js";
import ZaporizhzhiaUpdateNewsController from "../../controllers/regionNews/Zaporizhzhia/ZaporizhzhiaUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get(
  "/berdyansk/news",
  ZaporizhzhiaGetAllNewsController.getAllBerdianskNews
);
router.get(
  "/dniprorudne/news",
  ZaporizhzhiaGetAllNewsController.getAllDniprorudneNews
);
router.get(
  "/energodar/news",
  ZaporizhzhiaGetAllNewsController.getAllEnerhodarNews
);
router.get(
  "/melitopol/news",
  ZaporizhzhiaGetAllNewsController.getAllMelitopolNews
);
router.get("/pology/news", ZaporizhzhiaGetAllNewsController.getAllPologyNews);
router.get("/tokmak/news", ZaporizhzhiaGetAllNewsController.getAllTokmakNews);
router.get(
  "/zaporizhzhia/news",
  ZaporizhzhiaGetAllNewsController.getAllZaporizhzhiaNews
);

// Get All News With NN
router.get(
  "/berdyansk/with-nn",
  ZaporizhzhiaGetAllNewsWithNNController.getAllBerdianskNewsWithNN
);
router.get(
  "/dniprorudne/with-nn",
  ZaporizhzhiaGetAllNewsWithNNController.getAllDniprorudneNewsWithNN
);
router.get(
  "/energodar/with-nn",
  ZaporizhzhiaGetAllNewsWithNNController.getAllEnerhodarNewsWithNN
);
router.get(
  "/melitopol/with-nn",
  ZaporizhzhiaGetAllNewsWithNNController.getAllMelitopolNewsWithNN
);
router.get(
  "/pology/with-nn",
  ZaporizhzhiaGetAllNewsWithNNController.getAllPologyNewsWithNN
);
router.get(
  "/tokmak/with-nn",
  ZaporizhzhiaGetAllNewsWithNNController.getAllTokmakNewsWithNN
);
router.get(
  "/zaporizhzhia/with-nn",
  ZaporizhzhiaGetAllNewsWithNNController.getAllZaporizhzhiaNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/berdyansk/news/:param",
  ZaporizhzhiaGetNewsByIdOrUrlController.getBerdianskNewsByIdOrUrl
);
router.get(
  "/dniprorudne/news/:param",
  ZaporizhzhiaGetNewsByIdOrUrlController.getDniprorudneNewsByIdOrUrl
);
router.get(
  "/energodar/news/:param",
  ZaporizhzhiaGetNewsByIdOrUrlController.getEnerhodarNewsByIdOrUrl
);
router.get(
  "/melitopol/news/:param",
  ZaporizhzhiaGetNewsByIdOrUrlController.getMelitopolNewsByIdOrUrl
);
router.get(
  "/pology/news/:param",
  ZaporizhzhiaGetNewsByIdOrUrlController.getPologyNewsByIdOrUrl
);
router.get(
  "/tokmak/news/:param",
  ZaporizhzhiaGetNewsByIdOrUrlController.getTokmakNewsByIdOrUrl
);
router.get(
  "/zaporizhzhia/news/:param",
  ZaporizhzhiaGetNewsByIdOrUrlController.getZaporizhzhiaNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/berdyansk/news-today/:date",
  ZaporizhzhiaGetNewsByDateController.getBerdianskNewsByDate
);
router.get(
  "/dniprorudne/news-today/:date",
  ZaporizhzhiaGetNewsByDateController.getDniprorudneNewsByDate
);
router.get(
  "/energodar/news-today/:date",
  ZaporizhzhiaGetNewsByDateController.getEnerhodarNewsByDate
);
router.get(
  "/melitopol/news-today/:date",
  ZaporizhzhiaGetNewsByDateController.getMelitopolNewsByDate
);
router.get(
  "/pology/news-today/:date",
  ZaporizhzhiaGetNewsByDateController.getPologyNewsByDate
);
router.get(
  "/tokmak/news-today/:date",
  ZaporizhzhiaGetNewsByDateController.getTokmakNewsByDate
);
router.get(
  "/zaporizhzhia/news-today/:date",
  ZaporizhzhiaGetNewsByDateController.getZaporizhzhiaNewsByDate
);

// Update News
router.put(
  "/berdyansk/news/edit/:id",
  checkAuth,
  ZaporizhzhiaUpdateNewsController.updateBerdianskNews
);
router.put(
  "/dniprorudne/news/edit/:id",
  checkAuth,
  ZaporizhzhiaUpdateNewsController.updateDniprorudneNews
);
router.put(
  "/energodar/news/edit/:id",
  checkAuth,
  ZaporizhzhiaUpdateNewsController.updateEnerhodarNews
);
router.put(
  "/melitopol/news/edit/:id",
  checkAuth,
  ZaporizhzhiaUpdateNewsController.updateMelitopolNews
);
router.put(
  "/pology/news/edit/:id",
  checkAuth,
  ZaporizhzhiaUpdateNewsController.updatePologyNews
);
router.put(
  "/tokmak/news/edit/:id",
  checkAuth,
  ZaporizhzhiaUpdateNewsController.updateTokmakNews
);
router.put(
  "/zaporizhzhia/news/edit/:id",
  checkAuth,
  ZaporizhzhiaUpdateNewsController.updateZaporizhzhiaNews
);

// Delete News
router.post(
  "/berdyansk/news/delete/:id",
  checkAuth,
  ZaporizhzhiaDeleteNewsController.deleteBerdianskNews
);
router.post(
  "/dniprorudne/news/delete/:id",
  checkAuth,
  ZaporizhzhiaDeleteNewsController.deleteDniprorudneNews
);
router.post(
  "/energodar/news/delete/:id",
  checkAuth,
  ZaporizhzhiaDeleteNewsController.deleteEnerhodarNews
);
router.post(
  "/melitopol/news/delete/:id",
  checkAuth,
  ZaporizhzhiaDeleteNewsController.deleteMelitopolNews
);
router.post(
  "/pology/news/delete/:id",
  checkAuth,
  ZaporizhzhiaDeleteNewsController.deletePologyNews
);
router.post(
  "/tokmak/news/delete/:id",
  checkAuth,
  ZaporizhzhiaDeleteNewsController.deleteTokmakNews
);
router.post(
  "/zaporizhzhia/news/delete/:id",
  checkAuth,
  ZaporizhzhiaDeleteNewsController.deleteZaporizhzhiaNews
);

// Search News
router.get(
  "/berdyansk/search",
  ZaporizhzhiaSearchNewsController.searchBerdianskNews
);
router.get(
  "/dniprorudne/search",
  ZaporizhzhiaSearchNewsController.searchDniprorudneNews
);
router.get(
  "/energodar/search",
  ZaporizhzhiaSearchNewsController.searchEnerhodarNews
);
router.get(
  "/melitopol/search",
  ZaporizhzhiaSearchNewsController.searchMelitopolNews
);
router.get("/pology/search", ZaporizhzhiaSearchNewsController.searchPologyNews);
router.get("/tokmak/search", ZaporizhzhiaSearchNewsController.searchTokmakNews);
router.get(
  "/zaporizhzhia/search",
  ZaporizhzhiaSearchNewsController.searchZaporizhzhiaNews
);

export default router;
