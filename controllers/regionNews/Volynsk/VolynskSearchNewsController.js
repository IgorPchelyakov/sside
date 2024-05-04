import {
  Kovel,
  Lutsk,
  Novovolynsk,
  VolodymyrVolynskyi,
} from "../../../models/feeds/regionVolynsk/volynskCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVolynskMethods = {
  searchKovelNews: Kovel,
  searchLutskNews: Lutsk,
  searchNovovolynskNews: Novovolynsk,
  searchVolodymyrVolynskyiNews: VolodymyrVolynskyi,
};

const VolynskSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionVolynskMethods)) {
  VolynskSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VolynskSearchNewsController;
