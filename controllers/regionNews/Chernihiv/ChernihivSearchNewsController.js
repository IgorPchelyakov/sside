import {
  Bakhmach,
  Chernihiv,
  Nizhyn,
  Pryluky,
} from "../../../models/feeds/regionChernihiv/chernihivCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernihivMethods = {
  searchChernihivNews: Chernihiv,
  searchNizhynNews: Nizhyn,
  searchPrylukyNews: Pryluky,
  searchBakhmachNews: Bakhmach,
};

const ChernihivSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionChernihivMethods)) {
  ChernihivSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernihivSearchNewsController;
