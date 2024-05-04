import {
  Berdychiv,
  Korosten,
  Korostyshiv,
  Malyn,
  NovohradVolynskyi,
  Zhytomyr,
} from "../../../models/feeds/regionZhytomyr/zhytomyrCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZhytomyrMethods = {
  getBerdychivNewsByIdOrUrl: Berdychiv,
  getKorostenNewsByIdOrUrl: Korosten,
  getKorostyshivNewsByIdOrUrl: Korostyshiv,
  getMalynNewsByIdOrUrl: Malyn,
  getNovohradVolynskyiNewsByIdOrUrl: NovohradVolynskyi,
  getZhytomyrNewsByIdOrUrl: Zhytomyr,
};

const ZhytomyrGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionZhytomyrMethods)) {
  ZhytomyrGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZhytomyrGetNewsByIdOrUrlController;
