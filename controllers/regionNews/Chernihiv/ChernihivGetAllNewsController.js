import {
  Bakhmach,
  Chernihiv,
  Nizhyn,
  Pryluky,
} from "../../../models/feeds/regionChernihiv/chernihivCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernihivMethods = {
  getAllBakhmachNews: Bakhmach,
  getAllChernihivNews: Chernihiv,
  getAllNizhynNews: Nizhyn,
  getAllPrylukyNews: Pryluky,
};

const ChernihivGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionChernihivMethods)) {
  ChernihivGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernihivGetAllNewsController;
