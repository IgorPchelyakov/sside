import {
  Cherkasy,
  Kaniw,
  Smila,
  Uman,
  Vatutine,
  Zolotonosha,
  Zvenyhorodka,
} from "../../../models/feeds/regionCherkasy/cherkasyCities.js";
import { GetNewsByIdOrUrl } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionCherkasyMethods = {
  getCherkasyNewsByIdOrUrl: Cherkasy,
  getUmanNewsByIdOrUrl: Uman,
  getSmilaNewsByIdOrUrl: Smila,
  getZolotonoshaNewsByIdOrUrl: Zolotonosha,
  getKaniwNewsByIdOrUrl: Kaniw,
  getVatutineNewsByIdOrUrl: Vatutine,
  getZvenyhorodkaNewsByIdOrUrl: Zvenyhorodka,
};

const CherkasyGetNewsByIdOrUrlController = {};

for (const [methodName, Model] of Object.entries(RegionCherkasyMethods)) {
  CherkasyGetNewsByIdOrUrlController[methodName] = async (req, res) => {
    try {
      const { param } = req.params;

      const posts = await GetNewsByIdOrUrl(Model, param);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default CherkasyGetNewsByIdOrUrlController;
