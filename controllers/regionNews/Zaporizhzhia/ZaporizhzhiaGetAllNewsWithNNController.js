import {
  Berdiansk,
  Dniprorudne,
  Enerhodar,
  Melitopol,
  Pology,
  Tokmak,
  Zaporizhzhia,
} from "../../../models/feeds/regionZaporizhzhia/zaporizhzhiaCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZaporizhzhiaMethods = {
  getAllBerdianskNewsWithNN: Berdiansk,
  getAllDniprorudneNewsWithNN: Dniprorudne,
  getAllEnerhodarNewsWithNN: Enerhodar,
  getAllMelitopolNewsWithNN: Melitopol,
  getAllPologyNewsWithNN: Pology,
  getAllTokmakNewsWithNN: Tokmak,
  getAllZaporizhzhiaNewsWithNN: Zaporizhzhia,
};

const ZaporizhzhiaGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionZaporizhzhiaMethods)) {
  ZaporizhzhiaGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZaporizhzhiaGetAllNewsWithNNController;
