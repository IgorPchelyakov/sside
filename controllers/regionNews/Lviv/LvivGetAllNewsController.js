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
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLvivMethods = {
  getAllBoryslavNews: Boryslav,
  getAllBrodyNews: Brody,
  getAllChervonogradNews: Chervonograd,
  getAllDragobychNews: Dragobych,
  getAllLvivNews: Lviv,
  getAllNovoiavorivskNews: Novoiavorivsk,
  getAllNovyiRozdilNews: NovyiRozdil,
  getAllSambirNews: Sambir,
  getAllSokalNews: Sokal,
  getAllStebnykNews: Stebnyk,
  getAllStryiNews: Stryi,
  getAllTruskavetsNews: Truskavets,
  getAllZolochivNews: Zolochiv,
};

const LvivGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionLvivMethods)) {
  LvivGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LvivGetAllNewsController;
