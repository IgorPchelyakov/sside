import {
  Berdychiv,
  Korosten,
  Korostyshiv,
  Malyn,
  NovohradVolynskyi,
  Zhytomyr,
} from "../../../models/feeds/regionZhytomyr/zhytomyrCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZhytomyrMethods = {
  searchBerdychivNews: Berdychiv,
  searchKorostenNews: Korosten,
  searchKorostyshivNews: Korostyshiv,
  searchMalynNews: Malyn,
  searchNovohradVolynskyiNews: NovohradVolynskyi,
  searchZhytomyrNews: Zhytomyr,
};

const ZhytomyrSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZhytomyrMethods)) {
  ZhytomyrSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZhytomyrSearchNewsController;
