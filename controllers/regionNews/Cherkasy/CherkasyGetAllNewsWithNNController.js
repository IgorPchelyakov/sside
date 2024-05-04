import {
  Cherkasy,
  Kaniw,
  Smila,
  Uman,
  Vatutine,
  Zolotonosha,
  Zvenyhorodka,
} from "../../../models/feeds/regionCherkasy/cherkasyCities.js";
import { getAllNewsByCityWithNN } from "../../../utils/news/getAllNewsByCityWithNN.js";

const RegionCherkasyMethods = {
  getAllCherkasyNewsWithNN: Cherkasy,
  getAllUmanNewsWithNN: Uman,
  getAllSmilaNewsWithNN: Smila,
  getAllZolotonoshaNewsWithNN: Zolotonosha,
  getAllKaniwNewsWithNN: Kaniw,
  getAllVatutineNewsWithNN: Vatutine,
  getAllZvenyhorodkaNewsWithNN: Zvenyhorodka,
};

const CherkasyGetAllNewsWithNNController = {};

for (const [methodName, Model] of Object.entries(RegionCherkasyMethods)) {
  CherkasyGetAllNewsWithNNController[methodName] = async (req, res) => {
    try {
      const posts = await getAllNewsByCityWithNN(Model);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default CherkasyGetAllNewsWithNNController;
