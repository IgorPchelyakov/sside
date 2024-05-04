import {
  Chortkiv,
  Krements,
  Ternopil,
} from "../../../models/feeds/regionTernopil/ternopilCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionTernopilMethods = {
  getAllChortkivNews: Chortkiv,
  getAllKrementsNews: Krements,
  getAllTernopilNews: Ternopil,
};

const TernopilGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionTernopilMethods)) {
  TernopilGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default TernopilGetAllNewsController;
