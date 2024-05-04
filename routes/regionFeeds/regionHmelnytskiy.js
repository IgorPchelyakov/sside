import { Router } from "express";
import HmelnytskiyDeleteNewsController from "../../controllers/regionNews/Hmelnytskiy/HmelnytskiyDeleteNewsController.js";
import HmelnytskiyGetAllNewsController from "../../controllers/regionNews/Hmelnytskiy/HmelnytskiyGetAllNewsController.js";
import HmelnytskiyGetAllNewsWithNNController from "../../controllers/regionNews/Hmelnytskiy/HmelnytskiyGetAllNewsWithNNController.js";
import HmelnytskiyGetNewsByDateController from "../../controllers/regionNews/Hmelnytskiy/HmelnytskiyGetNewsByDateController.js";
import HmelnytskiyGetNewsByIdOrUrlController from "../../controllers/regionNews/Hmelnytskiy/HmelnytskiyGetNewsByIdOrUrlController.js";
import HmelnytskiySearchNewsController from "../../controllers/regionNews/Hmelnytskiy/HmelnytskiySearchNewsController.js";
import HmelnytskiyUpdateNewsController from "../../controllers/regionNews/Hmelnytskiy/HmelnytskiyUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get(
  "/hmelnytskiy/news",
  HmelnytskiyGetAllNewsController.getAllHmelnytskiyNews
);
router.get(
  "/kamyanets-podilsky/news",
  HmelnytskiyGetAllNewsController.getAllKamyanetsPodilskyNews
);
router.get(
  "/krasyliv/news",
  HmelnytskiyGetAllNewsController.getAllKrasylivNews
);
router.get(
  "/netishin/news",
  HmelnytskiyGetAllNewsController.getAllNetishynNews
);
router.get("/polonne/news", HmelnytskiyGetAllNewsController.getAllPolonneNews);
router.get(
  "/shepetivka/news",
  HmelnytskiyGetAllNewsController.getAllShepetivkaNews
);
router.get("/slavuta/news", HmelnytskiyGetAllNewsController.getAllSlavutaNews);
router.get(
  "/starokostyntynivka/news",
  HmelnytskiyGetAllNewsController.getAllStarokostiantynivkaNews
);
router.get(
  "/volochysk/news",
  HmelnytskiyGetAllNewsController.getAllVolochyskNews
);

// Get All News With NN
router.get(
  "/hmelnytskiy/with-nn",
  HmelnytskiyGetAllNewsWithNNController.getAllHmelnytskiyNewsWithNN
);
router.get(
  "/kamyanets-podilsky/with-nn",
  HmelnytskiyGetAllNewsWithNNController.getAllKamyanetsPodilskyNewsWithNN
);
router.get(
  "/krasyliv/with-nn",
  HmelnytskiyGetAllNewsWithNNController.getAllKrasylivNewsWithNN
);
router.get(
  "/netishin/with-nn",
  HmelnytskiyGetAllNewsWithNNController.getAllNetishynNewsWithNN
);
router.get(
  "/polonne/with-nn",
  HmelnytskiyGetAllNewsWithNNController.getAllPolonneNewsWithNN
);
router.get(
  "/shepetivka/with-nn",
  HmelnytskiyGetAllNewsWithNNController.getAllShepetivkaNewsWithNN
);
router.get(
  "/slavuta/with-nn",
  HmelnytskiyGetAllNewsWithNNController.getAllSlavutaNewsWithNN
);
router.get(
  "/starokostyntynivka/with-nn",
  HmelnytskiyGetAllNewsWithNNController.getAllStarokostiantynivkaNewsWithNN
);
router.get(
  "/volochysk/with-nn",
  HmelnytskiyGetAllNewsWithNNController.getAllVolochyskNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/hmelnytskiy/news/:param",
  HmelnytskiyGetNewsByIdOrUrlController.getHmelnytskiyNewsByIdOrUrl
);
router.get(
  "/kamyanets-podilsky/news/:param",
  HmelnytskiyGetNewsByIdOrUrlController.getKamyanetsPodilskyNewsByIdOrUrl
);
router.get(
  "/krasyliv/news/:param",
  HmelnytskiyGetNewsByIdOrUrlController.getKrasylivNewsByIdOrUrl
);
router.get(
  "/netishin/news/:param",
  HmelnytskiyGetNewsByIdOrUrlController.getNetishynNewsByIdOrUrl
);
router.get(
  "/polonne/news/:param",
  HmelnytskiyGetNewsByIdOrUrlController.getPolonneNewsByIdOrUrl
);
router.get(
  "/shepetivka/news/:param",
  HmelnytskiyGetNewsByIdOrUrlController.getShepetivkaNewsByIdOrUrl
);
router.get(
  "/slavuta/news/:param",
  HmelnytskiyGetNewsByIdOrUrlController.getSlavutaNewsByIdOrUrl
);
router.get(
  "/starokostyntynivka/news/:param",
  HmelnytskiyGetNewsByIdOrUrlController.getStarokostiantynivkaNewsByIdOrUrl
);
router.get(
  "/volochysk/news/:param",
  HmelnytskiyGetNewsByIdOrUrlController.getVolochyskNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/hmelnytskiy/news-today/:date",
  HmelnytskiyGetNewsByDateController.getHmelnytskiyNewsByDate
);
router.get(
  "/kamyanets-podilsky/news-today/:date",
  HmelnytskiyGetNewsByDateController.getKamyanetsPodilskyNewsByDate
);
router.get(
  "/krasyliv/news-today/:date",
  HmelnytskiyGetNewsByDateController.getKrasylivNewsByDate
);
router.get(
  "/netishin/news-today/:date",
  HmelnytskiyGetNewsByDateController.getNetishynNewsByDate
);
router.get(
  "/polonne/news-today/:date",
  HmelnytskiyGetNewsByDateController.getPolonneNewsByDate
);
router.get(
  "/shepetivka/news-today/:date",
  HmelnytskiyGetNewsByDateController.getShepetivkaNewsByDate
);
router.get(
  "/slavuta/news-today/:date",
  HmelnytskiyGetNewsByDateController.getSlavutaNewsByDate
);
router.get(
  "/starokostyntynivka/news-today/:date",
  HmelnytskiyGetNewsByDateController.getStarokostiantynivkaNewsByDate
);
router.get(
  "/volochysk/news-today/:date",
  HmelnytskiyGetNewsByDateController.getVolochyskNewsByDate
);

// Update News
router.put(
  "/hmelnytskiy/news/edit/:id",
  checkAuth,
  HmelnytskiyUpdateNewsController.updateHmelnytskiyNews
);
router.put(
  "/kamyanets-podilsky/news/edit/:id",
  checkAuth,
  HmelnytskiyUpdateNewsController.updateKamyanetsPodilskyNews
);
router.put(
  "/krasyliv/news/edit/:id",
  checkAuth,
  HmelnytskiyUpdateNewsController.updateKrasylivNews
);
router.put(
  "/netishin/news/edit/:id",
  checkAuth,
  HmelnytskiyUpdateNewsController.updateNetishynNews
);
router.put(
  "/polonne/news/edit/:id",
  checkAuth,
  HmelnytskiyUpdateNewsController.updatePolonneNews
);
router.put(
  "/shepetivka/news/edit/:id",
  checkAuth,
  HmelnytskiyUpdateNewsController.updateShepetivkaNews
);
router.put(
  "/slavuta/news/edit/:id",
  checkAuth,
  HmelnytskiyUpdateNewsController.updateSlavutaNews
);
router.put(
  "/starokostyntynivka/news/edit/:id",
  checkAuth,
  HmelnytskiyUpdateNewsController.updateStarokostiantynivkaNews
);
router.put(
  "/volochysk/news/edit/:id",
  checkAuth,
  HmelnytskiyUpdateNewsController.updateVolochyskNews
);

// Delete News
router.post(
  "/hmelnytskiy/news/delete/:id",
  checkAuth,
  HmelnytskiyDeleteNewsController.deleteHmelnytskiyNews
);
router.post(
  "/kamyanets-podilsky/news/delete/:id",
  checkAuth,
  HmelnytskiyDeleteNewsController.deleteKamyanetsPodilskyNews
);
router.post(
  "/krasyliv/news/delete/:id",
  checkAuth,
  HmelnytskiyDeleteNewsController.deleteKrasylivNews
);
router.post(
  "/netishin/news/delete/:id",
  checkAuth,
  HmelnytskiyDeleteNewsController.deleteNetishynNews
);
router.post(
  "/polonne/news/delete/:id",
  checkAuth,
  HmelnytskiyDeleteNewsController.deletePolonneNews
);
router.post(
  "/shepetivka/news/delete/:id",
  checkAuth,
  HmelnytskiyDeleteNewsController.deleteShepetivkaNews
);
router.post(
  "/slavuta/news/delete/:id",
  checkAuth,
  HmelnytskiyDeleteNewsController.deleteSlavutaNews
);
router.post(
  "/starokostyntynivka/news/delete/:id",
  checkAuth,
  HmelnytskiyDeleteNewsController.deleteStarokostiantynivkaNews
);
router.post(
  "/volochysk/news/delete/:id",
  checkAuth,
  HmelnytskiyDeleteNewsController.deleteVolochyskNews
);

// Search News
router.get(
  "/hmelnytskiy/search",
  HmelnytskiySearchNewsController.searchHmelnytskiyNews
);
router.get(
  "/kamyanets-podilsky/search",
  HmelnytskiySearchNewsController.searchKamyanetsPodilskyNews
);
router.get(
  "/krasyliv/search",
  HmelnytskiySearchNewsController.searchKrasylivNews
);
router.get(
  "/netishin/search",
  HmelnytskiySearchNewsController.searchNetishynNews
);
router.get(
  "/polonne/search",
  HmelnytskiySearchNewsController.searchPolonneNews
);
router.get(
  "/shepetivka/search",
  HmelnytskiySearchNewsController.searchShepetivkaNews
);
router.get(
  "/slavuta/search",
  HmelnytskiySearchNewsController.searchSlavutaNews
);
router.get(
  "/starokostyntynivka/search",
  HmelnytskiySearchNewsController.searchStarokostiantynivkaNews
);
router.get(
  "/volochysk/search",
  HmelnytskiySearchNewsController.searchVolochyskNews
);

export default router;
