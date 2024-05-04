import {
  Chortkiv,
  Krements,
  Ternopil,
} from "../../../models/feeds/regionTernopil/ternopilCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionTernopilMethods = {
  updateChortkivNews: Chortkiv,
  updateKrementsNews: Krements,
  updateTernopilNews: Ternopil,
};

const TernopilUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionTernopilMethods)) {
  TernopilUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default TernopilUpdateNewsController;
