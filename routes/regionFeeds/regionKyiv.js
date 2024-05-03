import { Router } from "express";
import KyivDeleteNewsController from "../../controllers/regionNews/Kyiv/KyivDeleteNewsController.js";
import KyivGetAllNewsController from "../../controllers/regionNews/Kyiv/KyivGetAllNewsController.js";
import KyivGetAllNewsWithNNController from "../../controllers/regionNews/Kyiv/KyivGetAllNewsWithNNController.js";
import KyivGetNewsByDateController from "../../controllers/regionNews/Kyiv/KyivGetNewsByDateController.js";
import KyivGetNewsByIdOrUrlController from "../../controllers/regionNews/Kyiv/KyivGetNewsByIdOrUrlController.js";
import KyivSearchNewsController from "../../controllers/regionNews/Kyiv/KyivSearchNewsController.js";
import KyivUpdateNewsController from "../../controllers/regionNews/Kyiv/KyivUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/kyiv/news", KyivGetAllNewsController.getAllKyivNews);
router.get("/berezan/news", KyivGetAllNewsController.getAllBerezanNews);
router.get("/bilacerkva/news", KyivGetAllNewsController.getAllBilacerkvaNews);
router.get("/boryspil/news", KyivGetAllNewsController.getAllBoryspilNews);
router.get("/boyarka/news", KyivGetAllNewsController.getAllBoyarkaNews);
router.get("/brovary/news", KyivGetAllNewsController.getAllBrovaryNews);
router.get("/bucha/news", KyivGetAllNewsController.getAllBuchaNews);
router.get("/fastiv/news", KyivGetAllNewsController.getAllFastivNews);
router.get("/irpin/news", KyivGetAllNewsController.getAllIrpinNews);
router.get("/obukhiv/news", KyivGetAllNewsController.getAllObukhivNews);
router.get("/pereyaslav/news", KyivGetAllNewsController.getAllPereyaslavNews);
router.get("/skvyra/news", KyivGetAllNewsController.getAllSkvyraNews);
router.get("/slavutych/news", KyivGetAllNewsController.getAllSlavutychNews);
router.get("/vasylkiv/news", KyivGetAllNewsController.getAllVasylkivNews);
router.get("/vyshhorod/news", KyivGetAllNewsController.getAllVyshhorodNews);
router.get("/vyshneve/news", KyivGetAllNewsController.getAllVyshneveNews);
router.get("/yagotyn/news", KyivGetAllNewsController.getAllYagotynNews);

// Get All News With NN
router.get(
  "/kyiv/with-nn",
  KyivGetAllNewsWithNNController.getAllKyivNewsWithNN
);
router.get(
  "/berezan/with-nn",
  KyivGetAllNewsWithNNController.getAllBerezanNewsWithNN
);
router.get(
  "/bilacerkva/with-nn",
  KyivGetAllNewsWithNNController.getAllBilacerkvaNewsWithNN
);
router.get(
  "/boryspil/with-nn",
  KyivGetAllNewsWithNNController.getAllBoryspilNewsWithNN
);
router.get(
  "/boyarka/with-nn",
  KyivGetAllNewsWithNNController.getAllBoyarkaNewsWithNN
);
router.get(
  "/brovary/with-nn",
  KyivGetAllNewsWithNNController.getAllBrovaryNewsWithNN
);
router.get(
  "/bucha/with-nn",
  KyivGetAllNewsWithNNController.getAllBuchaNewsWithNN
);
router.get(
  "/fastiv/with-nn",
  KyivGetAllNewsWithNNController.getAllFastivNewsWithNN
);
router.get(
  "/irpin/with-nn",
  KyivGetAllNewsWithNNController.getAllIrpinNewsWithNN
);
router.get(
  "/obukhiv/with-nn",
  KyivGetAllNewsWithNNController.getAllObukhivNewsWithNN
);
router.get(
  "/pereyaslav/with-nn",
  KyivGetAllNewsWithNNController.getAllPereyaslavNewsWithNN
);
router.get(
  "/skvyra/with-nn",
  KyivGetAllNewsWithNNController.getAllSkvyraNewsWithNN
);
router.get(
  "/slavutych/with-nn",
  KyivGetAllNewsWithNNController.getAllSlavutychNewsWithNN
);
router.get(
  "/vasylkiv/with-nn",
  KyivGetAllNewsWithNNController.getAllVasylkivNewsWithNN
);
router.get(
  "/vyshhorod/with-nn",
  KyivGetAllNewsWithNNController.getAllVyshhorodNewsWithNN
);
router.get(
  "/vyshneve/with-nn",
  KyivGetAllNewsWithNNController.getAllVyshneveNewsWithNN
);
router.get(
  "/yagotyn/with-nn",
  KyivGetAllNewsWithNNController.getAllYagotynNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/kyiv/news/:param",
  KyivGetNewsByIdOrUrlController.getKyivNewsByIdOrUrl
);
router.get(
  "/berezan/news/:param",
  KyivGetNewsByIdOrUrlController.getBerezanNewsByIdOrUrl
);
router.get(
  "/bilacerkva/news/:param",
  KyivGetNewsByIdOrUrlController.getBilacerkvaNewsByIdOrUrl
);
router.get(
  "/boryspil/news/:param",
  KyivGetNewsByIdOrUrlController.getBoryspilNewsByIdOrUrl
);
router.get(
  "/boyarka/news/:param",
  KyivGetNewsByIdOrUrlController.getBoyarkaNewsByIdOrUrl
);
router.get(
  "/brovary/news/:param",
  KyivGetNewsByIdOrUrlController.getBrovaryNewsByIdOrUrl
);
router.get(
  "/bucha/news/:param",
  KyivGetNewsByIdOrUrlController.getBuchaNewsByIdOrUrl
);
router.get(
  "/fastiv/news/:param",
  KyivGetNewsByIdOrUrlController.getFastivNewsByIdOrUrl
);
router.get(
  "/irpin/news/:param",
  KyivGetNewsByIdOrUrlController.getIrpinNewsByIdOrUrl
);
router.get(
  "/obukhiv/news/:param",
  KyivGetNewsByIdOrUrlController.getObukhivNewsByIdOrUrl
);
router.get(
  "/pereyaslav/news/:param",
  KyivGetNewsByIdOrUrlController.getPereyaslavNewsByIdOrUrl
);
router.get(
  "/skvyra/news/:param",
  KyivGetNewsByIdOrUrlController.getSkvyraNewsByIdOrUrl
);
router.get(
  "/slavutych/news/:param",
  KyivGetNewsByIdOrUrlController.getSlavutychNewsByIdOrUrl
);
router.get(
  "/vasylkiv/news/:param",
  KyivGetNewsByIdOrUrlController.getVasylkivNewsByIdOrUrl
);
router.get(
  "/vyshhorod/news/:param",
  KyivGetNewsByIdOrUrlController.getVyshhorodNewsByIdOrUrl
);
router.get(
  "/vyshneve/news/:param",
  KyivGetNewsByIdOrUrlController.getVyshneveNewsByIdOrUrl
);
router.get(
  "/yagotyn/news/:param",
  KyivGetNewsByIdOrUrlController.getYagotynNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/kyiv/news-today/:date",
  KyivGetNewsByDateController.getKyivNewsByDate
);
router.get(
  "/berezan/news-today/:date",
  KyivGetNewsByDateController.getBerezanNewsByDate
);
router.get(
  "/bilacerkva/news-today/:date",
  KyivGetNewsByDateController.getBilacerkvaNewsByDate
);
router.get(
  "/boryspil/news-today/:date",
  KyivGetNewsByDateController.getBoryspilNewsByDate
);
router.get(
  "/boyarka/news-today/:date",
  KyivGetNewsByDateController.getBoyarkaNewsByDate
);
router.get(
  "/brovary/news-today/:date",
  KyivGetNewsByDateController.getBrovaryNewsByDate
);
router.get(
  "/bucha/news-today/:date",
  KyivGetNewsByDateController.getBuchaNewsByDate
);
router.get(
  "/fastiv/news-today/:date",
  KyivGetNewsByDateController.getFastivNewsByDate
);
router.get(
  "/irpin/news-today/:date",
  KyivGetNewsByDateController.getIrpinNewsByDate
);
router.get(
  "/obukhiv/news-today/:date",
  KyivGetNewsByDateController.getObukhivNewsByDate
);
router.get(
  "/pereyaslav/news-today/:date",
  KyivGetNewsByDateController.getPereyaslavNewsByDate
);
router.get(
  "/skvyra/news-today/:date",
  KyivGetNewsByDateController.getSkvyraNewsByDate
);
router.get(
  "/slavutych/news-today/:date",
  KyivGetNewsByDateController.getSlavutychNewsByDate
);
router.get(
  "/vasylkiv/news-today/:date",
  KyivGetNewsByDateController.getVasylkivNewsByDate
);
router.get(
  "/vyshhorod/news-today/:date",
  KyivGetNewsByDateController.getVyshhorodNewsByDate
);
router.get(
  "/vyshneve/news-today/:date",
  KyivGetNewsByDateController.getVyshneveNewsByDate
);
router.get(
  "/yagotyn/news-today/:date",
  KyivGetNewsByDateController.getYagotynNewsByDate
);

// Update News
router.put(
  "/kyiv/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateKyivNews
);
router.put(
  "/berezan/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateBerezanNews
);
router.put(
  "/bilacerkva/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateBilacerkvaNews
);
router.put(
  "/boryspil/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateBoryspilNews
);
router.put(
  "/boyarka/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateBoyarkaNews
);
router.put(
  "/brovary/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateBrovaryNews
);
router.put(
  "/bucha/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateBuchaNews
);
router.put(
  "/fastiv/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateFastivNews
);
router.put(
  "/irpin/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateIrpinNews
);
router.put(
  "/obukhiv/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateObukhivNews
);
router.put(
  "/pereyaslav/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updatePereyaslavNews
);
router.put(
  "/skvyra/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateSkvyraNews
);
router.put(
  "/slavutych/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateSlavutychNews
);
router.put(
  "/vasylkiv/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateVasylkivNews
);
router.put(
  "/vyshhorod/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateVyshhorodNews
);
router.put(
  "/vyshneve/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateVyshneveNews
);
router.put(
  "/yagotyn/news/edit/:id",
  checkAuth,
  KyivUpdateNewsController.updateYagotynNews
);

// Delete News
router.post(
  "/kyiv/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteKyivNews
);
router.post(
  "/berezan/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteBerezanNews
);
router.post(
  "/bilacerkva/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteBilacerkvaNews
);
router.post(
  "/boryspil/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteBoryspilNews
);
router.post(
  "/boyarka/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteBoyarkaNews
);
router.post(
  "/brovary/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteBrovaryNews
);
router.post(
  "/bucha/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteBuchaNews
);
router.post(
  "/fastiv/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteFastivNews
);
router.post(
  "/irpin/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteIrpinNews
);
router.post(
  "/obukhiv/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteObukhivNews
);
router.post(
  "/pereyaslav/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deletePereyaslavNews
);
router.post(
  "/skvyra/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteSkvyraNews
);
router.post(
  "/slavutych/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteSlavutychNews
);
router.post(
  "/vasylkiv/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteVasylkivNews
);
router.post(
  "/vyshhorod/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteVyshhorodNews
);
router.post(
  "/vyshneve/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteVyshneveNews
);
router.post(
  "/yagotyn/news/delete/:id",
  checkAuth,
  KyivDeleteNewsController.deleteYagotynNews
);

// Search News
router.get("/kyiv/search", KyivSearchNewsController.searchKyivNews);
router.get("/berezan/search", KyivSearchNewsController.searchBerezanNews);
router.get("/bilacerkva/search", KyivSearchNewsController.searchBilacerkvaNews);
router.get("/boryspil/search", KyivSearchNewsController.searchBoryspilNews);
router.get("/boyarka/search", KyivSearchNewsController.searchBoyarkaNews);
router.get("/brovary/search", KyivSearchNewsController.searchBrovaryNews);
router.get("/bucha/search", KyivSearchNewsController.searchBuchaNews);
router.get("/fastiv/search", KyivSearchNewsController.searchFastivNews);
router.get("/irpin/search", KyivSearchNewsController.searchIrpinNews);
router.get("/obukhiv/search", KyivSearchNewsController.searchObukhivNews);
router.get("/pereyaslav/search", KyivSearchNewsController.searchPereyaslavNews);
router.get("/skvyra/search", KyivSearchNewsController.searchSkvyraNews);
router.get("/slavutych/search", KyivSearchNewsController.searchSlavutychNews);
router.get("/vasylkiv/search", KyivSearchNewsController.searchVasylkivNews);
router.get("/vyshhorod/search", KyivSearchNewsController.searchVyshhorodNews);
router.get("/vyshneve/search", KyivSearchNewsController.searchVyshneveNews);
router.get("/yagotyn/search", KyivSearchNewsController.searchYagotynNews);

export default router;
