import {
  Chortkiv,
  Krements,
  Ternopil,
} from "../../../models/feeds/regionTernopil/ternopilCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionTernopilMethods = {
  searchChortkivNews: Chortkiv,
  searchKrementsNews: Krements,
  searchTernopilNews: Ternopil,
};

const TernopilSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionTernopilMethods)) {
  TernopilSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default TernopilSearchNewsController;
