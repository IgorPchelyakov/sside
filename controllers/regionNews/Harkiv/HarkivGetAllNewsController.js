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
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHarkivMethods = {
  getAllBalakliiaNews: Balakliia,
  getAllChuguivNews: Chuguiv,
  getAllDerhachiNews: Derhachi,
  getAllHarkivNews: Harkiv,
  getAllIziumNews: Izium,
  getAllKrasnohradNews: Krasnohrad,
  getAllKupianskNews: Kupiansk,
  getAllLozovaNews: Lozova,
  getAllLubotynNews: Lubotyn,
  getAllMerefaNews: Merefa,
  getAllPervomaiskyiNews: Pervomaiskyi,
  getAllVovchanskNews: Vovchansk,
};

const HarkivGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionHarkivMethods)) {
  HarkivGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HarkivGetAllNewsController;
