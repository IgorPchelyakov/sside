import {
  Kovel,
  Lutsk,
  Novovolynsk,
  VolodymyrVolynskyi,
} from "../../../models/feeds/regionVolynsk/volynskCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVolynskMethods = {
  updateKovelNews: Kovel,
  updateLutskNews: Lutsk,
  updateNovovolynskNews: Novovolynsk,
  updateVolodymyrVolynskyiNews: VolodymyrVolynskyi,
};

const VolynskUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionVolynskMethods)) {
  VolynskUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VolynskUpdateNewsController;
