import {
  Berdychiv,
  Korosten,
  Korostyshiv,
  Malyn,
  NovohradVolynskyi,
  Zhytomyr,
} from "../../../models/feeds/regionZhytomyr/zhytomyrCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZhytomyrMethods = {
  getAllBerdychivNewsWithNN: Berdychiv,
  getAllKorostenNewsWithNN: Korosten,
  getAllKorostyshivNewsWithNN: Korostyshiv,
  getAllMalynNewsWithNN: Malyn,
  getAllNovohradVolynskyiNewsWithNN: NovohradVolynskyi,
  getAllZhytomyrNewsWithNN: Zhytomyr,
};

const ZhytomyrGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionZhytomyrMethods)) {
  ZhytomyrGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZhytomyrGetAllNewsWithNNController;
