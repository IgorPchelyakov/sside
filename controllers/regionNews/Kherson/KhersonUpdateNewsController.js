import {
  Genichesk,
  Kakhovka,
  Kherson,
  NovaKakhovka,
  Oleshky,
  Skadovsk,
} from "../../../models/feeds/regionKherson/khersonCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKhersonMethods = {
  updateGenicheskNews: Genichesk,
  updateKakhovkaNews: Kakhovka,
  updateKhersonNews: Kherson,
  updateNovaKakhovkaNews: NovaKakhovka,
  updateOleshkyNews: Oleshky,
  updateSkadovskNews: Skadovsk,
};

const KhersonUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKhersonMethods)) {
  KhersonUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KhersonUpdateNewsController;
