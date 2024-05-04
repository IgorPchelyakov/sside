import {
  Berdiansk,
  Dniprorudne,
  Enerhodar,
  Melitopol,
  Pology,
  Tokmak,
  Zaporizhzhia,
} from "../../../models/feeds/regionZaporizhzhia/zaporizhzhiaCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZaporizhzhiaMethods = {
  getAllBerdianskNews: Berdiansk,
  getAllDniprorudneNews: Dniprorudne,
  getAllEnerhodarNews: Enerhodar,
  getAllMelitopolNews: Melitopol,
  getAllPologyNews: Pology,
  getAllTokmakNews: Tokmak,
  getAllZaporizhzhiaNews: Zaporizhzhia,
};

const ZaporizhzhiaGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZaporizhzhiaMethods)) {
  ZaporizhzhiaGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZaporizhzhiaGetAllNewsController;
