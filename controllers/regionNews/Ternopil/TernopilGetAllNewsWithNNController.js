import {
  Chortkiv,
  Krements,
  Ternopil,
} from "../../../models/feeds/regionTernopil/ternopilCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionTernopilMethods = {
  getAllChortkivNewsWithNN: Chortkiv,
  getAllKrementsNewsWithNN: Krements,
  getAllTernopilNewsWithNN: Ternopil,
};

const TernopilGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionTernopilMethods)) {
  TernopilGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default TernopilGetAllNewsWithNNController;
