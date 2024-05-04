import {
  Kovel,
  Lutsk,
  Novovolynsk,
  VolodymyrVolynskyi,
} from "../../../models/feeds/regionVolynsk/volynskCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVolynskMethods = {
  getKovelNewsByDate: Kovel,
  getLutskNewsByDate: Lutsk,
  getNovovolynskNewsByDate: Novovolynsk,
  getVolodymyrVolynskyiNewsByDate: VolodymyrVolynskyi,
};

const VolynskGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionVolynskMethods)) {
  VolynskGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VolynskGetNewsByDateController;
