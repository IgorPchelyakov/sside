import {
  Berdiansk,
  Dniprorudne,
  Enerhodar,
  Melitopol,
  Pology,
  Tokmak,
  Zaporizhzhia,
} from "../../../models/feeds/regionZaporizhzhia/zaporizhzhiaCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZaporizhzhiaMethods = {
  searchBerdianskNews: Berdiansk,
  searchDniprorudneNews: Dniprorudne,
  searchEnerhodarNews: Enerhodar,
  searchMelitopolNews: Melitopol,
  searchPologyNews: Pology,
  searchTokmakNews: Tokmak,
  searchZaporizhzhiaNews: Zaporizhzhia,
};

const ZaporizhzhiaSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZaporizhzhiaMethods)) {
  ZaporizhzhiaSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZaporizhzhiaSearchNewsController;
