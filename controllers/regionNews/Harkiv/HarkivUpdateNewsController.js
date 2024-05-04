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
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHarkivMethods = {
  updateHarkivNews: Harkiv,
  updateLozovaNews: Lozova,
  updateIziumNews: Izium,
  updateChuguivNews: Chuguiv,
  updatePervomaiskyiNews: Pervomaiskyi,
  updateKupianskNews: Kupiansk,
  updateBalakliiaNews: Balakliia,
  updateMerefaNews: Merefa,
  updateKrasnohradNews: Krasnohrad,
  updateLubotynNews: Lubotyn,
  updateVovchanskNews: Vovchansk,
  updateDerhachiNews: Derhachi,
};

const HarkivUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionHarkivMethods)) {
  HarkivUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HarkivUpdateNewsController;
