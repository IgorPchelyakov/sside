import {
  Berdychiv,
  Korosten,
  Korostyshiv,
  Malyn,
  NovohradVolynskyi,
  Zhytomyr,
} from "../../../models/feeds/regionZhytomyr/zhytomyrCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZhytomyrMethods = {
  getBerdychivNewsByDate: Berdychiv,
  getKorostenNewsByDate: Korosten,
  getKorostyshivNewsByDate: Korostyshiv,
  getMalynNewsByDate: Malyn,
  getNovohradVolynskyiNewsByDate: NovohradVolynskyi,
  getZhytomyrNewsByDate: Zhytomyr,
};

const ZhytomyrGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionZhytomyrMethods)) {
  ZhytomyrGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZhytomyrGetNewsByDateController;
