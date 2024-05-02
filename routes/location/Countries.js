import { Router } from "express";
import CountriesController from "../../controllers/location/CountriesController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

router.get('/countries', CountriesController.getAllCountries)
router.post('/country/add', checkAuth, CountriesController.addCountry)
router.put('/country/edit/:id', checkAuth, CountriesController.editCountry)
router.post('/country/delete/:id', checkAuth, CountriesController.deleteCountry)

export default router;