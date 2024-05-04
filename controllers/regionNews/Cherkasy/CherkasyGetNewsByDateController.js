import {
  Cherkasy,
  Kaniw,
  Smila,
  Uman,
  Vatutine,
  Zolotonosha,
  Zvenyhorodka,
} from "../../../models/feeds/regionCherkasy/cherkasyCities.js";
import { GetNewsByDate } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionCherkasyMethods = {
  getCherkasyNewsByDate: Cherkasy,
  getUmanNewsByDate: Uman,
  getSmilaNewsByDate: Smila,
  getZolotonoshaNewsByDate: Zolotonosha,
  getKaniwNewsByDate: Kaniw,
  getVatutineNewsByDate: Vatutine,
  getZvenyhorodkaNewsByDate: Zvenyhorodka,
};

const CherkasyGetNewsByDateController = {};

for (const [methodName, Model] of Object.entries(RegionCherkasyMethods)) {
  CherkasyGetNewsByDateController[methodName] = async (req, res) => {
    try {
      const { date } = req.params;

      const posts = await GetNewsByDate(Model, date);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default CherkasyGetNewsByDateController;
