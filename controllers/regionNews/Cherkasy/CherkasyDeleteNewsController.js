import {
  Cherkasy,
  Kaniw,
  Smila,
  Uman,
  Vatutine,
  Zolotonosha,
  Zvenyhorodka,
} from "../../../models/feeds/regionCherkasy/cherkasyCities.js";
import { deleteNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionCherkasyMethods = {
  deleteCherkasyNews: Cherkasy,
  deleteUmanNews: Uman,
  deleteSmilaNews: Smila,
  deleteZolotonoshaNews: Zolotonosha,
  deleteKaniwNews: Kaniw,
  deleteVatutineNews: Vatutine,
  deleteZvenyhorodkaNews: Zvenyhorodka,
};

const CherkasyDeleteNewsController = {};

for (const [methodName, Model] of Object.entries(RegionCherkasyMethods)) {
  CherkasyDeleteNewsController[methodName] = async (req, res) => {
    try {
      const { id } = req.params;

      const posts = await deleteNews(Model, id, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default CherkasyDeleteNewsController;
