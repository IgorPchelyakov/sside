import { City } from "../models/location/CountryRegionCity.js";

const validateParamsGetNationalOrCityNews = async (req, res, next) => {
  console.log("Middleware: validateParamsGetNationalOrCityNews - start");
  // const { feed } = req.query;
  // console.log("Received feed:", feed);

  // const cities = await City.findAll({ attributes: ["name"] });
  // console.log("Cities fetched from DB:", cities);
  // const validCities = cities.map((city) => city.name);
  // console.log("Valid cities:", validCities);

  // if (!feed) {
  //   console.log("Error: Missing feed parameter");
  //   return res
  //     .status(400)
  //     .json({ message: `Відсутній параметр стрічки новин` });
  // }

  // if (typeof feed !== "string" || feed.length === 0) {
  //   console.log("Error: Invalid feed parameter");
  //   return res.status(400).json({ message: `Невірний параметр стрічки новин` });
  // }

  // if (!validCities.includes(feed)) {
  //   console.log(`Error: Invalid feed parameter: ${feed}`);
  //   return res
  //     .status(400)
  //     .json({ message: `Невірний параметр стрічки новин: ${feed}` });
  // }

  // const queryParams = req.query;
  // if (Object.keys(queryParams).length !== 1) {
  //   console.log("Error: Additional parameters are not allowed");
  //   return res
  //     .status(400)
  //     .json({ message: "Помилка: Додаткові параметри не дозволені" });
  // }
  // console.log("Middleware: validateParamsGetNationalOrCityNews - passed");
  // next();
  try {
    const { feed } = req.query;

    const cities = await City.findAll({ attributes: ["name"] });
    if (!cities || cities.length === 0) {
      return res
        .status(500)
        .json({ message: "Failed to retrieve cities from the database" });
    }

    const validCities = cities.map((city) => city.name);
    console.log("Valid cities:", validCities);

    if (!feed) {
      return res
        .status(400)
        .json({ message: `Відсутній параметр стрічки новин` });
    }

    if (typeof feed !== "string" || feed.length === 0) {
      return res
        .status(400)
        .json({ message: `Невірний параметр стрічки новин` });
    }

    if (!validCities.includes(feed)) {
      return res
        .status(400)
        .json({ message: `Невірний параметр стрічки новин: ${feed}` });
    }

    const queryParams = req.query;
    if (Object.keys(queryParams).length !== 1) {
      return res
        .status(400)
        .json({ message: "Помилка: Додаткові параметри не дозволені" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default validateParamsGetNationalOrCityNews;
