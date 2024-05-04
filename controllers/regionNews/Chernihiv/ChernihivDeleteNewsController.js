import {
  Bakhmach,
  Chernihiv,
  Nizhyn,
  Pryluky,
} from "../../../models/feeds/regionChernihiv/chernihivCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionChernihivMethods = {
  deleteBakhmachNews: Bakhmach,
  deleteChernihivNews: Chernihiv,
  deleteNizhynNews: Nizhyn,
  deletePrylukyNews: Pryluky,
};

const ChernihivDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionChernihivMethods)) {
  ChernihivDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ChernihivDeleteNewsController;
