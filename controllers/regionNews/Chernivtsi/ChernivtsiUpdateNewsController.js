import { Chernivtsi } from "../../../models/feeds/regionChernivtsi/chernivtsiCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernivtsiMethods = {
  updateChernivtsiNews: Chernivtsi,
};

const ChernivtsiUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionChernivtsiMethods)) {
  ChernivtsiUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernivtsiUpdateNewsController;
