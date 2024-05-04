import {
  Bakhmach,
  Chernihiv,
  Nizhyn,
  Pryluky,
} from "../../../models/feeds/regionChernihiv/chernihivCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernihivMethods = {
  getBakhmachNewsByIdOrUrl: Bakhmach,
  getChernihivNewsByIdOrUrl: Chernihiv,
  getNizhynNewsByIdOrUrl: Nizhyn,
  getPrylukyNewsByIdOrUrl: Pryluky,
};

const ChernihivGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionChernihivMethods)) {
  ChernihivGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernihivGetNewsByIdOrUrlController;
