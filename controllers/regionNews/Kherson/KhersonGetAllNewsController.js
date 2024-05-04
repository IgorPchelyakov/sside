import {
  Genichesk,
  Kakhovka,
  Kherson,
  NovaKakhovka,
  Oleshky,
  Skadovsk,
} from "../../../models/feeds/regionKherson/khersonCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKhersonMethods = {
  getAllGenicheskNews: Genichesk,
  getAllKakhovkaNews: Kakhovka,
  getAllKhersonNews: Kherson,
  getAllNovaKakhovkaNews: NovaKakhovka,
  getAllOleshkyNews: Oleshky,
  getAllSkadovskNews: Skadovsk,
};

const KhersonGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionKhersonMethods)) {
  KhersonGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KhersonGetAllNewsController;
