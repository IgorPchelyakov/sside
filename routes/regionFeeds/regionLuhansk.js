import { Router } from "express";
import LuhanskDeleteNewsController from "../../controllers/regionNews/Luhansk/LuhanskDeleteNewsController.js";
import LuhanskGetAllNewsController from "../../controllers/regionNews/Luhansk/LuhanskGetAllNewsController.js";
import LuhanskGetAllNewsWithNNController from "../../controllers/regionNews/Luhansk/LuhanskGetAllNewsWithNNController.js";
import LuhanskGetNewsByDateController from "../../controllers/regionNews/Luhansk/LuhanskGetNewsByDateController.js";
import LuhanskGetNewsByIdOrUrlController from "../../controllers/regionNews/Luhansk/LuhanskGetNewsByIdOrUrlController.js";
import LuhanskSearchNewsController from "../../controllers/regionNews/Luhansk/LuhanskSearchNewsController.js";
import LuhanskUpdateNewsController from "../../controllers/regionNews/Luhansk/LuhanskUpdateNewsController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

// GetAllNews
router.get("/alchevsk/news", LuhanskGetAllNewsController.getAllAlchevskNews);
router.get("/antracit/news", LuhanskGetAllNewsController.getAllAntracitNews);
router.get("/bryanka/news", LuhanskGetAllNewsController.getAllBriankaNews);
router.get("/dovzhansk/news", LuhanskGetAllNewsController.getAllDovzhanskNews);
router.get("/golubivka/news", LuhanskGetAllNewsController.getAllGolubivkaNews);
router.get("/hrustalny/news", LuhanskGetAllNewsController.getAllHrustalnyiNews);
router.get("/kadiivka/news"), LuhanskGetAllNewsController.getAllKadievkaNews;
router.get("/kreminna/news"), LuhanskGetAllNewsController.getAllKreminnaNews;
router.get("/luhansk/news", LuhanskGetAllNewsController.getAllLuhanskNews);
router.get(
  "/lysychansk/news",
  LuhanskGetAllNewsController.getAllLysychanskNews
);
router.get(
  "/molodogvardiysk/news",
  LuhanskGetAllNewsController.getAllMolodohvardiiskNews
);
router.get("/perevalsk/news", LuhanskGetAllNewsController.getAllPerevalskNews);
router.get(
  "/pervomaysk/news",
  LuhanskGetAllNewsController.getAllPervomaiskNews
);
router.get("/popasna/news", LuhanskGetAllNewsController.getAllPopasnaNews);
router.get("/rivenky/news", LuhanskGetAllNewsController.getAllRivenkyNews);
router.get("/rubishne/news", LuhanskGetAllNewsController.getAllRubizhneNews);
router.get(
  "/severodonetsk/news",
  LuhanskGetAllNewsController.getAllSeverodonetskNews
);
router.get("/sorokine/news", LuhanskGetAllNewsController.getAllSorokyneNews);
router.get("/sukhodilsk/news", LuhanskGetAllNewsController.getAllSuhodilskNews);

// Get All News With NN
router.get(
  "/alchevsk/with-nn",
  LuhanskGetAllNewsWithNNController.getAllAlchevskNewsWithNN
);
router.get(
  "/antracit/with-nn",
  LuhanskGetAllNewsWithNNController.getAllAntracitNewsWithNN
);
router.get(
  "/bryanka/with-nn",
  LuhanskGetAllNewsWithNNController.getAllBriankaNewsWithNN
);
router.get(
  "/dovzhansk/with-nn",
  LuhanskGetAllNewsWithNNController.getAllDovzhanskNewsWithNN
);
router.get(
  "/golubivka/with-nn",
  LuhanskGetAllNewsWithNNController.getAllGolubivkaNewsWithNN
);
router.get(
  "/hrustalny/with-nn",
  LuhanskGetAllNewsWithNNController.getAllHrustalnyiNewsWithNN
);
router.get(
  "/kadiivka/with-nn",
  LuhanskGetAllNewsWithNNController.getAllKadievkaNewsWithNN
);
router.get(
  "/kreminna/with-nn",
  LuhanskGetAllNewsWithNNController.getAllKreminnaNewsWithNN
);
router.get(
  "/luhansk/with-nn",
  LuhanskGetAllNewsWithNNController.getAllLuhanskNewsWithNN
);
router.get(
  "/lysychansk/with-nn",
  LuhanskGetAllNewsWithNNController.getAllLysychanskNewsWithNN
);
router.get(
  "/molodogvardiysk/with-nn",
  LuhanskGetAllNewsWithNNController.getAllMolodohvardiiskNewsWithNN
);
router.get(
  "/perevalsk/with-nn",
  LuhanskGetAllNewsWithNNController.getAllPerevalskNewsWithNN
);
router.get(
  "/pervomaysk/with-nn",
  LuhanskGetAllNewsWithNNController.getAllPervomaiskNewsWithNN
);
router.get(
  "/popasna/with-nn",
  LuhanskGetAllNewsWithNNController.getAllPopasnaNewsWithNN
);
router.get(
  "/rivenky/with-nn",
  LuhanskGetAllNewsWithNNController.getAllRivenkyNewsWithNN
);
router.get(
  "/rubishne/with-nn",
  LuhanskGetAllNewsWithNNController.getAllRubizhneNewsWithNN
);
router.get(
  "/severodonetsk/with-nn",
  LuhanskGetAllNewsWithNNController.getAllSeverodonetskNewsWithNN
);
router.get(
  "/sorokine/with-nn",
  LuhanskGetAllNewsWithNNController.getAllSorokyneNewsWithNN
);
router.get(
  "/sukhodilsk/with-nn",
  LuhanskGetAllNewsWithNNController.getAllSuhodilskNewsWithNN
);

// Get News By Id Or Url
router.get(
  "/alchevsk/news/:param",
  LuhanskGetNewsByIdOrUrlController.getAlchevskNewsByIdOrUrl
);
router.get(
  "/antracit/news/:param",
  LuhanskGetNewsByIdOrUrlController.getAntracitNewsByIdOrUrl
);
router.get(
  "/bryanka/news/:param",
  LuhanskGetNewsByIdOrUrlController.getBriankaNewsByIdOrUrl
);
router.get(
  "/dovzhansk/news/:param",
  LuhanskGetNewsByIdOrUrlController.getDovzhanskNewsByIdOrUrl
);
router.get(
  "/golubivka/news/:param",
  LuhanskGetNewsByIdOrUrlController.getGolubivkaNewsByIdOrUrl
);
router.get(
  "/hrustalny/news/:param",
  LuhanskGetNewsByIdOrUrlController.getHrustalnyiNewsByIdOrUrl
);
router.get(
  "/kadiivka/news/:param",
  LuhanskGetNewsByIdOrUrlController.getKadievkaNewsByIdOrUrl
);
router.get(
  "/kreminna/news/:param",
  LuhanskGetNewsByIdOrUrlController.getKreminnaNewsByIdOrUrl
);
router.get(
  "/luhansk/news/:param",
  LuhanskGetNewsByIdOrUrlController.getLuhanskNewsByIdOrUrl
);
router.get(
  "/lysychansk/news/:param",
  LuhanskGetNewsByIdOrUrlController.getLysychanskNewsByIdOrUrl
);
router.get(
  "/molodogvardiysk/news/:param",
  LuhanskGetNewsByIdOrUrlController.getMolodohvardiiskNewsByIdOrUrl
);
router.get(
  "/perevalsk/news/:param",
  LuhanskGetNewsByIdOrUrlController.getPerevalskNewsByIdOrUrl
);
router.get(
  "/pervomaysk/news/:param",
  LuhanskGetNewsByIdOrUrlController.getPervomaiskNewsByIdOrUrl
);
router.get(
  "/popasna/news/:param",
  LuhanskGetNewsByIdOrUrlController.getPopasnaNewsByIdOrUrl
);
router.get(
  "/rivenky/news/:param",
  LuhanskGetNewsByIdOrUrlController.getRivenkyNewsByIdOrUrl
);
router.get(
  "/rubishne/news/:param",
  LuhanskGetNewsByIdOrUrlController.getRubizhneNewsByIdOrUrl
);
router.get(
  "/severodonetsk/news/:param",
  LuhanskGetNewsByIdOrUrlController.getSeverodonetskNewsByIdOrUrl
);
router.get(
  "/sorokine/news/:param",
  LuhanskGetNewsByIdOrUrlController.getSorokyneNewsByIdOrUrl
);
router.get(
  "/sukhodilsk/news/:param",
  LuhanskGetNewsByIdOrUrlController.getSuhodilskNewsByIdOrUrl
);

// Get All News By Date
router.get(
  "/alchevsk/news-today/:date",
  LuhanskGetNewsByDateController.getAlchevskNewsByDate
);
router.get(
  "/antracit/news-today/:date",
  LuhanskGetNewsByDateController.getAntracitNewsByDate
);
router.get(
  "/bryanka/news-today/:date",
  LuhanskGetNewsByDateController.getBriankaNewsByDate
);
router.get(
  "/dovzhansk/news-today/:date",
  LuhanskGetNewsByDateController.getDovzhanskNewsByDate
);
router.get(
  "/golubivka/news-today/:date",
  LuhanskGetNewsByDateController.getGolubivkaNewsByDate
);
router.get(
  "/hrustalny/news-today/:date",
  LuhanskGetNewsByDateController.getHrustalnyiNewsByDate
);
router.get(
  "/kadiivka/news-today/:date",
  LuhanskGetNewsByDateController.getKadievkaNewsByDate
);
router.get(
  "/kreminna/news-today/:date",
  LuhanskGetNewsByDateController.getKreminnaNewsByDate
);
router.get(
  "/luhansk/news-today/:date",
  LuhanskGetNewsByDateController.getLuhanskNewsByDate
);
router.get(
  "/lysychansk/news-today/:date",
  LuhanskGetNewsByDateController.getLysychanskNewsByDate
);
router.get(
  "/molodogvardiysk/news-today/:date",
  LuhanskGetNewsByDateController.getMolodohvardiiskNewsByDate
);
router.get(
  "/perevalsk/news-today/:date",
  LuhanskGetNewsByDateController.getPerevalskNewsByDate
);
router.get(
  "/pervomaysk/news-today/:date",
  LuhanskGetNewsByDateController.getPervomaiskNewsByDate
);
router.get(
  "/popasna/news-today/:date",
  LuhanskGetNewsByDateController.getPopasnaNewsByDate
);
router.get(
  "/rivenky/news-today/:date",
  LuhanskGetNewsByDateController.getRivenkyNewsByDate
);
router.get(
  "/rubishne/news-today/:date",
  LuhanskGetNewsByDateController.getRubizhneNewsByDate
);
router.get(
  "/severodonetsk/news-today/:date",
  LuhanskGetNewsByDateController.getSeverodonetskNewsByDate
);
router.get(
  "/sorokine/news-today/:date",
  LuhanskGetNewsByDateController.getSorokyneNewsByDate
);
router.get(
  "/sukhodilsk/news-today/:date",
  LuhanskGetNewsByDateController.getSuhodilskNewsByDate
);

// Update News
router.put(
  "/alchevsk/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateAlchevskNews
);
router.put(
  "/antracit/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateAntracitNews
);
router.put(
  "/bryanka/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateBriankaNews
);
router.put(
  "/dovzhansk/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateDovzhanskNews
);
router.put(
  "/golubivka/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateGolubivkaNews
);
router.put(
  "/hrustalny/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateHrustalnyiNews
);
router.put(
  "/kadiivka/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateKadievkaNews
);
router.put(
  "/kreminna/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateKreminnaNews
);
router.put(
  "/luhansk/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateLuhanskNews
);
router.put(
  "/lysychansk/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateLysychanskNews
);
router.put(
  "/molodogvardiysk/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateMolodohvardiiskNews
);
router.put(
  "/perevalsk/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updatePerevalskNews
);
router.put(
  "/pervomaysk/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updatePervomaiskNews
);
router.put(
  "/popasna/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updatePopasnaNews
);
router.put(
  "/rivenky/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateRivenkyNews
);
router.put(
  "/rubishne/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateRubizhneNews
);
router.put(
  "/severodonetsk/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateSeverodonetskNews
);
router.put(
  "/sorokine/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateSorokyneNews
);
router.put(
  "/sukhodilsk/news/edit/:id",
  checkAuth,
  LuhanskUpdateNewsController.updateSuhodilskNews
);

// Delete News
router.post(
  "/alchevsk/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteAlchevskNews
);
router.post(
  "/antracit/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteAntracitNews
);
router.post(
  "/bryanka/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteBriankaNews
);
router.post(
  "/dovzhansk/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteDovzhanskNews
);
router.post(
  "/golubivka/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteGolubivkaNews
);
router.post(
  "/hrustalny/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteHrustalnyiNews
);
router.post(
  "/kadiivka/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteKadievkaNews
);
router.post(
  "/kreminna/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteKreminnaNews
);
router.post(
  "/luhansk/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteLuhanskNews
);
router.post(
  "/lysychansk/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteLysychanskNews
);
router.post(
  "/molodogvardiysk/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteMolodohvardiiskNews
);
router.post(
  "/perevalsk/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deletePerevalskNews
);
router.post(
  "/pervomaysk/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deletePervomaiskNews
);
router.post(
  "/popasna/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deletePopasnaNews
);
router.post(
  "/rivenky/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteRivenkyNews
);
router.post(
  "/rubishne/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteRubizhneNews
);
router.post(
  "/severodonetsk/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteSeverodonetskNews
);
router.post(
  "/sorokine/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteSorokyneNews
);
router.post(
  "/sukhodilsk/news/delete/:id",
  checkAuth,
  LuhanskDeleteNewsController.deleteSuhodilskNews
);

// Search News
router.get("/alchevsk/search", LuhanskSearchNewsController.searchAlchevskNews);
router.get("/antracit/search", LuhanskSearchNewsController.searchAntracitNews);
router.get("/bryanka/search", LuhanskSearchNewsController.searchBriankaNews);
router.get(
  "/dovzhansk/search",
  LuhanskSearchNewsController.searchDovzhanskNews
);
router.get(
  "/golubivka/search",
  LuhanskSearchNewsController.searchGolubivkaNews
);
router.get(
  "/hrustalny/search",
  LuhanskSearchNewsController.searchHrustalnyiNews
);
router.get("/kadiivka/search", LuhanskSearchNewsController.searchKadievkaNews);
router.get("/kreminna/search", LuhanskSearchNewsController.searchKreminnaNews);
router.get("/luhansk/search", LuhanskSearchNewsController.searchLuhanskNews);
router.get(
  "/lysychansk/search",
  LuhanskSearchNewsController.searchLysychanskNews
);
router.get(
  "/molodogvardiysk/search",
  LuhanskSearchNewsController.searchMolodohvardiiskNews
);
router.get(
  "/perevalsk/search",
  LuhanskSearchNewsController.searchPerevalskNews
);
router.get(
  "/pervomaysk/search",
  LuhanskSearchNewsController.searchPervomaiskNews
);
router.get("/popasna/search", LuhanskSearchNewsController.searchPopasnaNews);
router.get("/rivenky/search", LuhanskSearchNewsController.searchRivenkyNews);
router.get("/rubishne/search", LuhanskSearchNewsController.searchRubizhneNews);
router.get(
  "/severodonetsk/search",
  LuhanskSearchNewsController.searchSeverodonetskNews
);
router.get("/sorokine/search", LuhanskSearchNewsController.searchSorokyneNews);
router.get(
  "/sukhodilsk/search",
  LuhanskSearchNewsController.searchSuhodilskNews
);

export default router;
