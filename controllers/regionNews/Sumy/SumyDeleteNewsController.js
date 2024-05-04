import {
  Glukhiv,
  Konotop,
  Krolevets,
  Lebedyn,
  Ohtyrka,
  Romny,
  Shostka,
  Sumy,
  Trostyanets,
} from "../../../models/feeds/regionSumy/sumyCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionSumyMethods = {
  deleteGlukhivNews: Glukhiv,
  deleteKonotopNews: Konotop,
  deleteKrolevetsNews: Krolevets,
  deleteLebedynNews: Lebedyn,
  deleteOhtyrkaNews: Ohtyrka,
  deleteRomnyNews: Romny,
  deleteShostkaNews: Shostka,
  deleteSumyNews: Sumy,
  deleteTrostyanetsNews: Trostyanets,
};

const SumyDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionSumyMethods)) {
  SumyDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default SumyDeleteNewsController;
