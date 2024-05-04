import {
  Berdiansk,
  Dniprorudne,
  Enerhodar,
  Melitopol,
  Pology,
  Tokmak,
  Zaporizhzhia,
} from "../../../models/feeds/regionZaporizhzhia/zaporizhzhiaCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZaporizhzhiaMethods = {
  deleteZaporizhzhiaNews: Zaporizhzhia,
  deleteMelitopolNews: Melitopol,
  deleteBerdianskNews: Berdiansk,
  deleteEnerhodarNews: Enerhodar,
  deleteTokmakNews: Tokmak,
  deletePologyNews: Pology,
  deleteDniprorudneNews: Dniprorudne,
};

const ZaporizhzhiaDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZaporizhzhiaMethods)) {
  ZaporizhzhiaDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZaporizhzhiaDeleteNewsController;
