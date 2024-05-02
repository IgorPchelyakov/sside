import { Router } from "express";
import BannerController from "../controllers/bannerController.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Router();

router.get("/banners", BannerController.getAllBanners);
router.get("/banner/:id", BannerController.getBannerById);
router.post("/banner/add", checkAuth, BannerController.addBanner);
router.put("/banner/edit/:id", checkAuth, BannerController.updateBanner);
router.post("/banner/delete/:id", checkAuth, BannerController.deleteBanner);

export default router;
