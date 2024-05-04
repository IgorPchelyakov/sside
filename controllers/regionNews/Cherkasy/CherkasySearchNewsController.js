import {
  Cherkasy,
  Kaniw,
  Smila,
  Uman,
  Vatutine,
  Zolotonosha,
  Zvenyhorodka,
} from "../../../models/feeds/regionCherkasy/cherkasyCities.js";
import { searchNews } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionCherkasyMethods = {
  searchCherkasyNews: Cherkasy,
  searchUmanNews: Uman,
  searchSmilaNews: Smila,
  searchZolotonoshaNews: Zolotonosha,
  searchKaniwNews: Kaniw,
  searchVatutineNews: Vatutine,
  searchZvenyhorodkaNews: Zvenyhorodka,
};

const CherkasySearchNewsController = {};

for (const [methodName, Model] of Object.entries(RegionCherkasyMethods)) {
  CherkasySearchNewsController[methodName] = async (req, res) => {
    try {
      const posts = await searchNews(Model, req, res);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default CherkasySearchNewsController;
