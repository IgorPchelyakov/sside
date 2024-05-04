import {
  Dubno,
  Kostopil,
  Rivne,
  Sarny,
  Varash,
  Zdolbuniv,
} from "../../../models/feeds/regionRivne/rivneCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionRivneMethods = {
  getAllDubnoNews: Dubno,
  getAllKostopilNews: Kostopil,
  getAllRivneNews: Rivne,
  getAllSarnyNews: Sarny,
  getAllVarashNews: Varash,
  getAllZdolbunivNews: Zdolbuniv,
};

const RivneGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionRivneMethods)) {
  RivneGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default RivneGetAllNewsController;
