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
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionSumyMethods = {
  getGlukhivNewsByIdOrUrl: Glukhiv,
  getKonotopNewsByIdOrUrl: Konotop,
  getKrolevetsNewsByIdOrUrl: Krolevets,
  getLebedynNewsByIdOrUrl: Lebedyn,
  getOhtyrkaNewsByIdOrUrl: Ohtyrka,
  getRomnyNewsByIdOrUrl: Romny,
  getShostkaNewsByIdOrUrl: Shostka,
  getSumyNewsByIdOrUrl: Sumy,
  getTrostyanetsNewsByIdOrUrl: Trostyanets,
};

const SumyGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionSumyMethods)) {
  SumyGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default SumyGetNewsByIdOrUrlController;
