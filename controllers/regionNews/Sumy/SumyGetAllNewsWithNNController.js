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
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionSumyMethods = {
  getAllGlukhivNewsWithNN: Glukhiv,
  getAllKonotopNewsWithNN: Konotop,
  getAllKrolevetsNewsWithNN: Krolevets,
  getAllLebedynNewsWithNN: Lebedyn,
  getAllOhtyrkaNewsWithNN: Ohtyrka,
  getAllRomnyNewsWithNN: Romny,
  getAllShostkaNewsWithNN: Shostka,
  getAllSumyNewsWithNN: Sumy,
  getAllTrostyanetsNewsWithNN: Trostyanets,
};

const SumyGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionSumyMethods)) {
  SumyGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default SumyGetAllNewsWithNNController;
