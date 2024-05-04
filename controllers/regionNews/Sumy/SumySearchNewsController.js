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
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionSumyMethods = {
  searchGlukhivNews: Glukhiv,
  searchKonotopNews: Konotop,
  searchKrolevetsNews: Krolevets,
  searchLebedynNews: Lebedyn,
  searchOhtyrkaNews: Ohtyrka,
  searchRomnyNews: Romny,
  searchShostkaNews: Shostka,
  searchSumyNews: Sumy,
  searchTrostyanetsNews: Trostyanets,
};

const SumySearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionSumyMethods)) {
  SumySearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default SumySearchNewsController;
