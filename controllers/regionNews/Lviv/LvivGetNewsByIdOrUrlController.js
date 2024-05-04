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
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionLvivMethods = {
  getBoryslavNewsByIdOrUrl: Boryslav,
  getBrodyNewsByIdOrUrl: Brody,
  getChervonogradNewsByIdOrUrl: Chervonograd,
  getDragobychNewsByIdOrUrl: Dragobych,
  getLvivNewsByIdOrUrl: Lviv,
  getNovoiavorivskNewsByIdOrUrl: Novoiavorivsk,
  getNovyiRozdilNewsByIdOrUrl: NovyiRozdil,
  getSambirNewsByIdOrUrl: Sambir,
  getSokalNewsByIdOrUrl: Sokal,
  getStebnykNewsByIdOrUrl: Stebnyk,
  getStryiNewsByIdOrUrl: Stryi,
  getTruskavetsNewsByIdOrUrl: Truskavets,
  getZolochivNewsByIdOrUrl: Zolochiv,
};

const LvivGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionLvivMethods)) {
  LvivGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LvivGetNewsByIdOrUrlController;
