import { Chernivtsi } from "../../../models/feeds/regionChernivtsi/chernivtsiCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernivtsiMethods = {
  getChernivtsiAllNewsWithNN: Chernivtsi,
};

const ChernivtsiGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionChernivtsiMethods)) {
  ChernivtsiGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernivtsiGetAllNewsWithNNController;
