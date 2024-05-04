import { Router } from "express";
import MykolayivDeleteNewsController from "../../controllers/regionNews/Mykolayiv/MykolayivDeleteNewsController.js";
import MykolayivGetAllNewsController from "../../controllers/regionNews/Mykolayiv/MykolayivGetAllNewsController.js";
import MykolayivGetAllNewsWithNNController from "../../controllers/regionNews/Mykolayiv/MykolayivGetAllNewsWithNNController.js";
import MykolayivGetNewsByDateController from "../../controllers/regionNews/Mykolayiv/MykolayivGetNewsByDateController.js";
import MykolayivGetNewsByIdOrUrlController from "../../controllers/regionNews/Mykolayiv/MykolayivGetNewsByIdOrUrlController.js";
import MykolayivSearchNewsController from "../../controllers/regionNews/Mykolayiv/MykolayivSearchNewsController.js";
import MykolayivUpdateNewsController from "../../controllers/regionNews/Mykolayiv/MykolayivUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/mykolayiv/news", MykolayivGetAllNewsController.getAllMykolaivNews);
router.get(
  "/pervomaisk/news",
  MykolayivGetAllNewsController.getAllPervomaiskNews
);
router.get(
  "/voznesensk/news",
  MykolayivGetAllNewsController.getAllVoznesenskNews
);
router.get(
  "/yuzhnoukrainsk/news",
  MykolayivGetAllNewsController.getAllYuzhnoukrainskNews
);

// Get All News With NN
router.get(
  "/mykolayiv/with-nn",
  MykolayivGetAllNewsWithNNController.getAllMykolaivNewsWithNN
);
router.get(
  "/pervomaisk/with-nn",
  MykolayivGetAllNewsWithNNController.getAllPervomaiskNewsWithNN
);
router.get(
  "/voznesensk/with-nn",
  MykolayivGetAllNewsWithNNController.getAllVoznesenskNewsWithNN
);
router.get(
  "/yuzhnoukrainsk/with-nn",
  MykolayivGetAllNewsWithNNController.getAllYuzhnoukrainskNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/mykolayiv/news/:param",
  MykolayivGetNewsByIdOrUrlController.getMykolaivNewsByIdOrUrl
);
router.get(
  "/pervomaisk/news/:param",
  MykolayivGetNewsByIdOrUrlController.getPervomaiskNewsByIdOrUrl
);
router.get(
  "/voznesensk/news/:param",
  MykolayivGetNewsByIdOrUrlController.getVoznesenskNewsByIdOrUrl
);
router.get(
  "/yuzhnoukrainsk/news/:param",
  MykolayivGetNewsByIdOrUrlController.getYuzhnoukrainskNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/mykolayiv/news-today/:date",
  MykolayivGetNewsByDateController.getMykolaivNewsByDate
);
router.get(
  "/pervomaisk/news-today/:date",
  MykolayivGetNewsByDateController.getPervomaiskNewsByDate
);
router.get(
  "/voznesensk/news-today/:date",
  MykolayivGetNewsByDateController.getVoznesenskNewsByDate
);
router.get(
  "/yuzhnoukrainsk/news-today/:date",
  MykolayivGetNewsByDateController.getYuzhnoukrainskNewsByDate
);

// Update News
router.put(
  "/mykolayiv/news/edit/:id",
  checkAuth,
  MykolayivUpdateNewsController.updateMykolaivNews
);
router.put(
  "/pervomaisk/news/edit/:id",
  checkAuth,
  MykolayivUpdateNewsController.updatePervomaiskNews
);
router.put(
  "/voznesensk/news/edit/:id",
  checkAuth,
  MykolayivUpdateNewsController.updateVoznesenskNews
);
router.put(
  "/yuzhnoukrainsk/news/edit/:id",
  checkAuth,
  MykolayivUpdateNewsController.updateYuzhnoukrainskNews
);

// Delete News
router.post(
  "/mykolayiv/news/delete/:id",
  checkAuth,
  MykolayivDeleteNewsController.deleteMykolaivNews
);
router.post(
  "/pervomaisk/news/delete/:id",
  checkAuth,
  MykolayivDeleteNewsController.deletePervomaiskNews
);
router.post(
  "/voznesensk/news/delete/:id",
  checkAuth,
  MykolayivDeleteNewsController.deleteVoznesenskNews
);
router.post(
  "/yuzhnoukrainsk/news/delete/:id",
  checkAuth,
  MykolayivDeleteNewsController.deleteYuzhnoukrainskNews
);

// Search News
router.get(
  "/mykolayiv/search",
  MykolayivSearchNewsController.searchMykolaivNews
);
router.get(
  "/pervomaisk/search",
  MykolayivSearchNewsController.searchPervomaiskNews
);
router.get(
  "/voznesensk/search",
  MykolayivSearchNewsController.searchVoznesenskNews
);
router.get(
  "/yuzhnoukrainsk/search",
  MykolayivSearchNewsController.searchYuzhnoukrainskNews
);

export default router;
