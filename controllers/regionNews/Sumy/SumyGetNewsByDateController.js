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
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionSumyMethods = {
  getGlukhivNewsByDate: Glukhiv,
  getKonotopNewsByDate: Konotop,
  getKrolevetsNewsByDate: Krolevets,
  getLebedynNewsByDate: Lebedyn,
  getOhtyrkaNewsByDate: Ohtyrka,
  getRomnyNewsByDate: Romny,
  getShostkaNewsByDate: Shostka,
  getSumyNewsByDate: Sumy,
  getTrostyanetsNewsByDate: Trostyanets,
};

const SumyGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionSumyMethods)) {
  SumyGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default SumyGetNewsByDateController;
