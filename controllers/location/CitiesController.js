import { City } from "../../models/location/CountryRegionCity.js";

const CitiesController = {
  getAllCities: async (req, res) => {
    try {
      const cities = await City.findAll();

      return res
        .status(200)
        .send({ message: "Запит виконано успішно", cities: cities });
    } catch (error) {
      console.log("Помилка обробки запиту:", error);
      return res.status(500).send("Виникла помилка на сервері");
    }
  },
  getCitiesByRegionId: async (req, res) => {
    try {
      const { regionId } = req.params;

      const cities = await City.findAll({ where: { regionId: regionId } });

      return res
        .status(200)
        .send({ message: "Запит виконано успішно", cities: cities });
    } catch (error) {
      console.log("Помилка обробки запиту:", error);
      return res.status(500).send("Виникла помилка на сервері");
    }
  },
  getCityById: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);

      const city = await City.findByPk(id);

      if (!city) {
        return res.status(404).send({ message: "Місто не знайдено" });
      }

      return res
        .status(200)
        .send({ message: "Місто успішно знайдено", city: { city } });
    } catch (error) {
      console.log("Помилка обробки запиту:", error);
      return res.status(500).send("Виникла помилка на сервері");
    }
  },
  getCityByName: async (req, res) => {
    try {
      const { name } = req.params;

      const city = await City.findOne({ where: { name: name } });

      if (!city) {
        return res.status(404).send({ message: "Місто не знайдено" });
      }

      return res
        .status(200)
        .send({ message: "Місто успішно знайдено", city: city });
    } catch (error) {
      console.log("Помилка обробки запиту:", error);
      return res.status(500).send("Виникла помилка на сервері");
    }
  },
  addCity: async (req, res) => {
    try {
      const { name, cityCode, regionId, countryId, isActive } = req.body;

      const newCity = await City.create({
        name,
        cityCode,
        regionId,
        countryId,
        isActive,
      });
      return res
        .status(200)
        .send({ message: "Місто успішно додано", city: newCity });
    } catch (error) {
      console.log("Помилка обробки запиту:", error);
      return res.status(500).send("Виникла помилка на сервері");
    }
  },
  editCity: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, cityCode, isActive } = req.body;

      const city = await City.findByPk(id);

      if (!city) {
        return res.status(404).send({ message: "Місто не знайдено" });
      }

      city.name = name;
      city.cityCode = cityCode;
      city.isActive = isActive;

      await city.save();
    } catch (error) {
      console.log("Помилка обробки запиту:", error);
      return res.status(500).send("Виникла помилка на сервері");
    }
  },
  deleteCity: async (req, res) => {
    try {
      const { id } = req.params;

      const city = await City.findByPk(id);

      if (!city) {
        return res.status(404).send({ message: "Місто не знайдено" });
      }

      const cityName = city.name;

      await city.destroy();

      return res
        .status(200)
        .send({ message: `Місто ${cityName} успішно видалено` });
    } catch (error) {
      console.log("Помилка обробки запиту:", error);
      return res.status(500).send("Виникла помилка на сервері");
    }
  },
};

export default CitiesController;
