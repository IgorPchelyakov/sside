import { Router } from "express";
import SectionNewsController from "../controllers/sectionNewsController.js";

const router = Router()

router.get('/section/usa', SectionNewsController.getUSANews)
router.get('/section/europe', SectionNewsController.getEuropeNews)
router.get('/section/china', SectionNewsController.getChinaNews)
router.get('/section/svitovi-novyny', SectionNewsController.getSvitoviNovynyNews)
router.get('/section/north-america', SectionNewsController.getNorthAmericaNews)
router.get('/section/south-america', SectionNewsController.getSouthAmericaNews)
router.get('/section/middle-east', SectionNewsController.getMiddleEastNews)
router.get('/section/pacific-region', SectionNewsController.getPacificRegionNews)
router.get('/section/africa', SectionNewsController.getAfricaNews)
router.get('/section/nauka', SectionNewsController.getNaukaNews)
router.get('/section/technologies', SectionNewsController.getTechnologiesNews)
router.get('/section/ekolohiia', SectionNewsController.getEkolohiiaNews)
router.get('/section/ekonomika', SectionNewsController.getEkonomikaNews)
router.get('/section/finance', SectionNewsController.getFinanceNews)
router.get('/section/vijna', SectionNewsController.getVijnaNews)
router.get('/section/suspilstvo', SectionNewsController.getSuspilstvoNews)
router.get('/section/vlada', SectionNewsController.getVladaNews)
router.get('/section/polityka', SectionNewsController.getPolitykaNews)
router.get('/section/biznes', SectionNewsController.getBiznesNews)
router.get('/section/sport', SectionNewsController.getSportNews)
router.get('/section/history', SectionNewsController.getHistoryNews)
router.get('/section/pryhody', SectionNewsController.getPryhodyNews)
router.get('/section/musick', SectionNewsController.getMusickNews)
router.get('/section/fashion', SectionNewsController.getFashionNews)
router.get('/section/kino', SectionNewsController.getKinoNews)
router.get('/section/interviu', SectionNewsController.getInterviuNews)
router.get('/section/dumky', SectionNewsController.getDumkyNews)
router.get('/section/analityka', SectionNewsController.getAnalitykaNews)
router.get('/section/auto', SectionNewsController.getAutoNews)
router.get('/section/ihry', SectionNewsController.getIhryNews)
router.get('/section/education', SectionNewsController.getEducationNews)
router.get('/section/kulinariia', SectionNewsController.getKulinariiaNews)
router.get('/section/kultura', SectionNewsController.getKulturaNews)
router.get('/section/health', SectionNewsController.getHealthNews)
router.get('/section/parenting', SectionNewsController.getParentingNews)
router.get('/section/real-estate', SectionNewsController.getRealEstateNews)
router.get('/section/traveling', SectionNewsController.getTravelingNews)
router.get('/section/pres-reliz', SectionNewsController.getPresRelizNews)
router.get('/section/ofitsijno', SectionNewsController.getOfitsijnoNews)
router.get('/section/novyny-biznesu', SectionNewsController.getNovynyBiznesuNews)
router.get('/section/politychni-novyny', SectionNewsController.getPolitychniNovynyNews)

export default router