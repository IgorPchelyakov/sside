import {
  Dubno,
  Kostopil,
  Rivne,
  Sarny,
  Varash,
  Zdolbuniv,
} from "../../../models/feeds/regionRivne/rivneCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionRivneMethods = {
  getDubnoNewsByDate: Dubno,
  getKostopilNewsByDate: Kostopil,
  getRivneNewsByDate: Rivne,
  getSarnyNewsByDate: Sarny,
  getVarashNewsByDate: Varash,
  getZdolbunivNewsByDate: Zdolbuniv,
};

const RivneGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionRivneMethods)) {
  RivneGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default RivneGetNewsByDateController;
