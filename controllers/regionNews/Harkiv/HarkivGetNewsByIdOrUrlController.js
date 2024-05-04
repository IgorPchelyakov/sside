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
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHarkivMethods = {
  getBalakliiaNewsByIdOrUrl: Balakliia,
  getChuguivNewsByIdOrUrl: Chuguiv,
  getDerhachiNewsByIdOrUrl: Derhachi,
  getHarkivNewsByIdOrUrl: Harkiv,
  getIziumNewsByIdOrUrl: Izium,
  getKrasnohradNewsByIdOrUrl: Krasnohrad,
  getKupianskNewsByIdOrUrl: Kupiansk,
  getLozovaNewsByIdOrUrl: Lozova,
  getLubotynNewsByIdOrUrl: Lubotyn,
  getMerefaNewsByIdOrUrl: Merefa,
  getPervomaiskyiNewsByIdOrUrl: Pervomaiskyi,
  getVovchanskNewsByIdOrUrl: Vovchansk,
};

const HarkivGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionHarkivMethods)) {
  HarkivGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HarkivGetNewsByIdOrUrlController;
