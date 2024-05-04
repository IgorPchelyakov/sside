import { Chernivtsi } from "../../../models/feeds/regionChernivtsi/chernivtsiCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernivtsiMethods = {
  getAllChernivtsiNews: Chernivtsi,
};

const ChernivtsiGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionChernivtsiMethods)) {
  ChernivtsiGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernivtsiGetAllNewsController;
