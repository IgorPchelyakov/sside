import {
  Glukhiv,
  Konotop,
  Krolevets,
  Lebedyn,
  Ohtyrka,
  Romny,
  Shostka,
  Sumy,
  Trostyanets,
} from "../../../models/feeds/regionSumy/sumyCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionSumyMethods = {
  updateSumyNews: Sumy,
  updateKonotopNews: Konotop,
  updateShostkaNews: Shostka,
  updateOhtyrkaNews: Ohtyrka,
  updateRomnyNews: Romny,
  updateGlukhivNews: Glukhiv,
  updateLebedynNews: Lebedyn,
  updateKrolevetsNews: Krolevets,
  updateTrostyanetsNews: Trostyanets,
};

const SumyUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionSumyMethods)) {
  SumyUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default SumyUpdateNewsController;
