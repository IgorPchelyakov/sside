import {
  Cherkasy,
  Kaniw,
  Smila,
  Uman,
  Vatutine,
  Zolotonosha,
  Zvenyhorodka,
} from "../../../models/feeds/regionCherkasy/cherkasyCities.js";
import { getAllNewsByCity } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionCherkasyMethods = {
  getAllCherkasyNews: Cherkasy,
  getAllKaniwNews: Kaniw,
  getAllSmilaNews: Smila,
  getAllUmanNews: Uman,
  getAllVatutineNews: Vatutine,
  getAllZolotonoshaNews: Zolotonosha,
  getAllZvenyhorodkaNews: Zvenyhorodka,
};

const CherkasyGetAllNewsController = {};

for (const [methodName, Model] of Object.entries(RegionCherkasyMethods)) {
  CherkasyGetAllNewsController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCity(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default CherkasyGetAllNewsController;
