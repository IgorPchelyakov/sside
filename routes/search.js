import { Router } from "express";
import SearchController from "../controllers/searchController.js";

const router = Router();

router.get("/search", SearchController.searchNationalNews);
// Kyiv Region
router.get("/berezan/search", SearchController.searchBerezanNews);
router.get("/bilacerkva/search", SearchController.searchBilacerkvaNews);
router.get("/boryspil/search", SearchController.searchBoryspilNews);
router.get("/boyarka/search", SearchController.searchBoyarkaNews);
router.get("/brovary/search", SearchController.searchBrovaryNews);
router.get("/bucha/search", SearchController.searchBuchaNews);
router.get("/fastiv/search", SearchController.searchFastivNews);
router.get("/irpin/search", SearchController.searchIrpinNews);
router.get("/kyiv/search", SearchController.searchKyivNews);
router.get("/obukhiv/search", SearchController.searchObukhivNews);
router.get("/skvyra/search", SearchController.searchSkvyraNews);
router.get("/slavutych/search", SearchController.searchSlavutychNews);
router.get("/vasylkiv/search", SearchController.searchVasylkivNews);
router.get("/vyshhorod/search", SearchController.searchVyshhorodNews);
router.get("/vyshneve/search", SearchController.searchVyshneveNews);
router.get("/yagotyn/search", SearchController.searchYagotynNews);
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
