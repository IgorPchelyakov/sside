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
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLvivMethods = {
  getBoryslavNewsByDate: Boryslav,
  getBrodyNewsByDate: Brody,
  getChervonogradNewsByDate: Chervonograd,
  getDragobychNewsByDate: Dragobych,
  getLvivNewsByDate: Lviv,
  getNovoiavorivskNewsByDate: Novoiavorivsk,
  getNovyiRozdilNewsByDate: NovyiRozdil,
  getSambirNewsByDate: Sambir,
  getSokalNewsByDate: Sokal,
  getStebnykNewsByDate: Stebnyk,
  getStryiNewsByDate: Stryi,
  getTruskavetsNewsByDate: Truskavets,
  getZolochivNewsByDate: Zolochiv,
};

const LvivGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionLvivMethods)) {
  LvivGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LvivGetNewsByDateController;
