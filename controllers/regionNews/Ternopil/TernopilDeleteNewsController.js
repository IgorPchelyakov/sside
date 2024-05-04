import {
  Chortkiv,
  Krements,
  Ternopil,
} from "../../../models/feeds/regionTernopil/ternopilCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionTernopilMethods = {
  deleteTernopilNews: Ternopil,
  deleteChortkivNews: Chortkiv,
  deleteKrementsNews: Krements,
};

const TernopilDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionTernopilMethods)) {
  TernopilDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default TernopilDeleteNewsController;
