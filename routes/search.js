import { Router } from "express";
import SearchController from "../controllers/searchController.js";

const router = Router();

router.get("/search", SearchController.searchNationalNews);
// Dnipro
router.get("/dnipro/search", SearchController.searchDniproNews);
router.get("/kamianske/search", SearchController.searchKamianskeNews);
router.get("/kryvyi-rih/search", SearchController.searchKryvyiRihNews);
router.get("/marganets/search", SearchController.searchMarganetsNews);
router.get("/nikopol/search", SearchController.searchNikopolNews);
router.get("/novomoskovsk/search", SearchController.searchNovomoskovskNews);
router.get("/pavlograd/search", SearchController.searchPavlogradNews);
router.get("/pershotravensk/search", SearchController.searchPershotravenskNews);
router.get("/pokrov/search", SearchController.searchPokrovNews);
router.get("/pyatihatky/search", SearchController.searchPyatihatkyNews);
router.get("/sinelnikovo/search", SearchController.searchSinelnikovoNews);
router.get("/ternivka/search", SearchController.searchTernivkaNews);
router.get("/vilnohorsk/search", SearchController.searchVilnohorskNews);
router.get("/zhovti-vody/search", SearchController.searchZhovtiVodyNews);

export default router;
