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
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionHarkivMethods = {
  searchBalakliiaNews: Balakliia,
  searchChuguivNews: Chuguiv,
  searchDerhachiNews: Derhachi,
  searchHarkivNews: Harkiv,
  searchIziumNews: Izium,
  searchKrasnohradNews: Krasnohrad,
  searchKupianskNews: Kupiansk,
  searchLozovaNews: Lozova,
  searchLubotynNews: Lubotyn,
  searchMerefaNews: Merefa,
  searchPervomaiskyiNews: Pervomaiskyi,
  searchVovchanskNews: Vovchansk,
};

const HarkivSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionHarkivMethods)) {
  HarkivSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default HarkivSearchNewsController;
