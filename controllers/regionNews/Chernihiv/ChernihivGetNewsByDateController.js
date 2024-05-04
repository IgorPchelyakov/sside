import {
  Bakhmach,
  Chernihiv,
  Nizhyn,
  Pryluky,
} from "../../../models/feeds/regionChernihiv/chernihivCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernihivMethods = {
  getBakhmachNewsByDate: Bakhmach,
  getChernihivNewsByDate: Chernihiv,
  getNizhynNewsByDate: Nizhyn,
  getPrylukyNewsByDate: Pryluky,
};

const ChernihivGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionChernihivMethods)) {
  ChernihivGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernihivGetNewsByDateController;
