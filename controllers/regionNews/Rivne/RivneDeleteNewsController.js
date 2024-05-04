import {
  Dubno,
  Kostopil,
  Rivne,
  Sarny,
  Varash,
  Zdolbuniv,
} from "../../../models/feeds/regionRivne/rivneCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionRivneMethods = {
  deleteRivneNews: Rivne,
  deleteVarashNews: Varash,
  deleteDubnoNews: Dubno,
  deleteKostopilNews: Kostopil,
  deleteSarnyNews: Sarny,
  deleteZdolbunivNews: Zdolbuniv,
};

const RivneDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionRivneMethods)) {
  RivneDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default RivneDeleteNewsController;
