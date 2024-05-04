import {
  Berdiansk,
  Dniprorudne,
  Enerhodar,
  Melitopol,
  Pology,
  Tokmak,
  Zaporizhzhia,
} from "../../../models/feeds/regionZaporizhzhia/zaporizhzhiaCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZaporizhzhiaMethods = {
  updateBerdianskNews: Berdiansk,
  updateDniprorudneNews: Dniprorudne,
  updateEnerhodarNews: Enerhodar,
  updateMelitopolNews: Melitopol,
  updatePologyNews: Pology,
  updateTokmakNews: Tokmak,
  updateZaporizhzhiaNews: Zaporizhzhia,
};

const ZaporizhzhiaUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZaporizhzhiaMethods)) {
  ZaporizhzhiaUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZaporizhzhiaUpdateNewsController;
