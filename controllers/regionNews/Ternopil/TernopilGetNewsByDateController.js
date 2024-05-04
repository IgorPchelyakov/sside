import {
  Chortkiv,
  Krements,
  Ternopil,
} from "../../../models/feeds/regionTernopil/ternopilCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionTernopilMethods = {
  getChortkivNewsByDate: Chortkiv,
  getKrementsNewsByDate: Krements,
  getTernopilNewsByDate: Ternopil,
};

const TernopilGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionTernopilMethods)) {
  TernopilGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default TernopilGetNewsByDateController;
