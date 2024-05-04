import {
  Dubno,
  Kostopil,
  Rivne,
  Sarny,
  Varash,
  Zdolbuniv,
} from "../../../models/feeds/regionRivne/rivneCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionRivneMethods = {
  searchDubnoNews: Dubno,
  searchKostopilNews: Kostopil,
  searchRivneNews: Rivne,
  searchSarnyNews: Sarny,
  searchVarashNews: Varash,
  searchZdolbunivNews: Zdolbuniv,
};

const RivneSearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionRivneMethods)) {
  RivneSearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default RivneSearchNewsController;
