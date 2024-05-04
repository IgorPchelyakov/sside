import {
  Berdiansk,
  Dniprorudne,
  Enerhodar,
  Melitopol,
  Pology,
  Tokmak,
  Zaporizhzhia,
} from "../../../models/feeds/regionZaporizhzhia/zaporizhzhiaCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZaporizhzhiaMethods = {
  getBerdianskNewsByDate: Berdiansk,
  getDniprorudneNewsByDate: Dniprorudne,
  getEnerhodarNewsByDate: Enerhodar,
  getMelitopolNewsByDate: Melitopol,
  getPologyNewsByDate: Pology,
  getTokmakNewsByDate: Tokmak,
  getZaporizhzhiaNewsByDate: Zaporizhzhia,
};

const ZaporizhzhiaGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionZaporizhzhiaMethods)) {
  ZaporizhzhiaGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZaporizhzhiaGetNewsByDateController;
