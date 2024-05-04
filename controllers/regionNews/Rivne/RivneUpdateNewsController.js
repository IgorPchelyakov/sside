import {
  Dubno,
  Kostopil,
  Rivne,
  Sarny,
  Varash,
  Zdolbuniv,
} from "../../../models/feeds/regionRivne/rivneCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionRivneMethods = {
  updateDubnoNews: Dubno,
  updateKostopilNews: Kostopil,
  updateRivneNews: Rivne,
  updateSarnyNews: Sarny,
  updateVarashNews: Varash,
  updateZdolbunivNews: Zdolbuniv,
};

const RivneUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionRivneMethods)) {
  RivneUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default RivneUpdateNewsController;
