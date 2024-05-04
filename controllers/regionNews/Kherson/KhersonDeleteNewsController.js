import {
  Genichesk,
  Kakhovka,
  Kherson,
  NovaKakhovka,
  Oleshky,
  Skadovsk,
} from "../../../models/feeds/regionKherson/khersonCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKhersonMethods = {
  deleteKhersonNews: Kherson,
  deleteNovaKakhovkaNews: NovaKakhovka,
  deleteKakhovkaNews: Kakhovka,
  deleteOleshkyNews: Oleshky,
  deleteSkadovskNews: Skadovsk,
  deleteGenicheskNews: Genichesk,
};

const KhersonDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKhersonMethods)) {
  KhersonDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KhersonDeleteNewsController;
