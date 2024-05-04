import {
  Boryslav,
  Brody,
  Chervonograd,
  Dragobych,
  Lviv,
  Novoiavorivsk,
  NovyiRozdil,
  Sambir,
  Sokal,
  Stebnyk,
  Stryi,
  Truskavets,
  Zolochiv,
} from "../../../models/feeds/regionLviv/lvivCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLvivMethods = {
  searchBoryslavNews: Boryslav,
  searchBrodyNews: Brody,
  searchChervonogradNews: Chervonograd,
  searchDragobychNews: Dragobych,
  searchLvivNews: Lviv,
  searchNovoiavorivskNews: Novoiavorivsk,
  searchNovyiRozdilNews: NovyiRozdil,
  searchSambirNews: Sambir,
  searchSokalNews: Sokal,
  searchStebnykNews: Stebnyk,
  searchStryiNews: Stryi,
  searchTruskavetsNews: Truskavets,
  searchZolochivNews: Zolochiv,
};

const LvivSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionLvivMethods)) {
  LvivSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LvivSearchNewsController;
