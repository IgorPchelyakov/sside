import {
  Kovel,
  Lutsk,
  Novovolynsk,
  VolodymyrVolynskyi,
} from "../../../models/feeds/regionVolynsk/volynskCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionVolynskMethods = {
  getKovelNewsByIdOrUrl: Kovel,
  getLutskNewsByIdOrUrl: Lutsk,
  getNovovolynskNewsByIdOrUrl: Novovolynsk,
  getVolodymyrVolynskyiNewsByIdOrUrl: VolodymyrVolynskyi,
};

const VolynskGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionVolynskMethods)) {
  VolynskGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default VolynskGetNewsByIdOrUrlController;
