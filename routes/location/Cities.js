import { Router } from "express";
import CitiesController from "../../controllers/location/CitiesController.js";
import { checkAuth } from "../../middleware/checkAuth.js";

const router = Router();

router.get("/cities", CitiesController.getAllCities);
router.get("/cities/:regionId", CitiesController.getCitiesByRegionId);
router.get("/get-city-by-id/:id", CitiesController.getCityById);
router.get("/get-city-by-name/:name", CitiesController.getCityByName);
router.post("/city/add", checkAuth, CitiesController.addCity);
router.put("/city/edit/:id", checkAuth, CitiesController.editCity);
router.post("/city/delete/:id", checkAuth, CitiesController.deleteCity);

export default router;
