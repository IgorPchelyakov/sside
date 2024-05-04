import {
  Dubno,
  Kostopil,
  Rivne,
  Sarny,
  Varash,
  Zdolbuniv,
} from "../../../models/feeds/regionRivne/rivneCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionRivneMethods = {
  getAllDubnoNewsWithNN: Dubno,
  getAllKostopilNewsWithNN: Kostopil,
  getAllRivneNewsWithNN: Rivne,
  getAllSarnyNewsWithNN: Sarny,
  getAllVarashNewsWithNN: Varash,
  getAllZdolbunivNewsWithNN: Zdolbuniv,
};

const RivneGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionRivneMethods)) {
  RivneGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default RivneGetAllNewsWithNNController;
