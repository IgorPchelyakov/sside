import {
  Berdiansk,
  Dniprorudne,
  Enerhodar,
  Melitopol,
  Pology,
  Tokmak,
  Zaporizhzhia,
} from "../../../models/feeds/regionZaporizhzhia/zaporizhzhiaCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZaporizhzhiaMethods = {
  getBerdianskNewsByIdOrUrl: Berdiansk,
  getDniprorudneNewsByIdOrUrl: Dniprorudne,
  getEnerhodarNewsByIdOrUrl: Enerhodar,
  getMelitopolNewsByIdOrUrl: Melitopol,
  getPologyNewsByIdOrUrl: Pology,
  getTokmakNewsByIdOrUrl: Tokmak,
  getZaporizhzhiaNewsByIdOrUrl: Zaporizhzhia,
};

const ZaporizhzhiaGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionZaporizhzhiaMethods)) {
  ZaporizhzhiaGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZaporizhzhiaGetNewsByIdOrUrlController;
