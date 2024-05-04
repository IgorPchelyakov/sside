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
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionSumyMethods = {
  getAllGlukhivNews: Glukhiv,
  getAllKonotopNews: Konotop,
  getAllKrolevetsNews: Krolevets,
  getAllLebedynNews: Lebedyn,
  getAllOhtyrkaNews: Ohtyrka,
  getAllRomnyNews: Romny,
  getAllShostkaNews: Shostka,
  getAllSumyNews: Sumy,
  getAllTrostyanetsNews: Trostyanets,
};

const SumyGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionSumyMethods)) {
  SumyGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default SumyGetAllNewsController;
