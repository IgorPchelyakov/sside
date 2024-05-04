import {
  Chortkiv,
  Krements,
  Ternopil,
} from "../../../models/feeds/regionTernopil/ternopilCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionTernopilMethods = {
  getChortkivNewsByIdOrUrl: Chortkiv,
  getKrementsNewsByIdOrUrl: Krements,
  getTernopilNewsByIdOrUrl: Ternopil,
};

const TernopilGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionTernopilMethods)) {
  TernopilGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default TernopilGetNewsByIdOrUrlController;
