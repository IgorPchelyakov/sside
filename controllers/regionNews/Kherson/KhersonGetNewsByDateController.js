import {
  Genichesk,
  Kakhovka,
  Kherson,
  NovaKakhovka,
  Oleshky,
  Skadovsk,
} from "../../../models/feeds/regionKherson/khersonCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKhersonMethods = {
  getGenicheskNewsByDate: Genichesk,
  getKakhovkaNewsByDate: Kakhovka,
  getKhersonNewsByDate: Kherson,
  getNovaKakhovkaNewsByDate: NovaKakhovka,
  getOleshkyNewsByDate: Oleshky,
  getSkadovskNewsByDate: Skadovsk,
};

const KhersonGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionKhersonMethods)) {
  KhersonGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KhersonGetNewsByDateController;
