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
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLvivMethods = {
  updateBoryslavNews: Boryslav,
  updateBrodyNews: Brody,
  updateChervonogradNews: Chervonograd,
  updateDragobychNews: Dragobych,
  updateLvivNews: Lviv,
  updateNovoiavorivskNews: Novoiavorivsk,
  updateNovyiRozdilNews: NovyiRozdil,
  updateSambirNews: Sambir,
  updateSokalNews: Sokal,
  updateStebnykNews: Stebnyk,
  updateStryiNews: Stryi,
  updateTruskavetsNews: Truskavets,
  updateZolochivNews: Zolochiv,
};

const LvivUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionLvivMethods)) {
  LvivUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LvivUpdateNewsController;
