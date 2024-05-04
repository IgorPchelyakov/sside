import {
  Genichesk,
  Kakhovka,
  Kherson,
  NovaKakhovka,
  Oleshky,
  Skadovsk,
} from "../../../models/feeds/regionKherson/khersonCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKhersonMethods = {
  searchGenicheskNews: Genichesk,
  searchKakhovkaNews: Kakhovka,
  searchKhersonNews: Kherson,
  searchNovaKakhovkaNews: NovaKakhovka,
  searchOleshkyNews: Oleshky,
  searchSkadovskNews: Skadovsk,
};

const KhersonSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKhersonMethods)) {
  KhersonSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KhersonSearchNewsController;
