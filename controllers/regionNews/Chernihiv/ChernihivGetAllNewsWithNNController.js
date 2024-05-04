import {
  Bakhmach,
  Chernihiv,
  Nizhyn,
  Pryluky,
} from "../../../models/feeds/regionChernihiv/chernihivCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernihivMethods = {
  getAllBakhmachNewsWithNN: Bakhmach,
  getAllChernihivNewsWithNN: Chernihiv,
  getAllNizhynNewsWithNN: Nizhyn,
  getAllPrylukyNewsWithNN: Pryluky,
};

const ChernihivGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionChernihivMethods)) {
  ChernihivGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernihivGetAllNewsWithNNController;
