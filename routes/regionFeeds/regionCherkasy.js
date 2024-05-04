import { Router } from "express";
import CherkasyDeleteNewsController from "../../controllers/regionNews/Cherkasy/CherkasyDeleteNewsController.js";
import CherkasyGetAllNewsController from "../../controllers/regionNews/Cherkasy/CherkasyGetAllNewsController.js";
import CherkasyGetAllNewsWithNNController from "../../controllers/regionNews/Cherkasy/CherkasyGetAllNewsWithNNController.js";
import CherkasyGetNewsByDateController from "../../controllers/regionNews/Cherkasy/CherkasyGetNewsByDateController.js";
import CherkasyGetNewsByIdOrUrlController from "../../controllers/regionNews/Cherkasy/CherkasyGetNewsByIdOrUrlController.js";
import CherkasySearchNewsController from "../../controllers/regionNews/Cherkasy/CherkasySearchNewsController.js";
import CherkasyUpdateNewsController from "../../controllers/regionNews/Cherkasy/CherkasyUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/cherkasy/news", CherkasyGetAllNewsController.getAllCherkasyNews);
router.get("/kaniv/news", CherkasyGetAllNewsController.getAllKaniwNews);
router.get("/smila/news", CherkasyGetAllNewsController.getAllSmilaNews);
router.get("/uman/news", CherkasyGetAllNewsController.getAllUmanNews);
router.get("/vatutine/news", CherkasyGetAllNewsController.getAllVatutineNews);
router.get(
  "/zolotonosha/news",
  CherkasyGetAllNewsController.getAllZolotonoshaNews
);
router.get(
  "/zvenyhorodka/news",
  CherkasyGetAllNewsController.getAllZvenyhorodkaNews
);

// Get All News With NN
router.get(
  "/cherkasy/with-nn",
  CherkasyGetAllNewsWithNNController.getAllCherkasyNewsWithNN
);
router.get(
  "/kaniv/with-nn",
  CherkasyGetAllNewsWithNNController.getAllKaniwNewsWithNN
);
router.get(
  "/smila/with-nn",
  CherkasyGetAllNewsWithNNController.getAllSmilaNewsWithNN
);
router.get(
  "/uman/with-nn",
  CherkasyGetAllNewsWithNNController.getAllUmanNewsWithNN
);
router.get(
  "/vatutine/with-nn",
  CherkasyGetAllNewsWithNNController.getAllVatutineNewsWithNN
);
router.get(
  "/zolotonosha/with-nn",
  CherkasyGetAllNewsWithNNController.getAllZolotonoshaNewsWithNN
);
router.get(
  "/zvenyhorodka/with-nn",
  CherkasyGetAllNewsWithNNController.getAllZvenyhorodkaNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/cherkasy/news/:param",
  CherkasyGetNewsByIdOrUrlController.getCherkasyNewsByIdOrUrl
);
router.get(
  "/kaniv/news/:param",
  CherkasyGetNewsByIdOrUrlController.getKaniwNewsByIdOrUrl
);
router.get(
  "/smila/news/:param",
  CherkasyGetNewsByIdOrUrlController.getSmilaNewsByIdOrUrl
);
router.get(
  "/uman/news/:param",
  CherkasyGetNewsByIdOrUrlController.getUmanNewsByIdOrUrl
);
router.get(
  "/vatutine/news/:param",
  CherkasyGetNewsByIdOrUrlController.getVatutineNewsByIdOrUrl
);
router.get(
  "/zolotonosha/news/:param",
  CherkasyGetNewsByIdOrUrlController.getZolotonoshaNewsByIdOrUrl
);
router.get(
  "/zvenyhorodka/news/:param",
  CherkasyGetNewsByIdOrUrlController.getZvenyhorodkaNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/cherkasy/news-today/:date",
  CherkasyGetNewsByDateController.getCherkasyNewsByDate
);
router.get(
  "/kaniv/news-today/:date",
  CherkasyGetNewsByDateController.getKaniwNewsByDate
);
router.get(
  "/smila/news-today/:date",
  CherkasyGetNewsByDateController.getSmilaNewsByDate
);
router.get(
  "/uman/news-today/:date",
  CherkasyGetNewsByDateController.getUmanNewsByDate
);
router.get(
  "/vatutine/news-today/:date",
  CherkasyGetNewsByDateController.getVatutineNewsByDate
);
router.get(
  "/zolotonosha/news-today/:date",
  CherkasyGetNewsByDateController.getZolotonoshaNewsByDate
);
router.get(
  "/zvenyhorodka/news-today/:date",
  CherkasyGetNewsByDateController.getZvenyhorodkaNewsByDate
);

// Update News
router.put(
  "/cherkasy/news/edit/:id",
  checkAuth,
  CherkasyUpdateNewsController.updateCherkasyNews
);
router.put(
  "/kaniv/news/edit/:id",
  checkAuth,
  CherkasyUpdateNewsController.updateKaniwNews
);
router.put(
  "/smila/news/edit/:id",
  checkAuth,
  CherkasyUpdateNewsController.updateSmilaNews
);
router.put(
  "/uman/news/edit/:id",
  checkAuth,
  CherkasyUpdateNewsController.updateUmanNews
);
router.put(
  "/vatutine/news/edit/:id",
  checkAuth,
  CherkasyUpdateNewsController.updateVatutineNews
);
router.put(
  "/zolotonosha/news/edit/:id",
  checkAuth,
  CherkasyUpdateNewsController.updateZolotonoshaNews
);
router.put(
  "/zvenyhorodka/news/edit/:id",
  checkAuth,
  CherkasyUpdateNewsController.updateZvenyhorodkaNews
);

// Delete News
router.post(
  "/cherkasy/news/delete/:id",
  checkAuth,
  CherkasyDeleteNewsController.deleteCherkasyNews
);
router.post(
  "/kaniv/news/delete/:id",
  checkAuth,
  CherkasyDeleteNewsController.deleteKaniwNews
);
router.post(
  "/smila/news/delete/:id",
  checkAuth,
  CherkasyDeleteNewsController.deleteSmilaNews
);
router.post(
  "/uman/news/delete/:id",
  checkAuth,
  CherkasyDeleteNewsController.deleteUmanNews
);
router.post(
  "/vatutine/news/delete/:id",
  checkAuth,
  CherkasyDeleteNewsController.deleteVatutineNews
);
router.post(
  "/zolotonosha/news/delete/:id",
  checkAuth,
  CherkasyDeleteNewsController.deleteZolotonoshaNews
);
router.post(
  "/zvenyhorodka/news/delete/:id",
  checkAuth,
  CherkasyDeleteNewsController.deleteZvenyhorodkaNews
);

// Search News
router.get("/cherkasy/search", CherkasySearchNewsController.searchCherkasyNews);
router.get("/kaniv/search", CherkasySearchNewsController.searchKaniwNews);
router.get("/smila/search", CherkasySearchNewsController.searchSmilaNews);
router.get("/uman/search", CherkasySearchNewsController.searchUmanNews);
router.get("/vatutine/search", CherkasySearchNewsController.searchVatutineNews);
router.get(
  "/zolotonosha/search",
  CherkasySearchNewsController.searchZolotonoshaNews
);
router.get(
  "/zvenyhorodka/search",
  CherkasySearchNewsController.searchZvenyhorodkaNews
);

export default router;
