import {
  Balakliia,
  Chuguiv,
  Derhachi,
  Harkiv,
  Izium,
  Krasnohrad,
  Kupiansk,
  Lozova,
  Lubotyn,
  Merefa,
  Pervomaiskyi,
  Vovchansk,
} from "../../../models/feeds/regionHarkiv/harkivCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHarkivMethods = {
  getBalakliiaNewsByDate: Balakliia,
  getChuguivNewsByDate: Chuguiv,
  getDerhachiNewsByDate: Derhachi,
  getHarkivNewsByDate: Harkiv,
  getIziumNewsByDate: Izium,
  getKrasnohradNewsByDate: Krasnohrad,
  getKupianskNewsByDate: Kupiansk,
  getLozovaNewsByDate: Lozova,
  getLubotynNewsByDate: Lubotyn,
  getMerefaNewsByDate: Merefa,
  getPervomaiskyiNewsByDate: Pervomaiskyi,
  getVovchanskNewsByDate: Vovchansk,
};

const HarkivGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionHarkivMethods)) {
  HarkivGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HarkivGetNewsByDateController;
