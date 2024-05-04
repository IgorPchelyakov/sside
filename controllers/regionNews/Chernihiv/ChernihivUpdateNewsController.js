import {
  Bakhmach,
  Chernihiv,
  Nizhyn,
  Pryluky,
} from "../../../models/feeds/regionChernihiv/chernihivCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernihivMethods = {
  updateBakhmachNews: Bakhmach,
  updateChernihivNews: Chernihiv,
  updateNizhynNews: Nizhyn,
  updatePrylukyNews: Pryluky,
};

const ChernihivUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionChernihivMethods)) {
  ChernihivUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernihivUpdateNewsController;
