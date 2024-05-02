import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth.js";
import RegionsController from "../../controllers/location/RegionsController.js";

const router = Router();

router.get('/regions', RegionsController.getAllRegions)
router.get('/regions/:countryId', RegionsController.getRegionsByCountryId)
router.post('/region/add', checkAuth, RegionsController.addRegion)
router.put('/region/edit/:id', checkAuth, RegionsController.editRegion)
router.post('/region/delete/:id', checkAuth, RegionsController.deleteRegion)

export default router;