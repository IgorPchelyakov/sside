import {
  Cherkasy,
  Kaniw,
  Smila,
  Uman,
  Vatutine,
  Zolotonosha,
  Zvenyhorodka,
} from "../../../models/feeds/regionCherkasy/cherkasyCities.js";
import { updateNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionCherkasyMethods = {
  updateCherkasyNews: Cherkasy,
  updateUmanNews: Uman,
  updateSmilaNews: Smila,
  updateZolotonoshaNews: Zolotonosha,
  updateKaniwNews: Kaniw,
  updateVatutineNews: Vatutine,
  updateZvenyhorodkaNews: Zvenyhorodka,
};

const CherkasyUpdateNewsController = {};

for (const [methodName, Model] of Object.entries(RegionCherkasyMethods)) {
  CherkasyUpdateNewsController[methodName] = async (req, res) => {
    try {
      const data = req.body;

      const posts = await updateNews(Model, data, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default CherkasyUpdateNewsController;
