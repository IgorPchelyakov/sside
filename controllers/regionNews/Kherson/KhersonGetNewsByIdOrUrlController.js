import {
  Genichesk,
  Kakhovka,
  Kherson,
  NovaKakhovka,
  Oleshky,
  Skadovsk,
} from "../../../models/feeds/regionKherson/khersonCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionKhersonMethods = {
  getGenicheskNewsByIdOrUrl: Genichesk,
  getKakhovkaNewsByIdOrUrl: Kakhovka,
  getKhersonNewsByIdOrUrl: Kherson,
  getNovaKakhovkaNewsByIdOrUrl: NovaKakhovka,
  getOleshkyNewsByIdOrUrl: Oleshky,
  getSkadovskNewsByIdOrUrl: Skadovsk,
};

const KhersonGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionKhersonMethods)) {
  KhersonGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default KhersonGetNewsByIdOrUrlController;
