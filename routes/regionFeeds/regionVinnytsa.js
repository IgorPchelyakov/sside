import { Router } from "express";
import VinnytsaDeleteNewsController from "../../controllers/regionNews/Vinnytsa/VinnytsaDeleteNewsController.js";
import VinnytsaGetAllNewsController from "../../controllers/regionNews/Vinnytsa/VinnytsaGetAllNewsController.js";
import VinnytsaGetAllNewsWithNNController from "../../controllers/regionNews/Vinnytsa/VinnytsaGetAllNewsWithNNController.js";
import VinnytsaGetNewsByDateController from "../../controllers/regionNews/Vinnytsa/VinnytsaGetNewsByDateController.js";
import VinnytsaGetNewsByIdOrUrlController from "../../controllers/regionNews/Vinnytsa/VinnytsaGetNewsByIdOrUrlController.js";
import VinnytsaSearchNewsController from "../../controllers/regionNews/Vinnytsa/VinnytsaSearchNewsController.js";
import VinnytsaUpdateNewsController from "../../controllers/regionNews/Vinnytsa/VinnytsaUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/gaysin/news", VinnytsaGetAllNewsController.getAllGaysinNews);
router.get("/hmilnyk/news", VinnytsaGetAllNewsController.getAllHmilnykNews);
router.get("/kozyatyn/news", VinnytsaGetAllNewsController.getAllKoziatynNews);
router.get("/ladyzhin/news", VinnytsaGetAllNewsController.getAllLadyzhynNews);
router.get(
  "/mohyliv-podilskyi/news",
  VinnytsaGetAllNewsController.getAllMohylivPodilskyiNews
);
router.get("/vinnytsa/news", VinnytsaGetAllNewsController.getAllVinnytsaNews);
router.get("/zhmerynka/news", VinnytsaGetAllNewsController.getAllZhmerynkaNews);

// Get All News With NN
router.get(
  "/gaysin/with-nn",
  VinnytsaGetAllNewsWithNNController.getAllGaysinNewsWithNN
);
router.get(
  "/hmilnyk/with-nn",
  VinnytsaGetAllNewsWithNNController.getAllHmilnykNewsWithNN
);
router.get(
  "/kozyatyn/with-nn",
  VinnytsaGetAllNewsWithNNController.getAllKoziatynNewsWithNN
);
router.get(
  "/ladyzhin/with-nn",
  VinnytsaGetAllNewsWithNNController.getAllLadyzhynNewsWithNN
);
router.get(
  "/mohyliv-podilskyi/with-nn",
  VinnytsaGetAllNewsWithNNController.getAllMohylivPodilskyiNewsWithNN
);
router.get(
  "/vinnytsa/with-nn",
  VinnytsaGetAllNewsWithNNController.getAllVinnytsaNewsWithNN
);
router.get(
  "/zhmerynka/with-nn",
  VinnytsaGetAllNewsWithNNController.getAllZhmerynkaNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/gaysin/news/:param",
  VinnytsaGetNewsByIdOrUrlController.getGaysinNewsByIdOrUrl
);
router.get(
  "/hmilnyk/news/:param",
  VinnytsaGetNewsByIdOrUrlController.getHmilnykNewsByIdOrUrl
);
router.get(
  "/kozyatyn/news/:param",
  VinnytsaGetNewsByIdOrUrlController.getKoziatynNewsByIdOrUrl
);
router.get(
  "/ladyzhin/news/:param",
  VinnytsaGetNewsByIdOrUrlController.getLadyzhynNewsByIdOrUrl
);
router.get(
  "/mohyliv-podilskyi/news/:param",
  VinnytsaGetNewsByIdOrUrlController.getMohylivPodilskyiNewsByIdOrUrl
);
router.get(
  "/vinnytsa/news/:param",
  VinnytsaGetNewsByIdOrUrlController.getVinnytsaNewsByIdOrUrl
);
router.get(
  "/zhmerynka/news/:param",
  VinnytsaGetNewsByIdOrUrlController.getZhmerynkaNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/gaysin/news-today/:date",
  VinnytsaGetNewsByDateController.getGaysinNewsByDate
);
router.get(
  "/hmilnyk/news-today/:date",
  VinnytsaGetNewsByDateController.getHmilnykNewsByDate
);
router.get(
  "/kozyatyn/news-today/:date",
  VinnytsaGetNewsByDateController.getKoziatynNewsByDate
);
router.get(
  "/ladyzhin/news-today/:date",
  VinnytsaGetNewsByDateController.getLadyzhynNewsByDate
);
router.get(
  "/mohyliv-podilskyi/news-today/:date",
  VinnytsaGetNewsByDateController.getMohylivPodilskyiNewsByDate
);
router.get(
  "/vinnytsa/news-today/:date",
  VinnytsaGetNewsByDateController.getVinnytsaNewsByDate
);
router.get(
  "/zhmerynka/news-today/:date",
  VinnytsaGetNewsByDateController.getZhmerynkaNewsByDate
);

// Update News
router.put(
  "/gaysin/news/edit/:id",
  checkAuth,
  VinnytsaUpdateNewsController.updateGaysinNews
);
router.put(
  "/hmilnyk/news/edit/:id",
  checkAuth,
  VinnytsaUpdateNewsController.updateHmilnykNews
);
router.put(
  "/kozyatyn/news/edit/:id",
  checkAuth,
  VinnytsaUpdateNewsController.updateKoziatynNews
);
router.put(
  "/ladyzhin/news/edit/:id",
  checkAuth,
  VinnytsaUpdateNewsController.updateLadyzhynNews
);
router.put(
  "/mohyliv-podilskyi/news/edit/:id",
  checkAuth,
  VinnytsaUpdateNewsController.updateMohylivPodilskyiNews
);
router.put(
  "/vinnytsa/news/edit/:id",
  checkAuth,
  VinnytsaUpdateNewsController.updateVinnytsaNews
);
router.put(
  "/zhmerynka/news/edit/:id",
  checkAuth,
  VinnytsaUpdateNewsController.updateZhmerynkaNews
);

// Delete News
router.post(
  "/gaysin/news/delete/:id",
  checkAuth,
  VinnytsaDeleteNewsController.deleteGaysinNews
);
router.post(
  "/hmilnyk/news/delete/:id",
  checkAuth,
  VinnytsaDeleteNewsController.deleteHmilnykNews
);
router.post(
  "/kozyatyn/news/delete/:id",
  checkAuth,
  VinnytsaDeleteNewsController.deleteKoziatynNews
);
router.post(
  "/ladyzhin/news/delete/:id",
  checkAuth,
  VinnytsaDeleteNewsController.deleteLadyzhynNews
);
router.post(
  "/mohyliv-podilskyi/news/delete/:id",
  checkAuth,
  VinnytsaDeleteNewsController.deleteMohylivPodilskyiNews
);
router.post(
  "/vinnytsa/news/delete/:id",
  checkAuth,
  VinnytsaDeleteNewsController.deleteVinnytsaNews
);
router.post(
  "/zhmerynka/news/delete/:id",
  checkAuth,
  VinnytsaDeleteNewsController.deleteZhmerynkaNews
);

// Search News
router.get("/gaysin/search", VinnytsaSearchNewsController.searchGaysinNews);
router.get("/hmilnyk/search", VinnytsaSearchNewsController.searchHmilnykNews);
router.get("/kozyatyn/search", VinnytsaSearchNewsController.searchKoziatynNews);
router.get("/ladyzhin/search", VinnytsaSearchNewsController.searchLadyzhynNews);
router.get(
  "/mohyliv-podilskyi/search",
  VinnytsaSearchNewsController.searchMohylivPodilskyiNews
);
router.get("/vinnytsa/search", VinnytsaSearchNewsController.searchVinnytsaNews);
router.get(
  "/zhmerynka/search",
  VinnytsaSearchNewsController.searchZhmerynkaNews
);

export default router;
