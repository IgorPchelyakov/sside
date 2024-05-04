import {
  Berdychiv,
  Korosten,
  Korostyshiv,
  Malyn,
  NovohradVolynskyi,
  Zhytomyr,
} from "../../../models/feeds/regionZhytomyr/zhytomyrCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZhytomyrMethods = {
  updateBerdychivNews: Berdychiv,
  updateKorostenNews: Korosten,
  updateKorostyshivNews: Korostyshiv,
  updateMalynNews: Malyn,
  updateNovohradVolynskyiNews: NovohradVolynskyi,
  updateZhytomyrNews: Zhytomyr,
};

const ZhytomyrUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZhytomyrMethods)) {
  ZhytomyrUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZhytomyrUpdateNewsController;
