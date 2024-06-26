import { Router } from "express";
import SearchController from "../controllers/searchController.js";

const router = Router();

router.get("/search", SearchController.searchNationalNews);

export default router;
