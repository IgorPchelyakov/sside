import { Chernivtsi } from "../../../models/feeds/regionChernivtsi/chernivtsiCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernivtsiMethods = {
  getChernivtsiNewsByIdOrUrl: Chernivtsi,
};

const ChernivtsiGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionChernivtsiMethods)) {
  ChernivtsiGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernivtsiGetNewsByIdOrUrlController;
