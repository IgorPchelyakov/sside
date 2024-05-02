import { Router } from "express";
import SitemapsController from "../controllers/sitemapsController.js";


const router = Router();

router.get('/nn-sitemaps', SitemapsController.getAllNNLinks)
router.get('/nn-update-sitemaps', SitemapsController.getUpdateEveryHourLinks)

export default router;