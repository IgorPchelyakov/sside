import {
  Berdychiv,
  Korosten,
  Korostyshiv,
  Malyn,
  NovohradVolynskyi,
  Zhytomyr,
} from "../../../models/feeds/regionZhytomyr/zhytomyrCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionZhytomyrMethods = {
  deleteZhytomyrNews: Zhytomyr,
  deleteBerdychivNews: Berdychiv,
  deleteNovohradVolynskyiNews: NovohradVolynskyi,
  deleteMalynNews: Malyn,
  deleteKorostenNews: Korosten,
  deleteKorostyshivNews: Korostyshiv,
};

const ZhytomyrDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionZhytomyrMethods)) {
  ZhytomyrDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ZhytomyrDeleteNewsController;
