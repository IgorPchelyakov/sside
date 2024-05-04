import { Chernivtsi } from "../../../models/feeds/regionChernivtsi/chernivtsiCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernivtsiMethods = {
  searchChernivtsiNews: Chernivtsi,
};

const ChernivtsiSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionChernivtsiMethods)) {
  ChernivtsiSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernivtsiSearchNewsController;
