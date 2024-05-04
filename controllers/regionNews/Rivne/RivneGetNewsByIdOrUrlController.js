import {
  Dubno,
  Kostopil,
  Rivne,
  Sarny,
  Varash,
  Zdolbuniv,
} from "../../../models/feeds/regionRivne/rivneCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionRivneMethods = {
  getDubnoNewsByIdOrUrl: Dubno,
  getKostopilNewsByIdOrUrl: Kostopil,
  getRivneNewsByIdOrUrl: Rivne,
  getSarnyNewsByIdOrUrl: Sarny,
  getVarashNewsByIdOrUrl: Varash,
  getZdolbunivNewsByIdOrUrl: Zdolbuniv,
};

const RivneGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionRivneMethods)) {
  RivneGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default RivneGetNewsByIdOrUrlController;
