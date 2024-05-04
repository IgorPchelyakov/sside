import {
  Berdychiv,
  Korosten,
  Korostyshiv,
  Malyn,
  NovohradVolynskyi,
  Zhytomyr,
} from "../../../models/feeds/regionZhytomyr/zhytomyrCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZhytomyrMethods = {
  getAllBerdychivNews: Berdychiv,
  getAllKorostenNews: Korosten,
  getAllKorostyshivNews: Korostyshiv,
  getAllMalynNews: Malyn,
  getAllNovohradVolynskyiNews: NovohradVolynskyi,
  getAllZhytomyrNews: Zhytomyr,
};

const ZhytomyrGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZhytomyrMethods)) {
  ZhytomyrGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZhytomyrGetAllNewsController;
